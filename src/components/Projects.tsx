import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 
          className="text-center text-3xl font-bold tracking-tight text-primary-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl bg-primary-50 p-8 shadow-lg dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-primary-800 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-600 dark:bg-primary-900/50 dark:text-primary-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}