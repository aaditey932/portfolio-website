"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI-Powered RAG: Nutrition Text Assistant",
    description: "This project implements an AI-powered Retrieval-Augmented Generation (RAG) system designed to extract relevant information from scientific research papers and generate insightful responses. Using Pinecone, OpenAI's GPT-4o, and Streamlit, the system enhances accessibility to scientific knowledge in human nutrition.",
    image: "/images/projects/nutrition-rag-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aaditey932/rag-app",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Transformer Model From Scratch",
    description: "This project contains a from-scratch implementation of the Transformer architecture using NumPy. The model is inspired by the paper 'Attention is All You Need' and implements multi-head self-attention, positional encoding, feed-forward networks, and masking. It provides a fundamental understanding without relying on deep learning frameworks.",
    image: "/images/projects/transformer-model-from-scratch.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aaditey932/transformer-from-scratch",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Retinal Fundus Disorder Detection",
    description: "This project implements a retinal fundus image classification system using three approaches; naive approach, traditional machine learning and deep learning models. The goal is to analyze and classify retinal images to identify potential disorders such as Diabetic Retinopathy, Glaucoma, AMD, Cataracts, etc.",
    image: "/images/projects/front-view-human-eye.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aaditey932/retinal-fundus-disorder-detection",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Phishing URL Content Dataset",
    description: "This project focuses on analyzing website data to detect potential phishing characteristics based on various features extracted from HTML content, SSL/TLS certificates, IP reputation, and CSS and JavaScript structures. Through text analysis, structural patterns, and network features, this project aims to enhance automated detection of phishing sites and improve online security.",
    image: "/images/projects/phishing-url-content-dataset.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aaditey932/AIPI-510-Dataset-Project",
    previewUrl: "/"
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
      <h2 className="text-center text-4xl font-bold text-white mt-12 mb-8 md:mb-12">
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
