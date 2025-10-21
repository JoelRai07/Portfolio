"use client";

import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between gap-10 pt-32 pb-20"
    >
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden border border-white/10 shadow-lg"
      >
        <img
          src="/images/husky.png"
          alt="Joel"
          className="w-60 h-60 object-cover"
        />
      </motion.div>

      {/* Right: Text content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-xl"
      >
        <p className="text-gray-400 text-lg mb-3">
          Hi, I’m <span className="text-white font-medium">Joel</span> —
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Building <span className="text-purple-400">modern</span>,{" "}
          <span className="text-purple-400">accessible</span> &{" "}
          <span className="text-purple-400">interactive</span> web apps 💻
        </h1>

        <p className="text-gray-400 mb-8">
          I’m a software engineer and Wirtschaftsinformatik student passionate
          about creating digital experiences that are fast, inclusive, and
          delightful.
        </p>

        {/* Social icons */}
        <div className="flex gap-5 text-gray-300">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
          <a href="mailto:your@email.com">
            <Mail className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
          <a href="/resume.pdf" target="_blank">
            <FileText className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
