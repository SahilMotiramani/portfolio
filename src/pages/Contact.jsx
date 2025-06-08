import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, User, FileText
} from 'lucide-react';

const SERVICE_ID = 'service_yntc1he';
const TEMPLATE_ID = 'template_0ibdmso';
const PUBLIC_KEY = 'PpM57vcLXQ3FWhuWX';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsSubmitting(false);
        alert('Something went wrong. Please try again.');
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "2022.sahil.motiramani@ves.ac.in",
      href: "mailto:2022.sahil.motiramani@ves.ac.in"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9021966933",
      href: "tel:+919021966933"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Ulhasnagar, Maharashtra, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      href: "https://github.com/SahilMotiramani",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sahil-motiramani-b116842a8",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      href: "mailto:2022.sahil.motiramani@ves.ac.in",
      color: "hover:text-green-400"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <MessageSquare className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-slate-300">I'd love to hear from you. Send me a message!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400">Thank you for your message! I'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "subject", "message"].map((field, index) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    {field === "name" && <User className="w-4 h-4 inline mr-1" />}
                    {field === "email" && <Mail className="w-4 h-4 inline mr-1" />}
                    {field === "subject" && <FileText className="w-4 h-4 inline mr-1" />}
                    {field === "message" && <MessageSquare className="w-4 h-4 inline mr-1" />}
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project or just say hello!"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      placeholder={
                        field === "email"
                          ? "your.email@example.com"
                          : field === "name"
                          ? "Your full name"
                          : field === "subject"
                          ? "What's this about?"
                          : ""
                      }
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-blue-400 mr-4">{info.icon}</div>
                    <div>
                      <h3 className="text-slate-300 font-medium">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 ${social.color} transition-all group`}
                  >
                    <div className="mr-4">{social.icon}</div>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Availability</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-slate-300">Available for internships</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-slate-300">Open to collaboration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-slate-300">Seeking entry-level positions</span>
                </div>
              </div>
              <p className="text-slate-400 mt-4 text-sm">
                I'm actively looking for opportunities to apply my skills and learn from experienced professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
