"use client";
import React, { useState, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const experiencesData = [
  {
    id: 1,
    company: "Celusion Technologies",
    role: "Machine Learning Intern",
    description: "Worked on data preprocessing, feature engineering, and model optimization, leading to improved inference times and accuracy.",
    image: "/images/experiences/celusion_logo.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.celusion.com",
    previewUrl: "/"
  },
  {
    id: 2,
    company: "BSE Technologies",
    role: "Cybersecurity Intern",
    description: "Configured and maintained SIEM systems, investigated incidents, and collaborated with security teams to enhance threat detection.",
    image: "/images/experiences/bse_logo.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.bsetech.in",
    previewUrl: "/"
  },
];

const ExperienceSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  
  const experiencesdata = experiencesData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-3 mb-8 md:mb-12">
        My Experiences
      </h2>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {experiencesdata.map((experience, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ExperienceCard
              key={experience.id}
              company={experience.company}
              role={experience.role}
              description={experience.description}
              imgUrl={experience.image}
              gitUrl={experience.gitUrl}
              previewUrl={experience.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
