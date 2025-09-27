"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="w-full mx-auto py-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-indigo-400">
              Get in Touch
            </h3>
            <p className="text-gray-300 max-w-md">
              I&apos;d love to connect! Let&apos;s discuss opportunities,
              collaborations, or just have a friendly chat.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:maleesha.kolombage2001@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition"
              >
                <Mail size={20} />
                <span>maleesha.kolombage2001@gmail.com</span>
              </a>
              <a
                href="tel:+94719402448"
                className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition"
              >
                <Phone size={20} />
                <span>+94 719402448</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-6 mb-8">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/MNKolombage"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <Github size={24} className="text-indigo-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://linkedin.com/in/maleesha-nuwanthi-6a744533b"
                target="_blank"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <Linkedin size={24} className="text-indigo-400" />
              </motion.a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Maleesha Nuwanthi Kolombage. <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
