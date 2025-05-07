import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="-mx-5 -my-2 flex flex-wrap justify-center"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                {item.name}
              </a>
            </div>
          ))}
        </motion.nav>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700"
        >
          <p className="text-center text-base text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Mamunur Siddique. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}