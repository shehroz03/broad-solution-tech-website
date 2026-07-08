import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: "15+", label: "Projects Delivered" },
  { value: "150K+", label: "Lines of Code" }, // Added a fun tech stat to balance it out
  { value: "15+", label: "Clients Served" },
];

const TECHNOLOGIES = [
  "React", "Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "Flutter", "React Native", "TensorFlow", "PyTorch", "OpenAI", ".NET", "C#"
];

export default function TrustSection() {
  return (
    <section className="bg-[#0B0B0F] text-white py-24 md:py-36 overflow-hidden relative border-t border-[#1F1F24]">
      {/* Stats Grid */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8 mb-24">
        {STATS.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center w-full md:w-1/3">
             <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
               className="text-[72px] md:text-[96px] font-[800] leading-none tracking-[-0.04em] mb-4"
             >
               {stat.value}
             </motion.h2>
             <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 + (idx * 0.1), duration: 0.6 }}
               className="text-[18px] md:text-[20px] font-semibold text-white/70 tracking-tight"
             >
               {stat.label}
             </motion.p>
          </div>
        ))}
      </div>
      
      {/* Separator Line */}
      <div className="w-full max-w-[900px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-24"></div>

      {/* Technologies Marquee */}
      <div className="flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[13px] text-white/40 uppercase tracking-[0.25em] mb-12 font-bold"
        >
          Engineering powerful systems with
        </motion.p>
        
        <div className="w-full relative flex overflow-hidden">
           {/* Shadow Gradients for fading edges */}
           <div className="absolute left-0 top-0 w-[100px] md:w-[250px] h-full bg-gradient-to-r from-[#0B0B0F] to-transparent z-10 pointer-events-none"></div>
           <div className="absolute right-0 top-0 w-[100px] md:w-[250px] h-full bg-gradient-to-l from-[#0B0B0F] to-transparent z-10 pointer-events-none"></div>
           
           <motion.div 
             className="flex items-center whitespace-nowrap"
             animate={{ x: ["0%", "-50%"] }}
             transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
           >
             {/* Block 1 */}
             <div className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
                {TECHNOLOGIES.map((tech, i) => (
                  <span key={`1-${i}`} className="text-[32px] md:text-[48px] font-bold text-white/10 hover:text-white/60 transition-colors duration-300 cursor-default">
                    {tech}
                  </span>
                ))}
             </div>
             {/* Block 2 (Duplicate for seamless loop) */}
             <div className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
                {TECHNOLOGIES.map((tech, i) => (
                  <span key={`2-${i}`} className="text-[32px] md:text-[48px] font-bold text-white/10 hover:text-white/60 transition-colors duration-300 cursor-default">
                    {tech}
                  </span>
                ))}
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
