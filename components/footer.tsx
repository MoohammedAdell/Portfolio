"use client";

import { motion } from "framer-motion";
import { Heart, Coffee, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // حركة النبض للقلب
  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 bg-[#020617] border-t border-white/5 overflow-hidden">
      {/* خلفية جمالية بسيطة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo / Brand */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <motion.a 
              href="#home" 
              className="text-2xl font-black text-white tracking-tighter"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary italic">M</span>ADEL<span className="text-primary">.</span>
            </motion.a>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">
              Front-End Developer
            </p>
          </motion.div>

          {/* Copyright & Made with */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-400 text-sm flex items-center justify-center gap-1.5">
              © {currentYear} Crafted with 
              <motion.span variants={heartVariants} animate="animate">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.span>
              and 
              <Coffee className="w-4 h-4 text-amber-600" />
              by <span className="text-white font-bold hover:text-primary transition-colors cursor-pointer">Mohamed Adel</span>
            </p>
          </motion.div>

          {/* Links & Scroll to Top */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <nav className="hidden sm:flex gap-6">
              {['Home', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-xs font-bold text-slate-500 hover:text-primary uppercase tracking-widest transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all shadow-2xl"
            >
              <ArrowUp size={18} />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Small Text */}
        <div className="mt-12 text-center">
          <p className="text-[9px] text-slate-700 uppercase tracking-[0.5em]">
            Built with Next.js • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}