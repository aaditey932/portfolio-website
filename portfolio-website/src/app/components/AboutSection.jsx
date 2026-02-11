"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import TabButton from "./TabButton";

const SKILLS_DATA = [
  { title: "Machine Learning & Deep Learning", skills: ["Scikit-learn", "PyTorch", "TensorFlow"] },
  { title: "Natural Language Processing (NLP)", skills: ["Transformers", "RAG", "LangChain", "OpenAI GPT", "LangGraph", "Groq", "Pydantic", "Ollama"] },
  { title: "Large Language Models (LLMs)", skills: ["Fine-tuning", "Pretraining", "Optimization", "vLLM", "Mistral", "LoRA"] },
  { title: "Computer Vision", skills: ["CNNs", "MobileNetV3", "Image Processing"] },
  { title: "Retrieval-Augmented Generation (RAG)", skills: ["Pinecone", "Vector Databases"] },
  { title: "Cloud & DevOps", skills: ["AWS", "Google Cloud TPUs/GPUs", "Docker", "Kubernetes", "Azure Blob", "Apache Kafka"] },
  { title: "Big Data & Analytics", skills: ["Pandas", "NumPy", "SQL", "Spark"] },
  { title: "Cybersecurity & Network Security", skills: ["IBM QRadar", "SIEM", "Threat Detection"] },
  { title: "Software Engineering", skills: ["Python", "C++", "Java", "Git", "APIs", "Flask", "FastAPI"] }
];

const EDUCATION_DATA = [
  { title: "Duke University", details: ["Master of Engineering in Artificial Intelligence", "GPA: 4.00/4.00", "August 2024 - May 2026", "Relevant Courses: Reinforcement Learning, LLMs, AI in the Physical World, Deep Learning Applications"] },
  { title: "SRM Institute of Science and Technology", details: ["Bachelor of Technology in Electronics & Communications Engineering", "GPA: 9.34/10.00", "June 2019 - May 2023", "Relevant Courses: Python, C, Computer Communication Networks"] }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const imageVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
};
const tabPanelVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};
const detailVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [selectedItem, setSelectedItem] = useState(null);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.4;

  return (
    <section className="text-green-950" id="about" ref={sectionRef}>
      <motion.div
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, ease: "easeOut" }}
      >
        {/* Image - order-2 on mobile so text appears first */}
        <motion.div
          className="order-2 md:order-1"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: duration + 0.1, ease: "easeOut" }}
        >
          <Image
            src="/images/NC-01-063-0006_001.jpg"
            width={500}
            height={500}
            alt="Portrait of Aaditey Pillai"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Section: About Me */}
        <div className="flex flex-col h-full justify-between order-1 md:order-2">
          <h2 className="text-4xl font-bold text-green-950 mb-4">About Me</h2>
          <p className="text-base lg:text-lg leading-relaxed text-green-950">
            As an inquisitive engineer pursuing a Master of Engineering (MEng) 
            in Artificial Intelligence at Duke University, I am actively seeking 
            Co-Op and full-time opportunities in AI for Spring 2026. I am currently 
            an AI Engineer Intern at PRGX Global, working on contract entity extraction 
            and risk-scoring systems. I’m most motivated by turning messy, real-world data into reliable ML systems—whether that’s better entity extraction, clearer model decisions, or pipelines that actually ship to production.
          </p>

          {/* Fixed Tab Names */}
          <div className="flex flex-row justify-start mt-10 space-x-4 pb-2" role="tablist" aria-label="About tabs">
            <TabButton id="tab-skills" ariaSelected={tab === "skills"} selectTab={() => { setTab("skills"); setSelectedItem(null); }} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton id="tab-education" ariaSelected={tab === "education"} selectTab={() => { setTab("education"); setSelectedItem(null); }} active={tab === "education"}>
              Education
            </TabButton>
          </div>

          {/* Fixed-height content so the rest of the page stays stationary */}
          <div className="mt-8 h-[380px] sm:h-[420px] flex flex-col" role="tabpanel" id="about-tabpanel" aria-labelledby={tab === "skills" ? "tab-skills" : "tab-education"}>
            <AnimatePresence mode="wait">
              {tab === "skills" ? (
                <motion.div
                  key="skills"
                  className="flex flex-col"
                  variants={tabPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: duration * 0.5 }}
                >
                {/* Buttons Grid */}
                <div className="flex flex-wrap gap-3">
                  {SKILLS_DATA.map((category) => (
                    <button
                      key={category.title}
                      type="button"
                      aria-pressed={selectedItem === category.title}
                      className={`px-4 py-2 rounded-md transition ${
                        selectedItem === category.title ? "bg-green-600 text-white" : "bg-green-800 text-white"
                      } hover:bg-green-600 hover:text-white`}
                      onClick={() => setSelectedItem(selectedItem === category.title ? null : category.title)}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>

                {/* Fixed height + scroll so layout never shifts */}
                <div className="mt-4 p-4 rounded-md h-[140px] sm:h-[180px] flex items-start overflow-y-auto flex-1 min-h-0">
                  <AnimatePresence mode="wait">
                    {selectedItem ? (
                      <motion.div
                        key={selectedItem}
                        className="w-full"
                        variants={detailVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: duration * 0.4 }}
                      >
                        <h3 className="text-lg font-bold text-green-950">{selectedItem}</h3>
                        <motion.div
                          className="flex flex-wrap gap-2 mt-2"
                          variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.04 } } }}
                          initial="hidden"
                          animate="visible"
                        >
                          {SKILLS_DATA.find((c) => c.title === selectedItem).skills.map((skill) => (
                            <motion.span
                              key={skill}
                              variants={detailVariants}
                              className="inline-block px-3 py-1 text-sm text-green-950 bg-green-50 rounded-md border border-green-200"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.p key="empty" className="text-green-950" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Select a skill to see details.</motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="education"
                className="flex flex-col"
                variants={tabPanelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: duration * 0.5 }}
              >
                {/* Buttons Grid */}
                <div className="flex flex-wrap gap-3">
                  {EDUCATION_DATA.map((edu) => (
                    <button
                      key={edu.title}
                      type="button"
                      aria-pressed={selectedItem === edu.title}
                      className={`px-4 py-2 rounded-md transition ${
                        selectedItem === edu.title ? "bg-green-600 text-white" : "bg-green-800 text-white"
                      } hover:bg-green-600 hover:text-white`}
                      onClick={() => setSelectedItem(selectedItem === edu.title ? null : edu.title)}
                    >
                      {edu.title}
                    </button>
                  ))}
                </div>

                {/* Fixed height + scroll so layout never shifts */}
                <div className="mt-4 p-4 rounded-md h-[140px] sm:h-[180px] flex items-start overflow-y-auto flex-1 min-h-0">
                  <AnimatePresence mode="wait">
                    {selectedItem ? (
                      <motion.div
                        key={selectedItem}
                        className="w-full"
                        variants={detailVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: duration * 0.4 }}
                      >
                        <h3 className="text-lg font-bold text-green-950">{selectedItem}</h3>
                        <ul className="text-green-950 mt-2 space-y-1 list-none">
                          {EDUCATION_DATA.find((edu) => edu.title === selectedItem).details.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : (
                      <motion.p key="empty" className="text-green-950" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Select an institution to see details.</motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
