"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, MousePointer2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const x1 = useTransform(scrollY, [0, 800], [0, -200]); 
  const x2 = useTransform(scrollY, [0, 800], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-[110vh] flex items-center justify-center relative overflow-hidden bg-[#020617] pt-20"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div style={{ y: y1 }} className="absolute top-32 left-[12%] opacity-10 hidden lg:block will-change-transform">
        <div className="w-24 h-24 border border-primary rounded-3xl rotate-45 animate-[spin_15s_linear_infinite]" />
      </motion.div>
      
      <motion.div style={{ y: y2 }} className="absolute top-1/2 right-[10%] opacity-10 hidden lg:block will-change-transform">
        <Sparkles size={80} className="text-primary" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-10 group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-mono tracking-[0.2em] text-slate-400 uppercase">
              Systems Architect & Developer
            </span>
          </motion.div>

          <div className="mb-8 overflow-visible">
            <motion.h1
              style={{ x: x1 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-[-0.04em] leading-[0.9] whitespace-nowrap text-white"
            >
              Design <span className="text-white/20">Driven</span>
            </motion.h1>
            
            <motion.h1
              style={{ x: x2 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-[-0.04em] leading-[0.9] whitespace-nowrap text-white"
            >
              <span className="relative inline-block">
                Experience
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-[8px] bg-primary/30 -z-10 rounded-full"
                />
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            I'm <span className="text-white font-medium">Mohamed Adel</span>, specializing in building 
            digital products that combine <span className="text-primary font-mono italic">Clean Code</span> with 
            exceptional Visual Identity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-14"
          >
            <Button
              asChild
              className="h-16 px-10 bg-primary text-black font-bold rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <a href="#projects" className="flex items-center gap-3">
                View Portfolio
                <MousePointer2 size={18} className="group-hover:rotate-12 transition-transform" />
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="h-16 px-10 rounded-2xl border-white/10 ml-10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all hover:border-primary group text-white"
            >
              <a href="#contact" className="flex items-center gap-2">
                Let's Talk
                <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-10 mt-20"
          >
            {[
              { icon: <Github size={24} />, link: "https://github.com/MoohammedAdell" },
              { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/mohamed-adel-a9370330a/" },
              { icon: <Mail size={24} />, link: "mailto:mohammedadell496@gmail.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary transform hover:-translate-y-2 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-mono tracking-[0.4em] text-white/30 uppercase [writing-mode:vertical-lr] animate-pulse">
            Scroll
          </span>
          
          <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 via-transparent to-transparent relative">
            <motion.div
              animate={{
                y: ["0%", "200%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(56,189,248,0.8)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}