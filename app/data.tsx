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

// 1. UPDATED: Flexible Journey Interface
export interface JourneyEntry {
  id: string;
  date: string;
  title: string;
  description?: string;
  category: 'milestone' | 'learning' | 'project' | 'certification' | 'life';

  // Optional content
  image?: string;
  imageAlt?: string;
  
  // Code Block Options
  codeSnippet?: string;
  language?: string;
  filename?: string; // <--- NEW: Allows you to name the file in the code window

  tags?: string[];

  // Flexible links
  links?: {
    // FIX: Added 'facebook', 'linkedin', etc. to allowed types
    type: 'github' | 'demo' | 'social' | 'article' | 'other' | 'facebook' | 'linkedin' | 'twitter' | 'instagram' | 'youtube';
    url: string;
    label?: string;
    icon?: React.ReactNode; // Optional: Override with a custom icon component if needed
  }[];
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

// 2. NEW: Journey Data
export const journeyData: JourneyEntry[] = [
  {
    id: 'project-job-application-automation',
    date: 'January 31, 2026',
    title: 'Automating the Job Application Process 📄⚡',
    description:
      'Built a full-stack automation pipeline to digitize and process resumes end-to-end. The system handles file uploads, document conversion, OCR-based text extraction, and automated workflow triggers — eliminating manual data entry completely.',
    category: 'project',
    image: '/assets/resume-automation-pipeline.png',
    imageAlt: 'Automated resume processing pipeline with OCR and workflow automation',
    // New VS Code Style Config
    tags: [
      'Python', 'Automation', 'Computer Vision', 'FastAPI', 'Streamlit', 'n8n'
    ],

    links: [
      {
        type: 'github',
        url: 'https://github.com/DilawarAIWorks/automated-cv-parser.git', // Replace with real link
        label: 'View Source'
      },
      {
        // Using 'linkedin' type now works because we updated the Interface!
        type: 'linkedin',
        url: 'https://www.linkedin.com/posts/dilawar-shah-544674238_python-automation-computervision-activity-7423938236684894208-3CKy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsv3QQBtUHV6dw_lkuZeY6I6tIv8s5hb4I',
        label: 'Project Overview'
      }
    ]
  },
  {
    id: 'cert-azure-ai-fundamentals',
    date: 'January 15, 2026',
    title: 'Microsoft Certified: Azure AI Fundamentals',
    description:
      'Proud to have earned the Microsoft Certified: Azure AI Fundamentals certification. This milestone strengthened my understanding of AI workloads, machine learning concepts, and responsible AI principles on Microsoft Azure.',
    category: 'certification',
    image: '/assets/azure-ai-fundamentals.png',
    imageAlt: 'Microsoft Certified Azure AI Fundamentals badge',
    
    // No code snippet for this one
    tags: ['Microsoft', 'Azure', 'AI', 'Machine Learning', 'Certification'],

    links: [
      {
        type: 'demo',
        url: 'https://learn.microsoft.com/en-us/users/dilawarshah-8071/credentials/4bf2970c186d06d?ref=https%3A%2F%2Fwww.linkedin.com%2F',
        label: 'View Credential'
      },
    ]
  },
  
];