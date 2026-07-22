"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function SpotlightCard({ children }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative max-w-md rounded-2xl border border-white/10 bg-[#0a0a0a] px-8 py-12 shadow-2xl overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Ye wo spotlight hai jo mouse ke sath move karegi */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 0, 85, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {/* Content yahan aayega */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}