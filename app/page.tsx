"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/particle-background";
import ServicePreview from "@/components/service-preview";
import ScrollAnimation from "@/components/scroll-animation";
import AnimatedGradientText from "@/components/animated-gradient-text";
import { motion } from "framer-motion";
import TestimonialSection from "@/components/testimonial-section";
import Stats from "@/components/stats";
import FAQSection from "@/components/faq";

export default function HomePage() {
  const scrollToNext = () => {
    // Client-side function to scroll to the next section
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <ParticleBackground />

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full backdrop-blur-sm border border-purple-500/20">
                <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Tech Outsourcing Partner
                </span>
              </div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="block">Bringing Your</span>
                <AnimatedGradientText text="Ideas to Life" />
              </motion.h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-xl">
                Driving innovation through smart, scalable digital
                solutions—partnering with startups and growing businesses to
                turn bold ideas into reality.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-[linear-gradient(120deg,_#6d28d9_0%,_#0891b2_60%,_#155e75_100%)] hover:bg-[linear-gradient(120deg,_#5b21b6_0%,_#0e7490_60%,_#164e63_100%)] text-white border-0 h-12 px-6 text-base shadow-md transition-all duration-200">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-slate-700 text-white hover:bg-slate-800 h-12 px-6 text-base"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center text-xs font-bold"
                    >
                      {["AJ", "SC", "MR"][i - 1]}
                    </div>
                  ))}
                </div>
                <span>
                  Trusted by <strong>10+</strong> clients
                </span>
              </div>
            </div>
            <div className="overflow-x-hidden overflow-y-hidden">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-xl blur-xl opacity-50"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden p-1">
                  <div className="aspect-video rounded-lg overflow-hidden bg-slate-800 p-6">
                    <div className="h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-2 text-xs text-slate-400">
                          app.tsx
                        </div>
                      </div>
                      <pre className="text-xs md:text-sm text-slate-300 overflow-hidden flex-1">
                        <code>
                          {`import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Welcome to Algonix</h1>
        <p>Building the future, one line at a time.</p>
      </motion.div>
    </div>
  );
};

export default App;`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md rounded-lg p-4 border border-slate-800">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center shrink-0">
                        <span className="text-xl font-bold">+</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Innovative Solutions</h3>
                        <p className="text-sm text-slate-400">
                          Custom software that solves real business problems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-full blur-xl opacity-40"></div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Services Preview Section */}
      <ScrollAnimation>
        <ServicePreview />
      </ScrollAnimation>

      <ScrollAnimation>
        <Stats />
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <TestimonialSection />
      </ScrollAnimation>

      <ScrollAnimation delay={0.25}>
        <FAQSection />
      </ScrollAnimation>

      {/* Featured Projects Section
      <ScrollAnimation delay={0.2}>
        <FeaturedProjects />
      </ScrollAnimation> */}

      {/* CTA Section */}
      <ScrollAnimation delay={0.3}>
        <section className="py-20 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 md:p-12 border border-slate-700/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to bring your ideas to life?
                </h2>
                <p className="text-slate-300 text-lg mb-8">
                  We're a small team that delivers big results. Let's discuss
                  how we can help your business grow with custom technology
                  solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 h-12 px-6 text-base">
                      Get in Touch
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="border-slate-700 text-white hover:bg-slate-800 h-12 px-6 text-base"
                    >
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}
