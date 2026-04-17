import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 md:p-12 border border-slate-700/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to bring your ideas to life?</h2>
        <p className="text-slate-300 text-lg mb-8">
          Let's discuss how we can help your business grow with custom technology solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 h-12 px-6 text-base">
              Get in Touch
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 h-12 px-6 text-base">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
