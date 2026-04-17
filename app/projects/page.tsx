import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ContactCTA from "@/components/contact-cta"

export default function ProjectsPage() {
  const projects = [

    {
      title: "",
      description:
        "",
      tags: ["Mobile", "React Native", "Health"],
      color: "from-purple-600 to-indigo-600",
    },

    // {
    //   title: "HealthTrack Mobile App",
    //   description:
    //     "A fitness and health tracking application for iOS and Android that helps users monitor their daily activities and nutrition.",
    //   tags: ["Mobile", "React Native", "Health"],
    //   color: "from-purple-600 to-indigo-600",
    // },
    // {
    //   title: "EcoSmart Dashboard",
    //   description:
    //     "An analytics dashboard for a renewable energy company to monitor and optimize their solar panel installations.",
    //   tags: ["Web", "Analytics", "React"],
    //   color: "from-cyan-500 to-blue-500",
    // },
    // {
    //   title: "RetailFlow Inventory System",
    //   description: "A comprehensive inventory management system for a growing retail chain with multiple locations.",
    //   tags: ["Software", "Inventory", "Node.js"],
    //   color: "from-pink-500 to-purple-500",
    // },
    // {
    //   title: "LegalEase Document Management",
    //   description:
    //     "A secure document management and collaboration platform for a law firm with AI-powered search capabilities.",
    //   tags: ["Web", "AI", "Security"],
    //   color: "from-amber-500 to-orange-600",
    // },
    // {
    //   title: "FoodDelivery Platform",
    //   description:
    //     "A food delivery platform connecting local restaurants with customers, including ordering and delivery tracking.",
    //   tags: ["Mobile", "Web", "Geolocation"],
    //   color: "from-emerald-500 to-green-600",
    // },
    // {
    //   title: "EdTech Learning Portal",
    //   description:
    //     "An interactive learning platform for a coding bootcamp with progress tracking and live mentoring features.",
    //   tags: ["Education", "Web", "Real-time"],
    //   color: "from-blue-500 to-violet-600",
    // },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full backdrop-blur-sm border border-purple-500/20 mb-4">
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Our Work
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h1>
          <p className="text-slate-300 text-lg">
            Explore some of the innovative solutions we've built for our clients across various industries.
          </p>
        </div>

        {/* Featured Project
        <div className="mb-20">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-xl blur-xl opacity-50"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-square lg:aspect-auto relative bg-gradient-to-br from-purple-600/20 to-cyan-400/20 p-8 flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-400/30 animate-pulse"></div>
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-400/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        AI
                      </div>
                    </div>
                    <div className="absolute -top-4 left-1/2 w-2 h-2 rounded-full bg-purple-500"></div>
                    <div className="absolute top-0 left-[calc(50%+20px)] w-2 h-2 rounded-full bg-cyan-500"></div>
                    <div className="absolute top-0 left-[calc(50%-20px)] w-2 h-2 rounded-full bg-pink-500"></div>
                    <div className="absolute top-4 left-[calc(50%+40px)] w-1 h-1 rounded-full bg-purple-500"></div>
                    <div className="absolute top-4 left-[calc(50%-40px)] w-1 h-1 rounded-full bg-cyan-500"></div>
                  </div>
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-sm font-medium">
                    Featured Project
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">AI-Powered Customer Service Platform</h2>
                    <p className="text-slate-300">
                      We developed an intelligent customer service platform that uses natural language processing to
                      automatically respond to customer inquiries, route complex issues to human agents, and provide
                      analytics on customer satisfaction.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["AI", "NLP", "Customer Service", "Analytics"].map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-800 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Projects Grid */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div> */}

        {/* Testimonial */}
        {/* <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-400/30 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">MC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-slate-400">CEO, TechStart Inc.</p>
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl italic text-center mb-6">
              "Working with Algonix has been a game-changer for our business. Their team took the time to understand our
              unique challenges and delivered a solution that exceeded our expectations."
            </blockquote>

            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                  Become Our Next Success Story
                </Button>
              </Link>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  )
}
