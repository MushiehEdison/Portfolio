
import React, { useState, useEffect, useRef } from 'react';
import { color, motion } from 'framer-motion';
import { 
  Mail, Github, Linkedin, ExternalLink, Menu, X, Clock,
  Code2, Database, Globe, Palette, Brain, Rocket, Star, ArrowRight, MapPin, Calendar, Award 
} from 'lucide-react';

// Constants
const EMAIL_ADDRESS = 'mushiehedison66@gmail.com';

// Reusable animation component
const FadeInSection = ({ children, delay = 0, y = 30 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside and Escape key for mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Business Monitoring and Analysis system",
      description: "Analytics platform for Cameroonian businesses with real-time insights and predictive recommendations.",
      tech: ["Flask", "MySQL", "React js", "Chart.js"],
      status: "In Development, View on Github",
      link: "https://github.com/MushiehEdison/Analytics" 
    },
    {
      title: "Fitness Website",
      description: "Keep Fit and buy fitness plan",
      tech: ["Html", "Flask", "SQLAlchemy", "Socket.io"],
      role: "Lead Developer",
      status: "Complete",
      impact: "1000+ beta users engaged",
      link: "https://fitness-z41z.onrender.com/#" // Replace with actual project link
    },
    {
      title: "AI powered Patient Education and Diagnosis system",
      description: "Patient personal Health assistent",
      tech: ["Python", "pandas", "Matplotlib", "scikit-learn"],
      role: "Data Scientist",
      status: "Prototype",
      impact: "Reduces analysis time by 80%",
      link: "https://healia.netlify.app/" // Replace with actual project link
    },
    {
      title: "Travel Agency Management system",
      description: "Book seats in any travel agency from home",
      tech: ["HTML", "CSS", "JavaScript","Flask"],
      role: "Full-Stack Developer",
      status: "On development, View on github",
      link: "#https://github.com/MushiehEdison/Travel-Go" // Replace with actual project link
    }
  ];

  const skillCategories = {
    "Frontend Development": {
      skills: [
        { name: "React.js", level: 85, color: "text-blue-400" },
        { name: "JavaScript", level: 90, color: "text-yellow-400" },
        { name: "HTML", level: 95, color: "text-orange-400" },
        { name: "CSS", level: 90, color: "text-blue-400" },
        { name: "Tailwind", level: 80, color: "text-cyan-400" },
        { name: "Bootstrap", level: 75, color: "text-purple-400" }
      ],
      icon: <Globe className="w-5 h-5" />,
      color: "from-blue-600 to-blue-400"
    },
    "Backend Development": {
      skills: [
        { name: "Python", level: 90, color: "text-green-400" },
        { name: "Flask", level: 85, color: "text-red-400" },
        { name: "Django", level: 75, color: "text-green-400" },
        { name: "MySQL", level: 80, color: "text-blue-400" }
      ],
      icon: <Database className="w-5 h-5" />,
      color: "from-green-600 to-emerald-400"
    },
    "AI & Data Science": {
      skills: [
        { name: "NumPy", level: 75, color: "text-blue-400" },
        { name: "pandas", level: 80, color: "text-purple-400" },
        { name: "Matplotlib", level: 70, color: "text-orange-400" },
        {name: "Scikit", level: 70, color: "text-red-400"}
      ],
      icon: <Brain className="w-5 h-5" />,
      color: "from-purple-600 to-indigo-400"
    },
    "Tools & Design": {
      skills: [
        { name: "Git", level: 85, color: "text-orange-400" },
        { name: "Figma", level: 70, color: "text-pink-400" },
        { name: "WordPress", level: 80, color: "text-blue-400" },
        { name: "Wix", level: 80, color: "text-green-400" }
      ],
      icon: <Palette className="w-5 h-5" />,
      color: "from-pink-600 to-rose-400"
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-gray-900 to-blue-900 text-gray-200">
      <nav className="bg-gray-800/90 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Mushieh Edison
            </motion.div>
            <div className="hidden md:flex space-x-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map(id => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-blue-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  aria-label={`Navigate to ${id} section`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </motion.button>
              ))}
            </div>
            <button
              className="md:hidden p-2 hover:bg-blue-700/50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="md:hidden bg-gray-800/90 border-t border-gray-700"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                {['home', 'about', 'skills', 'projects', 'contact'].map(id => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="block w-full text-left px-4 py-2 rounded-md hover:bg-blue-700/50 transition-colors"
                    aria-label={`Navigate to ${id} section`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <FadeInSection>
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-600 rounded-full px-4 py-2 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-medium">Available for Work</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center">
            <span className="text-white">Mushieh Edison</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-center">
            Computer Engineering Student | Full-Stack Developer | AI & Data Science Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              aria-label="View my projects"
            >
              Explore Projects
              <ArrowRight size={18} className="inline ml-2" />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              aria-label="Contact me"
            >
              <Mail size={18} className="inline mr-2" />
              Contact Me
            </motion.a>
          </div>
        </FadeInSection>
      </section>

      <section id="about" className="py-16 px-4 bg-gray-800/10">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">About Me</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeInSection delay={0.2}>
              <motion.div
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-4">My Journey</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm an 20-year-old Computer Engineering student from Cameroon, passionate about building innovative solutions in AI, web development, and data science. With over 3 years of experience, I create impactful applications with a focus on performance and user experience.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: <MapPin size={18} />, label: "Location", value: "Douala, Cameroon" },
                    { icon: <Calendar size={18} />, label: "Age", value: "20 years" },
                    { icon: <Code2 size={18} />, label: "Experience", value: "3+ years" },
                    { icon: <Award size={18} />, label: "Projects", value: "20+ completed" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-900/50 border border-gray-700 rounded-md p-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        {item.icon}
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <span className="text-white text-sm font-medium">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <motion.div
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Core Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Rocket size={18} />, text: "Innovation", color: "text-blue-400" },
                    { icon: <Code2 size={18} />, text: "Problem-Solving", color: "text-green-400" },
                    { icon: <Palette size={18} />, text: "Creativity", color: "text-purple-400" },
                    { icon: <Brain size={18} />, text: "Continuous Learning", color: "text-pink-400" }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-gray-900/50 rounded-md"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={value.color}>{value.icon}</div>
                      <span className="text-gray-200 text-sm">{value.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skillCategories).map(([category, data], index) => (
              <FadeInSection key={index} delay={index * 0.2}>
                <motion.div
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-r ${data.color} rounded-md text-white`}>
                      {data.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category}</h3>
                  </div>
                  <div className="space-y-4">
                    {data.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                          <span className={`${skill.color} text-xs font-semibold`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <motion.div
                            className={`h-1.5 rounded-full bg-gradient-to-r ${data.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 bg-gray-800/10">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Featured Projects</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <FadeInSection key={index} delay={index * 0.2}>
                <motion.div
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' ? 'bg-green-800/50 text-green-400 border-green-700' :
                    project.status === 'In Development' ? 'bg-blue-800/50 text-blue-400 border-blue-700' :
                    project.status === 'Live' ? 'bg-purple-800/50 text-purple-400 border-purple-700' :
                    'bg-orange-800/50 text-orange-400 border-orange-700'
                  }`}>
                    {project.status}
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-white pr-4">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}>
                      <ExternalLink size={18} className="text-gray-400 hover:text-blue-400" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 size={16} className="text-blue-400" />
                      <span className="text-sm font-medium text-white">Role: {project.role}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-900/50 border border-gray-700 rounded-md text-xs text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-md p-4">
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-yellow-400" />
                      <span className="text-sm font-medium text-white">Impact:</span>
                    </div>
                    <p className="text-blue-400 text-sm mt-1">{project.impact}</p>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Get in Touch</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Interested in collaborating on innovative projects? Let's connect to build something impactful.
            </p>
          </FadeInSection>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              aria-label="Send an email"
            >
              <Mail size={18} className="inline mr-2" />
              Email Me
            </motion.a>
            <div className="flex space-x-4">
              <motion.a
                href="hhttps://github.com/MushiehEdison/"
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-full"
                whileHover={{ scale: 1.1 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <Github size={18} className="text-gray-400 hover:text-blue-400" />
              </motion.a>
              <motion.a
                href=" https://www.linkedin.com/posts/data-science-without-borders_code2carehackathon-dswb-teamgenez-ugcPost-7360597485905469440-C3FL?utm_source=share&utm_medium=member_android&rcm=ACoAAEcgnPAB_yGn5perTzuSLqH6XombW_A94Bk"
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-full"
                whileHover={{ scale: 1.1 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin size={18} className="text-gray-400 hover:text-blue-400" />
              </motion.a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Mail size={24} />, title: "Email", value: EMAIL_ADDRESS, color: "blue-400" },
              { icon: <MapPin size={24} />, title: "Location", value: "Douala, Cameroon", color: "green-400" },
              { icon: <Clock size={24} />, title: "Response Time", value: "Within 24 hours", color: "purple-400" }
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.2}>
                <motion.div
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`text-${item.color} mx-auto mb-3`}>{item.icon}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.value}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-800/90 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <FadeInSection>
              <div className="text-xl font-semibold text-white mb-2">Mushieh Edison</div>
              <p className="text-gray-400 text-sm">Building the future with innovative technology.</p>
            </FadeInSection>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <motion.a
                href="https://github.com/mushieh-edison"
                className="text-gray-400 hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mushieh-edison"
                className="text-gray-400 hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="text-gray-400 hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                aria-label="Send an email"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>
          <FadeInSection>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Mushieh Edison. Built with React and modern design principles.
              </p>
            </div>
          </FadeInSection>
        </div>
      </footer>
    </div>
  );
};

export default App;
