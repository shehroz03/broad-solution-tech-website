import React from 'react';
import { motion } from 'framer-motion';

const PHASES = [
  { id: '01', title: 'Discovery & Strategy', desc: 'We start by deeply understanding your business goals. This involves rigorous requirement analysis, strategic market mapping, and identifying technical constraints before a single line of code is written.', image: '/assets/images/projects/artgallery.png' },
  { id: '02', title: 'UX/UI Craftsmanship', desc: 'Our design team transforms complex workflows into intuitive, high-end interfaces. We deliver comprehensive wireframes, interactive prototypes, and production-ready design systems.', image: '/assets/images/projects/scholariq (1).png' },
  { id: '03', title: 'Agile Engineering', desc: 'The core execution phase. Our engineers build scalable full-stack applications with integrated CI/CD pipelines, automated QA testing, and rigorous code reviews to ensure flawless performance.', image: '/assets/images/projects/tourease.jpg' },
  { id: '04', title: 'Launch & Scale', desc: 'We deploy your product securely to the cloud. But we do not stop there. We provide continuous monitoring, performance tuning, and long-term technical partnership to scale your infrastructure as you grow.', image: '/assets/images/projects/voteoffside (1).png' },
];

export default function ProcessSection() {
  return (
    <section className="relative bg-[#08080C] text-white py-24 md:py-32 overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center lg:text-left"
        >
          <h2 className="text-[40px] md:text-[56px] font-[800] tracking-[-0.03em] leading-[1.1] mb-4">
            How we deliver<br/><span className="text-brand-accent">excellence.</span>
          </h2>
          <p className="text-[18px] text-white/50 font-medium">A systematic, 4-step engineering process.</p>
        </motion.div>

        {/* Phases Stack */}
        <div className="flex flex-col gap-24 md:gap-32">
          {PHASES.map((phase, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={phase.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 flex flex-col"
                >
                  <span className="text-[80px] md:text-[120px] font-bold text-white/5 leading-[0.8] mb-6 block font-serif italic">
                    {phase.id}
                  </span>
                  <h3 className="text-[28px] md:text-[36px] font-bold mb-4 tracking-tight">
                    {phase.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-white/60 leading-[1.6] max-w-[480px]">
                    {phase.desc}
                  </p>
                </motion.div>

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full lg:w-1/2 h-[350px] md:h-[500px] relative rounded-[24px] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0f] flex items-center justify-center p-4 md:p-8 group"
                >
                  <img 
                    src={phase.image} 
                    alt={phase.title}
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080C]/50 via-transparent to-transparent pointer-events-none"></div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
