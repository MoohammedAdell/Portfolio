"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scale = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const rotateX = useTransform(smoothProgress, [0, 1], [15, 0]);
  const blur = useTransform(smoothProgress, [0, 0.8], ["10px", "0px"]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        rotateX,
        filter: `blur(${blur})`,
        perspective: "1000px",
        transformOrigin: "top center",
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}