"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Users, Building, Award } from "lucide-react"
import AnimatedGradientText from "@/components/animated-gradient-text"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "200+", label: "Team Members" },
    { icon: <Building className="h-6 w-6" />, value: "10+", label: "Global Offices" },
    { icon: <Award className="h-6 w-6" />, value: "500+", label: "Projects Delivered" },
    { icon: <CheckCircle className="h-6 w-6" />, value: "98%", label: "Client Satisfaction" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-xl blur-xl opacity-50"></div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Team collaboration"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Office space"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Tech meeting"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Development team"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg p-4 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Global Presence</h4>
                    <p className="text-xs text-slate-400">Offices across 10+ countries</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-8 bg-gradient-to-t from-purple-600 to-cyan-400 rounded-full"
                      style={{
                        height: `${Math.random() * 24 + 16}px`,
                        opacity: 0.7 + Math.random() * 0.3,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div ref={ref}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pioneering <AnimatedGradientText text="Tech Excellence" /> Since 2010
                </h2>
                <p className="text-slate-300 text-lg">
                  Algonix Technologies has been at the forefront of digital innovation, helping businesses transform
                  their operations and achieve unprecedented growth.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                {[
                  "Industry-leading expertise across multiple technology domains",
                  "Dedicated teams of specialists committed to your success",
                  "Agile methodology ensuring rapid development and deployment",
                  "Continuous innovation to keep you ahead of the competition",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mx-auto mb-3 text-cyan-400"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
