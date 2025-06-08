import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, Users, Code } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering - Information Technology",
      school: "Vivekanand education society institute of Technology(VESIT) ",
      location: "India",
      period: "2022 - Present",
      status: "Pursuing",
      description: "Currently pursuing B.E. in Information Technology with focus on software development, algorithms, and modern web technologies. Actively involved in coding projects and technical workshops.",
      courses: [ "Web Development","Database Management","Data Science","Data Analysis","AI & ML","Data Structures & Algorithms", "Object Oriented Programming",  "Software Engineering", "Computer Networks"]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Smt CHM College",
      location: "India", 
      period: "2020 - 2022",
      status: "Completed",
      description: "Completed 11th and 12th standard with focus on Science stream, building strong foundation in Mathematics and Physics.",
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science Basics"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Holy Family Convent High School",
      location: "India",
      period: "till 2020",
      status: "Completed", 
      description: "Completed schooling till 10th standard with excellent academic performance and active participation in technical activities.",
      courses: ["Mathematics", "Science", "English", "Computer Applications"]
    }
  ];

  const achievements = [
    {
      title: "Project Leadership",
      description: "Led multiple group projects in web development and software engineering",
      icon: "👨‍💼"
    },
    {
      title: "Technical Workshops",
      description: "Attended various coding bootcamps and technical seminars", 
      icon: "🎯"
    },
    {
      title: "Coding Practice",
      description: "Regular participation in coding challenges and problem-solving",
      icon: "💻"
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python", "Java", "C", "HTML/CSS"]
    },
    {
      category: "Frameworks & Tools", 
      items: ["React.js", "Node.js", "Git", "Django","Flask", "Database Design","JSP"]
    },
    {
      category: "Core Subjects & Domains",
      items: ["Web Development","Database Management","Data Science","Data Analysis","AI & ML","Data Structures & Algorithms", "Object Oriented Programming",  "Software Engineering", "Computer Networks"]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <GraduationCap className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Education Journey</h1>
          <p className="text-xl text-slate-300">Building a strong foundation in Computer Science</p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
            Academic Background
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-xl text-blue-400 mb-1">{edu.school}</p>
                    <p className="text-slate-400">{edu.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="flex items-center text-slate-300 mb-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      {edu.period}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      edu.status === 'Pursuing' 
                        ? 'bg-blue-600/20 text-blue-400' 
                        : 'bg-green-600/20 text-green-400'
                    }`}>
                      {edu.status}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{edu.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Code className="w-8 h-8 text-blue-400 mr-3" />
            Technical Skills Acquired
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillSet, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{skillSet.category}</h3>
                <div className="space-y-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="w-8 h-8 text-blue-400 mr-3" />
            Academic Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-slate-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;