import { motion } from 'framer-motion';
import { SocialLinks } from '../data/social';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-900/20" />
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-[8rem] font-bold leading-none tracking-tighter text-primary-900 dark:text-white">
                CREATIVE
                <br />
                DEVELOPER
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="mt-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I support designers and agencies with creative development, specializing in building exceptional digital experiences that combine aesthetics with functionality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="mt-12 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="mailto:Mamunur_Siddique@hotmail.co.uk"
                className="group relative overflow-hidden rounded-full bg-primary-900 px-8 py-4 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's work together</span>
                <div className="absolute inset-0 z-0 bg-primary-700 transition-transform duration-300 group-hover:translate-y-full" />
              </motion.a>
              
              <motion.div className="flex gap-4">
                <SocialLinks />
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute -inset-4 rounded-2xl bg-primary-100/50 blur-3xl dark:bg-primary-900/30" />
            <motion.div 
              className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-900"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/profile.jpg"
                alt="Mamunur Siddique"
                className="h-full w-full object-cover object-center"
              />
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