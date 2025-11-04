import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const phrases = [
    'Crafting modern digital experiences that speak for your brand',
    'Building stunning websites that leave a lasting impression',
    'Transforming ideas into beautiful, functional web solutions',
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 40 : 60;
    const pauseTime = isDeleting ? 1000 : 2500;

    if (!isDeleting && displayedText === currentPhrase) {
      // Finished typing, pause then start deleting
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayedText === '') {
      // Finished deleting, move to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentPhrase.slice(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex, phrases]);

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* Additional flowing orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full blur-3xl"
            style={{
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
              left: `${20 + i * 25}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              x: [0, 100, 0, -100, 0],
              y: [0, -50, 0, 50, 0],
              scale: [1, 1.2, 0.8, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

        {/* Particle Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Floating stars/dots - static twinkle effect with gradient colors */}
        {React.useMemo(() => 
          [...Array(20)].map((_, i) => {
            const randomLeft = Math.random() * 100;
            const randomTop = Math.random() * 100;
            const randomDelay = Math.random() * 5;
            const randomDuration = 2 + Math.random() * 3;
            
            // Alternate between purple and cyan to match the theme
            const colors = [
              'bg-accent-purple',
              'bg-accent-cyan',
              'bg-purple-400',
              'bg-cyan-400',
              'bg-violet-400',
            ];
            const colorClass = colors[i % colors.length];
            
            return (
              <motion.div
                key={`star-${i}`}
                className={`absolute w-1.5 h-1.5 ${colorClass} rounded-full shadow-lg`}
                style={{
                  left: `${randomLeft}%`,
                  top: `${randomTop}%`,
                  boxShadow: i % 2 === 0 
                    ? '0 0 10px rgba(139, 92, 246, 0.6)' 
                    : '0 0 10px rgba(6, 182, 212, 0.6)',
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.5, 0.8],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                }}
              />
            );
          })
        , [])}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block text-lg md:text-xl text-gray-400">
            Hey, I'm
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
        >
          <span className="text-gradient inline-block">
            Meet Chaudhary
          </span>
          <motion.span
            className="inline-block ml-4"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            👋
          </motion.span>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-shimmer"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-12 leading-relaxed min-h-[120px] md:min-h-[100px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentPhraseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center"
            >
              {displayedText.split(' ').map((word, index) => {
                // Create gradient colors that match the background theme
                const gradients = [
                  'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent-purple',
                  'text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-blue-400',
                  'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500',
                  'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-accent-cyan',
                  'text-gray-300',
                ];
                
                // Assign gradient based on word index
                const gradientClass = gradients[index % gradients.length];
                
                return (
                  <motion.span
                    key={`${currentPhraseIndex}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className={`${gradientClass} font-semibold`}
                  >
                    {word}{' '}
                  </motion.span>
                );
              })}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <motion.a
            href="#projects"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="px-8 py-4 glass rounded-full font-semibold relative overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🌟
                </motion.span>
                View My Work
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan opacity-0 group-hover:opacity-20 transition-opacity"
              />
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300 -z-10"
            />
          </motion.a>

          <motion.a
            href="#contact"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="px-8 py-4 bg-gradient-to-r from-accent-purple via-purple-600 to-accent-cyan rounded-full font-semibold shadow-lg relative overflow-hidden">
              {/* Shine animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <motion.span
                  animate={{ 
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                >
                  ✨
                </motion.span>
              </span>
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
