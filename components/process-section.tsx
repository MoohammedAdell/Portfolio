"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Plan",
    subtitle: "Discovery & Strategy",
    description: "Analyzing your vision, defining core objectives, and creating detailed wireframes to ensure a seamless user experience before a single line of code is written.",
    icon: "01",
  },
  {
    title: "Develop",
    subtitle: "Clean Code & Animation",
    description: "Transforming designs into reality using cutting-edge technologies like React and Next.js, focusing on performance, speed, and fluid animations.",
    icon: "02",
  },
  {
    title: "Launch",
    subtitle: "Testing & Deployment",
    description: "Rigorous final testing to ensure 100% cross-device compatibility, followed by a global deployment and ongoing post-launch support.",
    icon: "03",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-black/10 scroll-mt-20">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-mono text-xs uppercase tracking-[0.5em]"
        >
          Work Methodology
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tighter"
        >
          My Creative Process<span className="text-primary">.</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* The Animated Line (Hidden on Mobile) */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden md:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Step Number with Glow */}
              <div className="mb-8 relative inline-block">
                <span className="text-8xl font-black text-white/[0.03] absolute -top-10 -left-4 group-hover:text-primary/10 transition-colors duration-500 select-none">
                  {step.icon}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-white/10 flex items-center justify-center relative z-10 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 shadow-2xl">
                  <span className="text-primary font-mono font-bold text-xl">{step.icon}</span>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-primary/70 text-[10px] font-mono uppercase tracking-widest mb-4">
                {step.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm group-hover:text-slate-300 transition-colors">
                {step.description}
              </p>

              {/* Connector Dot for Desktop */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute top-[32px] -right-6 w-2.5 h-2.5 bg-primary rounded-full hidden md:block shadow-[0_0_15px_#38bdf8] z-20"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}