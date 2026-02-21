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
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono tracking-widest uppercase mb-6"
            >
              <MessageSquare
                size={12}
                className="animate-pulse"
                aria-hidden="true"
              />
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
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-10"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <Mail size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Email</p>
                      <a
                        href="mailto:mohammedadell496@gmail.com"
                        className="text-white hover:text-primary transition"
                      >
                        mohammedadell496@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <MapPin size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Location</p>
                      <p className="text-white">Egypt</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase text-slate-500">
                  Find me on
                </h4>

                <div className="flex gap-4">
                  {socialLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${link.label} profile`}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-primary transition-all"
                      style={{ color: link.color }}
                    >
                      <link.icon size={24} aria-hidden="true" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-[#0a0f1d] p-8 sm:p-12 rounded-[2.5rem] border border-white/10 space-y-8"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" name="message" rows={6} required />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-2xl bg-primary text-black font-bold uppercase tracking-widest"
                >
                  <div aria-live="polite" className="flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" aria-hidden="true" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} aria-hidden="true" />
                      </>
                    )}
                  </div>
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
