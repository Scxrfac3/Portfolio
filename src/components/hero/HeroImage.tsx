import { motion } from 'framer-motion';

export default function HeroImage() {
  return (
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
          src="/profile-new.png"
          alt="Mamunur Siddique"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
    </motion.div>
  );
}