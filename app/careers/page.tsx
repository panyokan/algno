"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, Mail, ArrowRight } from "lucide-react"
import AnimatedGradientText from "@/components/animated-gradient-text"
import ScrollAnimation from "@/components/scroll-animation"
import AnimatedCard from "@/components/animated-card"

export default function CareersPage() {
  const [isEmailHovered, setIsEmailHovered] = useState(false)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(benefitsRef, { once: true, amount: 0.3 })

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full backdrop-blur-sm border border-purple-500/20 mb-4"
          >
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Join Our Team
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Build Your Career at <AnimatedGradientText text="Algonix" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-lg"
          >
            Join our team of passionate technologists and help us build innovative solutions for businesses around the
            world.
          </motion.p>
        </div>

        {/* Why Join Us Section */}
        <ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Innovation",
                description:
                  "Work with cutting-edge technologies and contribute to projects that push the boundaries of what's possible.",
                icon: "💡",
              },
              {
                title: "Growth",
                description:
                  "Continuous learning opportunities, mentorship programs, and a clear path for career advancement.",
                icon: "📈",
              },
              {
                title: "Balance",
                description:
                  "Flexible work arrangements, competitive benefits, and a culture that values well-being and work-life balance.",
                icon: "⚖️",
              },
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 h-full">
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </ScrollAnimation>

        {/* Send CV Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto mb-20"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-xl blur-xl opacity-50"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 md:p-12 text-center">
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-400/30 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 rgba(139, 92, 246, 0.4)",
                  "0 0 20px rgba(139, 92, 246, 0.6)",
                  "0 0 0 rgba(139, 92, 246, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <Mail className="h-10 w-10 text-white" />
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">We're Always Looking for Great Talent</h2>
            <p className="text-slate-300 text-lg mb-6">
              Don't see a specific position that matches your skills? No problem! We're always interested in connecting
              with talented individuals who are passionate about technology and innovation.
            </p>

            <motion.div
              className="inline-block mb-8"
              onHoverStart={() => setIsEmailHovered(true)}
              onHoverEnd={() => setIsEmailHovered(false)}
            >
              <motion.a
                href="mailto:careers@algonixtechnologies.com"
                className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center gap-2"
                animate={{ scale: isEmailHovered ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Send className={`h-5 w-5 ${isEmailHovered ? "text-cyan-400" : "text-purple-400"}`} />
                careers@algonixtechnologies.com
              </motion.a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 h-12 px-6 text-base">
                Send Your CV
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div ref={benefitsRef}>
          <motion.div
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 md:p-12 border border-slate-700/50 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Benefits & <AnimatedGradientText text="Perks" />
              </h2>
              <p className="text-slate-300">
                We believe in taking care of our team members and providing them with everything they need to thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Health & Wellness",
                  items: [
                    "Comprehensive health insurance",
                    "Mental health support",
                    "Wellness programs",
                    "Gym membership",
                  ],
                },
                {
                  title: "Work-Life Balance",
                  items: ["Flexible working hours", "Remote work options", "Generous PTO", "Paid parental leave"],
                },
                {
                  title: "Growth & Development",
                  items: ["Learning stipend", "Conference budget", "Mentorship program", "Career advancement"],
                },
                {
                  title: "Team & Culture",
                  items: [
                    "Regular team events",
                    "Collaborative environment",
                    "Diverse & inclusive culture",
                    "Impact-driven work",
                  ],
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)" }}
                >
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-slate-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 + 0.3 }}
                      >
                        <motion.span
                          className="text-cyan-400 mt-1"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
                        >
                          •
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-xl p-8 md:p-12 border border-slate-800/50 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
            We're excited to hear from you! Send us your resume today and take the first step towards an exciting career
            at Algonix Technologies.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-slate-900 hover:bg-slate-100">
              Send Your CV Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
