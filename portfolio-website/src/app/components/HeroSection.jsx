"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HERO_BG_IMAGE = "/images/1927191056-f546fc57d0682a2841dc9fe4bbb653bf7f1afcc92ec0c937d05aa422fc5c2d5a-d.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Black overlay */}
      <div className="absolute inset-0 z-[1] bg-black/40" aria-hidden="true" />
      {/* Content above overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 lg:py-16 flex min-h-[70vh] items-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 w-full">
        {/* Left Section - Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Aaditey Pillai",
                1000,
                "An AI Engineer",
                1000,
                "A Gamer",
                1000,
                "An Audiophile",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <Link
              href="https://drive.google.com/file/d/1R3x5vcte2e9DqQlIo0EvBhloSTJUWFwu/view?usp=share_link"
              download="Aaditey_Pillai_CV.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View Resume
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right Section - Image (shifted left, animated) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 lg:-ml-16 xl:-ml-24"
        >
          <div className="p-4 bg-white rounded-full shadow-lg">
            <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative rounded-full overflow-hidden ring-2 ring-gray-200/80">
            <Image
              src="/images/upscalemedia-transformed.png"
              alt="hero image"
              className="absolute w-full h-full object-cover"
              width={400}
              height={400}
            />
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
