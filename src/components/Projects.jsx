import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaCode, FaStar, FaFolder } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: FaCode, label: 'Clean Code', color: '#8b5cf6' },
    { icon: FaStar, label: 'Best Practices', color: '#06b6d4' },
    { icon: FaFolder, label: 'Well Organized', color: '#a78bfa' },
  ];

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="text-6xl">🚀</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Building the future, one commit at a time
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full mt-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Single Enhanced GitHub Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <motion.a
            href="https://github.com/Meet-Chaudhary17"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="block group relative"
            whileHover={{ y: -10 }}
          >
            {/* Main Card */}
            <div className="relative glass rounded-3xl p-10 md:p-12 overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-all duration-500">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-purple-600/10 to-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Spotlight effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
                }}
                animate={isHovered ? {
                  scale: [1, 1.5, 1],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent-cyan rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with animation */}
                <motion.div
                  className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-cyan group-hover:shadow-2xl group-hover:shadow-accent-purple/50 transition-all duration-500"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaGithub className="text-4xl md:text-5xl text-white" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center"
                  animate={isHovered ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gradient">GitHub Portfolio</span>
                </motion.h3>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 text-center mb-8 leading-relaxed max-w-2xl mx-auto">
                  Explore my complete collection of projects, open-source contributions, and innovative solutions. 
                  Each repository tells a story of creativity, problem-solving, and passion for clean code.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/10 group-hover:border-white/30 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <feature.icon style={{ color: feature.color }} className="text-lg" />
                      <span className="text-sm font-medium text-gray-300">{feature.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  className="flex items-center justify-center gap-3 px-8 py-4 mx-auto bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full font-bold text-lg max-w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View My GitHub</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Stats decoration */}
                <motion.div
                  className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1 }}
                >
                  {[{ label: 'Projects', icon: '📦' }, { label: 'Commits', icon: '✨' }, { label: 'Innovation', icon: '🚀' }].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="text-center"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="text-3xl mb-2"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        {stat.icon}
                      </motion.div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-cyan/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent-purple/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" />
            </div>

            {/* Outer glow on hover */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-accent-purple via-purple-600 to-accent-cyan rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
