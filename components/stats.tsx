"use client"

import { motion } from "framer-motion"
import { Users, Code, Award } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"

function CountUp({ value }: { value: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      let startValue = 0
      const endValue = Number.parseInt(value.replace(/\D/g, ""))
      const duration = 2000
      const increment = Math.ceil(endValue / (duration / 16))

      const timer = setInterval(() => {
        startValue += increment
        if (startValue > endValue) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(value.includes("+") ? startValue + "+" : startValue.toString())
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-4xl font-bold mb-2">
      {displayValue}
    </div>
  )
}

const stats = [
  { icon: <Users className="h-6 w-6" />, value: "12", label: "Team Members" },
  { icon: <Code className="h-6 w-6" />, value: "25+", label: "Projects Completed" },
  { icon: <Award className="h-6 w-6" />, value: "100%", label: "Client Satisfaction" },
]

export default function Stats() {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-400/20 flex items-center justify-center mx-auto mb-4 text-cyan-400"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              {stat.icon}
            </motion.div>
            <CountUp value={stat.value} />
            <div className="text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}