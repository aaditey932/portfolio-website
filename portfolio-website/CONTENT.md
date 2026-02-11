# Portfolio Page – Text Content

All user-facing text on the portfolio site, grouped by section. Use this as a single reference for copy, edits, or sharing.

---

## 1. Navigation

- **About**
- **Experiences**
- **Projects**

---

## 2. Hero

### Heading
- **Prefix:** Hello, I'm
- **Rotating phrases (type animation):**
  - Aaditey Pillai
  - An AI Engineer
  - A Gamer
  - An Audiophile

### CTA
- **Button:** View Resume

---

## 3. About

### Section title
- **About Me**

### Bio paragraph
As an inquisitive engineer pursuing a Master of Engineering (MEng) in Artificial Intelligence at Duke University, I am actively seeking Co-Op and full-time opportunities in AI for Spring 2026. I am currently an AI Engineer Intern at PRGX Global, working on contract entity extraction and risk-scoring systems. I'm most motivated by turning messy, real-world data into reliable ML systems—whether that's better entity extraction, clearer model decisions, or pipelines that actually ship to production.

### Tab labels
- **Skills**
- **Education**

### Skills (categories and items)

- **Machine Learning & Deep Learning**  
  Scikit-learn, PyTorch, TensorFlow

- **Natural Language Processing (NLP)**  
  Transformers, RAG, LangChain, OpenAI GPT, LangGraph, Groq, Pydantic, Ollama

- **Large Language Models (LLMs)**  
  Fine-tuning, Pretraining, Optimization, vLLM, Mistral, LoRA

- **Computer Vision**  
  CNNs, MobileNetV3, Image Processing

- **Retrieval-Augmented Generation (RAG)**  
  Pinecone, Vector Databases

- **Cloud & DevOps**  
  AWS, Google Cloud TPUs/GPUs, Docker, Kubernetes, Azure Blob, Apache Kafka

- **Big Data & Analytics**  
  Pandas, NumPy, SQL, Spark

- **Cybersecurity & Network Security**  
  IBM QRadar, SIEM, Threat Detection

- **Software Engineering**  
  Python, C++, Java, Git, APIs, Flask, FastAPI

### Education (institutions and details)

- **Duke University**
  - Master of Engineering in Artificial Intelligence
  - GPA: 4.00/4.00
  - August 2024 - May 2026
  - Relevant Courses: Reinforcement Learning, LLMs, AI in the Physical World, Deep Learning Applications

- **SRM Institute of Science and Technology**
  - Bachelor of Technology in Electronics & Communications Engineering
  - GPA: 9.34/10.00
  - June 2019 - May 2023
  - Relevant Courses: Python, C, Computer Communication Networks

### Placeholder / empty state
- Select a skill to see details.
- Select an institution to see details.

### Image
- **Alt text:** Portrait of Aaditey Pillai

---

## 4. Experiences

### Section title
- **My Experiences**

### UI labels (experience cards)
- **Show more**
- **Show less**

### Experience 1 – PRGX Global
- **Company:** PRGX Global
- **Role:** AI Engineer Intern
- **Bullets:**
  1. Optimized a Python-based contract entity extraction pipeline by benchmarking GPT-OSS 20B against a vLLM-deployed fine-tuned Mistral 7B, designing structured few-shot, multi-turn prompting, and exposing the pipeline via Flask APIs for downstream consumption; achieved 0.90 F1 on contract-number extraction, backed by an Azure Blob evaluation stack over 242 contracts and productionized using Apache Kafka.
  2. Designed a contract risk-scoring engine that extracts risk clauses using GPT 4o-mini, counts risks category-wise, and learns the clause-category weights to compute an overall contract score, using an OOP architecture with nested dataclasses representing contract, document, and supplier entities.
  3. Trained the scoring model using a Bradley–Terry pairwise logistic regression pipeline, creating feature differences from ranked contract pairs to learn clause-category weights and generate a prioritized contract list for auditors; achieved 82% (0.82) weighted Spearman rank correlation against SME rankings.

### Experience 2 – Celusion Technologies
- **Company:** Celusion Technologies
- **Role:** Machine Learning Intern
- **Bullets:**
  1. Utilized Pandas, NumPy, and Scikit-Learn for data pre-processing of 100,000+ records of raw data with techniques such as feature selection and duplicate removal.
  2. Performed feature engineering techniques such as location frequency, season counts, and zip code encoding to boost model accuracy.
  3. Built an ensemble model (random forest, gradient boosting, logistic regression) with voting classifier, achieving an area under curve (AUC) of 0.96 via hyperparameter tuning.
  4. Automated a machine learning pipeline such as imputation, encoding, and scaling to streamline large-scale data handling and improve efficiency.

### Experience 3 – BSE Technologies
- **Company:** BSE Technologies
- **Role:** Cybersecurity Intern
- **Bullets:**
  1. Achieved a 95% system uptime by configuring and maintaining a security information and event management (SIEM) system, IBM QRadar, setting up data sources, and creating/tuning rules.
  2. Investigated 50+ incidents, achieving an average resolution time of 4 hours per incident.
  3. Collaborated on integrating IBM QRadar with 2 new security technologies, improving threat detection and enhancing cross-team workflows for enhanced security response.

---

## 5. Projects

### Section title
- **My Projects**

### Filter tags (UI)
- All, Web, AI, NLP

### Projects (title + description)

1. **MedGraph Scheduler**  
   A multi-agent doctor appointment scheduler deployed on AWS EC2 using LangGraph and FastAPI, with a supervisor–worker architecture and csv-backed data, turning a spreadsheet into a single conversational interface. Implements ReAct-driven Groq/OpenAI agents validated by Pydantic schemas, enabling workers to ask clarifying questions, resolve slot conflicts, and exchange schema-perfect messages for coordination.

2. **TubeGist AI**  
   Built a RAG chatbot for extracting and chunking information from YouTube videos, embedded with OpenAI text-embedding-3-small, and retrieved via FAISS, generating GPT-4o-mini answers within 10-20 seconds. Designed the pipeline in LangChain for rapid swaps of models or indexes, keeping latency under 1 second for retrieval and enabling context-aware Q&A without downloading the video.

3. **Duke Student Advisor Chatbot**  
   An agentic chatbot designed to assist students with information about Duke University's programs, courses, professors, and events. The chatbot leverages multiple specialized tools and databases to provide accurate and comprehensive responses. Built with Streamlit for an interactive interface and backed by OpenAI API for intelligent responses.

4. **DeepSeek-Uncensored**  
   An LLM fine-tuning project that removes censorship and bias from a DeepSeek-R1 model using LoRA. Features include a Streamlit-based interface for comparing base and fine-tuned models and automated evaluation with Google Gemini. The system evaluates responses on factual accuracy, completeness, bias, and overall quality.

5. **AI-Powered RAG: Nutrition Text Assistant**  
   This project implements an AI-powered Retrieval-Augmented Generation (RAG) system designed to extract relevant information from scientific research papers and generate insightful responses. Using Pinecone, OpenAI's GPT-4o, and Streamlit, the system enhances accessibility to scientific knowledge in human nutrition.

6. **LlaMa-Resume-Optimizer**  
   This project helps students and job seekers instantly optimize resumes based on job descriptions. It combines keyword matching, similarity scoring, and LLaMA 3 (fine-tuned with LoRA) to generate ATS-friendly edits. The system suggests impactful improvements and allows users to download optimized resumes via a Streamlit web app.

7. **Frame-Finder**  
   An AI-powered art recognition app that identifies paintings from photos using CLIP embeddings and vector search with Pinecone. Frame-Finder matches artworks from a curated database and generates detailed explanations using a large language model. Built with Streamlit for an interactive user experience.

8. **NYC-Food-Recommender**  
   A deep learning-based food recommendation system for New York City. Built with Neural Collaborative Filtering (NCF) and Streamlit, it predicts personalized restaurant choices using implicit feedback data. The app includes traditional, machine learning, and deep learning approaches, offering users smart and tailored dining suggestions.

9. **Transformer Model From Scratch**  
   This project contains a from-scratch implementation of the Transformer architecture using NumPy. The model is inspired by the paper 'Attention is All You Need' and implements multi-head self-attention, positional encoding, feed-forward networks, and masking. It provides a fundamental understanding without relying on deep learning frameworks.

10. **Retinal Fundus Disorder Detection**  
    This project implements a retinal fundus image classification system using three approaches; naive approach, traditional machine learning and deep learning models. The goal is to analyze and classify retinal images to identify potential disorders such as Diabetic Retinopathy, Glaucoma, AMD, Cataracts, etc.

11. **Phishing URL Content Dataset**  
    This project focuses on analyzing website data to detect potential phishing characteristics based on various features extracted from HTML content, SSL/TLS certificates, IP reputation, and CSS and JavaScript structures. Through text analysis, structural patterns, and network features, this project aims to enhance automated detection of phishing sites and improve online security.

---

## 6. Footer

No text content. The footer is an empty container with no visible copy.
