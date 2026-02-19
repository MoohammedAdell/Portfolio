"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function MouseCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // قيم الماوس الأساسية
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // إعدادات الـ Spring عشان الحركة تكون "Smooth" جداً وفلترتها ممتازة
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const mainCursorX = useSpring(mouseX, springConfig);
  const mainCursorY = useSpring(mouseY, springConfig);

  // إعدادات للوهج (Glow) بحيث يكون أبطأ شوية في الحركة فيعمل تأثير "Lag" جمالي
  const glowX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // اكتشاف إذا كان الماوس فوق عنصر قابل للضغط (زرار، لينك)
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
      {/* 1. النقطة المركزية (الصلبة) */}
      <motion.div
        className="fixed w-2 h-2 bg-primary rounded-full"
        style={{
          x: mainCursorX,
          y: mainCursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. الدائرة الخارجية التفاعلية */}
      <motion.div
        className="fixed rounded-full border border-primary/50"
        animate={{
          width: isHovering ? 60 : 32,
          height: isHovering ? 60 : 32,
          backgroundColor: isHovering ? "rgba(var(--primary-rgb), 0.1)" : "transparent",
          borderColor: isHovering ? "rgba(var(--primary-rgb), 1)" : "rgba(var(--primary-rgb), 0.5)",
        }}
        style={{
          x: mainCursorX,
          y: mainCursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* 3. الوهج الضوئي (Ambient Glow) */}
      <motion.div
        className="fixed w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 4. نص تلميحي يظهر عند الـ Hover (اختياري - روقان زيادة) */}
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

// متنساش تضيف AnimatePresence من framer-motion لو هتستخدم النص التلميحي
import { AnimatePresence } from "framer-motion";