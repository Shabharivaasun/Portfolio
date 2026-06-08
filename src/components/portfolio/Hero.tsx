import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Eye, Github, Linkedin, Mail, Code2 } from "lucide-react";
import ParticleField from "./ParticleField";
import { PERSONAL } from "./data";

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PERSONAL.titles[i];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((p) => (p + 1) % PERSONAL.titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="gradient-text">
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle ml-1 bg-primary animate-pulse" />
    </span>
  );
}

import DeveloperAvatar from "./DeveloperAvatar";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />
      {/* radial vignette */}
      <div className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, #050A18 80%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start justify-center order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-primary/80 tracking-[0.3em] uppercase mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display font-bold leading-[1.1] tracking-tight text-glow mb-2"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
            >
              <span className="gradient-text-tri">SHABHARIVAASUN K R</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl sm:text-2xl md:text-3xl font-display font-medium h-[1.4em] mb-4"
            >
              <Typewriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="max-w-2xl text-white/70 text-base sm:text-lg leading-relaxed mb-8"
            >
              {PERSONAL.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-[#050A18] bg-gradient-primary shadow-glow hover:shadow-violet transition-all hover:-translate-y-0.5"
              >
                <Eye size={18} /> View My Work
              </a>
              <a
                href="/resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-white border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-primary/60 transition-all hover:-translate-y-0.5"
              >
                <Download size={18} /> Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              {[
                { Icon: Github, href: PERSONAL.github, label: "GitHub" },
                { Icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
                { Icon: Code2, href: PERSONAL.leetcode, label: "LeetCode" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white/80 hover:text-white hover:border-primary/60 hover:shadow-glow transition-all hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Holographic Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="lg:col-span-5 w-full flex justify-center items-center order-1 lg:order-2"
          >
            <DeveloperAvatar />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.8, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
