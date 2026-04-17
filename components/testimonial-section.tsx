import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Dr. Daniel",
    company: "RAM Trucking Group LLC",
    website: "https://ramtruckingroup.com", 
    text: "Algonix delivered far beyond our expectations. They understood our vision from day one and translated it into a seamless digital product that our users love.",
    avatar: "/avatars/jane.jpg",
  },
  // {
  //   name: "Sandra",
  //   company: "Memory Pictures",
  //   website: "https://memorypicture.com", 
  //   text: "We were struggling to find a tech partner who truly cared about our growth—until we met Algonix. They treated our project like their own and consistently went the extra mile.",
  //   avatar: "/avatars/john.jpg",
  // },
  {
    name: "Sid",
    company: "Eaglytics Co",
    website: "https://eaglytics-co.com/", 
    text: "The team at Algonix brought clarity and structure to our chaotic startup phase. Their technical guidance and hands-on approach helped us launch faster and smarter.",
    avatar: "/avatars/emily.jpg",
  },
  {
    name: "Yonas",
    company: "Montossorian School",
    website: "https://montessorianschool.org/", 
    text: "We were struggling to find a tech partner who truly cared about our growth—until we met Algonix. They treated our project like their own and consistently went the extra mile",
    avatar: "/avatars/emily.jpg",
  },
]

export default function TestimonialSection() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-800/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Algonix.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                  {/* Quote icon */}
                  <div className="flex justify-center mb-6">
                    <Quote className="text-cyan-400 w-12 h-12" />
                  </div>

                  {/* Star rating */}
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(5)].map((_, idx) => (
                      <Star 
                        key={idx}
                        size={24} 
                        className="text-yellow-400 fill-yellow-400" 
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-slate-100 text-xl md:text-2xl font-medium leading-relaxed text-center mb-8 max-w-3xl mx-auto">
                    "{testimonials[index].text}"
                  </blockquote>

                  {/* Author info */}
                  <div className="text-center">
                    <div className="font-semibold text-white text-lg mb-1">
                      {testimonials[index].name}
                    </div>
                    <div className="text-slate-400">
                      <a
                        href={testimonials[index].website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors duration-200 border-b border-dotted border-slate-500 hover:border-cyan-400"
                      >
                        {testimonials[index].company}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-200 shadow-lg border border-white/10 hover:scale-105"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-200 shadow-lg border border-white/10 hover:scale-105"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index 
                    ? "bg-cyan-400 shadow-lg shadow-cyan-400/30" 
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}