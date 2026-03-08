"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function MouseCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // إعدادات النقطة (خليناها سريعة جداً عشان تسبق)
  const dotSpring = { damping: 20, stiffness: 500, mass: 0.2 };
  const mainCursorX = useSpring(mouseX, dotSpring);
  const mainCursorY = useSpring(mouseY, dotSpring);

  // إعدادات الدايرة (خليناها أبطأ شوية عشان تجري ورا النقطة)
  const ringSpring = { damping: 25, stiffness: 120, mass: 0.5 };
  const ringX = useSpring(mouseX, ringSpring);
  const ringY = useSpring(mouseY, ringSpring);

  // إضاءة خفيفة جداً
  const glowX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isSelectable = 
        window.getComputedStyle(target).cursor === "pointer" || 
        target.tagName === "BUTTON" || 
        target.tagName === "A";
      
      setIsHovering(isSelectable);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
      {/* 1. النقطة اللي في النص (بتسبق) */}
      <motion.div
        className="fixed w-2 h-2 bg-primary rounded-full"
        style={{
          x: mainCursorX,
          y: mainCursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. الدايرة اللي بتكبر (بتجري ورا النقطة) */}
      <motion.div
        className="fixed rounded-full border border-primary/50"
        animate={{
          width: isHovering ? 60 : 32,
          height: isHovering ? 60 : 32,
          backgroundColor: isHovering ? "rgba(var(--primary-rgb), 0.1)" : "transparent",
          borderColor: isHovering ? "rgba(var(--primary-rgb), 1)" : "rgba(var(--primary-rgb), 0.5)",
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* 3. الإضاءة (خففناها لـ 2% بدل 5%) */}
      <motion.div
        className="fixed w-80 h-80 bg-primary/2 rounded-full blur-[100px]"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 4. كلمة View (زي مكانت بالظبط) */}
      <AnimatePresence>
        {isHovering && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed text-[10px] font-black text-primary uppercase tracking-tighter"
            style={{
              x: mainCursorX,
              y: mainCursorY,
              marginLeft: "40px",
              marginTop: "40px",
            }}
          >
            View
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}