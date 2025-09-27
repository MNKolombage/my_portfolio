"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  Mail,
  Phone,
  Code2,
  Server,
  Palette,
  Wrench,
  Terminal,
  Globe,
  CheckCircle,
  Award,
} from "lucide-react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a23] via-[#1a1a35] to-[#0a0a23] text-white">
      <Navbar />
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 max-w-[1440px] mx-auto"
      >
        {" "}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />{" "}
        </div>
        {/* Profile Image */}
        <div className="relative">
          {/* floating dots */}
          {[
            { top: "-10px", left: "80%", size: "w-2 h-2" },
            { top: "20%", left: "-15px", size: "w-3 h-3" },
            { top: "75%", left: "90%", size: "w-1.5 h-1.5" },
            { top: "60%", left: "-20px", size: "w-2.5 h-2.5" },
            { top: "-15px", left: "10%", size: "w-1.5 h-1.5" },
          ].map((dot, idx) => (
            <motion.div
              key={idx}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
                y: [0, -4, 0], // little float up/down
              }}
              transition={{
                duration: 3 + idx, // staggered durations
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ top: dot.top, left: dot.left }}
              className={`absolute ${dot.size} bg-indigo-400 rounded-full`}
            />
          ))}

          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-full overflow-hidden w-56 h-56 shadow-lg shadow-indigo-500/30"
          >
            <Image
              src="/profile.jpeg"
              alt="Profile Photo"
              width={224}
              height={224}
              priority
              className="object-cover transform hover:scale-110 transition duration-500"
              style={{ width: "100%", height: "100%" }}
            />
            <motion.div
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(99,102,241,0.2) 0%, rgba(0, 0, 0, 0) 50%)",
                  "linear-gradient(180deg, rgba(99,102,241,0.2) 0%, rgba(0, 0, 0, 0) 50%)",
                  "linear-gradient(360deg, rgba(99,102,241,0.2) 0%, rgba(0, 0, 0, 0) 50%)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 pointer-events-none"
            />
          </motion.div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-5xl md:text-6xl font-bold"
        >
          Hello! I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Maleesha Nuwanthi
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-2xl text-gray-300 max-w-3xl"
        >
          IT Undergraduate | Full Stack Developer
        </motion.p>
        {/* Buttons */}
        <div className="mt-12 flex gap-6 flex-wrap justify-center">
          {" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-xl text-lg font-medium transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 cursor-pointer"
          >
            <FileText size={20} /> Get Resume
          </a>
          <a
            href="https://www.linkedin.com/in/maleesha-nuwanthi-6a744533b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/MNKolombage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-xl font-medium transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500/30 cursor-pointer"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative w-full py-32 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"
      >
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h3>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto">
              I&apos;m an enthusiastic and adaptable IT undergraduate at the
              University of Moratuwa with a strong passion for full-stack
              development and user-centric design. I enjoy turning ideas into
              functional, visually appealing digital experiences and thrive in
              collaborative environments where I can learn, experiment and grow.
              My goal is to contribute to innovative teams, build impactful
              solutions and continuously sharpen my skills as a developer.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[
                { icon: <Award size={24} />, text: "IT Undergraduate" },
                { icon: <Code2 size={24} />, text: "Full Stack Developer" },
                { icon: <CheckCircle size={24} />, text: "Problem Solver" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-xl text-indigo-400"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-20">
        <Skills />
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
