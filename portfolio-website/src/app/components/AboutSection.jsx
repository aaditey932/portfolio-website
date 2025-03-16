"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const SKILLS_DATA = [
  { title: "Machine Learning & Deep Learning", skills: ["Scikit-learn", "PyTorch", "TensorFlow"] },
  { title: "Natural Language Processing (NLP)", skills: ["Transformers", "RAG", "LangChain", "OpenAI GPT"] },
  { title: "Large Language Models (LLMs)", skills: ["Fine-tuning", "Pretraining", "Optimization"] },
  { title: "Computer Vision", skills: ["CNNs", "MobileNetV3", "Image Processing"] },
  { title: "Retrieval-Augmented Generation (RAG)", skills: ["Pinecone", "Vector Databases"] },
  { title: "Cloud & DevOps", skills: ["AWS", "Google Cloud TPUs/GPUs", "Docker", "Kubernetes"] },
  { title: "Big Data & Analytics", skills: ["Pandas", "NumPy", "SQL", "Spark"] },
  { title: "Cybersecurity & Network Security", skills: ["IBM QRadar", "SIEM", "Threat Detection"] },
  { title: "Software Engineering", skills: ["Python", "C++", "Java", "Git", "APIs"] }
];

const EDUCATION_DATA = [
  { title: "Duke University", details: ["Master of Engineering in Artificial Intelligence", "GPA: 4.00/4.00"] },
  { title: "SRM Institute of Science and Technology", details: ["Bachelor of Technology in ECE", "GPA: 9.34/10.00"] }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        {/* Image on Left */}
        <Image 
          src="/images/NC-01-063-0006_001.jpg" 
          width={500} 
          height={500} 
          alt="Duke University" 
          className="rounded-lg shadow-lg"
        />

        {/* Right Section: About Me */}
        <div className="flex flex-col h-full justify-between">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg leading-relaxed">
            As an inquisitive engineer pursuing a Master of Engineering (MEng) 
            in Artificial Intelligence at Duke University, I am actively seeking 
            Co-Op and full-time opportunities in AI for Spring 2025. My passion 
            lies in the intersection of cybersecurity and artificial intelligence, 
            where I see tremendous potential for innovation in detecting and preventing 
            cyber threats through AI-driven solutions.
          </p>

          {/* Fixed Tab Names */}
          <div className="flex flex-row justify-start mt-8 space-x-4 pb-2">
            <TabButton selectTab={() => { setTab("skills"); setSelectedItem(null); }} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => { setTab("education"); setSelectedItem(null); }} active={tab === "education"}>
              Education
            </TabButton>
          </div>

          {/* Fixed Content Section to Prevent Jumping */}
          <div className="mt-8 min-h-[300px] flex flex-col justify-between">
            {tab === "skills" ? (
              <div className="flex flex-col">
                {/* Buttons Grid */}
                <div className="flex flex-wrap gap-3">
                  {SKILLS_DATA.map((category) => (
                    <button
                      key={category.title}
                      className={`px-4 py-2 text-white rounded-md ${
                        selectedItem === category.title ? "bg-purple-600" : "bg-[#181818]"
                      } hover:bg-purple-500 transition`}
                      onClick={() => setSelectedItem(selectedItem === category.title ? null : category.title)}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>

                {/* Fixed Height for Content */}
                <div className="mt-4 p-4 rounded-md min-h-[120px] flex items-center">
                  {selectedItem ? (
                    <div className="w-full">
                      <h3 className="text-lg font-bold text-purple-400">{selectedItem}</h3>
                      <p className="text-gray-300 mt-1">
                        {SKILLS_DATA.find((category) => category.title === selectedItem).skills.join(", ")}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-400">Select a skill to see details.</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                {/* Buttons Grid */}
                <div className="flex flex-wrap gap-3">
                  {EDUCATION_DATA.map((edu) => (
                    <button
                      key={edu.title}
                      className={`px-4 py-2 text-white rounded-md ${
                        selectedItem === edu.title ? "bg-purple-600" : "bg-[#181818]"
                      } hover:bg-purple-500 transition`}
                      onClick={() => setSelectedItem(selectedItem === edu.title ? null : edu.title)}
                    >
                      {edu.title}
                    </button>
                  ))}
                </div>

                {/* Fixed Height for Content */}
                <div className="mt-4 p-4 rounded-md min-h-[120px] flex items-center">
                  {selectedItem ? (
                    <div className="w-full">
                      <h3 className="text-lg font-bold text-purple-400">{selectedItem}</h3>
                      <p className="text-gray-300 mt-2"
                        dangerouslySetInnerHTML={{ __html: EDUCATION_DATA.find((edu) => edu.title === selectedItem).details.join("<br/>") }}>
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-400">Select an institution to see details.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
