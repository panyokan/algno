"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Cpu, Globe, Shield, Smartphone, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import AnimatedCard from "@/components/animated-card"
import AnimatedGradientText from "@/components/animated-gradient-text"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features: Feature[] = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your unique business challenges and drive growth.",
      color: "from-purple-600 to-indigo-600",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description: "Responsive, high-performance websites and web applications built with cutting-edge technologies.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that leverage data to automate processes and provide valuable insights.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "DevOps & Cloud",
      description: "Streamlined development processes and scalable cloud infrastructure for optimal performance.",
      color: "from-blue-500 to-violet-600",
    },
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-950 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <AnimatedGradientText text="Tech Solutions" />
          </h2>
          <p className="text-slate-300 text-lg">
            Our expertise spans across multiple domains, enabling us to deliver end-to-end solutions for businesses of
            all sizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <AnimatedCard key={index} delay={0.1 * index}>
                <div
                  className={cn(
                    "p-6 rounded-xl transition-all duration-300 cursor-pointer",
                    activeFeature === index ? "bg-slate-800/50 border border-slate-700" : "hover:bg-slate-900/50",
                  )}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0",
                        feature.color,
                      )}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-xl blur-xl opacity-50"></div>
            <motion.div
              className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden p-8 h-[500px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={cn(
                  "absolute top-0 left-0 h-1 bg-gradient-to-r transition-all duration-500",
                  features[activeFeature].color,
                )}
                style={{ width: `${((activeFeature + 1) / features.length) * 100}%` }}
              ></div>

              <div className="flex flex-col h-full justify-center items-center text-center">
                <div
                  className={cn(
                    "w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6",
                    features[activeFeature].color,
                  )}
                >
                  {features[activeFeature].icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                <p className="text-slate-300 mb-8 max-w-md">{features[activeFeature].description}</p>

                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="text-sm font-medium mb-1">Feature {i}</div>
                      <div className="text-xs text-slate-400">Description text</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
