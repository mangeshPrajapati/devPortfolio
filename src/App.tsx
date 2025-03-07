import React from "react";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import algo from "./images/algo.png";
import anime from "./images/anime.png";
import calendar from "./images/calendar.png";
import compiler from "./images/compiler.png";
import hooks from "./images/hooks.png";
import self from "./images/self.jpg";
// Navigation links
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

// Experience data
const experiences = [
  {
    title: "Software Developer",
    company: "Pascali Technologies",
    period: "Feb 2024 - Mar 2025",
    description:
      "Developed and deployed automation bots to streamline business processes, focusing on database management and client communication. Utilized Docker for containerization, FastAPI for backend development, and Postman for API testing.",
    technologies: [
      "Node.js",
      "Python",
      "TypeScript",
      "MongoDB",
      "Azure",
      "Docker",
    ],
  },
  {
    title: "Customer Service Associate",
    company: "BoB Card",
    period: " 2023 - 2024",
    description:
      "Handled customer inquiries and provided solutions related to credit card services, utilizing Excel and internal applications for accurate information retrieval.",
  },
];

// Project data
const projects = [
  {
    title: "Ani-Stream",
    description:
      "Developed a full-featured anime streaming website with a Node.js backend and Cheerio for web scraping from anime sites. The frontend was built using React with Vite for fast and responsive user interaction. Deployed the application on Render for seamless accessibility.",
    image: anime,
    technologies: ["Node.js", "Cheerio", "React", "Vite", "Render"],
    liveLink: "https://animestreamforu.onrender.com/",
    githubLink: "https://github.com/mangeshPrajapati/animeStreamBackend",
  },
  {
    title: "Online Compiler Web App",
    description:
      "Developed a web-based online compiler that supports multiple programming languages, including C, C++, Python, Java, GoLang, and JavaScript. Utilized React.js and Monaco Editor for the frontend and integrated the Codex API for real-time code compilation.",
    image: compiler,
    technologies: ["React.js", "Monaco Editor", "Codex API"],
    liveLink: "https://mangeshprajapati.github.io/codeEditor/",
    githubLink: "https://github.com/mangeshPrajapati/codeLab",
  },
  {
    title: "Mini-Calendar",
    description: "Calendar that shows date.",
    image: calendar,
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: "https://mangeshprajapati.github.io/miniCalendar/",
    githubLink: "https://github.com/mangeshPrajapati/miniCalendar",
  },
  {
    title: "Algorithmn Visualiser",
    description: "Visual representation of sorting algorithmns",
    image: algo,
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink:
      "https://mangeshprajapati.github.io/algorithmVisualizer.github.io/",
    githubLink:
      "https://github.com/mangeshPrajapati/algorithmVisualizer.github.io",
  },
  {
    title: "Video Hooks",
    description:
      "Using web scraping to get video hooks from transitionalhooks site and displaying them on the site and providing download functionality.",
    image: hooks,
    technologies: ["NodeJS", "Cheerio", "Axios", "Express", "ReactJS"],
    liveLink: "https://videohooksforu.onrender.com",
    githubLink: "#",
  },
];

// Skills data
const skills = {
  languages: ["JavaScript", "Python", "C++", "Java", "HTML/CSS", "SQL"],
  frameworks: ["React", "Node.js", "Express"],
  tools: ["Git", "Docker", "Firebase", "MongoDB"],
  other: ["RESTful APIs", "Agile/Scrum"],
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Mangesh</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-indigo-600 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-indigo-600">Mangesh Prajapati</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Software Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Crafting elegant solutions to complex problems with clean,
              maintainable code. Specialized in Backend Development with a
              passion for user experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/mangeshPrajapati"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                target="_blanck"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mangesh-prajapati"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                target="_blanck"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={self}
              alt="Developer Portrait"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-indigo-100 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Developer working"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I'm a passionate software developer with 1 year of experience
                creating web applications and digital solutions. My journey in
                tech began with a Computer Science degree, but my love for
                building things started much earlier.
              </p>
              <p className="text-gray-600 mb-4">
                I specialize in backend development, with expertise in modern
                JavaScript frameworks, and database systems. I'm committed to
                writing clean, maintainable code and creating intuitive user
                experiences.
              </p>
              {/* <p className="text-gray-600 mb-6">
                When I'm not coding, you can find me hiking, reading tech blogs,
                or contributing to open-source projects. I believe in continuous
                learning and staying updated with the latest industry trends.
              </p> */}
              {/* <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <div className="bg-indigo-100 rounded-full p-2 mr-3">
                    <span className="text-indigo-600 font-bold">5+</span>
                  </div>
                  <span className="text-gray-700">Years Experience</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-indigo-100 rounded-full p-2 mr-3">
                    <span className="text-indigo-600 font-bold">50+</span>
                  </div>
                  <span className="text-gray-700">Projects Completed</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Work <span className="text-indigo-600">Experience</span>
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 md:p-8 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      {exp.title}
                    </h3>
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-gray-500 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured <span className="text-indigo-600">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.liveLink}
                      className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
            >
              View All Projects <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Technical <span className="text-indigo-600">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">
                Other Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-indigo-600 mr-3" size={20} />
                  <span className="text-gray-700">
                    mangeshprajapati297@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-indigo-600 mr-3" size={20} />
                  <span className="text-gray-700">
                    www.linkedin.com/in/mangesh-prajapati
                  </span>
                </div>
                <div className="flex items-center">
                  <Github className="text-indigo-600 mr-3" size={20} />
                  <span className="text-gray-700">
                    https://github.com/mangeshPrajapati
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Current Status</h3>
                <p className="text-gray-600 mb-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Available to get hired
                </p>
                <p className="text-gray-600">
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  Open to full-time opportunities
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">Mangesh</span>
              <p className="text-gray-400 mt-1">
                © 2025 Mangesh Prajapati. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/mangeshPrajapati"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blanck"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mangesh-prajapati"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blanck"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mangeshprajapati297@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
