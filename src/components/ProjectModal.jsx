import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-[1200px] max-h-[90vh] bg-[#0a0a0f] border border-white/10 rounded-[24px] overflow-hidden flex flex-col shadow-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 shrink-0">
            <div>
              <p className="text-[12px] font-bold tracking-[0.15em] text-brand-accent uppercase mb-2">
                {project.category}
              </p>
              <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-none">
                {project.title}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Left Column: Images */}
              <div className="w-full lg:w-[55%] flex flex-col gap-4">
                {/* Main Image */}
                <div className="w-full h-[300px] md:h-[450px] bg-black rounded-[16px] overflow-hidden border border-white/5">
                  <img 
                    src={project.images[activeImage]} 
                    alt={project.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Thumbnails */}
                {project.images.length > 1 && (
                  <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                    {project.images.map((img, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`relative w-[100px] h-[75px] shrink-0 rounded-[8px] overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-brand-accent' : 'border-transparent hover:border-white/20'}`}
                      >
                        <img src={img} className="w-full h-full object-cover" alt="" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Details */}
              <div className="w-full lg:w-[45%] flex flex-col text-white/80 space-y-8">
                
                {/* Description */}
                <div>
                  <h3 className="text-[20px] font-bold text-white mb-3">Overview</h3>
                  <p className="text-[16px] leading-[1.6]">{project.desc}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-[20px] font-bold text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[13px] font-medium text-white/90">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-[20px] font-bold text-white mb-3">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="text-[15px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study */}
                {project.challenge && (
                  <div className="bg-white/5 border border-white/10 rounded-[16px] p-6 space-y-6">
                    <div>
                      <h4 className="text-[16px] font-bold text-brand-accent mb-2">The Challenge</h4>
                      <p className="text-[14px] leading-[1.6]">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-brand-accent mb-2">Our Solution</h4>
                      <p className="text-[14px] leading-[1.6]">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-brand-accent mb-2">The Result</h4>
                      <p className="text-[14px] leading-[1.6]">{project.result}</p>
                    </div>
                  </div>
                )}

                {/* Actions */}
                {project.actions && project.actions.length > 0 && (
                  <div className="pt-4 flex flex-wrap gap-4">
                    {project.actions.map((action, idx) => {
                      const isGithub = action.label.toLowerCase().includes('github');
                      return (
                        <a 
                          key={idx}
                          href={action.link}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-colors ${
                            isGithub 
                              ? 'bg-white/5 hover:bg-white/10 text-white border border-white/20' 
                              : 'bg-brand-accent hover:bg-brand-accent/90 text-white'
                          }`}
                        >
                          {isGithub ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          ) : null}
                          {action.label}
                          {!isGithub && <ArrowRight className="w-4 h-4" />}
                        </a>
                      );
                    })}
                  </div>
                )}

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
