import React from 'react';
import {
  ExternalLink, Github, Folder, Star, Clock, Users
} from 'lucide-react';

import farmImage from '../assets/farmbazaar.jpg';
import ecoImage from '../assets/ecosynth.jpg';
import surveillanceImage from '../assets/surveillance.jpg';
import bandgapImage from '../assets/bandgap.jpg';
import financeImage from '../assets/finance.jpg';
import upiImage from '../assets/upi.jpg';
import devopsImage from '../assets/devops.jpg';
import datascienceImage from '../assets/datascience.jpg';

const Projects = () => {
  const projects = [
    {
      title: "FarmBazaar – Blockchain Contract Farming",
      description: "A blockchain-powered marketplace for contract farming with crop pre-sale, advance payments, AI price prediction, and multilingual chatbot for farmers.",
      image: farmImage,
      technologies: ["React.js", "Node.js", "MongoDB", "Blockchain", "AI/ML"],
      category: "Full Stack",
      status: "Completed",
      duration: "3 months",
      team: "Solo Project",
      highlights: [
        "Smart contract-based crop pre-sales",
        "AI-powered crop price prediction",
        "Admin approval system"
      ],
      github: "https://github.com/SahilMotiramani/FarmBazaar",
      live: "https://example.com/farmbazaar"
    },
    {
      title: "EcoSynth – AI-Powered Audio/Video Companion",
      description: "An AI tool integrating voice cloning, multilingual dubbing, text-to-speech, speech-to-text, and an AI video generator.",
      image: ecoImage,
      technologies: ["Python", "Flask", "AI/ML", "Text-to-Speech", "Video API"],
      category: "AI Project",
      status: "Completed",
      duration: "3 months",
      team: "4 members",
      highlights: [
        "Voice cloning & dubbing",
        "Text-to-speech and speech-to-text integration",
        "Dynamic video generation"
      ],
      github: "https://github.com/Atharva6780/PCU_HACKATHON",
      live: "https://example.com/ecosynth"
    },
    {
      title: "Surveillance System with ML",
      description: "A machine learning-based smart surveillance system designed during RACCA Hackathon at Jaipur for public area monitoring.",
      image: surveillanceImage,
      technologies: ["Python", "OpenCV", "YOLO", "ML", "Flask"],
      category: "AI Project",
      status: "Completed",
      duration: "2 months",
      team: "3 members",
      highlights: [
        "ML-powered object detection",
        "Real-time monitoring system",
        "Custom dataset training"
      ],
      github: "https://github.com/SahilMotiramani/surveillance",
      live: "https://example.com/surveillance"
    },
    {
      title: "Band Gap Predictor",
      description: "A Flask-based tool that uses ML models (XGBoost) to predict the band gap in perovskite oxides for material optimization.",
      image: bandgapImage,
      technologies: ["Python", "XGBoost", "Flask", "ML", "Pandas"],
      category: "Data Science",
      status: "Completed",
      duration: "2 months",
      team: "3 members",
      highlights: [
        "Regression & classification ML models",
        "Batch predictions and file upload",
        "Accuracy-based model selection"
      ],
      github: "https://github.com/SahilMotiramani/Excavate_2025",
      live: "https://example.com/bandgap"
    },
    {
      title: "Finance Management Website",
      description: "A personal budgeting and finance tracker web app to manage expenses and visualize financial goals.",
      image: financeImage,
      technologies: ["React.js", "Firebase", "Chart.js", "Tailwind CSS"],
      category: "Frontend",
      status: "Completed",
      duration: "1.5 months",
      team: "Solo Project",
      highlights: [
        "Real-time expense tracking",
        "Financial insights with charts",
        "Responsive and intuitive UI"
      ],
      github: "https://github.com/SahilMotiramani/finance-tracker",
      live: "https://example.com/finance"
    },
    {
      title: "UPI Transaction Data Analysis",
      description: "An upcoming data analytics dashboard to analyze UPI transaction trends across regions using real datasets and interactive charts.",
      image: upiImage,
      technologies: ["Python", "Pandas", "Plotly", "Streamlit", "Excel"],
      category: "Data Science",
      status: "In Progress",
      duration: "Upcoming",
      team: "Solo Project",
      highlights: [
        "Geo-wise UPI transaction analysis",
        "Time-based trend visualization",
        "Will be updated soon"
      ],
      github: "https://github.com/SahilMotiramani/upi-analysis",
      live: "https://example.com/upi-analysis"
    },
    {
      title: "CI/CD DevOps Pipeline",
      description: "A DevOps pipeline project demonstrating CI/CD with Jenkins, GitHub, Docker, and SonarQube for continuous integration and quality analysis.",
      image: devopsImage,
      technologies: ["Jenkins", "Docker", "SonarQube", "GitHub", "Node.js"],
      category: "DevOps",
      status: "Completed",
      duration: "2 weeks",
      team: "Solo Project",
      highlights: [
        "Automated build & test pipeline",
        "Code quality with SonarQube",
        "Containerization with Docker"
      ],
      github: "https://github.com/SahilMotiramani/devops-pipeline",
      live: "https://example.com/devops"
    },
    {
      title: "Data Science Project – Crop Yield Predictor",
      description: "Predicts crop yields using features like soil, rainfall, temperature using multiple ML algorithms with performance comparison.",
      image: datascienceImage,
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"],
      category: "Data Science",
      status: "Completed",
      duration: "1 month",
      team: "Solo Project",
      highlights: [
        "Regression models for yield prediction",
        "Data visualization and preprocessing",
        "Accuracy comparison of ML algorithms"
      ],
      github: "https://github.com/SahilMotiramani/crop-yield",
      live: "https://example.com/cropyield"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-600/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-blue-600/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-yellow-600/20 text-yellow-400 border-yellow-500/30';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Full Stack':
        return 'bg-purple-600/20 text-purple-400';
      case 'Frontend':
        return 'bg-blue-600/20 text-blue-400';
      case 'DevOps':
        return 'bg-pink-600/20 text-pink-400';
      case 'Data Science':
        return 'bg-green-600/20 text-green-400';
      case 'AI Project':
        return 'bg-indigo-600/20 text-indigo-400';
      default:
        return 'bg-gray-600/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Folder className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-xl text-slate-300">Showcasing my journey in software development</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                  <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{project.duration}</div>
                  <div className="flex items-center"><Users className="w-4 h-4 mr-1" />{project.team}</div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((point, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-300">
                        <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />{point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Want to see more?</h2>
            <p className="text-slate-300 mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub for the latest updates and contributions.
            </p>
            <a href="https://github.com/SahilMotiramani" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
              <Github className="w-5 h-5 mr-2" /> Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
