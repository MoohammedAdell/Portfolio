"use client";

import type React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      alert("🚀 Mission accomplished! Message sent.");
      formRef.current?.reset();
    } catch (error) {
      alert("Oops! Something went wrong. Try again?");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MoohammedAdell",
      label: "GitHub",
      color: "#6e5494",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohamedadel-fe/",
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      icon: Mail,
      href: "mailto:mohammedadell496@gmail.com",
      label: "Email",
      color: "#ea4335",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative bg-[#020617] overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono tracking-widest uppercase mb-6"
            >
              <MessageSquare size={12} className="animate-pulse" />
              Get In Touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
            >
              Let’s Build{" "}
              <span className="text-primary italic">Something Great</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Contact Info - Column 1 (2/5 span) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-10"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  Contact Information
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "mohammedadell496@gmail.com",
                      href: "mailto:mohammedadell496@gmail.com",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Egypt",
                      href: null,
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10 }}
                      aria-label="Open menu"
                      className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500">
                  Find me on
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      aria-label="Open menu"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white hover:border-primary transition-all shadow-xl shadow-black/20"
                      style={{ color: link.color }}
                    >
                      <link.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Column 2 (3/5 span) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3 relative group"
            >
              {/* Magic Border Beam Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-accent/50 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative bg-[#0a0f1d] p-8 sm:p-12 rounded-[2.5rem] border border-white/10 space-y-8 backdrop-blur-xl"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3 text-left">
                    <Label
                      htmlFor="name"
                      className="text-xs font-mono uppercase tracking-widest text-slate-400 ml-1"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/50 rounded-2xl px-6"
                    />
                  </div>
                  <div className="space-y-3 text-left">
                    <Label
                      htmlFor="email"
                      className="text-xs font-mono uppercase tracking-widest text-slate-400 ml-1"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/50 rounded-2xl px-6"
                    />
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <Label
                    htmlFor="message"
                    className="text-xs font-mono uppercase tracking-widest text-slate-400 ml-1"
                  >
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-white/[0.03] border-white/5 focus:border-primary/50 rounded-3xl p-6 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-2xl bg-primary text-black font-black uppercase tracking-widest hover:bg-white hover:scale-[1.02] transition-all group overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="animate-spin" />
                        Transmitting...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="ready"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        Send Message
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
