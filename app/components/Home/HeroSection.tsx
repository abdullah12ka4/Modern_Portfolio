"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  const skills = [
  "ReactJS – Crafting Interactive UI",
  "NextJS – Fast & SEO-Friendly Apps",
  "TailwindCSS – Pixel-Perfect Design",
  "ShadCN – Modern Component Libraries",
  "Framer Motion – Smooth Animations"
];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const socials = [
    { ico: <Github size={22}/> , value: "https://github.com/abdullah12ka4?tab=repositories"},
    { ico: <Linkedin size={22}/> , value: "https://www.linkedin.com/in/abdullah-malik-769770309/"},
  ]

  // Cycle skills every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000); // 2 seconds per skill
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="border-b-4 border-gray-500  section scroll-mt-16 mt-3 flex flex-col items-center pt-10 gap-4">
       <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden bg-[#3B3A3B]">
         <img src="/profile.png" alt="Profile Picture" className="absolute -left-1" />
       </div>
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-primary"
      >
        Hi, I'm Abdullah

      </motion.h1>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl font-semibold text-center"
      >
      FrontEnd Developer | UI Enthusiast | Problem Solver

      </motion.h3>

      <motion.code
        initial={{ opacity: 0, scale: 0.60 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-3 text-xl font-mono mt-4 pl-4"
      >
        <span >Used Multiple Technologies:{" "}</span>

        <div className="w-90">
          <Typewriter
            options={{
              strings: skills,
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </div>

      </motion.code>     
      <motion.div 
      initial={{opacity: 0, scale:0.4}}
      animate={{opacity: 100, scale: 1 }}
      transition={{duration: 0.7}}
      className="connection py-5 flex justify-between gap-6  items-center">   
       <Link  
       href="/myResume.pdf"
       target="_blank"
       rel="noopener noreferrer"
       className="bg-secondary hover:bg-secondary/60 text-black px-4 py-2 rounded-lg">
      My Resume
        </Link>
        <div className="social flex gap-8">
          {socials.map((link, index)=>(
            <Link key={index} href={link.value} target="_blank" rel="noreferrer" className="hover:text-primary"  >
              {link.ico}
            </Link>
          ))}          
        </div>
        <Link href="#contact" className="bg-primary hover:bg-primary/60 text-black px-4 py-2 rounded-lg">
         Hire Me
        </Link>
    
      
      </motion.div>
    </div>
  );
}
