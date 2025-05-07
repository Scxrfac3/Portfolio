import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Here are the technologies and skills I work with
          </p>
        </motion.div>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                {category.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.1 }}
                    className="flex items-center text-primary-700 dark:text-gray-300"
                  >
                    <svg className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}