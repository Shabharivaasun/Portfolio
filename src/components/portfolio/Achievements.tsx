import { motion } from "framer-motion";
import { Trophy, Award, Medal, Sparkles, Rocket, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { ACHIEVEMENTS } from "./data";

const ICONS = [Trophy, Award, Medal, Sparkles, Rocket, Star];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Achievements" title="Wins & Milestones" />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="glass-card p-6 mb-6 break-inside-avoid hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center text-[#050A18] shadow-glow">
                    <Icon size={22} />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent">
                    {a.year}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-widest text-primary/80 font-semibold mb-1">
                  {a.place}
                </p>
                <h3 className="font-display text-lg font-bold text-white mb-1">{a.event}</h3>
                <p className="text-xs text-white/60 mb-3">{a.category}</p>
                <p className="text-sm text-white/70 leading-relaxed">{a.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
