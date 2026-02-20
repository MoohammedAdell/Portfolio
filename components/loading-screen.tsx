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
    let frameId: number;
    let startTime: number;
    const duration = 3000; 

    const updateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressValue = Math.min((elapsed / duration) * 100, 100);

      setProgress(Math.floor(progressValue));

      if (progressValue < 100) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        setIsVisible(false);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 1000); 

    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(phraseInterval);
    };
  }, []);

  const mainScreenVariants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2, 
        ease: "easeOut",
      },
    },
  };

  const panelVariants = {
    initial: { height: "100%" },
    exit: (i: number) => ({
      height: "0%",
      transition: {
        duration: 0.3,
        ease: [0.45, 0, 0.55, 1],
        delay: i * 0.02, 
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
          <div className="absolute inset-0 z-50 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
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

          <div className="relative z-[60] flex flex-col items-center justify-center w-full h-full">
            <div className="relative mb-12">
              <motion.div
                initial={{ opacity: 0, letterSpacing: "-0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.1em" }}
                transition={{ duration: 1, ease: "circOut" }}
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
                      color: { duration: 0.2 }
                    }}
                    className={`text-7xl md:text-[10rem] font-black italic tracking-tighter ${
                      char === "M" || char === "." ? "text-primary" : "text-white"
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />
            </div>

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

              <div className="w-64 h-[2px] bg-white/5 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="absolute h-full bg-primary shadow-[0_0_20px_#3b82f6]"
                />
              </div>

              <div className="h-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={phraseIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[9px] font-mono text-white/30 uppercase tracking-[0.5em]"
                  >
                    {PHRASES[phraseIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-primary/20 z-[70] shadow-[0_0_15px_#3b82f6]"
            />
          </div>

          <div className="absolute inset-6 border border-white/[0.05] pointer-events-none z-[80]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-primary" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-primary" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}