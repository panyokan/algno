"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export default function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={cn(
        "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400",
        className,
      )}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
    >
      {text}
    </motion.span>
  )
}
