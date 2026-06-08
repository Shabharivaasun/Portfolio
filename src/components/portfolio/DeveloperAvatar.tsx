import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Cpu, Code, Brain } from "lucide-react";

export default function DeveloperAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position relative to center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Parallax rotation values (limited for realistic 3D feel)
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  // Secondary elements translation offsets for depth/parallax
  const transX1 = useTransform(x, [-200, 200], [-10, 10]);
  const transY1 = useTransform(y, [-200, 200], [-10, 10]);
  
  const transX2 = useTransform(x, [-200, 200], [15, -15]);
  const transY2 = useTransform(y, [-200, 200], [15, -15]);

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // calculate mouse coordinates from center of the container
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <div 
      className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-square flex items-center justify-center select-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* 1. Behind Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/20 to-[#7B2FFF]/20 rounded-full blur-[60px] opacity-75 animate-pulse-glow -z-10 pointer-events-none" />
      <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-primary/20 animate-[spin_40s_linear_infinite] -z-10 pointer-events-none" />
      <div className="absolute w-[65%] h-[65%] rounded-full border border-dotted border-white/10 animate-[spin_25s_linear_infinite_reverse] -z-10 pointer-events-none" />

      {/* 2. Main 3D Card Container */}
      <motion.div
        className="w-[85%] h-[85%] relative rounded-3xl overflow-visible glass-card p-2 flex items-center justify-center"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        {/* Glow border ring */}
        <div className="absolute inset-0 rounded-3xl border border-primary/30 pointer-events-none shadow-[inset_0_0_20px_rgba(0,212,255,0.15)]" />
        
        {/* Animated neon corner markers */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/70" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/70" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/70" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/70" />

        {/* 3. Image Container */}
        <div 
          className="relative w-full h-full rounded-2xl overflow-hidden bg-cover bg-center bg-[#070e20] shadow-glow transition-shadow duration-300"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Grid background overlay */}
          <div 
            className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
          />
          <img 
            src="/avatar.png" 
            alt="Developer Avatar"
            className="w-full h-full object-cover select-none object-bottom"
          />
        </div>

        {/* 4. Floating tech badges with custom translation for parallax */}
        {/* Top-Right Badge: AI/ML */}
        <motion.div 
          className="absolute -top-4 -right-4 bg-[#0a142c]/95 border border-primary/50 text-white py-1.5 px-3 rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-md"
          style={{ 
            x: isHovered ? transX1 : 0, 
            y: isHovered ? transY1 : 0,
            transformStyle: "preserve-3d",
            translateZ: 60 
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <Brain size={14} className="text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider font-display">AI / ML</span>
        </motion.div>

        {/* Bottom-Left Badge: Python / SQL Code */}
        <motion.div 
          className="absolute -bottom-4 -left-4 bg-[#0a142c]/95 border border-primary-glow/50 text-white py-2 px-3 rounded-xl flex flex-col gap-0.5 shadow-lg backdrop-blur-md"
          style={{ 
            x: isHovered ? transX2 : 0, 
            y: isHovered ? transY2 : 0,
            transformStyle: "preserve-3d",
            translateZ: 70 
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 pb-1 mb-1">
            <Code size={12} className="text-[#7B2FFF]" />
            <span className="text-[9px] font-bold tracking-wider font-display text-white/70">AGENT_PIPELINE</span>
          </div>
          <span className="text-[10px] font-mono text-[#00D4FF]">model.predict(x_test)</span>
        </motion.div>

        {/* Center Top mini chip */}
        <motion.div
          className="absolute -top-5 left-[35%] bg-gradient-primary p-1 rounded-full shadow-lg"
          style={{
            x: isHovered ? transX2 : 0,
            y: isHovered ? transY1 : 0,
            transformStyle: "preserve-3d",
            translateZ: 50
          }}
        >
          <Cpu size={14} className="text-[#050A18]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
