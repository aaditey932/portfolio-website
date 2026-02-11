"use client";
import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import { motion, useInView } from "framer-motion";

const experiencesData = [
  {
    id: 3,
    company: "PRGX Global",
    role: "AI Engineer Intern",
    description: [
      "Optimized a Python-based contract entity extraction pipeline by benchmarking GPT-OSS 20B against a vLLM-deployed fine-tuned Mistral 7B, designing structured few-shot, multi-turn prompting, and exposing the pipeline via Flask APIs for downstream consumption; achieved 0.90 F1 on contract-number extraction, backed by an Azure Blob evaluation stack over 242 contracts and productionized using Apache Kafka.",
      "Designed a contract risk-scoring engine that extracts risk clauses using GPT 4o-mini, counts risks category-wise, and learns the clause-category weights to compute an overall contract score, using an OOP architecture with nested dataclasses representing contract, document, and supplier entities.",
      "Trained the scoring model using a Bradley–Terry pairwise logistic regression pipeline, creating feature differences from ranked contract pairs to learn clause-category weights and generate a prioritized contract list for auditors; achieved 82% (0.82) weighted Spearman rank correlation against SME rankings."
    ],
    image: "/images/Experiences/images.png",
    gitUrl: "https://www.prgx.com",
    previewUrl: "/"
  },
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
    gitUrl: "https://www.celusion.com",
    previewUrl: "/"
  },
  {
    id: 2,
    company: "BSE Technologies",
    role: "Cybersecurity Intern",
    description: [
      "Achieved a 95% system uptime by configuring and maintaining a security information and event management (SIEM) system, IBM QRadar, setting up data sources, and creating/tuning rules.",
      "Investigated 50+ incidents, achieving an average resolution time of 4 hours per incident.",
      "Collaborated on integrating IBM QRadar with 2 new security technologies, improving threat detection and enhancing cross-team workflows for enhanced security response."
    ],
    image: "/images/Experiences/bse_logo.jpg",
    gitUrl: "https://www.bsetech.in",
    previewUrl: "/"
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 40, opacity: 0, scale: 0.96 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  return (
    <section id="experience">
      <h2 className="text-center text-4xl font-bold text-green-950 mb-1 md:mb-12">
        My Experiences
      </h2>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {experiencesData.map((experience, index) => (
          <motion.li
            key={experience.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: index * 0.12 }}
          >
            <ExperienceCard
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
