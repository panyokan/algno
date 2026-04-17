import Link from "next/link"
import { ArrowRight, Smartphone, Globe, Code } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectProps {
  project: {
    title: string
    description: string
    tags: string[]
    color: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden group hover:border-slate-700 transition-colors h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
            {project.tags[0] === "Mobile" ? (
              <Smartphone className="h-8 w-8 text-white" />
            ) : project.tags[0] === "Web" ? (
              <Globe className="h-8 w-8 text-white" />
            ) : (
              <Code className="h-8 w-8 text-white" />
            )}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className={cn("px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r", project.color)}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
        <Link
          href="#"
          className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 text-sm font-medium mt-auto"
        >
          View case study <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
