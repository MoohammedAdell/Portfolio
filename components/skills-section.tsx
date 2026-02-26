"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHtml5, FaJs, FaReact, FaGithub, FaLayerGroup } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "Framework" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Language" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", category: "Language" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", category: "Styling" },
  { name: "Framer Motion", icon: SiFramer, color: "#FF4154", category: "Animation" },
  { name: "Zustand", icon: FaLayerGroup, color: "#4F46E5", category: "State" },
  { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26", category: "Fundamentals" },
  { name: "Git/GitHub", icon: FaGithub, color: "#6E5494", category: "Tools" },
];

export function SkillsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-[#020617]">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          
          {/* ===== Section Header (نفس التايتل الأصلي) ===== */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              TECH STACK
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent"
            >
              Mastering the Modern Web
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Crafting seamless digital experiences using the industry's most 
              powerful tools and frameworks.
            </motion.p>
          </div>

          {/* ===== Skills Grid (تصميم مطور بدون ليفل) ===== */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Aura Glow */}
                <div 
                  className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="relative overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/5 p-8 rounded-3xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.04] flex flex-col items-center text-center">
                  
                  {/* Category Tag */}
                  <span className="text-[9px] font-mono tracking-[0.2em] text-slate-500 uppercase mb-6 block">
                    {skill.category}
                  </span>

                  {/* Icon Container */}
                  <div 
                    className="p-5 rounded-2xl bg-white/5 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]"
                    style={{ color: skill.color, boxShadow: `0 10px 30px -10px ${skill.color}40` }}
                  >
                    <skill.icon size={40} />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  
                  {/* Bottom Line Decor */}
                  <div 
                    className="w-0 group-hover:w-12 h-[2px] mt-4 transition-all duration-500 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}