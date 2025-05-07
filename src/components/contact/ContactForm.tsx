import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        Drop a message
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Got a project in mind? Let's make it happen! ✨
      </p>

      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 rounded-lg bg-green-50 p-6 text-center dark:bg-green-900/30"
        >
          <svg className="mx-auto h-12 w-12 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h4 className="mt-4 text-lg font-medium text-green-800 dark:text-green-200">Message sent successfully!</h4>
          <p className="mt-2 text-green-700 dark:text-green-300">Thanks for reaching out. I'll get back to you soon.</p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="text"
              id="name"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="What should I call you?"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="email"
              id="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="Where can I reach you?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder="Tell me about your project or idea..."
            />
          </div>
          <motion.button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-primary-600 to-blue-600 px-6 py-3 text-white shadow-lg transition-all hover:shadow-xl dark:from-primary-500 dark:to-blue-500"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Send Message
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            )}
          </motion.button>
        </motion.form>
      )}
    </motion.div>
  );
}