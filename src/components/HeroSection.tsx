"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  Code2,
  Server,
  Palette,
  Wrench,
  Terminal,
  Globe,
  CheckCircle,
  Award,
} from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 max-w-[1440px] mx-auto"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"
          />

          {/* Enhanced background elements for large screens */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden lg:block absolute top-1/4 left-1/4 w-6 h-6 bg-purple-400/60 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="hidden lg:block absolute top-3/4 right-1/4 w-5 h-5 bg-indigo-400/70 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.6, 1, 0.6],
              x: [0, 15, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="hidden lg:block absolute top-1/3 right-1/5 w-4 h-4 bg-pink-400/80 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.3, 0.9, 0.3],
              y: [0, -20, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
            className="hidden lg:block absolute bottom-1/4 left-1/5 w-7 h-7 bg-cyan-400/50 rounded-full"
          />
        </div>

        {/* Enhanced Floating Tech Icons for Large Screens */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {[
            {
              icon: <Code2 size={40} />,
              position: "top-1/4 left-[15%]",
              delay: 0,
            },
            {
              icon: <Server size={36} />,
              position: "top-1/3 right-[15%]",
              delay: 1,
            },
            {
              icon: <Palette size={38} />,
              position: "bottom-1/3 left-[10%]",
              delay: 2,
            },
            {
              icon: <Terminal size={34} />,
              position: "bottom-1/4 right-[12%]",
              delay: 1.5,
            },
            {
              icon: <Globe size={32} />,
              position: "top-[15%] right-1/4",
              delay: 0.5,
            },
            {
              icon: <Wrench size={30} />,
              position: "bottom-[15%] left-1/4",
              delay: 2.5,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: [0, 0.8, 0.4, 0.8],
                scale: [0.6, 1.3, 0.8, 1.2],
                rotate: [0, 20, -20, 10, -10, 0],
                y: [0, -15, 15, -10, 0],
                x: [0, 10, -10, 5, 0],
              }}
              transition={{
                duration: 6 + idx * 0.8,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
              className={`absolute ${item.position} text-indigo-400/50 hover:text-indigo-400/90 transition-colors duration-300`}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        {/* Enhanced Geometric shapes for decoration */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 0.8, 1.2, 1],
              borderRadius: ["8px", "50%", "8px"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[20%] left-[8%] w-20 h-20 border-2 border-indigo-400/30 rounded-lg"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 0.7, 1.4, 1],
              x: [0, 20, -20, 0],
              y: [0, -15, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[25%] right-[8%] w-16 h-16 border-2 border-purple-400/40 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -25, 25, 0],
              x: [0, 15, -15, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.5, 1],
              rotate: [0, 45, -45, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[30%] right-[25%] w-12 h-12 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-lg"
          />
        </div>

        {/* Enhanced Profile Image */}
        <div className="relative z-10">
          {/* Enhanced floating dots */}
          {[
            { top: "-15px", left: "85%", size: "w-3 h-3" },
            { top: "15%", left: "-20px", size: "w-4 h-4" },
            { top: "80%", left: "95%", size: "w-2 h-2" },
            { top: "55%", left: "-25px", size: "w-3.5 h-3.5" },
            { top: "-20px", left: "5%", size: "w-2.5 h-2.5" },
          ].map((dot, idx) => (
            <motion.div
              key={idx}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.6, 1.8, 0.6],
                y: [0, -15, 15, 0],
                x: [0, 8, -8, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + idx * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ top: dot.top, left: dot.left }}
              className={`absolute ${dot.size} bg-indigo-400 rounded-full`}
            />
          ))}

          <motion.div
            animate={{
              scale: [1, 1.1, 0.9, 1.05, 1],
              rotate: [0, 5, -5, 3, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-indigo-500/30 rounded-full blur-xl"
          />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.3 },
            }}
            className="relative rounded-full overflow-hidden w-64 h-64 shadow-2xl shadow-indigo-500/40"
          >
            <Image
              src="/profile.jpeg"
              alt="Profile Photo"
              width={256}
              height={256}
              priority
              className="object-cover transform hover:scale-115 transition duration-700"
              style={{ width: "100%", height: "100%" }}
            />
            <motion.div
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(99,102,241,0.3) 0%, rgba(0, 0, 0, 0) 60%)",
                  "linear-gradient(120deg, rgba(99,102,241,0.3) 0%, rgba(0, 0, 0, 0) 60%)",
                  "linear-gradient(240deg, rgba(99,102,241,0.3) 0%, rgba(0, 0, 0, 0) 60%)",
                  "linear-gradient(360deg, rgba(99,102,241,0.3) 0%, rgba(0, 0, 0, 0) 60%)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 pointer-events-none"
            />
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="mt-8 text-5xl md:text-6xl font-bold z-10 relative"
        >
          Hello! I&apos;m{" "}
          <motion.span
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            Maleesha Nuwanthi
          </motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-2xl text-gray-300 max-w-3xl z-10 relative"
        >
          IT Undergraduate | Full Stack Developer
        </motion.p>

        {/* Enhanced Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 flex gap-6 flex-wrap justify-center z-10 relative"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.08,
              y: -3,
              boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 cursor-pointer"
          >
            <FileText size={20} /> Get Resume
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/maleesha-nuwanthi-6a744533b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.08,
              y: -3,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer"
          >
            <Linkedin size={18} /> LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/MNKolombage"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.08,
              y: -3,
              boxShadow: "0 10px 30px rgba(75, 85, 99, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer"
          >
            <Github size={18} /> GitHub
          </motion.a>
        </motion.div>
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 text-xl text-indigo-400"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
