"use client";

import React, { useState } from "react";
import { CodeBracketIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = ({ company, role, description, imgUrl, gitUrl, previewUrl }) => {
  const [expanded, setExpanded] = useState(false);
  const points = Array.isArray(description) ? description : [description];

  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-green-950 border border-green-900 shadow-lg p-6 flex flex-col"
      initial={false}
      whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.1)", transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image block - fixed height */}
      <div
        className="h-40 rounded-md relative group flex-shrink-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="items-center justify-center absolute top-0 left-0 w-full h-full bg-green-950 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 rounded-full border-[#e5ebe0]/70 hover:border-[#e5ebe0] flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#e5ebe0]" />
          </Link>
        </div>
      </div>

      {/* Content block - compact when collapsed, grows when expanded */}
      <div className="flex flex-col mt-3">
        <AnimatePresence mode="wait" initial={false}>
          {!expanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3"
            >
              <div>
                <h5 className="text-2xl text-center font-semibold text-[#e5ebe0]">{company}</h5>
                <p className="text-base text-center text-[#e5ebe0] mt-0.5">{role}</p>
              </div>
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setExpanded(true)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border-2 border-[#e5ebe0]/70 bg-green-900/50 px-4 py-2.5 text-[#e5ebe0] hover:border-[#e5ebe0] hover:bg-green-900 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e5ebe0] focus-visible:ring-offset-2 focus-visible:ring-offset-green-950"
              >
                Show more <ChevronDownIcon className="h-4 w-4" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <h5 className="text-2xl text-center font-semibold text-[#e5ebe0]">{company}</h5>
              <p className="text-base text-center text-[#e5ebe0] mb-2">{role}</p>
              <ul className="list-disc list-inside text-[#e5ebe0] space-y-2 text-sm">
                {points.map((point, index) => (
                  <motion.li
                    key={index}
                    className="leading-relaxed"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.06 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setExpanded(false)}
                className="mt-3 flex items-center justify-center gap-1 text-[#e5ebe0] text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e5ebe0] focus-visible:ring-offset-2 focus-visible:ring-offset-green-950"
              >
                Show less <ChevronUpIcon className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
