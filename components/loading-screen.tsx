"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PHRASES = [
  "System Awakening",
  "Synchronizing Interface",
  "Rendering Vision",
  "Welcome to the Future",
];

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 1200);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          clearInterval(phraseInterval);
          setTimeout(() => setIsVisible(false), 1200);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => {
      clearInterval(timer);
      clearInterval(phraseInterval);
    };
  }, []);

  // Section: Exit Animation Configuration
  const mainScreenVariants = {
    exit: {
      scale: 1.1,
      filter: "blur(20px)",
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  const panelVariants = {
    initial: { height: "100%" },
    exit: (i: number) => ({
      height: "0%",
      transition: {
        duration: 0.8,
        ease: [0.8, 0, 0.1, 1],
        delay: i * 0.08,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="loader"
          variants={mainScreenVariants}
          exit="exit"
          className="fixed inset-0 z-[10000] flex overflow-hidden bg-black cursor-none"
        >
          {/* Section: Background Noise & Particles */}
          <div className="absolute inset-0 z-50 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          {/* Section: Geometric Panels */}
          <div className="absolute inset-0 flex flex-col z-10">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={panelVariants}
                initial="initial"
                exit="exit"
                className="w-full flex-1 bg-[#020202] border-b border-white/[0.03] relative"
              />
            ))}
          </div>

          {/* Section: Core Content Wrapper */}
          <div className="relative z-[60] flex flex-col items-center justify-center w-full h-full">
            
            {/* Section: Animated Typography */}
            <div className="relative mb-12">
              <motion.div
                initial={{ opacity: 0, letterSpacing: "-0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.1em" }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="flex"
              >
                {["M", "A", "D", "E", "L", "."].map((char, i) => (
                  <motion.span
                    key={i}
                    animate={{ 
                      y: [0, -5, 0],
                      color: progress === 100 ? "#3b82f6" : "#FFF"
                    }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 2, delay: i * 0.1 },
                      color: { duration: 0.5 }
                    }}
                    className={`text-7xl md:text-[10rem] font-black italic tracking-tighter ${
                      char === "M" || char === "." ? "text-primary" : "text-white"
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              {/* Logo Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />
            </div>

            {/* Section: Data Progress UI */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center">
                <motion.span 
                  className="font-mono text-5xl font-light text-white/90"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  {progress}%
                </motion.span>
                <span className="text-[10px] font-mono tracking-[0.8em] text-primary uppercase ml-3">
                  System Load
                </span>
              </div>

              {/* Progress Line */}
              <div className="w-64 h-[2px] bg-white/5 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="absolute h-full bg-primary shadow-[0_0_20px_#3b82f6]"
                />
              </div>

              {/* Section: Dynamic Phrases */}
              <div className="h-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={phraseIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-[9px] font-mono text-white/30 uppercase tracking-[0.5em]"
                  >
                    {PHRASES[phraseIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Section: Scanning Line Effect */}
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-primary/20 z-[70] shadow-[0_0_15px_#3b82f6]"
            />
          </div>

          {/* Section: Cyberpunk Borders */}
          <div className="absolute inset-6 border border-white/[0.05] pointer-events-none z-[80]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-primary" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-primary" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}