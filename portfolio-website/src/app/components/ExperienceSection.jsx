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
    description: [
      "Utilized Pandas, NumPy, and Scikit-Learn for data pre-processing of 100,000+ records of raw data with techniques such as feature selection and duplicate removal.",
      "Performed feature engineering techniques such as location frequency, season counts, and zip code encoding to boost model accuracy.",
      "Built an ensemble model (random forest, gradient boosting, logistic regression) with voting classifier, achieving an area under curve (AUC) of 0.96 via hyperparameter tuning.",
      "Automated a machine learning pipeline such as imputation, encoding, and scaling to streamline large-scale data handling and improve efficiency."
    ],
    image: "/images/Experiences/celusion_logo.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://www.celusion.com",
    previewUrl: "/"
  },
  {
    id: 2,
    company: "BSE Technologies",
    role: "Cybersecurity Intern",
    description: [
      " Achieved a 95% system uptime by configuring and maintaining a security information and event management (SIEM) system, IBM QRadar, setting up data sources, and creating/tuning rules.",
      " Investigated 50+ incidents, achieving an average resolution time of 4 hours per incident.",
      " Collaborated on integrating IBM QRadar with 2 new security technologies, improving threat detection and enhancing cross-team workflows for enhanced security response."
    ],
    image: "/images/Experiences/bse_logo.jpg",
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
      <h2 className="text-center text-4xl font-bold text-white mb-1 md:mb-12">
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
