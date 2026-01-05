'use client'

import { motion } from 'motion/react'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCards() {
  const projects = [
    {
      title: "PassOP - Password Manager",
      description:
        "A secure password manager built with React and localStorage. Easily store, view, copy, edit and delete accounts info",
      tech: ["ReactJS", "Local Storage","React Toaster"],
      live: "https://pass-op-git-main-abdullah12ka4s-projects.vercel.app/",
      github: "https://github.com/abdullah12ka4/PassOP",
    },
    {
      title: "LinkSnap - Link Shorten",
      description:
        "Linksnap is a web application where your long and complicated url into small and smart url that access everywhere",
      tech: ["NextJS", "Supabase","ShadCN", "TypeScript", "Nodemailer"],
      live: "https://linksnap-1wpiiih5h-abdullah12ka4s-projects.vercel.app/",
      github: "https://github.com/abdullah12ka4/linksnap",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-primary/20 p-6 rounded-lg shadow-2xl flex flex-col gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {/* Project Title */}
          <h3 className="text-lg font-semibold text-center">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-sm text-center text-gray-300">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-primary/30 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            {/* Live Demo */}
            <a
              href={project.live}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-black rounded-md hover:bg-primary/80 transition"
            >
              <ExternalLink size={16} />
              Live
            </a>

            {/* GitHub Code */}
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm border border-primary text-primary rounded-md hover:bg-primary hover:text-black transition"
            >
              <Github size={16} />
              Code
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
