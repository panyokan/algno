"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedGradientText from "@/components/animated-gradient-text"

export default function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormState("success")
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something <AnimatedGradientText text="Amazing Together" />
          </h2>
          <p className="text-slate-300 text-lg">
            Ready to transform your business with cutting-edge technology? Get in touch with our team of experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-xl blur-xl opacity-50"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p className="text-slate-300 mb-6">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <Button
                    onClick={() => setFormState("idle")}
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="bg-slate-800/50 border-slate-700 focus-visible:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-slate-800/50 border-slate-700 focus-visible:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      className="bg-slate-800/50 border-slate-700 focus-visible:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      required
                      className="min-h-[120px] bg-slate-800/50 border-slate-700 focus-visible:ring-purple-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 h-12"
                  >
                    {formState === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="h-6 w-6 text-purple-400" />,
                    title: "Email Us",
                    content: (
                      <>
                        <p className="text-slate-300 mb-1">For general inquiries:</p>
                        <a href="mailto:info@algonix.tech" className="text-cyan-400 hover:underline">
                          info@algonix.tech
                        </a>
                      </>
                    ),
                    color: "bg-purple-500/20",
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-cyan-400" />,
                    title: "Call Us",
                    content: (
                      <>
                        <p className="text-slate-300 mb-1">Monday to Friday, 9am-6pm:</p>
                        <a href="tel:+11234567890" className="text-cyan-400 hover:underline">
                          +1 (123) 456-7890
                        </a>
                      </>
                    ),
                    color: "bg-cyan-500/20",
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-purple-400" />,
                    title: "Visit Us",
                    content: (
                      <p className="text-slate-300">
                        123 Innovation Drive
                        <br />
                        Tech District
                        <br />
                        San Francisco, CA 94105
                      </p>
                    ),
                    color: "bg-purple-500/20",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center shrink-0`}
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      {item.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Global Presence</h3>
              <div className="grid grid-cols-2 gap-4">
                {["New York", "London", "Singapore", "Tokyo", "Berlin", "Sydney", "Toronto", "Dubai"].map(
                  (city, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4 hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        <span>{city}</span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-xl p-6 border border-slate-800/50">
              <h4 className="font-bold mb-2">Ready to get started?</h4>
              <p className="text-slate-300 mb-4">
                Schedule a free consultation with our experts to discuss your project.
              </p>
              <Button className="bg-white text-slate-900 hover:bg-slate-100">Book a Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
