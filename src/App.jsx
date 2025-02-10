import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './Hero';
import projects from './projects';

// Animation variants for fade-in & slide-up effect.
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const d = new Date(), y = d.getFullYear() - 2022, m = d.getMonth();

// Header component with navigation links.
function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full shadow-md z-50">
      <motion.nav 
        className="container mx-auto flex justify-center gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <a href="#home" className="hover:underline hover:font-bold  hover:text-slate-300">Home</a>
        <a href="#about" className="hover:underline hover:font-bold hover:text-slate-300">About</a>
        <a href="#skills" className="hover:underline hover:font-bold  hover:text-slate-300">Skills</a>
        <a href="#projects" className="hover:underline hover:font-bold  hover:text-slate-300">Projects</a>
        <a href="#resume" className="hover:underline hover:font-bold  hover:text-slate-300">Resume</a>
        <a href="#contact" className="hover:underline hover:font-bold  hover:text-slate-300">Contact</a>
      </motion.nav>
    </header>
  );
}

// About section with profile photo and introduction.
function About() {
  return (
    <motion.section 
      id="about" 
      className="py-16 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
    >
       
      <div className="container mx-auto px-4 text-center">
      <div className="container mx-auto py-1 mb-6 text-center bg-gray-300">
        <h2 className="text-3xl font-bold mb-4 mt-4  transition-transform duration-300 hover:scale-105 ">About Me</h2>
        </div>
      {/* <div className="bg-gray-300  text-center py-4 mb-12">
      <h2 className="text-3xl font-bold text-center  ">About Me</h2>
      </div> */}
       
        <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center gap-8  ">
          {/* Replace '/profile.jpg' with your actual image path */}
          <motion.img 
            src="1000170642.jpg" 
            alt="Profile" 
            className="w-40 h-40 rounded-full shadow-lg object-fill transition-transform duration-300 hover:scale-103"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-sm max-w-xl text-center md:text-left  "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Experienced Senior Software Engineer with {`${y - (m < 0 ? 1 : 0)} years and ${(m + (m < 0 ? 12 : 0))} months`} experience in full-stack development,
             specializing in Angular frontend and Node.js backend. Skilled in modern frontend development, 
             crafting dynamic, user-friendly UIs with Angular, responsive design, and seamless API integration. Equally proficient in 
             designing scalable RESTful APIs,
              database management (SQL, NoSQL), authentication, and server-side logic, 
              ensuring secure and efficient backend solutions. 
              Strong in collaborative development, Agile methodologies, version control (Git), and problem-solving to deliver high-quality, 
              scalable web applications. Passionate about building end-to-end solutions that enhance performance, security, 
              and user experience.
          </motion.p>
        </div>
        </div>
        
      </div>
    </motion.section>
  );
}

// Projects section displaying a list of projects.
function Projects() {
  // const projects = [
  //   {
  //     id: 1,
  //     title: "Blog Application",
  //     description: "This is my first project. Demonstrate skills in React and Node.js It may take some time to open because its deployed free may be in sleep.",
  //     imageUrl: "blog-application.png", // Replace with your project image path.
  //     link: "https://mern-blog-app-0dcs.onrender.com/",
  //   },
  //   {
  //     id: 2,
  //     title: "Project Two",
  //     description: "This is a description of my second project.",
  //     imageUrl: "/project2.jpg", // Replace with your project image path.
  //     link: "https://example.com/project-two",
  //   },
  //   // Add more projects as needed.
  // ];
  // State to track the currently selected project for the modal
    // eslint-disable-next-line no-undef
    const [selectedProject, setSelectedProject] = useState(null);
  
    // Handler to close the modal
    const closeModal = () => {
      setSelectedProject(null);
    };

  return (
    <motion.section 
      id="projects" 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
      <div className="bg-gray-300  text-center py-4 mb-12">
      <h2 className="text-3xl font-bold text-center  ">My Projects</h2>
      </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
            >
              <div className="transition-transform duration-300 hover:scale-103">
                  <img
          src={project.image}
          alt='post cover'
          className='h-[260px] w-full  object-center group-hover:h-[200px] transition-all duration-300 z-20'
        />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline"
                >
                  Click here for details
                </p>
              </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
       {/* Modal Popup for Project Details */}
       <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-slate-500 bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-50 object-cover rounded-lg mb-2 p-1"
              />
              <h3 className="text-xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="mb-2  text-sm">{selectedProject.description}</p>
              <div className=" mb-2">
                <div>
                  <strong>Frontend:</strong> {selectedProject.frontend}
                </div>
                <div>
                  <strong>Backend:</strong> {selectedProject.backend}
                </div>
                <div>
                  <strong>Database:</strong> {selectedProject.database}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Link
                </a>
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
    
  );
}

// Resume section.
function Resume() {
  return (
    <motion.section 
      id="resume" 
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 text-center">
      <div className="bg-gray-300  text-center py-4 mb-12">
      <h2 className="text-3xl font-bold text-center  ">My Resume</h2>
      </div>
        <p className="text-lg mb-6">
          Download my resume to learn more about my professional experience, skills, and education.
        </p>
        {/* Update the href to the path where your resume is stored */}
        <a 
          href="https://drive.google.com/file/d/1Gsrq91t6INhJvyFtB1pbuRVctMOIpuES/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 transition-colors"
        >
          Download Resume
        </a>
      </div>
     
    </motion.section>
  );
}

// Contact section for getting in touch.
function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-16 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <motion.p 
          className="text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          If you’d like to get in touch, please email me at:{" "}
          <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">
            ppratikpansare98@gmail.com
          </a>
        </motion.p>
      </div>
    </motion.section>
  );
}

// Footer component.
function Footer() {
  return (
    <motion.footer 
      className="bg-gray-800 text-white py-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>&copy; {new Date().getFullYear()} Pratik Pansare All rights reserved.</p>
    </motion.footer>
  );
}

const Skills = () => {
  const skills = [
    { name: "Angular", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "NodeJS / ExpressJS", level: "Intermediate" },
    { name: "MongoDB", level: "Beginner" },
    { name: "HTML", level: "Intermediate" },
    { name: "Javascript", level: "Intermediate" },
    { name: "Typescript", level: "Intermediate" },
  ];

  return (
    <motion.section 
    id="skills" 
    className="py-16 bg-gray-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeInUp}
    transition={{ duration: 0.7 }}
  >
    <div className="text-center container mx-auto px-4 ">
      {/* Header */}
      <div className="p-4 bg-gray-300">
        <h1 className="text-4xl font-bold">Skills</h1>
      </div>

      {/* Skills List */}
      <div className="mt-8">
        {skills.map((skill, index) => (
          <div key={index} className="my-4">
            <h2 className="text-2xl font-semibold">{skill.name}</h2>
            <p className="text-red-500">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
    </motion.section>
  );
};

// Main App component.
function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <main>
        <About />
        <Skills/>
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
