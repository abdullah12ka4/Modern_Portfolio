import Image from "next/image";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Component from "./components/customs/Component";
import Projects from "./components/Projects/Projects";
import HeroSection from "./components/Home/HeroSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-h-screen overflow-auto">
      <Header/>
    <Component fluid className="content scroll-section">
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </Component>
    <Footer/>
    </main>
  );
}
