"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Palette, Sparkles, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Palette,
    title: "UI Design",
    description: "Creating visually appealing interfaces",
  },
  {
    icon: Sparkles,
    title: "Animations",
    description: "Smooth and engaging motion design",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Fast and optimized web applications",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 sm:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-mono mb-4 block"
            >
              {"// About Me"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Get to Know Me
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {"Hello! I'm "}
                <span className="text-primary font-semibold">Mohamed Adel</span>, a passionate Front-End Developer and
                Computer Science student. I specialize in building modern web applications with a focus on user
                experience, clean code, and smooth animations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {"My journey in web development started with a curiosity about how websites work, "}
                {"and it has evolved into a deep passion for creating beautiful and functional "}
                {"digital experiences. I love transforming ideas into reality through code."}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {"When I'm not coding, you can find me exploring new technologies, "}
                {"contributing to open-source projects, or learning about the latest "}
                {"trends in web development and UI/UX design."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
