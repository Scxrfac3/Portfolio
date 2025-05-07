import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(26, 35, 126, 0)', 'rgba(26, 35, 126, 0.9)']
  );
  
  const gradientOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 1]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md transition-all duration-300"
        style={{
          backgroundColor: headerBg,
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#1a237e] to-[#3f51b5]"
          style={{ opacity: gradientOpacity }}
        />
        
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="group flex items-center text-2xl font-bold"
            >
              <motion.span 
                className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                MS
              </motion.span>
            </Link>
          </motion.div>

          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-6 md:flex">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NavLink href={item.href}>{item.label}</NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <ThemeToggle />
              
              <button
                className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-50 bg-gradient-to-r from-[#1a237e] to-[#3f51b5] backdrop-blur-lg md:hidden"
          >
            <div className="space-y-1 px-4 py-5">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}