import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { ABOUT_PARAGRAPHS, SKILL_CHIPS } from "./data";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="About" title="The Person Behind the Code" />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: animated code/avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col items-center gap-8"
          >
            {/* Avatar ring */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-50 animate-pulse-glow" />
              <div className="relative h-48 w-48 rounded-full p-[3px] bg-gradient-primary animate-float-slow">
                <div className="h-full w-full rounded-full bg-[#050A18] grid place-items-center font-display text-5xl font-bold gradient-text-tri">
                  SK
                </div>
              </div>
            </div>

            {/* Code block */}
            <div className="glass-card w-full p-5 font-mono text-xs sm:text-sm">
              <div className="flex gap-1.5 mb-3">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>
              <pre className="text-white/80 leading-relaxed whitespace-pre-wrap">
{`> const dev = {
    name: "Shabharivaasun",
    role: "AI/ML Engineer",
    focus: ["AI", "Data", "Design"],
    coffee: true,
  };`}
              </pre>
            </div>
          </motion.div>

          {/* Right: narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5 text-white/75 leading-relaxed text-[15px] sm:text-base"
          >
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="pt-6">
              <p className="text-sm uppercase tracking-widest text-primary/80 mb-4">Skill Stack</p>
              <div className="flex flex-wrap gap-2.5">
                {SKILL_CHIPS.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="px-4 py-1.5 rounded-full text-sm border border-primary/30 bg-primary/5 text-white/90 hover:bg-primary/15 hover:border-primary/60 hover:shadow-glow transition-all"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
