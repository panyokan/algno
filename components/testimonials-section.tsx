"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import AnimatedGradientText from "@/components/animated-gradient-text"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
  logo: string
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechVision Inc.",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Algonix Technologies transformed our digital infrastructure, delivering a solution that exceeded our expectations. Their team's expertise and dedication were evident throughout the project.",
      logo: "/placeholder-logo.svg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "Innovate Solutions",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Working with Algonix has been a game-changer for our business. Their AI-powered platform helped us increase efficiency by 40% and significantly improve customer satisfaction.",
      logo: "/placeholder-logo.svg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Director",
      company: "Global Systems",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The mobile application developed by Algonix revolutionized how we engage with our customers. The intuitive design and robust functionality have set a new standard in our industry.",
      logo: "/placeholder-logo.svg",
    },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <AnimatedGradientText text="Clients Say" />
          </h2>
          <p className="text-slate-300 text-lg">
            Don't just take our word for it. Hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/10 to-cyan-400/10 rounded-xl blur-xl opacity-50"></div>

          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-purple-500/20" />

            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : 20,
                    position: activeIndex === index ? "relative" : "absolute",
                  }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className={cn("w-full", activeIndex !== index && "hidden")}
                >
                  <motion.div
                    className="mb-8"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.p
                      className="text-xl md:text-2xl italic text-slate-200 mb-6"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                          <Image
                            src={testimonial.image || "../public/images/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-slate-400">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="h-10 w-24 relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={testimonial.logo || "../public/images/placeholder.svg"}
                          alt={testimonial.company}
                          width={96}
                          height={40}
                          className="h-full w-auto object-contain"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoplay(false)
                      setActiveIndex(index)
                    }}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      activeIndex === index
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-6"
                        : "bg-slate-700 hover:bg-slate-600",
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
