import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* About Section */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-bold text-white mb-3">Abdullah Dev</h2>
          <p className="text-gray-400">
            Front-End Web Developer | Next.js & TypeScript Enthusiast | Crafting clean, modern, and responsive web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-indigo-400 transition">About Me</a></li>
            <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
            <li><a href="#skills" className="hover:text-indigo-400 transition">Skills</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-white mb-3">Get in Touch</h3>
          <p className="flex items-center gap-2 text-gray-400 mb-2">
            <Mail size={18} /> <a href="mailto:itsjackabdullah25@gmail.com" className="hover:text-indigo-400 transition">itsjackabdullah25@gmail.com</a>
          </p>
          <a 
          href='tel:+923186825086'
          className="flex items-center gap-2 text-gray-400 mb-4">
            <Phone size={18} /> +92 318 6825086
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/abdullah12ka4?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abdullah-malik-769770309/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Abdullah Dev. All rights reserved.
      </div>
    </footer>
  );
}
