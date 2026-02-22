"use client";

import type React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Loader2,
  MessageSquare,
  Sparkles,
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MoohammedAdell",
      color: "hover:text-[#6e5494]",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohamedadel-fe/",
      color: "hover:text-[#0077b5]",
    },
    {
      icon: Mail,
      href: "mailto:mohammedadell496@gmail.com",
      color: "hover:text-[#ea4335]",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 lg:py-40 relative bg-[#020617] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-blue-500/5 rounded-full blur-[120px] -z-10 opacity-30" />

      <div className="container mx-auto px-6">
        <motion.div ref={ref} className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 text-primary mb-4"
            >
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-xs font-mono uppercase tracking-[0.3em]">
                Available for projects
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter"
            >
              Ready to start <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-400 to-emerald-400">
                the next big thing?
              </span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Side: Contact Info */}
            <motion.div
              className="lg:col-span-4 flex flex-col justify-between space-y-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
            >
              <div className="space-y-8">
                <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                  Have a question or a proposal, or just want to say hello? Go
                  ahead.
                </p>

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
                      href: "#",
                    },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="group flex items-center gap-4 p-2 -ml-2 hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/10"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                          {item.label}
                        </p>
                        <p className="text-white font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-white/5">
                <p className="text-xs font-mono text-slate-600 uppercase mb-6 tracking-widest">
                  Connect with me
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 ${link.color}`}
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative group p-1"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 to-blue-500/20 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                <div className="relative bg-[#0a0f1d] p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label className="text-xs font-mono uppercase tracking-widest text-slate-400 ml-1">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-white/5 border-white/10 h-14 rounded-xl focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-700"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-xs font-mono uppercase tracking-widest text-slate-400 ml-1">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white/5 border-white/10 h-14 rounded-xl focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-700"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-xs font-mono uppercase tracking-widest text-slate-400 ml-1">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="bg-white/5 border-white/10 rounded-2xl focus:ring-primary/50 focus:border-primary transition-all resize-none placeholder:text-slate-700"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.01] active:scale-[0.98] shadow-xl shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <span className="flex items-center gap-3">
                        Launch Message <Send size={18} />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
