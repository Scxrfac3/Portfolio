import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/experience';

export default function Experience() {
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
          Experience
        </motion.h2>
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

function TimelineItem({ job, index }: { job: typeof experience[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-16"
    >
      <div className="absolute left-[29px] -translate-x-1/2 h-5 w-5">
        <div className="h-full w-full rounded-full border-4 border-primary-100 bg-white dark:border-gray-800 dark:bg-gray-900" />
      </div>

      <motion.div
        className="rounded-2xl bg-primary-50 p-8 dark:bg-gray-800"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
          {job.title}
        </h3>
        <p className="mt-1 text-primary-600 dark:text-primary-400">
          {job.company} | {job.duration}
        </p>
        <ul className="mt-4 space-y-2">
          {job.achievements.map((achievement, achievementIndex) => (
            <motion.li
              key={achievementIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
              className="flex items-start text-primary-800 dark:text-gray-300"
            >
              <svg className="mr-2 mt-1.5 h-4 w-4 flex-shrink-0 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {achievement}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}