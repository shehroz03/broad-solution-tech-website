import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "What services do you offer?",
    answer: "We offer end-to-end digital solutions including Web & Mobile App Development, UI/UX Design, Custom Software Development, Cloud Architecture, and SEO services."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A standard web application might take 4-8 weeks, while enterprise solutions can take 3-6 months. We provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer maintenance and support packages to ensure your application remains secure, up-to-date, and continues to perform optimally as your user base grows."
  },
  {
    question: "What is your development process?",
    answer: "Our process includes Discovery & Planning, UI/UX Design, Agile Development (with regular sprint updates), QA Testing, Deployment, and Post-Launch Support."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-[80px] bg-bg-canvas dark:bg-[#101214]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-[800] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-[17px]">
            Have a question? We're here to help.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border-subtle bg-white dark:bg-[#1A1C20] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
