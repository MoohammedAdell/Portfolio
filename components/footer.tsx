"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 bg-card border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a href="#home" className="text-xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
            {"<MA />"}
          </motion.a>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Mohamed Adel. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            and lots of coffee.
          </p>
          <div className="flex gap-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
