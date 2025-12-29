'use client'

import { motion } from 'motion/react'
import ContactForm from './ContactForm'


export default function Contact() {
  return (
    <section
      id="contact"
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
        Contact Me
      </motion.h2>

      <ContactForm />
    </section>
  )
}
