'use client'

import { motion } from 'motion/react'
import ProjectCards from './ProjectCards'


export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b-4 border-gray-500 py-18 scroll-mt-16 flex flex-col items-center justify-center gap-12 px-6 text-white"
    >
      {/* Section Title */}
      <motion.h2
        className="text-primary"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        Featured Projects
      </motion.h2>

      {/* Projects List */}
      <ProjectCards />
    </section>
  )
}
