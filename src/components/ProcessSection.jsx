import React from 'react';
import { motion } from 'framer-motion';

const PHASES = [
  { 
    id: '01', 
    title: 'Discovery & Strategy', 
    desc: 'We start by deeply understanding your business goals. This involves rigorous requirement analysis, strategic market mapping, and identifying technical constraints before a single line of code is written.', 
    image: '/assets/images/projects/artgallery.png',
    accent: '#E63946'
  },
  { 
    id: '02', 
    title: 'UX/UI Craftsmanship', 
    desc: 'Our design team transforms complex workflows into intuitive, high-end interfaces. We deliver comprehensive wireframes, interactive prototypes, and production-ready design systems.', 
    image: '/assets/images/projects/scholariq (1).png',
    accent: '#3b82f6'
  },
  { 
    id: '03', 
    title: 'Agile Engineering', 
    desc: 'The core execution phase. Our engineers build scalable full-stack applications with integrated CI/CD pipelines, automated QA testing, and rigorous code reviews to ensure flawless performance.', 
    image: '/assets/images/projects/tourease.jpg',
    accent: '#10b981'
  },
  { 
    id: '04', 
    title: 'Launch & Scale', 
    desc: 'We deploy your product securely to the cloud. But we do not stop there. We provide continuous monitoring, performance tuning, and long-term technical partnership to scale your infrastructure as you grow.', 
    image: '/assets/images/projects/voteoffside (1).png',
    accent: '#8b5cf6'
  },
];

export default function ProcessSection() {
  return (
    <section className="relative bg-[#050505] text-white py-24 md:py-40 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Left Side: Sticky Header */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-40 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-[6px] h-[6px] rounded-full bg-brand-accent shrink-0"></div>
                <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/50">
                  Engineering Process
                </span>
              </div>
              <h2 className="text-[40px] md:text-[56px] font-[800] tracking-[-0.03em] leading-[1.1] mb-6">
                How we deliver<br/><span className="text-brand-accent">excellence.</span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-white/50 leading-[1.6] max-w-[400px]">
                A battle-tested, 4-step engineering framework designed to eliminate technical debt and accelerate your time to market.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Naturally Scrolling Cards */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8 md:gap-12 relative z-20">
            {PHASES.map((phase, idx) => (
              <PhaseCard key={phase.id} phase={phase} index={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function PhaseCard({ phase, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="bg-[#0a0a0f] border border-white/10 rounded-[32px] overflow-hidden p-6 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 md:gap-12 items-center relative"
    >
      {/* Background Subtle Glow based on accent */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] blur-[100px] rounded-full pointer-events-none opacity-20"
        style={{ backgroundColor: phase.accent }}
      ></div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col relative z-10">
        <span 
          className="text-[64px] md:text-[96px] font-[900] leading-[0.8] mb-6 tracking-tighter opacity-20"
          style={{ color: phase.accent }}
        >
          {phase.id}
        </span>
        <h3 className="text-[24px] md:text-[32px] font-bold mb-4 tracking-tight text-white">
          {phase.title}
        </h3>
        <p className="text-[15px] md:text-[16px] text-white/60 leading-[1.6]">
          {phase.desc}
        </p>
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/2 relative h-[250px] md:h-[320px] rounded-[20px] overflow-hidden bg-black/50 border border-white/5 flex items-center justify-center group z-10 p-4">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
        <img 
          src={phase.image} 
          alt={phase.title}
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 relative z-0"
        />
      </div>
    </motion.div>
  );
}
