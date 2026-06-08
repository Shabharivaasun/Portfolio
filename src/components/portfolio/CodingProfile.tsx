import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { PERSONAL } from "./data";

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

function ProgressRing({ progress }: { progress: number }) {
  const r = 70;
  const c = 2 * Math.PI * r;
  const offset = c - (progress / 100) * c;
  return (
    <div className="relative h-44 w-44 grid place-items-center">
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 160 160">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#7B2FFF" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
        <motion.circle
          cx="80"
          cy="80"
          r={r}
          stroke="url(#ringGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          style={{ filter: "drop-shadow(0 0 8px rgba(0,212,255,0.6))" }}
        />
      </svg>
      <div className="text-center">
        <div className="font-display text-3xl font-bold gradient-text">{progress}%</div>
        <div className="text-xs text-white/60 mt-1">Consistency</div>
      </div>
    </div>
  );
}

export default function CodingProfile() {
  return (
    <section id="coding" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Coding Profile" title="LeetCode Activity" />

        <div className="glass-card p-8 md:p-12 grid md:grid-cols-3 gap-10 items-center">
          <div className="flex justify-center md:justify-start">
            <ProgressRing progress={78} />
          </div>

          <div className="md:col-span-2 space-y-7">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center text-[#050A18]">
                <Code2 size={22} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">LeetCode</h3>
                <p className="text-xs text-white/60">Daily problem-solving streak</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Problems Solved</p>
                <p className="font-display text-4xl font-bold gradient-text">
                  <Counter to={100} />+
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Global Rank</p>
                <p className="font-display text-4xl font-bold gradient-text-tri">
                  <Counter to={1504308} duration={2.5} />
                </p>
              </div>
            </div>

            <a
              href={PERSONAL.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-[#050A18] bg-gradient-primary shadow-glow hover:shadow-violet transition-all hover:-translate-y-0.5"
            >
              Visit Profile <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
