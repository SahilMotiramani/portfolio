import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const Skills = () => {
  const [animatedBars, setAnimatedBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedBars(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 85, color: "bg-blue-500" },
        { name: "Java", level: 80, color: "bg-red-500" },
        { name: "C", level: 75, color: "bg-yellow-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-400" },
        { name: "Flask", level: 80, color: "bg-green-600" },
        { name: "MERN Stack", level: 85, color: "bg-purple-600" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 85, color: "bg-cyan-500" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
        { name: "Bootstrap", level: 80, color: "bg-pink-500" },
        { name: "Material UI", level: 75, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 80, color: "bg-teal-500" }
      ]
    },
    {
      title: "Backend Development & APIs",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 80, color: "bg-green-600" },
        { name: "Express.js", level: 75, color: "bg-gray-600" },
        { name: "RESTful APIs", level: 80, color: "bg-indigo-500" },
        { name: "Flask APIs", level: 75, color: "bg-red-600" }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 80, color: "bg-green-700" },
        { name: "MySQL", level: 75, color: "bg-blue-700" },
        { name: "Firebase", level: 70, color: "bg-orange-600" },
        { name: "Git/GitHub", level: 85, color: "bg-gray-700" },
        { name: "VS Code", level: 90, color: "bg-blue-800" },
        { name: "Postman", level: 75, color: "bg-pink-600" }
      ]
    },
    {
      title: "ML, AI & Data Tools",
      icon: <Zap className="w-6 h-6" />,
      skills: [
        { name: "Scikit-learn", level: 85, color: "bg-blue-400" },
        { name: "XGBoost", level: 80, color: "bg-lime-500" },
        { name: "YOLO", level: 70, color: "bg-amber-500" },
        { name: "Pandas", level: 85, color: "bg-purple-500" },
        { name: "NumPy", level: 80, color: "bg-indigo-400" }
      ]
    },
    {
      title: "Analytics & Visualization",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "Excel", level: 85, color: "bg-green-400" },
        { name: "SQL", level: 75, color: "bg-yellow-600" },
        { name: "Power BI", level: 70, color: "bg-blue-600" },
        { name: "Tableau", level: 70, color: "bg-purple-600" },
        { name: "Google Analytics", level: 75, color: "bg-pink-400" }
      ]
    }
  ];

  const otherSkills = [
    {
      category: "Software Engineering",
      icon: <Smartphone className="w-5 h-5" />,
      items: ["Agile Methodology", "Testing", "Documentation", "Version Control"]
    },
    {
      category: "Problem Solving",
      icon: <Zap className="w-5 h-5" />,
      items: ["Data Structures", "Algorithms", "Debugging", "Code Optimization"]
    },
    {
      category: "Design & UI/UX",
      icon: <Globe className="w-5 h-5" />,
      items: ["Wireframing", "Prototyping", "User Experience", "UI Design"]
    }
  ];

  const learningGoals = [
    { skill: "React Native", progress: 40, target: "Mobile Development" },
    { skill: "Machine Learning (Advanced)", progress: 50, target: "AI/ML Specialization" },
    { skill: "DevOps", progress: 30, target: "Cloud & CI/CD" },
    { skill: "TypeScript", progress: 60, target: "Advanced Frontend" }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Code className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h1>
          <p className="text-xl text-slate-300">Technologies and tools I work with</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="text-blue-400 mr-3">{category.icon}</div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                        style={{
                          width: animatedBars ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherSkills.map((skillSet, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">{skillSet.icon}</div>
                  <h3 className="text-lg font-bold text-white">{skillSet.category}</h3>
                </div>
                <div className="space-y-2">
                  {skillSet.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Currently Learning</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              {learningGoals.map((goal, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-white font-medium">{goal.skill}</span>
                      <p className="text-sm text-slate-400">{goal.target}</p>
                    </div>
                    <span className="text-blue-400 text-sm">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                      style={{
                        width: animatedBars ? `${goal.progress}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Skills Summary</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-slate-300">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-slate-300">Years Learning</div>
              </div>
            </div>
            <p className="text-slate-300 mt-6 leading-relaxed">
              I'm passionate about learning new technologies and constantly improving my skills.
              My goal is to become a well-rounded software engineer capable of building
              end-to-end solutions and contributing to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
