import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm text-primary/80 tracking-[0.3em] uppercase mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold tracking-tight"
        style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        className="mx-auto mt-4 h-[3px] rounded-full bg-gradient-primary shadow-glow"
      />
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 max-w-2xl mx-auto text-white/60"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
