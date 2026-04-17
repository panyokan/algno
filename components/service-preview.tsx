"use client"

import Link from "next/link"
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ServicePreview() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software",
      description: "Tailored solutions designed to address your unique business challenges.",
      color: "from-purple-600 to-indigo-600",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications with exceptional UX.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description: "Responsive, high-performance websites and web applications.",
      color: "from-pink-500 to-purple-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-slate-300 text-lg">
            We provide end-to-end technology solutions tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <motion.div
                className={cn(
                  "w-14 h-14 rounded-lg bg-gradient-to-br flex items-center justify-center mb-6",
                  service.color,
                )}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-300 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 text-sm font-medium"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/services">
            <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
