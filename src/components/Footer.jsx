import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Gradient Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="h-px w-full bg-gradient-to-r from-transparent via-accent-purple to-transparent mb-8"
      />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Copyright */}
          <p className="text-gray-400 mb-4 flex items-center justify-center gap-2 flex-wrap">
            <span>© 2025 Meet Chaudhary.</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved.</span>
          </p>

          {/* Made with love */}
          <motion.p
            className="text-sm text-gray-500 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Crafted with{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              <FaHeart className="text-red-500 inline" />
            </motion.span>{' '}
            and passion
          </motion.p>

          {/* Tech stack mention */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs text-gray-600 mt-4"
          >
            Built with <span className="text-accent-purple">React</span>,{' '}
            <span className="text-accent-cyan">Tailwind CSS</span> &{' '}
            <span className="text-gradient">Framer Motion</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-purple/5 blur-3xl rounded-full" />
    </footer>
  );
};

export default Footer;
