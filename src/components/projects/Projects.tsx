import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const filters = [
    { id: 'all', label: '🔥 All Projects' },
    { id: 'web', label: '💻 Web Dev' },
    { id: 'mobile', label: '📱 Mobile' },
    { id: 'design', label: '🎨 Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(activeFilter)
        )
      );

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900" id="projects">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-900/20"
          style={{ opacity }}
        />
        <motion.div 
          className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-100/30 blur-3xl dark:bg-blue-900/20"
          style={{ opacity }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-primary-400 dark:to-blue-400 sm:text-4xl">
              Latest Projects
            </h2>
          </motion.div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Check out some of my recent work! Each project is crafted with 💖 and attention to detail.
          </p>
        </motion.div>

        {/* Project filters */}
        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg dark:from-primary-500 dark:to-blue-500'
                  : 'bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/mamunur-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-600 to-blue-600 px-8 py-3 text-white shadow-lg transition-all hover:shadow-xl dark:from-primary-500 dark:to-blue-500"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More on GitHub</span>
            <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}