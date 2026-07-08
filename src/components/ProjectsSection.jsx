import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROJECTS = [
  {
    id: 'socialvibing',
    title: 'SocialVibing',
    category: 'Mobile Application',
    desc: 'A next-generation social platform connecting creators and audiences. Built with React Native and a high-concurrency Node.js backend to handle real-time interactions flawlessly.',
    image: '/assets/images/projects/socialvibing.jpg.png',
    tech: ['React Native', 'Node.js', 'Socket.io'],
    bgColor: 'bg-[#F2F4F7]',
    textColor: 'text-[#101828]',
  },
  {
    id: 'scholariq',
    title: 'ScholarIQ',
    category: 'AI SaaS Platform',
    desc: 'An intelligent dashboard powered by advanced LLMs that transforms raw academic data into actionable insights for researchers.',
    image: '/assets/images/projects/scholariq (1).png',
    tech: ['Next.js', 'Python', 'OpenAI'],
    bgColor: 'bg-[#101828]',
    textColor: 'text-white',
  }
];

export default function ProjectsSection() {
  return (
    <section className="bg-white py-24 md:py-32" id="work">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-[600px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-text-primary/5 text-text-primary text-[13px] font-semibold mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
              <span>SELECTED WORK</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[56px] font-[800] tracking-[-0.03em] leading-[1.1] text-text-primary"
            >
              Products we've built.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/our-work"
              className="group flex items-center justify-center gap-2 text-[15px] font-bold text-text-primary transition-all duration-300 hover:text-brand-accent bg-transparent border border-black/10 hover:border-brand-accent/30 hover:bg-brand-accent/5 px-6 py-3 rounded-full"
            >
              View All 15+ Projects
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Main Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`col-span-1 lg:col-span-7 rounded-[32px] overflow-hidden ${PROJECTS[0].bgColor} flex flex-col relative group`}
          >
             <div className="p-8 md:p-12 lg:p-16 flex-1 flex flex-col">
                <p className={`text-[14px] font-bold tracking-widest uppercase mb-4 opacity-60 ${PROJECTS[0].textColor}`}>{PROJECTS[0].category}</p>
                <h3 className={`text-[32px] md:text-[40px] font-bold mb-6 ${PROJECTS[0].textColor}`}>{PROJECTS[0].title}</h3>
                <p className={`text-[16px] md:text-[18px] leading-[1.6] opacity-80 mb-8 max-w-[500px] ${PROJECTS[0].textColor}`}>
                  {PROJECTS[0].desc}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                  {PROJECTS[0].tech.map(t => (
                    <span key={t} className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-black/5 text-[14px] font-medium text-black">
                      {t}
                    </span>
                  ))}
                </div>
             </div>
             
             <div className="w-full pt-12 mt-auto relative translate-y-8 group-hover:translate-y-4 transition-transform duration-700 ease-out">
                <img src={PROJECTS[0].image} alt={PROJECTS[0].title} className="w-full h-auto object-cover rounded-t-[24px] shadow-2xl" />
             </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 md:gap-8">
             
             {/* Top Right Card */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className={`flex-1 rounded-[32px] overflow-hidden ${PROJECTS[1].bgColor} flex flex-col relative group`}
             >
                <div className="p-8 md:p-12 flex-1 flex flex-col relative z-20">
                   <p className={`text-[13px] font-bold tracking-widest uppercase mb-4 opacity-60 ${PROJECTS[1].textColor}`}>{PROJECTS[1].category}</p>
                   <h3 className={`text-[28px] font-bold mb-4 ${PROJECTS[1].textColor}`}>{PROJECTS[1].title}</h3>
                   <p className={`text-[15px] leading-[1.6] opacity-80 mb-8 ${PROJECTS[1].textColor}`}>
                     {PROJECTS[1].desc}
                   </p>
                   <div className="flex flex-wrap gap-2 mt-auto">
                     {PROJECTS[1].tech.map(t => (
                       <span key={t} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[13px] font-medium text-white">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>
                
                {/* Image overlay style for dark card */}
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 translate-y-12 translate-x-12 group-hover:translate-y-8 group-hover:translate-x-8 transition-transform duration-700 ease-out z-10 opacity-60 mix-blend-screen">
                  <img src={PROJECTS[1].image} alt={PROJECTS[1].title} className="w-full h-full object-cover object-left-top rounded-tl-[24px]" />
                </div>
                {/* Gradient to fade bottom of text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101828] via-transparent to-transparent z-10"></div>
             </motion.div>

             {/* Bottom Right CTA Card */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="h-[250px] rounded-[32px] bg-brand-accent text-white group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
             >
                <Link to="/contact" className="w-full h-full p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[24px] font-bold mb-2">Have a similar project?</h3>
                    <p className="text-[16px] text-white/80">Let's discuss how we can engineer your vision.</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                    <span className="font-semibold">Start the conversation</span>
                  </div>
                </Link>
             </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
