"use client";

import { motion } from "framer-motion";
import { Code2, Server, Palette, Wrench, Terminal, Globe } from "lucide-react";

export default function Skills() {
  return (
    <section className="mt-20 w-full px-6 max-w-[1440px] mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-center">
          Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Code2 />,
              title: "Frontend Development",
              skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
            },
            {
              icon: <Server />,
              title: "Backend Development",
              skills: ["Node.js", "ExpressJS", "MongoDB", "MySQL"],
            },
            {
              icon: <Palette />,
              title: "UI/UX Design",
              skills: [
                "Figma",
                "Responsive Design",
                "Wireframing",
                "Prototyping",
              ],
            },
            {
              icon: <Terminal />,
              title: "Programming Languages",
              skills: ["C", "Java", "Python", "JavaScript"],
            },
            {
              icon: <Wrench />,
              title: "Tools & Tech",
              skills: ["VS Code", "IntelliJ IDEA", "GitHub", "Lucid Chart"],
            },
          ].map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-indigo-500/30 transition transform hover:-translate-y-2"
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                {category.icon} {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-indigo-500 hover:scale-105 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  );
}
