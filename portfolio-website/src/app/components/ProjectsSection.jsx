"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Dataset Project",
    description: "This project focuses on analyzing website data to detect potential phishing characteristics based on various features extracted from HTML content, SSL/TLS certificates, IP reputation, and CSS and JavaScript structures. Through text analysis, structural patterns, and network features, this project aims to enhance automated detection of phishing sites and improve online security.",
    image: "/images/projects/dataset.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aaditey932/AIPI-510-Dataset-Project",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Weakly Supervised Road Segmentation",
    description: "Developed a system using satellite images and weakly supervised learning to detect and segment road areas. Improved image quality through preprocessing, feature extraction, and logistic regression, leading to high accuracy. This system can be applied in areas like autonomous driving, city planning, and traffic management.",
    image: "/images/projects/satellite.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aaditey932/Weakly-Supervised-Road-Segmentation",
    previewUrl: "/",
  }
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
