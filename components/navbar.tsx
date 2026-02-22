"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 sm:p-6 pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto
          flex items-center justify-between 
          px-6 py-3 rounded-full 
          transition-all duration-500 ease-in-out
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] w-full max-w-5xl"
              : "bg-transparent border border-transparent w-full max-w-7xl"
          }
        `}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          aria-label="Go to homepage"
          className="text-2xl font-black text-white tracking-tighter flex items-center gap-1 group"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-primary group-hover:italic transition-all">
            M
          </span>
          ADEL
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
            aria-hidden="true"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors relative z-10"
                >
                  {item.name}
                </a>
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 -z-0"
                  layoutId="navHover"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all"
          >
            Hire Me
            <Rocket size={14} aria-hidden="true" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-transform active:scale-90"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <X key="close" size={20} aria-hidden="true" />
            ) : (
              <Menu key="open" size={20} aria-hidden="true" />
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 p-2 lg:hidden pointer-events-auto"
            >
              <div className="bg-[#030712]/95 border border-white/10 backdrop-blur-2xl rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-4 rounded-2xl text-lg font-bold text-slate-300 hover:text-primary hover:bg-white/5 transition-all group"
                      >
                        {item.name}
                        <span
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono"
                          aria-hidden="true"
                        >
                          /0{index + 1}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 bg-primary text-black rounded-2xl flex items-center justify-center font-black uppercase tracking-tighter gap-2"
                  >
                    Start a Project
                    <Rocket size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}