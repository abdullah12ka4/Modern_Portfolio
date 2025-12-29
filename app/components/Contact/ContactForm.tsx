'use client'

import { motion } from 'motion/react'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';


export default function ContactForm() {
  const [loading, setLoading] = useState(false)

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.currentTarget
  setLoading(true) // Start loading

  emailjs.sendForm(
    'service_ed4ci98', 
    'template_bzccdzv', 
    form, 
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    alert("Message sent successfully!")
    form.reset()
  })
  .catch((error) => {
    console.error("EmailJS Error: ", error)
    alert("Failed to send message")
  })
  .finally(() => setLoading(false)) // Stop loading
}

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Contact Info */}
      <motion.div
        className="bg-primary/20 p-6 rounded-lg shadow-2xl flex flex-col gap-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-lg font-semibold">Get In Touch</h3>
        <p className="text-sm text-gray-300">
          Feel free to reach out for project inquiries, collaborations, or freelance work.
        </p>

        {/* Phone */}
        <a
          href="tel:+923186825086"
          className="flex items-center gap-3 hover:text-primary transition"
        >
          <Phone size={18} />
          <span>+92 318 6825086</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/923186825086"
          target="_blank"
          className="flex items-center gap-3 hover:text-primary transition"
        >
          <MessageCircle size={18} />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Email */}
<a
  href="mailto:itsjackabdullah25@gmail.com"
  rel='noreferrer'
  target='_blank'
  className="flex items-center gap-3 hover:text-primary transition"
>
  <Mail size={18} />
  <span>itsjackabdullah25@gmail.com</span>
</a>

      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-primary/20 p-6 rounded-lg shadow-2xl flex flex-col gap-4"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
          required
        />

        <textarea
          name="text"
          placeholder="Your Message"
          rows={4}
          className="bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
          required
        />

<button
  type="submit"
  disabled={loading} // disable while sending
  className={`mt-2 bg-primary text-black py-2 rounded-md hover:bg-primary/80 transition font-medium ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
>
  {loading ? 'Sending...' : 'Send Message'}
</button>

      </motion.form>
    </div>
  )
}
