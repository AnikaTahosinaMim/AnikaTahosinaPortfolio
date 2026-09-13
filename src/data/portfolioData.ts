export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'facebook' | 'whatsapp' | 'email';
  color: string;
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  category: 'Frontend' | 'Backend' | 'State & Data' | 'Tools & DevOps';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Dashboard';
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  result?: string;
  description?: string[];
  courses?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Freelance';
  description: string[];
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  quote: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Anika Tahosina Mim",
    title: "Full Stack Developer",
    designation: "Full Stack Software Developer",
    secondaryDesignation: "Specializing in Next.js, React, Node.js, TypeScript & MongoDB",
    bio: "Motivated Full Stack Developer with strong foundations in modern web technologies. Passionate about building clean, performant, and user-centric web applications using Next.js, React, Node.js, Express, and MongoDB.",
    heroSummary: "Building modern, responsive, and aesthetically stunning web applications with TypeScript, React, Next.js, Node.js, Express, and MongoDB.",
    avatar: "/images/profile.png",
    location: "Rangpur, Bangladesh",
    experienceYears: "Fresher",
    projectsCompleted: "5+",
    happyClients: "Dedicated",
    availability: "Available for new opportunities",
  },

  contact: {
    email: "ummehabiba19758@gmail.com",
    phone: "01780644001",
    whatsapp: "01780644001",
    whatsappUrl: "https://wa.me/15552345678",
    address: "Rangpur,Bangladesh",
  },

  resume: {
    filename: "Anika_Tahosina_Mim_Resume.pdf",
    downloadUrl: "https://docs.google.com/document/d/1LJpT-BK6kFtzygfRZRv8KzjCpEbXCPvUIcl-KucIb8Y/export?format=pdf",
    googleDocUrl: "https://docs.google.com/document/d/1LJpT-BK6kFtzygfRZRv8KzjCpEbXCPvUIcl-KucIb8Y/edit?pli=1&tab=t.0",
    exportPdfUrl: "https://docs.google.com/document/d/1LJpT-BK6kFtzygfRZRv8KzjCpEbXCPvUIcl-KucIb8Y/export?format=pdf",
    updatedDate: "August 2026",
    summaryText: "Full Stack Software Engineer specializing in Next.js, React, TypeScript, Node.js, Express, and MongoDB.",
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/AnikaTahosinaMim",
      icon: "github",
      color: "hover:text-cyan-400 hover:border-cyan-400/50",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anika-tahosina-mim/",
      icon: "linkedin",
      color: "hover:text-blue-400 hover:border-blue-400/50",
    },
    {
      name: "Twitter / X",
      url: "https://twitter.com",
      icon: "twitter",
      color: "hover:text-sky-400 hover:border-sky-400/50",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/AnikaTahosinaMim",
      icon: "facebook",
      color: "hover:text-blue-500 hover:border-blue-500/50",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+8801780644001",
      icon: "whatsapp",
      color: "hover:text-emerald-400 hover:border-emerald-400/50",
    },
  ] as SocialLink[],

  skills: [
    // Frontend
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Next.js", level: 92, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "HTML5 / CSS3 / ES6+", level: 98, category: "Frontend" },

    // State & Data
   

    // Backend
    { name: "Node.js", level: 92, category: "Backend" },
    { name: "Express.js", level: 94, category: "Backend" },
    { name: "TypeScript (Backend)", level: 90, category: "Backend" },
    { name: "MongoDB & Mongoose", level: 88, category: "Backend" },

    // Tools & DevOps
    { name: "Git / GitHub Actions", level: 92, category: "Tools & DevOps" },
    { name: "Vercel / AWS", level: 85, category: "Tools & DevOps" },
  ] as Skill[],

  // =========================================================================
  // PROJECTS - Add your own projects here!
  // To add your own project, copy one of the objects below and customize it.
  // =========================================================================
  projects: [
    {
      id: "weather-app",
      title: "Weather App",
      tagline: "Live forecast & city weather search application",
      description: "Interactive weather forecasting web application built with HTML, CSS, JavaScript, and Weather API to check live weather conditions for cities worldwide.",
      category: "Frontend",
      tags: ["JavaScript", "HTML5", "CSS3", "REST API", "Weather API"],
      image: "/images/image.png",
      liveUrl: "https://anikatahosinamim.github.io/Weather-app/",
      githubUrl: "https://github.com/AnikaTahosinaMim/Weather-app",
      featured: true,
      metrics: "Live Global Forecasts",
    },
    {
      id: "english-janla-project",
      title: "English Janla Platform",
      tagline: "Interactive language learning & lesson portal",
      description: "Dynamic English learning web application featuring interactive lessons, administrative login, and structured learning modules.",
      category: "Full Stack",
      tags: ["JavaScript", "JSON API", "HTML5", "CSS3", "Tailwind CSS"],
      image: "/images/image copy 2.png",
      liveUrl: "https://anikatahosinamim.github.io/JSON-API-English-janla-project/",
      githubUrl: "https://github.com/AnikaTahosinaMim/JSON-API-English-janla-project",
      featured: true,
      metrics: "Interactive Lessons & Admin",
    },
    {
      id: "book-library",
      title: "BookNest Digital Library",
      tagline: "Discover and explore thousands of books & authors",
      description: "Feature-rich book library and discovery platform enabling users to browse categories, explore bestselling authors, and manage book collections.",
      category: "Full Stack",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST API"],
      image: "/images/image copy 3.png",
      liveUrl: "https://scic-assignment-amber.vercel.app/",
      githubUrl: "https://github.com/AnikaTahosinaMim/Book-Library",
      featured: true,
      metrics: "Catalog & Category Browsing",
    },
    {
      id: "agentic-ai-project",
      title: "Agentic AI Platform",
      tagline: "Orchestrate autonomous AI agents & workflows",
      description: "Next-gen full-stack Agentic AI platform built with Next.js, TypeScript, and React to build, test, and execute multi-step AI agent workflows with native tool calling.",
      category: "Full Stack",
      tags: ["React", "TypeScript", "Next.js", "AI Agents", "Tailwind CSS"],
      image: "/images/image copy.png",
      liveUrl: "https://agentitic-ai-project.vercel.app/",
      githubUrl: "https://github.com/AnikaTahosinaMim/Agentitic-AI-Project",
      featured: true,
      metrics: "Autonomous Agent Execution",
    },
  ] as Project[],

  // =========================================================================
  // EDUCATION - Academic Background & Qualifications
  // =========================================================================
  education: [
    {
      id: "edu-1",
      degree: "Diploma in Computer Science & Engineering (CSE)",
      institution: "Rangpur Polytechnic Institute",
      period: "2024 - 2028",
      location: "Rangpur, Bangladesh",
      result: "Appearing",
      description: [
        "Focused on Programming Language, Data Structures & Algorithms, Database Management Systems, and Web Technologies.",
        "Completed Capstone Project on Full-Stack E-Commerce & Management System using React, Node.js, and MongoDB.",
      ],
      courses: ["Data Structures & Algorithms", "Database Management Systems", "Web Engineering", "Object-Oriented Programming", "Software Architecture"],
    },
    {
      id: "edu-2",
      degree: "Secondary School Certificate (SSC)",
      institution: "Pathodubi High School",
      period: "2012 - 2017",
      location: "Rangpur, Bangladesh",
      result: "GPA: 5.00 / 5.00",
      description: [
        "Science background with mathematics, physics, ICT, Chemistry, Bangla, English",
      ],
      courses: ["Physics", "Higher Mathematics", "Chemistry", "ICT", "Bangla", "English"],
    },
  ] as Education[],

  experiences: [] as Experience[],

  testimonials: [
    {
      id: "t1",
      name: "Sarah Jenkins",
      title: "VP of Product",
      company: "Apex Tech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      quote: "Alex is an exceptional developer who combines deep backend knowledge of Node.js and MongoDB with flawless React and Next.js frontend craft. Highly recommended!",
    },
    {
      id: "t2",
      name: "David Chen",
      title: "CTO",
      company: "Vanguard Labs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      quote: "The speed and visual standard Alex brought to our analytics dashboard using Tailwind CSS and Recharts blew our board away. An incredible engineering asset.",
    },
  ] as Testimonial[],
};
