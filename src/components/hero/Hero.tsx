import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SocialLinks } from '../../data/social';
import HeroImage from './HeroImage';

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const heroTexts = [
    "DIGITAL CREATOR",
    "WEB DEVELOPER",
    "UI DESIGNER",
    "CONTENT MAKER"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-900/20" />
        
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 bg-grid-white/[0.03] bg-[size:20px_20px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-32">
        {/* Top Bar */}
        <motion.div 
          className="mb-16 flex justify-between text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>Based in London, United Kingdom</span>
          <span>Available for freelance work</span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden">
                <motion.div
                  key={currentText}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 dark:from-fuchsia-400 dark:to-blue-400"
                >
                  {heroTexts[currentText].split('').map((letter, i) => (
                    <motion.span
                      key={`${letter}-${i}`}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-4 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {["#React", "#WebDev", "#UI/UX", "#Content"].map((tag, index) => (
                  <span 
                    key={tag} 
                    className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-600 dark:bg-primary-900/50 dark:text-primary-400"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="mt-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I support designers and agencies with creative development, specializing in building exceptional digital experiences that combine aesthetics with functionality. With expertise in web development and social media marketing, I create solutions that engage and convert.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="mt-12 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 px-8 py-4 text-white shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's collaborate</span>
                <motion.div 
                  className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-blue-600 to-fuchsia-600"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.div className="flex gap-4">
                <SocialLinks />
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image with interactive elements */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-fuchsia-600/20 to-blue-600/20 blur-3xl dark:from-fuchsia-900/30 dark:to-blue-900/30" />
            <motion.div 
              className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-900 ring-4 ring-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/profile-new.png"
                alt="Mamunur Siddique"
                className="h-full w-full object-cover object-center"
              />
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -right-4 top-10 rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Available for work</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 bottom-10 rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">5+ years experience</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Scroll to explore</span>
            <motion.div 
              className="h-12 w-0.5 bg-gray-300 dark:bg-gray-700"
              animate={{ 
                scaleY: [1, 0.5, 1],
                originY: 0,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}