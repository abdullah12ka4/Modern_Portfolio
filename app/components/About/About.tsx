"use client";
import { motion } from "motion/react";

export default function About() {
  const skills = [
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "Framer Motion",
    "ShadCN",
    "Responsive Design",
    "UI/UX Design",
  ];

  return (
    <section
      id="about"
      className="border-b-4 border-gray-500  h-[80vh] scroll-mt-16 flex flex-col items-center justify-center gap-8 px-6"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-primary"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        I’m Abdullah, a passionate FrontEnd Developer focused on building
        beautiful, interactive, and responsive web experiences. With expertise
        in ReactJS, NextJS, TailwindCSS, and modern UI frameworks, I create
        intuitive designs that delight users and drive results.
      </motion.p>

      {/* Skills / Highlights */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, staggerChildren: 0.1 }}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="px-4 py-2 border border-gray-500 rounded-full text-sm sm:text-base hover:border-primary hover:text-primary transition-all"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
