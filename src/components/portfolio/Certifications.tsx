import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { CERTIFICATIONS } from "./data";

export default function Certifications() {
  // Duplicate for seamless ticker
  const items = [...CERTIFICATIONS, ...CERTIFICATIONS];
  return (
    <section id="certs" className="relative py-28">
      <div className="px-6">
        <SectionHeader eyebrow="Certifications" title="Credentials & Courses" />
      </div>

      {/* Ticker */}
      <div className="relative overflow-hidden mask-fade">
        <div className="flex gap-5 animate-ticker w-max px-6">
          {items.map((c, i) => (
            <div
              key={i}
              className={`glass-card shrink-0 w-72 p-5 ${c.elite ? "border-accent/50" : ""}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`h-11 w-11 rounded-lg grid place-items-center font-bold text-[#050A18] ${c.elite ? "bg-gradient-to-br from-accent to-primary-glow" : "bg-gradient-primary"}`}>
                  {c.elite ? <Star size={18} /> : <Award size={18} />}
                </div>
                <span className="text-[11px] font-mono text-white/60">{c.year}</span>
              </div>
              <h3 className="font-display font-semibold text-white text-sm mb-1 leading-snug">
                {c.name}
                {c.elite && <span className="ml-1 text-accent">★</span>}
              </h3>
              <p className="text-xs text-white/60">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Elite NPTEL highlight */}
      {(() => {
        const elite = CERTIFICATIONS.find((c) => c.elite);
        if (!elite) return null;
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl mt-12 px-6"
          >
            <div className="glass-card p-7 border-accent/40">
              <div className="flex items-center gap-3 mb-3">
                <Star className="text-accent" size={20} />
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">Elite Certification</span>
              </div>
              <h3 className="font-display text-xl font-bold gradient-text-tri mb-2">{elite.name}</h3>
              <p className="text-sm text-white/60 mb-3">{elite.issuer} · {elite.year}</p>
              <p className="text-sm text-white/75 leading-relaxed">{elite.details}</p>
            </div>
          </motion.div>
        );
      })()}

      <style>{`.mask-fade { mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }`}</style>
    </section>
  );
}
