import React from 'react';
import { motion } from 'framer-motion';

// Container variant to stagger children animations.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

// Variant for each child element.
const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/002/099/443/large_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Dark overlay with its own fade-in animation */}
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div>
      
      {/* Content container */}
      <div className="relative z-10 px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          variants={childVariants}
        >
          Hello, I'm Pratik Pansare
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl text-gray-200 mb-8 drop-shadow-md"
          variants={childVariants}
        >
          A Passionate Coder & Developer
        </motion.p>
        <motion.a 
          href="#about"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          variants={childVariants}
        >
          Learn More
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Hero;
