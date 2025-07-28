import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmailPopup = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [useV2, setUseV2] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // Delay exibição e checa se já foi exibido/enviado
  useEffect(() => {
    const hasSubmitted = localStorage.getItem("popup-submitted");
    if (!hasSubmitted) {
      const timeout = setTimeout(() => setVisible(true), 5000);
      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    const loadReCaptchaV3 = () => {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=6Lc6C5ErAAAAAIkLXZp5fej9OPC2euTyxpnxb70X";
      script.async = true;
      script.onload = () => {
        if (!window.grecaptcha) return setUseV2(true);
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute("6Lc6C5ErAAAAAIkLXZp5fej9OPC2euTyxpnxb70X", { action: "submit" });
            if (token) {
              setRecaptchaVerified(true);
              setRecaptchaToken(token);
            } else {
              setUseV2(true);
            }
          } catch {
            setUseV2(true);
          }
        });
      };
      script.onerror = () => setUseV2(true);
      document.body.appendChild(script);
    };

    const loadReCaptchaV2 = () => {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadReCaptchaV3();

    window.onReCaptchaSuccess = () => {
      setRecaptchaVerified(true);
    };

    if (useV2) loadReCaptchaV2();
  }, [useV2]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    if (!recaptchaVerified && !useV2) {
      try {
        const token = await window.grecaptcha.execute("6Lc6C5ErAAAAAIkLXZp5fej9OPC2euTyxpnxb70X", { action: "submit" });
        if (token) {
          setRecaptchaToken(token);
        } else {
          setUseV2(true);
          setStatus("error");
          return;
        }
      } catch {
        setUseV2(true);
        setStatus("error");
        return;
      }
    }

    if (useV2 && !recaptchaVerified) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("https://n8n.georgton.com/webhook/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, recaptcha: recaptchaToken }),
      });

      if (res.ok) {
        setStatus("success");
        localStorage.setItem("popup-submitted", "true");
        setTimeout(() => setVisible(false), 3000);
      } else {
        throw new Error("Error sending");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md text-center border border-orange-500"
        >
          <h2 className="text-xl font-bold text-orange-600 mb-2">Get Exclusive Updates!</h2>
          <p className="mb-4 text-gray-700">
            Enter your email to receive special offers and news.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {useV2 && (
              <div className="flex justify-center">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LesDpErAAAAAIb8sT9aFOvrg2GaWI0wjrW0Z-4H"
                  data-callback="onReCaptchaSuccess"
                ></div>
              </div>
            )}

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded w-full font-semibold transition"
              disabled={useV2 && !recaptchaVerified}
            >
              Send Me the Deals!
            </button>
          </form>

          {status === "success" && <p className="text-green-600 mt-4">✅ Email sent successfully!</p>}
          {status === "error" && <p className="text-red-600 mt-4">❌ Something went wrong. Try again.</p>}

          <button
            onClick={() => {
              setVisible(false);
              localStorage.setItem("popup-submitted", "true");
            }}
            className="mt-4 text-sm text-gray-500 hover:underline"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EmailPopup;

declare global {
  interface Window {
    grecaptcha: any;
    onReCaptchaSuccess: () => void;
  }
}