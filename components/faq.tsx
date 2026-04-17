"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"
import AnimatedGradientText from "@/components/animated-gradient-text"
import Link from "next/link";

interface FaqItem {
  question: string
  answer: string
}

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const faqs: FaqItem[] = [
    {
      question: "What services does Algonix Technologies offer?",
      answer:
        "We offer a comprehensive range of technology services including custom software development, mobile app development, web development, AI & machine learning solutions, database solutions, and analytics & reporting services. Our team specializes in creating tailored solutions that address your unique business challenges.",
    },
    {
      question: "How long does it typically take to complete a project?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-6 weeks, while a complex custom software solution could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements. We pride ourselves on delivering projects on schedule without compromising quality.",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "We work with businesses of all sizes, from startups to enterprise-level organizations. We understand that startups have unique needs and budget considerations, and we offer flexible engagement models to accommodate these requirements. Our goal is to provide high-quality technology solutions that help your business grow, regardless of its current size.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process follows four key stages: Discovery (understanding your business needs), Planning (creating a roadmap and specifications), Development (building your solution with regular updates), and Delivery (testing, deployment, and ongoing support). We use agile methodologies to ensure flexibility and transparency throughout the project lifecycle.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages to ensure your solution continues to run smoothly after launch. Our support services include bug fixes, performance optimization, security updates, and feature enhancements. We can tailor a support plan that meets your specific needs and budget.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We offer both fixed-price and time-and-materials pricing models depending on your project needs. For well-defined projects, we typically provide a fixed-price quote based on detailed requirements. For more complex or evolving projects, a time-and-materials approach might be more suitable. We'll discuss the best option for your specific situation during our initial consultation.",
    },
  ]

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <AnimatedGradientText text="Questions" />
          </h2>
          <p className="text-slate-300 text-lg">
            Find answers to common questions about our services, process, and how we can help your business.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-4 last:mb-0">
              <motion.div
                className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden ${
                  activeIndex === index ? "border-slate-700" : ""
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 border-t border-slate-800">
                        <p className="text-slate-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-300">
            Still have questions?{" "}
            <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">
              Contact us
            </Link>{" "}
            for more information.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
