import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { PERSONAL } from "./data";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message ready! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Contact" title="Let's Build Together" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <p className="text-center text-white/75 text-lg mb-10 max-w-2xl mx-auto">
            I'm always open to collaborating on exciting projects, research opportunities, or internships. Let's build something remarkable together.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-5">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center text-primary group-hover:bg-primary/20 group-hover:shadow-glow transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Email</p>
                  <p className="text-sm text-white break-all">{PERSONAL.email}</p>
                </div>
              </a>
              <a href={`tel:${PERSONAL.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 group">
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center text-primary group-hover:bg-primary/20 group-hover:shadow-glow transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Phone</p>
                  <p className="text-sm text-white">{PERSONAL.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 pt-3">
                <a href={PERSONAL.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                  className="h-11 w-11 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-white/80 hover:text-white hover:border-primary/60 hover:shadow-glow transition-all">
                  <Github size={18} />
                </a>
                <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                  className="h-11 w-11 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-white/80 hover:text-white hover:border-primary/60 hover:shadow-glow transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-primary focus:shadow-glow transition-all"
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-primary focus:shadow-glow transition-all"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-primary focus:shadow-glow transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-[#050A18] bg-gradient-primary shadow-glow hover:shadow-violet transition-all hover:-translate-y-0.5"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>

        <p className="text-center text-white/40 text-sm mt-10">
          © {new Date().getFullYear()} Shabharivaasun K R · Built with React, Three.js & Framer Motion
        </p>
      </div>
    </section>
  );
}
