// (Holds your text data)
import React from 'react';
import { Code, Database, Brain, Zap, Server, Globe } from 'lucide-react';

// --- Types ---
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: 'ai' | 'automation' | 'web' | 'ml';
  date: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

export interface Certification {
  name: string;
  year?: string;
  link?: string;
}

// --- Data ---
export const projects: Project[] = [
  {
    id: '1',
    title: 'Hair Loss Detection System',
    description: 'AI-powered diagnostic tool utilizing ResNet50V2 & DenseNet169 to analyze scalp health. Features real-time computer vision analysis and NLP-based user interaction.',
    tags: ['Python', 'ResNet50V2', 'Computer Vision', 'NLP', 'TensorFlow'],
    github: 'https://github.com/DilawarAIWorks/FYP-VersionControl',
    category: 'ai',
    date: '2025'
  },
  {
    id: '2',
    title: 'Agri-Tech Disease Classification',
    description: 'Developed a high-precision CNN model (95% accuracy) for Tomato Leaf Disease detection using MobileNet and VGG architectures to assist modern farming.',
    tags: ['TensorFlow', 'MobileNet', 'VGG', 'Deep Learning'],
    demo: 'https://drive.google.com/drive/folders/1T6J3Anm8COFOwTWuQ8H59LU4IVMC5PDu',
    category: 'ml',
    date: '2024'
  },
  {
    id: '3',
    title: 'RAG Knowledge Agent',
    description: 'Enterprise-grade RAG pipeline using LangChain & LangGraph. Ingests PDFs/Docs, creates vector embeddings, and provides context-aware answers via LLMs.',
    tags: ['LangChain', 'LangGraph', 'RAG', 'Vector Search'],
    category: 'ai',
    date: '2025'
  },
  {
    id: '4',
    title: 'Python Game Suite',
    description: 'Interactive portfolio of Python games (Snake, Pong, Quiz) demonstrating mastery of OOP principles, event handling, and graphical logic.',
    tags: ['Python', 'OOP', 'Turtle', 'Game Dev'],
    github: 'https://github.com/DilawarShah25',
    category: 'web',
    date: '2024'
  }
];

export const skills: Skill[] = [
  { name: 'Python', icon: <Code />, category: 'Core' },
  { name: 'JavaScript', icon: <Code />, category: 'Core' },
  { name: 'SQL & Firebase', icon: <Database />, category: 'Data' },
  { name: 'TensorFlow', icon: <Brain />, category: 'AI/ML' },
  { name: 'Deep Learning', icon: <Brain />, category: 'AI/ML' },
  { name: 'RAG & LLMs', icon: <Zap />, category: 'AI/ML' },
  { name: 'LangChain', icon: <Zap />, category: 'AI/ML' },
  { name: 'n8n Automation', icon: <Zap />, category: 'Automation' },
  { name: 'Azure AI', icon: <Server />, category: 'Cloud' },
  { name: 'React', icon: <Globe />, category: 'Frontend' },
  { name: 'Flutter', icon: <Globe />, category: 'Frontend' },
];

export const certifications: Certification[] = [
  { name: 'Microsoft Certified: Azure AI Fundamentals', year: '2026', link: 'https://learn.microsoft.com/en-us/users/dilawarshah-8071/credentials/4bf2970c186d06d' },
  { name: 'Python for Everybody', year: '2025', link: 'https://www.coursera.org/account/accomplishments/specialization/WRS2SO7BYAJR' },
  { name: 'Supervised Machine Learning', year: '2025', link: 'https://www.coursera.org/account/accomplishments/verify/IET7Z96KFT3L' },
  { name: 'Operating Systems Power User', year: '2023', link: 'https://www.coursera.org/account/accomplishments/verify/Q9K7PAR3VGYL' },
  { name: 'Linux Commands & Shell', year: '2023', link: 'https://www.coursera.org/account/accomplishments/verify/T77BH2C6ERSH' },
  { name: 'Bash Scripting in Linux', year: '2023', link: 'https://www.coursera.org/account/accomplishments/verify/YDC9WZ3SXH27?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project' }
];