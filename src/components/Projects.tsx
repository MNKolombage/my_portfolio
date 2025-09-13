"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "SkillSwap (Ongoing)",
    year: "2025",
    image: "/SkillSwap.png",
    desc: "A peer learning platform where individuals share knowledge with others and gain needed skills. Contribution: Full-stack development.",
    tech: ["ReactJS", "NodeJS", "Express", "MongoDB"],
    codeLink: "https://github.com/MNKolombage/SkillSwap-frontend.git",
    liveLink: "#",
  },
  {
    title: "Hybrid Workspace Management System",
    year: "2024-2025",
    image: "/HWMS.png",
    desc: "A hybrid workspace management system for parking and seating reservations with real-time updates, visual dashboards, and admin panel.",
    tech: ["ReactJS", "NodeJS", "Express", "MongoDB"],
    codeLink: "https://github.com/dulshanMMS/HWMS_frontend.git",
    liveLink: "#",
  },
  {
    title: "PlanBee",
    year: "2025",
    image: "/PlanBee.png",
    desc: "An AI-powered study assistant to help everyone streamline their study routines and boost productivity.",
    tech: [
      "Next.js 15",
      "Tailwind CSS",
      "TypeScript",
      "MongoDB",
      "Gemini(1.5 flash) API",
    ],
    codeLink: "https://github.com/tetrabytes-uom/tetrabytes_hackelite2.0.git",
    liveLink: "https://planbee-tetrabytes.vercel.app/",
  },
  {
    title: "Hopely",
    year: "2025",
    image: "/Hopely.png",
    desc: "A digital platform designed to connect donors with hospitals in need.",
    tech: ["Next.js", "Ballerina", "Tailwind CSS", "MongoDB"],
    codeLink: "https://github.com/praveesha/Hopely.git",
    liveLink: "#",
  },
  {
    title: "Sentiment Analysis Web App",
    year: "2025",
    image: "/SentimentAnalysis.png",
    desc: "Classifies customer reviews as Positive/Negative using ML. Model trained on labeled data & deployed with Microsoft Azure.",
    tech: ["Python", "Flask", "NLTK", "Scikit-learn"],
    codeLink: "https://github.com/MNKolombage/sentiment_analysis_project.git",
    liveLink: "#",
  },
  {
    title: "Clean World",
    year: "2024",
    image: "/CleanWorld.png",
    desc: "Platform bringing together community-driven environmental cleanups. Full-stack development of login & events page.",
    tech: ["HTML", "CSS", "Ballerina", "JavaScript"],
    codeLink: "https://github.com/MNKolombage/iwb372-mysticoders.git",
    liveLink: "#",
  },
  {
    title: "Power Measuring Device",
    year: "2023-2024",
    image: "/CurrentMeasuringDevice.jpg",
    desc: "IoT-based microcontroller project enabling proactive electricity usage management with ESP32 & sensors.",
    tech: ["ESP32", "HTML", "CSS", "JavaScript"],
    codeLink: "#",
    liveLink: "#",
  },
];

export default function Projects() {
  return (
    <section className="mt-20 w-full px-6 max-w-[1440px] mx-auto">
      <h3 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-center">
        Projects
      </h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-indigo-500/40 transition group"
          >
            <div className="relative h-56 w-full">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90} // Changed from 95 to 90
                priority={idx < 3}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg text-indigo-300">
                {proj.title}
              </h4>
              <p className="text-gray-400 text-sm">{proj.year}</p>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-indigo-500/10 text-indigo-300 text-xs px-3 py-1.5 rounded-full border border-indigo-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6">
                {proj.codeLink !== "#" && (
                  <a
                    href={proj.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    <Code size={16} /> Code
                  </a>
                )}
                {proj.liveLink !== "#" && (
                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
