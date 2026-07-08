import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_PROJECTS } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export default function OurWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <div className="w-full bg-[#050505] text-white pt-[120px] pb-24 min-h-screen relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
        
        {/* Page Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 mt-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-[6px] h-[6px] rounded-full bg-brand-accent shrink-0"></div>
            <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/50">
              Selected Projects
            </span>
          </div>
          <h1 className="text-[48px] md:text-[72px] xl:text-[88px] font-[800] tracking-[-0.04em] leading-[1.1] mb-6">
            Products we've <span className="text-brand-accent">built.</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-white/60 max-w-[600px] mx-auto leading-[1.6]">
            Explore our complete portfolio of scalable mobile applications, premium web platforms, and intelligent AI solutions.
          </p>
        </motion.div>

        {/* Projects Grid - Premium Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ALL_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="group relative h-[450px] md:h-[500px] bg-[#0a0a0f] border border-white/5 hover:border-brand-accent/40 rounded-[32px] overflow-hidden cursor-pointer transition-colors duration-500"
            >
              {/* Background Image Area */}
              <div className="absolute inset-0 p-8 pb-32 flex items-center justify-center bg-gradient-to-b from-[#111] to-[#050505]">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-contain group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </div>

              {/* Bottom Glass Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 bg-gradient-to-t from-[#000] via-[#000]/80 to-transparent flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[13px] font-bold tracking-[0.15em] text-brand-accent uppercase mb-3 drop-shadow-md">
                      {project.category}
                    </p>
                    <h3 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Hover Action Button */}
                  <div className="w-14 h-14 rounded-full bg-white text-brand-accent flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 shrink-0 shadow-[0_0_30px_rgba(230,57,70,0.3)]">
                    <ArrowUpRight className="w-7 h-7" />
                  </div>
                </div>

                {/* Tech Tags - Slide in on hover */}
                <div className="flex flex-wrap gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[12px] font-medium text-white/90">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </div>
  );
}
