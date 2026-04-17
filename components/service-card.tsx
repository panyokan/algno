"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface ServiceProps {
  service: {
    icon: React.ReactNode
    title: string
    description: string
    color: string
    features: string[]
  }
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors h-full flex flex-col"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className={cn("w-14 h-14 rounded-lg bg-gradient-to-br flex items-center justify-center mb-6", service.color)}
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {service.icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-slate-300 mb-6">{service.description}</p>

      <div className="mt-auto">
        <div className="border-t border-slate-800 pt-4 mt-4">
          <h4 className="text-sm font-medium mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="text-sm text-slate-400 flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 + 0.3 }}
              >
                <motion.span
                  className="text-cyan-400 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: idx * 0.1, repeat: 1, repeatDelay: 5 }}
                >
                  •
                </motion.span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
