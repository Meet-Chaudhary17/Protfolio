import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home', icon: '🏠' },
    { name: 'About', href: '#about', id: 'about', icon: '👨‍💻' },
    { name: 'Projects', href: '#projects', id: 'projects', icon: '🚀' },
    { name: 'Contact', href: '#contact', id: 'contact', icon: '💬' },
  ];

  return (
    <>
      {/* Floating Navbar Container */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="container mx-auto px-6 py-6 md:py-8">
          {/* Main Navbar Glass Card */}
          <motion.div
            className={`relative mx-auto max-w-5xl pointer-events-auto transition-all duration-700 ${
              scrolled ? 'mt-2' : 'mt-0'
            }`}
          >
            {/* Magnetic cursor effect */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 400,
                height: 400,
                left: mousePosition.x - 200,
                top: mousePosition.y - 200,
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              animate={{
                opacity: hoveredItem ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Glass Background */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/40 backdrop-blur-xl shadow-2xl">
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3), transparent)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '200% 0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Glow effect */}
              {scrolled && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-transparent to-accent-cyan/10"
                />
              )}

              {/* Content Container */}
              <div className="relative px-6 py-4 flex items-center justify-between">
                {/* Left Section - Navigation Links */}
                <div className="flex items-center gap-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    const isHovered = hoveredItem === item.id;
                    
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + index * 0.1, type: 'spring' }}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div
                          className={`relative px-5 py-2.5 rounded-xl overflow-hidden transition-all duration-300 ${
                            isActive ? 'text-white' : 'text-gray-400'
                          }`}
                        >
                          {/* Active/Hover background with gradient */}
                          <AnimatePresence>
                            {(isActive || isHovered) && (
                              <motion.div
                                layoutId={isActive ? 'navPill' : undefined}
                                className={`absolute inset-0 ${
                                  isActive
                                    ? 'bg-gradient-to-r from-accent-purple via-purple-600 to-accent-cyan'
                                    : 'bg-white/10'
                                }`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 400,
                                  damping: 30,
                                }}
                              />
                            )}
                          </AnimatePresence>

                          {/* Pulsing glow for active */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-xl blur-lg"
                              animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            />
                          )}

                          {/* Icon & Text */}
                          <div className="relative z-10 flex items-center gap-2">
                            <motion.span
                              className="text-base"
                              animate={isActive ? { rotate: [0, -10, 10, -10, 0] } : {}}
                              transition={{ duration: 0.5 }}
                            >
                              {item.icon}
                            </motion.span>
                            <span className="font-medium text-sm hidden lg:inline">
                              {item.name}
                            </span>
                          </div>

                          {/* Sparkle effect on hover */}
                          {isHovered && (
                            <motion.div
                              className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"
                              initial={{ scale: 0, opacity: 1 }}
                              animate={{ scale: 4, opacity: 0 }}
                              transition={{ duration: 0.6 }}
                            />
                          )}
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Right Section - CTA Button */}
                <motion.a
                  href="#contact"
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative px-6 py-2.5 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-xl font-semibold text-sm overflow-hidden shadow-lg">
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-200%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />

                    {/* Reverse gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Button text */}
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="hidden sm:inline">Let's Talk</span>
                      <span className="sm:hidden">Contact</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ✨
                      </motion.span>
                    </span>
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"
                  />
                </motion.a>
              </div>

              {/* Bottom shine line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrolled ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Floating particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent-cyan rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: -10,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
