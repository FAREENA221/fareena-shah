"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[var(--background-color)]">
      <main className="flex-grow w-full">
        <section className="py-20 sm:py-28 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center section-glass"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* 👤 Name + Title */}
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-3 text-[var(--primary-color)]">
                Fareena Iqbal Shah
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[var(--secondary-color)] mb-6">
                Web Developer · WordPress · MERN · Next.js
              </p>

              {/* 🌸 Bio */}
              <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-2xl mx-auto">
                I’m a web developer with nearly 2 years of experience in
                building responsive, performance-focused, and user-friendly
                digital products. Skilled in React, Node.js, WordPress, and
                Figma — passionate about delivering clean, efficient, and
                elegant code.
              </p>

              {/* 🎯 CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="/FareenaShah_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-frozen w-full sm:w-auto flex items-center justify-center text-lg font-semibold hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="ri-download-2-line mr-2"></i> Download Resume
                </motion.a>
                <Link href="/contact" passHref>
                  <motion.button
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border-2 border-[var(--secondary-color)] rounded-full text-[var(--text-primary)] font-semibold bg-transparent hover:bg-[var(--secondary-color)] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="ri-chat-1-line mr-2"></i> Contact Me
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
