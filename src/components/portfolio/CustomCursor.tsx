import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[role=button],input,textarea,label"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] rounded-full transition-[width,height,opacity] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 40 : 12,
          height: hover ? 40 : 12,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,212,255,0.9), rgba(123,47,255,0.4) 60%, transparent)",
          boxShadow: "0 0 20px rgba(0,212,255,0.7), 0 0 40px rgba(123,47,255,0.5)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-white"
        style={{
          left: pos.x,
          top: pos.y,
          width: 4,
          height: 4,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
