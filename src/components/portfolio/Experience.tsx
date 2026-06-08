import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { EXPERIENCES } from "./data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Experience" title="Internship Journey" />

        <div className="relative">
          {/* Vertical connector */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-primary via-primary-glow to-accent shadow-glow" />

          <div className="space-y-14">
            {EXPERIENCES.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${left ? "" : "md:[direction:rtl]"}`}
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-10 -translate-x-1/2 z-10">
                    <div className="h-5 w-5 rounded-full bg-gradient-primary shadow-glow animate-pulse-glow" />
                  </div>

                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`}>
                    <div className="glass-card group p-7 hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                      <div className={`flex items-center gap-4 mb-4 ${left ? "md:flex-row-reverse" : ""}`}>
                        <div className="h-14 w-14 shrink-0 rounded-xl bg-gradient-primary grid place-items-center font-bold text-[#050A18] font-display">
                          {exp.initials}
                        </div>
                        <div className={left ? "md:text-right" : ""}>
                          <h3 className="font-display font-bold text-xl gradient-text">{exp.role}</h3>
                          <p className="text-white/90 text-sm">{exp.org}</p>
                          <p className="text-white/50 text-xs">{exp.sub}</p>
                        </div>
                      </div>
                      <p className="text-white/70 text-[15px] leading-relaxed text-left">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
