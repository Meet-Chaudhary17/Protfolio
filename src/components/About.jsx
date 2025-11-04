import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const techStack = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full" />
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10">
              I'm a <span className="text-accent-purple font-semibold">passionate web developer</span> focused 
              on building <span className="text-accent-cyan font-semibold">stunning, fast, and impactful</span> websites 
              that leave a lasting impression. Every project is an opportunity to blend creativity with technology, 
              crafting experiences that truly resonate.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-16"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-purple" />
            <div className="w-2 h-2 bg-accent-purple rounded-full mx-4 animate-glow" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-cyan" />
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Tech <span className="text-gradient">Stack</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={iconVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                  className="glass glass-hover rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer group relative"
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ backgroundColor: `${tech.color}20` }}
                  />

                  <tech.icon
                    className="text-5xl md:text-6xl relative z-10 transition-colors duration-300"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors relative z-10">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
