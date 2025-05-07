import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section className="bg-white py-24 dark:bg-gray-900" id="experience">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            My journey in web development, digital marketing, and driving instruction
          </p>
        </motion.div>
        
        <div className="relative mt-16">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-primary-100 dark:bg-gray-800" />
          <div className="space-y-16">
            {experience.map((job, index) => (
              <TimelineItem key={job.title} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}