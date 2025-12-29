'use client'

import {motion} from 'motion/react'

export default function SkillCards() {
    const skills = [
  {
    name: "ReactJS",
    text: "1+ year of hands-on experience building reusable components, managing state, and integrating APIs.",
    level: 90,
  },
  {
    name: "NextJS",
    text: "Experienced in building SEO-friendly applications using App Router, Server Components, and API routes.",
    level: 85,
  },
  {
    name: "TailwindCSS",
    text: "Expert in creating modern, scalable, and responsive UIs using utility-first Tailwind CSS.",
    level: 95,
  },
  {
    name: "Framer Motion",
    text: "Skilled in adding smooth animations, transitions, and interactive motion effects to web interfaces.",
    level: 80,
  },
  {
    name: "ShadCN",
    text: "Hands-on experience using shadcn/ui to build accessible and customizable UI components.",
    level: 70,
  },
  {
    name: "UI/UX Design",
    text: "Strong understanding of UI/UX principles, focusing on clean layouts, usability, and user-centered design.",
    level: 75,
  },
  {
    name: "Responsive Design",
    text: "Proficient in building fully responsive layouts that work seamlessly across all devices and screen sizes.",
    level: 90,
  },
];
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex bg-primary/20 p-4 rounded-lg shadow-2xl flex-col gap-1">
            {/* Skill Name */}
            <motion.span
              className="text-sm sm:text-base font-semibold text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              {skill.name}
            </motion.span>
            <motion.span
              className="text-xs sm:text-sm font-normal text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              {skill.text}
            </motion.span>

            {/* Skill Bar Background */}
            <div className="w-full h-4 my-4 bg-gray-700 rounded-full overflow-hidden">
              {/* Skill Bar Fill */}
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
  )
}
