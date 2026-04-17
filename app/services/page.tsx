"use client"

import { Cpu, Code, Smartphone, Globe, Database, LineChart } from "lucide-react"
import ServiceCard from "@/components/service-card"
import ContactCTA from "@/components/contact-cta"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your unique business challenges and drive growth.",
      color: "from-purple-600 to-indigo-600",
      features: [
        "Requirement analysis and planning",
        "Custom application development",
        "API development and integration",
        "Maintenance and support",
      ],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "from-cyan-500 to-blue-500",
      features: [
        "iOS and Android development",
        "React Native solutions",
        "UI/UX design for mobile",
        "App store deployment",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description: "Responsive, high-performance websites and web applications built with cutting-edge technologies.",
      color: "from-pink-500 to-purple-500",
      features: [
        "Frontend development (React, Vue)",
        "Backend systems (Node.js, Python)",
        "E-commerce solutions",
        "Progressive Web Apps",
      ],
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that leverage data to automate processes and provide valuable insights.",
      color: "from-amber-500 to-orange-600",
      features: [
        "Data analysis and processing",
        "Predictive modeling",
        "Natural language processing",
        "Computer vision solutions",
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Solutions",
      description: "Efficient database design, implementation, and optimization for your business needs.",
      color: "from-emerald-500 to-green-600",
      features: [
        "Database architecture design",
        "Data migration and integration",
        "Performance optimization",
        "Cloud database management",
      ],
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Data visualization and reporting tools that help you make informed business decisions.",
      color: "from-blue-500 to-violet-600",
      features: [
        "Custom dashboard development",
        "Real-time analytics",
        "Business intelligence solutions",
        "Data visualization",
      ],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full backdrop-blur-sm border border-purple-500/20 mb-4">
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Our Expertise
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Services We Offer</h1>
          <p className="text-slate-300 text-lg">
            We provide end-to-end technology solutions tailored to your business needs. Our team of experts is ready to
            bring your ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-slate-300">
              We follow a streamlined process to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Discovery", description: "Understanding your business needs and objectives" },
              { number: "02", title: "Planning", description: "Creating a roadmap and technical specifications" },
              { number: "03", title: "Development", description: "Building your solution with regular updates" },
              { number: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <motion.div
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 h-full"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </motion.div>
                {index < 3 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
                  >
                    <motion.div
                      className="w-6 h-6 text-cyan-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  )
}
