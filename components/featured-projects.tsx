"use client"

import Link from "next/link"
import { ArrowRight, Smartphone, LineChart, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function FeaturedProjects() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "HealthTrack Mobile App",
      description: "A fitness and health tracking application for iOS and Android.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Mobile", "React Native"],
      color: "from-purple-600 to-indigo-600",
    },
    // {
    //   title: "EcoSmart Dashboard",
    //   description: "An analytics dashboard for a renewable energy company.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["Web", "Analytics"],
    //   color: "from-cyan-500 to-blue-500",
    // },
    // {
    //   title: "RetailFlow System",
    //   description: "A comprehensive inventory management system for retail.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["Software", "Inventory"],
    //   color: "from-pink-500 to-purple-500",
    // },
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-300 text-lg max-w-2xl">
              Take a look at some of the innovative solutions we've built for our clients.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 md:mt-0"
          >
            <Link href="/projects">
              <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden group hover:border-slate-700 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {index === 0 ? (
                      <Smartphone className="h-8 w-8 text-white" />
                    ) : index === 1 ? (
                      <LineChart className="h-8 w-8 text-white" />
                    ) : (
                      <Database className="h-8 w-8 text-white" />
                    )}
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="px-2 py-1 bg-slate-800 rounded-full text-xs"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <Link
                  href="/projects"
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 text-sm font-medium"
                >
                  View details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
