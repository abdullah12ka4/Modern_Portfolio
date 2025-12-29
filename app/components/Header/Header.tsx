"use client";
import { useEffect, useState } from "react";
import Component from "../customs/Component";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [active, setActive] = useState("#home");
  const [isMblView, setisMblView] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const navigation = [
    { title: "Home", value: "#home" },
    { title: "About", value: "#about" },
    { title: "Skills", value: "#skills" },
    { title: "Projects", value: "#projects" },
    { title: "Contact", value: "#contact" },
  ];

  // Smooth scroll to section and update URL
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      setIsScrolling(true);
      section.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", id);
      setActive(id);

      // Wait for scroll to finish before re-enabling observer
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  // Scroll spy: update active section and URL on scroll
  useEffect(() => {
    const sections = navigation.map((nav) => document.querySelector(nav.value));

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return; // skip if user clicked navigation
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActive(id);
            history.replaceState(null, "", id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -80% 0px", // trigger near top
        threshold: 0,
      }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, [isScrolling]);

  return (
    <Component
      fluid
      className="py-2 flex items-center justify-between sticky top-0 z-10 bg-[#000000]"
    >
      <h3 className="logo border-b px-2 border-b-secondary bg-linear-to-r from-primary to-white bg-clip-text text-transparent w-fit">
        Abdullah
      </h3>

      {/* Desktop Navigation */}
      <div className="navigation hidden sm:flex gap-8">
        {navigation.map((nav) => (
          <h5
            key={nav.value}
            className={`cursor-pointer ${
              active === nav.value ? "text-primary" : "text-white"
            }`}
            onClick={() => scrollToSection(nav.value)}
          >
            {nav.title}
          </h5>
        ))}
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isMblView} onOpenChange={setisMblView}>
        <SheetTrigger asChild className="block sm:hidden">
          <Button className="text-primary bg-transparent p-3">
            <Menu size={60} />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-full bg-black text-white border-l-0">
          <SheetHeader className="py-18">
            <SheetTitle className="logo text-center text-5xl border-b px-2 border-b-secondary bg-linear-to-r from-primary to-violet-700 bg-clip-text text-transparent">
              Abdullah
            </SheetTitle>
            <SheetDescription className="text-center py-4">
              Navigate Section
            </SheetDescription>
          </SheetHeader>

          <div className="grid justify-center flex-1 auto-rows-min gap-6 px-4">
            {navigation.map((nav) => (
              <h2
                key={nav.value}
                className={`text-center cursor-pointer ${
                  active === nav.value ? "text-primary" : "text-white"
                }`}
                onClick={() => {
                  scrollToSection(nav.value);
                  setisMblView(false);
                }}
              >
                {nav.title}
              </h2>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </Component>
  );
}
