"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiencesData = [
  {
    id: 1,
    title: "Celusion Technologies",
    description: "Machine Learning Intern",
    details: [
      "Conducted data pre-processing tasks like handling imbalanced data and feature selection, resulting in the removal of 500 duplicate entries and restructuring of 1000 records for enhanced model training.",
      "Collaborated on developing machine learning algorithms, contributing to the creation of 3 new predictive models for customer behavior analysis.",
      "Contributed to model optimization efforts such as hyperparameter tuning, feature engineering, and optimizing loss functions, resulting in a 30% decrease in model inference time.",
      "Engaged in regular team discussions, sharing insights that led to several innovative model enhancement ideas.",
      "Utilized Python extensively, leveraging libraries like Pandas, NumPy, and Scikit-learn for data manipulation, ensemble model creation, and evaluation."
    ]
  },
  {
    id: 2,
    title: "BSE Technologies",
    description: "Cybersecurity Intern",
    details: [
      "Configuration and maintenance of SIEM systems - Setting up data sources, creating and tuning rules, and updating the system as needed.",
      "Incident response and investigation - Conducting investigations for security incidents to determine the root cause of the incident, and then developing and executing a response plan to remediate the issue.", 
      "Continuous improvement of security operations - Conducting regular security assessments, developing and implementing new security controls, and identifying emerging threats and risks.",
      "Integration with other security technologies - Close collaboration with other teams in the organisation, such as the network security team and the data security team, to ensure that all systems are working together seamlessly."
    ]
  },
];

const ExperienceSection = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State to manage which dropdown is open
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experiences
      </h2>
      <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {experiencesData.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <div className="p-4 bg-[#121212] rounded-lg shadow-md">
              <button
                className="text-lg font-semibold text-white w-full flex justify-center text-center bg-transparent hover:bg-white hover:text-[#121212] rounded-lg py-2 px-4"
                onClick={() => toggleDropdown(experience.id)}
              >
                {experience.title} - {experience.description}
              </button>
              {openDropdown === experience.id && (
                <div className="mt-4 p-4 text-left text-gray-300 bg-[#1e1e1e] rounded-lg">
                  <ul className="list-disc list-inside space-y-2">
                    {experience.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li> // This is now correctly nested within a new <ul> element
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
