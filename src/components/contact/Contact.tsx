import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import { SocialLinks } from '../../data/social';
import { supabase } from '../../lib/supabase';

interface ContactReason {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function Contact() {
  const [contactReasons, setContactReasons] = useState<ContactReason[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContactReasons() {
      try {
        const { data, error } = await supabase
          .from('contact_reasons')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) {
          console.error('Error fetching contact reasons:', error);
          return;
        }

        setContactReasons(data || []);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchContactReasons();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-gray-900" id="contact">
      <div className="absolute inset-0">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-900/20" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Let's Create Something <span className="text-primary-600 dark:text-primary-400">Amazing</span> Together
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Ready to turn ideas into reality? I'm just a message away. Let's build the future!
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 p-8 dark:from-gray-800 dark:to-gray-900"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Why Connect With Me?
            </h3>
            <ul className="mt-6 space-y-4">
              {loading ? (
                // Loading skeleton
                [...Array(3)].map((_, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <div className="mr-3 h-6 w-6 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                  </motion.li>
                ))
              ) : (
                contactReasons.map((reason, index) => (
                  <motion.li
                    key={reason.id}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={reason.icon} />
                      </svg>
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">{reason.description}</span>
                  </motion.li>
                ))
              )}
            </ul>
            
            <div className="mt-8 space-y-6">
              <a
                href="mailto:Mamunur_Siddique@hotmail.co.uk"
                className="flex items-center text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                <svg className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="ml-3">Mamunur_Siddique@hotmail.co.uk</span>
              </a>
              
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white">Let's connect</h4>
                <div className="mt-4 flex space-x-4">
                  <SocialLinks />
                </div>
              </div>
            </div>

            <motion.div 
              className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 opacity-20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}