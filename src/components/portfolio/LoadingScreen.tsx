import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(t);
  }, []);

  const name = "SHABHARIVAASUN K R";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{ background: "#050A18" }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-wrap justify-center px-6 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {name.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="gradient-text-tri"
                style={{ fontFamily: "Space Grotesk", whiteSpace: "pre" }}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
