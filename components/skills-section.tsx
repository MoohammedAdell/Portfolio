"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaLayerGroup } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, level: 90, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, level: 85, color: "#ffffff", category: "Framework" },
  { name: "TypeScript", icon: SiTypescript, level: 80, color: "#3178C6", category: "Language" },
  { name: "JavaScript", icon: FaJs, level: 90, color: "#F7DF1E", category: "Language" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 95, color: "#38BDF8", category: "Styling" },
  { name: "Framer Motion", icon: SiFramer, level: 85, color: "#FF4154", category: "Animation" },
  { name: "Zustand", icon: FaLayerGroup, level: 80, color: "#4F46E5", category: "State" },
  { name: "HTML/CSS", icon: FaHtml5, level: 98, color: "#E34F26", category: "Fundamentals" },
  { name: "Git/GitHub", icon: FaGithub, level: 88, color: "#6E5494", category: "Tools" },
];

export function SkillsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-[#020617]">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
        >
          {/* ===== Section Header ===== */}
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

          {/* ===== Skills Grid ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  delay: index * 0.05, 
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glowing Aura Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="relative h-full bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                  
                  {/* Skill Category & Index */}
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                      {skill.category}
                    </span>
                    <span className="text-xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Icon & Name */}
                  <div className="flex items-center gap-4 mb-10">
                    <div 
                      className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500"
                      style={{ color: skill.color }}
                    >
                      <skill.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <div className="text-sm font-mono text-primary/80">{skill.level}% Proficiency</div>
                    </div>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1.5, ease: "circOut" }}
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    >
                      {/* Inner Glow Pulse */}
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2"
                      />
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}