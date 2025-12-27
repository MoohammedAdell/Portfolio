"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Movie App",
    description:
      "A responsive movie website that showcases a collection of full-length movies with categorized genres, release years, and ratings. The platform features a clean UI, movie posters grid layout, and easy navigation for browsing and discovering films.",
    image: "/image.png",
    technologies: ["React", "Tailwind CSS", "React Icon", "Framer Motion"],
    liveUrl: "https://movies-tony.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/movies-tony",
  },
  {
    title: "Quiz App",
    description:
      "A fun and interactive React quiz app that presents users with multiple-choice questions, tracks answers, and provides instant feedback, all within a clean and responsive interface.",
    image: "/quiz.jpg",
    technologies: ["React", "Tailwind CSS", "Context API", "Stripe"],
    liveUrl: "https://react-quiz-eight-mauve.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/react-quiz",
  },
  {
    title: "Books Finder",
    description:
      "A simple React app that fetches and displays a list of books from an API in a clean and responsive layout.",
    image: "/bookFinder.jpg",
    technologies: ["React", "Tailwind CSS", "React Icon", "Google api"],
    liveUrl: "https://api-books-wine.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/Api-Books",
  },
  {
    title: "Modern Landig Page",
    description:
      "A modern responsive landing page built with clean design and smooth layout to showcase a product or service.",
    image: "/landingPage.jpg",
    technologies: ["React", "Tailwind CSS", "MDX", "Framer Motion"],
    liveUrl: "https://landing-modern-page.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/landing-modern-page",
  },
  {
    title: "Apple Clone",
    description:
      "A sleek Apple-style product showcase site with clean design and responsive layout.",
    image: "/apple.jpg",
    technologies: ["React", "Tailwind CSS","Framer Motion","Responsive Design"],
    liveUrl: "https://apple-tony.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/Apple-Tony",
  },
  {
    title: "Meals Chef",
    description:
      "A modern React meal recipes app that displays a variety of dishes with organized categories and details, offering a clean and responsive browsing experience.",
    image: "/blogApp.jpg",
    technologies: ["React", "Tailwind CSS", "Crud Operations", "React Icon"],
    liveUrl: "https://meal-chef.vercel.app/",
    githubUrl: "https://github.com/MoohammedAdell/Meal-Chef",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 sm:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-mono mb-4 block"
            >
              {"// My Work"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              {"Here are some of my recent projects. Each one is crafted with "}
              {"attention to detail, clean code, and smooth animations."}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-card text-xs font-medium rounded-full border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-primary hover:text-primary bg-transparent"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
