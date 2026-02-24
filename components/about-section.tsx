"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles, Zap, Terminal, Orbit } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Architecting scalable and maintainable solutions.",
    color: "group-hover:text-blue-400",
  },
  {
    icon: Palette,
    title: "UI Design",
    description: "Crafting pixel-perfect, aesthetic interfaces.",
    color: "group-hover:text-purple-400",
  },
  {
    icon: Sparkles,
    title: "Animations",
    description: "Bringing life to static designs with Framer Motion.",
    color: "group-hover:text-amber-400",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized delivery for lightning-fast loading.",
    color: "group-hover:text-emerald-400",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative overflow-hidden bg-[#020617]"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-0 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none uppercase">
        Passion
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section - The "Hyped" Version */}
          <div className="flex flex-col items-center text-center mb-24 relative">
            {/* 1. Animated Icon with Pulsing Halo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative mb-6"
            >
              {/* Outer Glow Rings */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border border-dashed border-primary/30"
              />

              <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-primary/20 to-transparent flex items-center justify-center border border-primary/50 backdrop-blur-xl shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                <Orbit className="text-primary w-8 h-8" />{" "}
                {/* Scanning Light Effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-b from-transparent via-primary/20 to-transparent h-1/2 w-full"
                  animate={{ translateY: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* 2. Subtitle with Character Spacing Animation */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={isInView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-8 bg-linear-to-r from-transparent to-primary" />
              <span className="text-primary text-xs font-mono uppercase tracking-[0.3em] font-bold">
                Digital Architect
              </span>
              <span className="h-px w-8 bg-linear-to-l from-transparent to-primary" />
            </motion.div>

            {/* 3. Main Title with Mask & Gradient */}
            <div className="relative group">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tight"
              >
                <span className="inline-block bg-linear-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                  Elevating Digital
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-primary italic drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                    Standards
                  </span>
                  {/* Underline Decorative Element */}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-2 left-0 h-3 bg-primary/10 -z-10 -rotate-1"
                  />
                </span>
              </motion.h2>
            </div>

            {/* 4. Animated Divider */}
            <div className="relative flex items-center justify-center w-full max-w-50">
              <div className="h-px w-full bg-linear-to-r from-transparent via-primary/50 to-transparent" />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#38bdf8]"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-stretch">
            {/* Left Content - Glass Terminal Style */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-3 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

              <div className="relative h-full bg-[#0a0f1d]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden">
                {/* Terminal Dots */}
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Turning complex logic into
                  <span className="relative inline-block ml-2 text-primary">
                    pixel-perfect
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ delay: 1, duration: 0.8 }}
                        d="M0 5 Q 25 0, 50 5 T 100 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </motion.svg>
                  </span>{" "}
                  experiences.
                </h3>

                <div className="space-y-6 text-slate-400 text-lg leading-relaxed max-w-2xl">
                  <p className="relative">
                    <span className="text-primary font-mono mr-2">const</span>
                    <span className="text-white font-medium">
                      Mohamed Adel
                    </span>{" "}
                    = {"{"}
                    role:{" "}
                    <span className="text-emerald-400">
                      'Front-End Alchemist'
                    </span>
                    , mission:{" "}
                    <span className="text-emerald-400">
                      'Build for the future'
                    </span>
                    {"}"};
                  </p>

                  <p>
                    I specialize in bridging the gap between{" "}
                    <span className="text-white font-semibold underline decoration-primary/30">
                      design and engineering
                    </span>
                    . My goal is to create interfaces that don't just work, but
                    feel intuitive and alive.
                  </p>

                  {/* Tech Stack - Floating Pill Style */}
                  <div className="pt-8 flex flex-wrap gap-3">
                    {[
                      "React",
                      "Next.js 15",
                      "Tailwind",
                      "Framer",
                      "TypeScript",
                      "Node.js",
                    ].map((tech, i) => (
                      <motion.span
                        key={tech}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(56, 189, 248, 0.1)",
                        }}
                        className="px-4 py-2 text-sm font-mono border border-white/5 rounded-full bg-white/5 text-slate-300 backdrop-blur-sm cursor-default"
                      >
                        <span className="text-primary/50 mr-1">#</span>
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Background Decorative Element */}
                <div className="absolute bottom-[-10%] right-[-5%] text-[10rem] font-bold text-white/[0.02] -rotate-12 pointer-events-none">
                  CODE
                </div>
              </div>
            </motion.div>

            {/* Right Content - Bento Grid Highlights */}
            <div className="lg:col-span-2 grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group relative flex items-center gap-6 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-3xl p-6 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Border Line on Hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />

                  <div
                    className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 ${item.color}`}
                  >
                    <item.icon className="w-8 h-8" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-snug group-hover:text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle arrow that appears on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#38bdf8]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
