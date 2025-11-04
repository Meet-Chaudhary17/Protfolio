import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'coder.meetu28@gmail.com',
      link: 'mailto:coder.meetu28@gmail.com',
      color: 'from-accent-purple to-purple-600',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'Meet-Chaudhary17',
      link: 'https://github.com/Meet-Chaudhary17',
      color: 'from-purple-600 to-accent-cyan',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }} />
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full glass relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="text-3xl text-accent-cyan group-hover:text-accent-purple transition-colors duration-300" />
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-semibold mb-2 text-gray-300 group-hover:text-white transition-colors relative z-10">
                  {info.label}
                </h3>

                {/* Value */}
                <p className="text-sm text-gray-400 break-all relative z-10">
                  {info.value}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20" />
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Mail Me Button */}
            <motion.a
              href="mailto:coder.meetu28@gmail.com"
              className="group relative px-10 py-5 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full font-bold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                Mail Me
              </span>

              {/* Glow effect */}
              <div className="absolute inset-0 blur-xl bg-accent-purple/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.a>

            {/* Visit GitHub Button */}
            <motion.a
              href="https://github.com/Meet-Chaudhary17"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 glass glass-hover rounded-full font-bold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full blur-sm" />
              </div>

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-3">
                <FaGithub className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                Visit GitHub
              </span>
            </motion.a>
          </motion.div>

          {/* Additional info */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg">
              Available for freelance projects and collaboration
            </p>
            <motion.div
              className="inline-block w-3 h-3 bg-green-400 rounded-full mt-4 animate-glow"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-green-400 text-sm mt-2 font-semibold">
              Currently Available
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
