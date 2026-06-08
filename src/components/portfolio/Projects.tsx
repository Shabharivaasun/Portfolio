import { motion } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import SectionHeader from "./SectionHeader";
import { PROJECTS } from "./data";

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 0.3s ease-out" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Projects" title="Things I've Built" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.title} index={i}>
              <div className="glass-card group h-full overflow-hidden hover:shadow-glow transition-all">
                {/* Gradient banner */}
                <div
                  className="h-28 relative overflow-hidden"
                  style={{
                    background:
                      i % 3 === 0
                        ? "linear-gradient(135deg, #00D4FF, #7B2FFF)"
                        : i % 3 === 1
                        ? "linear-gradient(135deg, #7B2FFF, #FF2D87)"
                        : "linear-gradient(135deg, #FF2D87, #00D4FF)",
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_60%)]" />
                  <div className="absolute bottom-3 left-5 right-5 flex items-end justify-between text-[#050A18]">
                    <div>
                      <p className="font-display text-xl font-bold">{p.title}</p>
                      <p className="text-xs opacity-80">{p.subtitle}</p>
                    </div>
                    <span className="text-xs font-bold bg-[#050A18]/30 text-white px-2 py-1 rounded-full">
                      {p.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <p className="text-white/70 text-sm leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
