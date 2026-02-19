"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "NexaTeck",
    tagline: "Modern Digital Services",
    description: "NexaTeck is a sleek and modern digital services website showcasing professional solutions with a clean UI and intuitive layout.",
    image: "/nexa.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://pro-bloom-web-main.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/pro-bloom-web-main",
    color: "#38bdf8"
  },
  {
    title: "LUXE",
    tagline: "E-Commerce Experience",
    description: "A clean and modern furniture showcase website presenting premium home furniture collections with stylish design.",
    image: "/luxy.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://luxe-11.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/luxe",
    color: "#fbbf24"
  },
  {
    title: "Netflix Clone",
    tagline: "Streaming UI",
    description: "A responsive Netflix-inspired web app that displays movies and TV shows in a clean, modern UI.",
    image: "/netflix.png",
    technologies: ["React", "Supabase", "Tailwind"],
    liveUrl: "https://netflix-clone-two-beta-27.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/netflix",
    color: "#e11d48"
  },
  {
    title: "Modern E-Commerce",
    tagline: "Web Application",
    description: "A sleek and responsive e-commerce web application featuring a clean product showcase and intuitive shopping layout.",
    image: "/ecom.png",
    technologies: ["React", "Tailwind CSS", "Swiper"],
    liveUrl: "https://e-commerch.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/E-commerch",
    color: "#10b981"
  },
  {
    title: "Movie App",
    tagline: "Discovery Platform",
    description: "A responsive movie website that showcases a collection of full-length movies with categorized genres.",
    image: "/image.png",
    technologies: ["React", "Tailwind CSS", "React Icon"],
    liveUrl: "https://movies-tony.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/movies-tony",
    color: "#6366f1"
  },
  {
    title: "Quiz App",
    tagline: "Interactive Learning",
    description: "A fun and interactive React quiz app that presents users with multiple-choice questions and instant feedback.",
    image: "/quiz.jpg",
    technologies: ["React", "Tailwind CSS", "Context API"],
    liveUrl: "https://react-quiz-eight-mauve.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/react-quiz",
    color: "#8b5cf6"
  },
  {
    title: "Books Finder",
    tagline: "API Integration",
    description: "A simple React app that fetches and displays a list of books from an API in a clean layout.",
    image: "/bookFinder.jpg",
    technologies: ["React", "Tailwind CSS", "Google API"],
    liveUrl: "https://api-books-wine.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/Api-Books",
    color: "#f97316"
  },
  {
    title: "Modern Landing Page",
    tagline: "Design Showcase",
    description: "A modern responsive landing page built with clean design and smooth layout to showcase products.",
    image: "/landingPage.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://landing-modern-page.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/landing-modern-page",
    color: "#ec4899"
  },
  {
    title: "Apple Clone",
    tagline: "Premium UI",
    description: "A sleek Apple-style product showcase site with clean design and responsive layout.",
    image: "/apple.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://apple-tony.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/Apple-Tony",
    color: "#f8fafc"
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // تصفية المشاريع: أول 3 فقط أو الكل
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#020617] overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest mb-6"
            >
              Portfolio Showcase
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
            >
              Creative <span className="text-primary italic">Showcase</span>
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>

          {/* Projects Grid with Layout Animation */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative flex flex-col h-full bg-[#0a0f1d] rounded-[2rem] border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Actions Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      <motion.a 
                        href={project.liveUrl} target="_blank"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-xl"
                      >
                        <Globe size={20} />
                      </motion.a>
                      <motion.a 
                        href={project.githubUrl} target="_blank"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-xl border border-white/20"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                          {project.tagline}
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-primary transition-colors italic">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                      <div className="flex gap-2">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span key={tech} className="text-[10px] font-mono text-slate-500">#{tech}</span>
                        ))}
                      </div>
                      <Button
                        asChild
                        variant="link"
                        className="p-0 h-auto text-primary font-bold hover:no-underline group/btn"
                      >
                        <a href={project.liveUrl} target="_blank">
                          Live <ExternalLink size={14} className="ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                    style={{ backgroundColor: project.color }}
                  />
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="mt-16 flex justify-center"
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-10 py-7 rounded-full bg-primary/10 border border-primary/20 text-white hover:bg-primary transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3 font-black tracking-[0.2em] text-sm">
                {showAll ? "SHOW LESS" : "EXPLORE ALL PROJECTS"}
                <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${showAll ? "rotate-180" : ""}`} />
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}