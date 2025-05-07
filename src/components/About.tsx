import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('background');

  const tabs = [
    { id: 'background', label: 'Background' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'approach', label: 'Approach' },
    { id: 'values', label: 'Values' }
  ];

  return (
    <section id="about" className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Transforming ideas into exceptional digital experiences with a focus on innovation, usability, and performance.
          </p>
        </motion.div>

        <div className="mt-12">
          <div className="flex flex-wrap justify-center space-x-2 border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative mb-[-1px] inline-block rounded-t-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'border-b-2 border-primary-500 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                    : 'text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-500 dark:bg-primary-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeTab === 'background' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 md:grid-cols-2"
              >
                <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-800">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                    Professional Journey
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    With a BSc in Computer Science from Middlesex University, London, I've cultivated a diverse career spanning web development, digital marketing, and driving instruction. My technical expertise combined with creative problem-solving enables me to deliver solutions that are both functional and engaging.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    I continuously stay current with industry trends and maintain a keen focus on achieving both personal and organizational objectives, ensuring that every project I undertake exceeds expectations.
                  </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-primary-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-800">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                    Education & Certifications
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">BSc in Computer Science, Middlesex University, London</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">Advanced Web Development Certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">Digital Marketing Specialist Certification</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'expertise' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 md:grid-cols-2"
              >
                <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-800">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                    Technical Proficiency
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">Front-end development with React.js and modern JavaScript</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">Responsive design and cross-platform compatibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">UI/UX design principles and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">Performance optimization and best practices</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-primary-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-800">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                    Digital Marketing Skills
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">Social media strategy and content creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">Analytics and data-driven decision making</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">Conversion optimization and user engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">Brand development and audience targeting</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'approach' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 md:grid-cols-2"
              >
                <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-800">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                    My Development Philosophy
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    I believe in creating digital experiences that not only look great but also deliver measurable results. My approach combines technical excellence with strategic thinking to ensure that every project aligns with business objectives while providing exceptional user experiences.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    By focusing on the intersection of aesthetics and functionality, I create solutions that engage users while driving business growth. This balanced approach has consistently delivered successful outcomes for clients across various industries.
                  </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-primary-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-800">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                    My Working Process
                  </h3>
                  <ol className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        1
                      </span>
                      <div>
                        <span className="font-medium text-gray-800 dark:text-white">Discovery</span>
                        <p className="text-gray-600 dark:text-gray-300">Understanding your goals, audience, and requirements</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        2
                      </span>
                      <div>
                        <span className="font-medium text-gray-800 dark:text-white">Strategy</span>
                        <p className="text-gray-600 dark:text-gray-300">Developing a tailored approach to meet your objectives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        3
                      </span>
                      <div>
                        <span className="font-medium text-gray-800 dark:text-white">Execution</span>
                        <p className="text-gray-600 dark:text-gray-300">Building with precision, quality, and attention to detail</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        4
                      </span>
                      <div>
                        <span className="font-medium text-gray-800 dark:text-white">Refinement</span>
                        <p className="text-gray-600 dark:text-gray-300">Testing, optimizing, and iterating for best results</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </motion.div>
            )}

            {activeTab === 'values' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 md:grid-cols-2"
              >
                <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-800">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                    What I Value
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300"><strong>Quality:</strong> Delivering excellence in every aspect of my work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300"><strong>Innovation:</strong> Embracing new technologies and approaches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300"><strong>Integrity:</strong> Maintaining transparency and honesty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300"><strong>Collaboration:</strong> Working together to achieve shared goals</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-primary-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-800">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                    What Sets Me Apart
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    My dual expertise in both technical development and digital marketing gives me a unique perspective on digital projects. This allows me to bridge the gap between aesthetics and functionality, creating solutions that not only look great but also drive measurable results.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    I approach each project with a strategic mindset, focusing on how the technical implementation can support broader business goals. This holistic approach ensures that the solutions I deliver are not just technically sound, but also aligned with your organization's objectives.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary-500/10 to-blue-500/10 p-8 dark:from-primary-900/30 dark:to-blue-900/30"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Ready to collaborate?</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Let's discuss how my skills and experience can benefit your team.</p>
            </div>
            <motion.a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-600 to-blue-600 px-6 py-3 text-white shadow-lg transition-all hover:shadow-xl dark:from-primary-500 dark:to-blue-500"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}