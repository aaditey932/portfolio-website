"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&fm=jpg&q=60&w=3000";

const HEADLINE_WORDS = ["AI", "ML", "LLM", "SOFTWARE"];
const HEADLINE_INTERVAL_MS = 2000;

const heroLoadTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

export default function HeroSection() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % HEADLINE_WORDS.length);
    }, HEADLINE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const headlineWord = HEADLINE_WORDS[headlineIndex];

  return (
    <section className="relative w-full min-h-[85vh] flex items-center px-6 sm:px-10 lg:px-16 pt-20 pb-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10 xl:gap-12">
        {/* Left column — text content, blur in from the left */}
        <motion.div
          className="max-w-4xl flex-shrink-0 font-poppins hero-blur-in-left"
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={heroLoadTransition}
        >
          {/* Greeting — Futura No. 2 Std style, bright cyan, slightly larger */}
          <p className="font-futura text-lg sm:text-xl text-cyan-300 font-medium mb-4 sm:mb-6 tracking-tight">
            Hello! I&apos;m Aaditey
          </p>

          {/* Headline — Gotham Bold, cycling word + ENGINEER, vertical gradient */}
          <div
            className="font-gotham flex flex-col leading-[0.85] tracking-tight mb-5 sm:mb-6 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-[linear-gradient(to_bottom,white_0%,white_52%,rgb(107_114_128)_100%)] bg-clip-text text-transparent overflow-visible"
          >
            <span
              className="inline-block min-h-[1em] min-w-[5ch] sm:min-w-[6ch] md:min-w-[8ch] lg:min-w-[9ch] xl:min-w-[10ch] overflow-visible"
              aria-live="polite"
              aria-atomic="true"
            >
              {headlineWord}
            </span>
            <span>ENGINEER</span>
          </div>

          {/* Supporting paragraph — Nunito */}
          <p className="font-nunito text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10 sm:mb-12">
            <strong className="font-semibold text-gray-300">MEng in AI @ Duke University</strong>
            <br />
            AI engineer building reliable, production LLM systems.
            <br />
            Focused on evaluation, agentic pipelines, and AI that&apos;s
            useful, scalable, and quietly dependable.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
            >
              Hire Me
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1R3x5vcte2e9DqQlIo0EvBhloSTJUWFwu/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Right column — hero image, blur in from the right */}
        <motion.div
          className="hidden lg:flex flex-1 min-w-0 justify-center items-center hero-blur-in-right"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={heroLoadTransition}
        >
          <div className="relative w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl aspect-[3.5/5] grayscale">
            <Image
              src={HERO_IMAGE_URL}
              alt=""
              fill
              className="object-cover rounded-lg"
              sizes="(min-width: 1024px) 28vw, (min-width: 1280px) 32rem"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
