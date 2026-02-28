"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 3000; // 3 ثوانٍ وقت مثالي لعرض اللوجو
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(p));

      if (p < 100) {
        requestAnimationFrame(update);
      } else {
        setTimeout(() => setIsVisible(false), 400); 
      }
    };

    requestAnimationFrame(update);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#020202] overflow-hidden"
        >
          {/* إضاءة خلفية ناعمة متدرجة (Ambient Glow) */}
          {/* النور ده هيتحرك ببطء عشان يدي روح للتصميم */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full"
          />

          <div className="relative flex flex-col items-center gap-6">
            {/* اللوجو مع أنيميشن ظهور تدريجي */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-20 h-20 md:w-28 md:h-28 object-contain mb-2" 
              />
              {/* انعكاس خفيف تحت اللوجو */}
              <div className="absolute -bottom-2 left-0 right-0 h-4 bg-primary/20 blur-xl rounded-full" />
            </motion.div>

            {/* اسم البراند */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-baseline"
            >
              <span className="text-4xl md:text-5xl font-black italic tracking-tighter text-primary">M</span>
              <span className="text-4xl md:text-5xl font-black italic tracking-tighter text-white">ADEL.</span>
            </motion.div>

            {/* بار التحميل - Minimalist & Sleek */}
            <div className="mt-4 flex flex-col items-center gap-3">
              <div className="relative w-40 h-[1px] bg-white/5 overflow-hidden rounded-full">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: `${progress - 100}%` }}
                  transition={{ ease: "linear" }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-primary to-transparent"
                />
              </div>
              
              {/* النسبة المئوية */}
              <span className="font-mono text-[9px] tracking-[0.5em] text-white/30 uppercase">
                {progress}%
              </span>
            </div>
          </div>

          {/* زوايا الديكور (Architectural Elements) */}
          <div className="absolute inset-8 pointer-events-none opacity-20">
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-primary/50" />
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-primary/50" />
            
            <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-primary/50" />
            <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-primary/50" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}