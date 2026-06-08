import { motion } from "framer-motion";
import { Code, Globe, Wrench, Users, Brain } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { SKILL_CATEGORIES } from "./data";

const ICONS = [Code, Globe, Wrench, Users, Brain];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Skills" title="Tech & Soft Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-7 hover:shadow-glow transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-11 w-11 rounded-lg bg-gradient-primary grid place-items-center text-[#050A18]">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-bold gradient-text">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((it) => (
                    <span
                      key={it}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
