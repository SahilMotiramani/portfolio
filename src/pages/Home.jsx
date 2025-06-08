import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, Code, BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Sahil <span className="text-blue-400">Motiramani</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
              Aspiring Software Engineer
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              IT student passionate about creating innovative solutions through code.<br/> 
              Currently pursuing my B.E. and eager to contribute to meaningful projects while continuously 
              learning and growing in the world of technology.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Download Resume
              <Download className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/SahilMotiramani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-motiramani-b116842a8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <Link
              to="/contact" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail className="w-8 h-8" />
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <p className="text-slate-300 leading-relaxed mb-4">
                I'm a dedicated IT student currently pursuing my Bachelor's degree, 
                with a strong passion for software development and technology. My journey in programming 
                began during my early college years, and I've been captivated by the endless possibilities 
                that code can create.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I enjoy working on diverse projects that challenge me to learn new technologies 
                and problem-solving approaches. From web applications to desktop software, 
                I'm always eager to explore different domains of IT.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What I'm Focused On</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Full Stack Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Data Structures & Algorithms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Object-Oriented Programming
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Database Design & Management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Data Science & Analyst
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/education"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-bold text-white mb-2">Education</h3>
            <p className="text-slate-300">My academic journey and achievements</p>
          </Link>

          <Link
            to="/skills"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <Code className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-bold text-white mb-2">Skills</h3>
            <p className="text-slate-300">Technologies and tools I work with</p>
          </Link>

          <Link
            to="/contact"
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <Briefcase className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-bold text-white mb-2">Opportunities</h3>
            <p className="text-slate-300">Let's connect and build something amazing</p>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h2>
            <p className="text-slate-300 mb-6">
              I'm actively seeking internship opportunities and exciting projects to work on. 
              Let's connect and see how we can create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 border border-slate-600 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors duration-200"
              >
                <Code className="w-5 h-5 mr-2" />
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;