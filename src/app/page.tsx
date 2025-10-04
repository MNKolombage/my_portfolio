"use client";

import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

// Dynamically import components with framer-motion to prevent SSR issues
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] via-[#1a1a35] to-[#0a0a23] text-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-indigo-400"></div>
    </div>
  ),
});

const Skills = dynamic(() => import("../components/Skills"), { ssr: false });
const Education = dynamic(() => import("../components/Education"), {
  ssr: false,
});
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a23] via-[#1a1a35] to-[#0a0a23] text-white">
      <Navbar />
      <HeroSection />

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-20">
        <Education />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
