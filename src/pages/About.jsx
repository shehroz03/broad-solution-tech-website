import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TEAM = [
  {
    role: "Co-Founder & CTO",
    name: "Shehroz Shafiq",
    title: "Technical Director",
    exp: "3+ YEARS",
    skills: ["React", "Node.js", "Python", "Full Stack"],
    img: "/src/assets/shehroz.jpeg",
    linkedin: "https://www.linkedin.com/in/chshehrozshafiq/"
  },
  {
    role: "Co-Founder",
    name: "Mubashir Shafiq",
    title: ".NET Engineer",
    exp: "6+ YEARS",
    skills: ["C#", ".NET", "Enterprise"],
    img: "/src/assets/mubashir.png",
    linkedin: "https://www.linkedin.com/in/mubashirshafiq/"
  },
  {
    role: "Co-Founder",
    name: "Asim Yaqoob",
    title: "Web Developer",
    exp: "3+ YEARS",
    skills: ["Frontend", "Backend", "Full Stack"],
    img: "/src/assets/asim.png",
    linkedin: "https://www.linkedin.com/in/mian-asim-yaqoob-46580b334/"
  },
  {
    role: "Developer",
    name: "Usman Shan",
    title: "Software Developer",
    exp: "3+ YEARS",
    skills: ["Web Dev", "Programming"],
    img: "/src/assets/usman.png"
  },
  {
    role: "Engineer",
    name: "Yaseen Liaqat",
    title: "Full-Stack & Data Engineer",
    exp: "3+ YEARS",
    skills: [".NET", "React", "Data Analytics"],
    img: "/src/assets/yaseen.png"
  },
  {
    role: "Data Science",
    name: "Fasih Malhi",
    title: "ML Engineer",
    exp: "2+ YEARS",
    skills: ["PyTorch", "TensorFlow", "ML / AI"],
    img: "/src/assets/fasih.png"
  },
  {
    role: "Security",
    name: "Waleed",
    title: "Cybersecurity Expert",
    exp: "3+ YEARS",
    skills: ["Pentesting", "Cyber Defense"],
    img: "/src/assets/waleed.png"
  },
  {
    role: "QA",
    name: "Attaullah",
    title: "QA Engineer & Tester",
    exp: "3+ YEARS",
    skills: ["QA", "Testing", "Bug Tracking"],
    img: "/src/assets/atta.png"
  }
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="w-full bg-[#050505] text-white pt-[120px] pb-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
        
        {/* Scattered Avatar Hero */}
        <div className="relative w-full h-[600px] md:h-[750px] flex items-center justify-center mb-12 mt-4 overflow-hidden rounded-[40px] bg-white/5 border border-white/10">
          
          {/* Background Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[400px] bg-brand-accent/20 blur-[100px] rounded-full"></div>
          </div>

          {/* Center Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center max-w-[600px] px-6 bg-[#050505]/60 backdrop-blur-md p-10 rounded-3xl border border-white/10"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-[8px] h-[8px] rounded-full bg-brand-accent shrink-0 shadow-[0_0_10px_#e63946]"></div>
              <span className="text-[14px] font-bold uppercase tracking-[0.15em] text-white/70">
                Broad Solution Tech
              </span>
            </div>
            <h1 className="text-[56px] md:text-[80px] font-[800] tracking-[-0.04em] leading-[1.1] mb-6">
              Meet the <span className="text-brand-accent">Team</span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-white/60 leading-[1.6] mb-10">
              The elite engineers, designers, and strategists dedicated to building your digital future.
            </p>
            <a href="#team" className="inline-block px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(230,57,70,0.3)]">
              Learn More
            </a>
          </motion.div>

          {/* Floating Avatars */}
          {TEAM.map((member, idx) => {
            const positions = [
              "top-[8%] left-[2%] md:left-[12%] w-[90px] h-[110px] md:w-[150px] md:h-[200px]",
              "top-[45%] left-[-2%] md:left-[4%] w-[80px] h-[100px] md:w-[130px] md:h-[170px]",
              "bottom-[5%] left-[8%] md:left-[18%] w-[100px] h-[120px] md:w-[160px] md:h-[210px]",
              "top-[12%] right-[5%] md:right-[15%] w-[100px] h-[120px] md:w-[160px] md:h-[210px]",
              "top-[50%] right-[0%] md:right-[5%] w-[80px] h-[100px] md:w-[140px] md:h-[180px]",
              "bottom-[8%] right-[12%] md:right-[22%] w-[90px] h-[110px] md:w-[150px] md:h-[200px]",
              "top-[3%] left-[42%] md:left-[35%] w-[60px] h-[80px] md:w-[100px] md:h-[130px] opacity-60 hover:opacity-100",
              "bottom-[3%] right-[42%] md:right-[35%] w-[70px] h-[90px] md:w-[110px] md:h-[150px] opacity-60 hover:opacity-100"
            ];
            const startX = idx % 2 === 0 ? -50 : 50;
            return (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 50, x: startX }} 
                animate={{ opacity: 1, y: 0, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                onClick={() => setSelectedMember(member)}
                className={`absolute ${positions[idx]} rounded-[24px] overflow-hidden border border-white/10 shadow-2xl z-0 bg-[#0a0a0f] cursor-pointer hover:scale-105 hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(230,57,70,0.3)] transition-all duration-300 group hover:z-20`}
              >
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
            );
          })}

        </div>

        {/* Modal for Team Member */}
        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={() => setSelectedMember(null)}
                className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md cursor-pointer"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-[#0a0a0f] border border-white/10 rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden max-w-[400px] w-full z-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-20"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 1l12 12m0-12L1 13" />
                  </svg>
                </button>

                <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-brand-accent/20 to-transparent pointer-events-none"></div>

                <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white/10 mb-6 relative z-10 shadow-[0_0_20px_rgba(230,57,70,0.2)]">
                  <img src={selectedMember.img} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>

                <span className="text-[12px] font-bold tracking-[0.2em] text-brand-accent uppercase mb-2 relative z-10">
                  {selectedMember.role}
                </span>
                <h3 className="text-[28px] font-bold mb-1 tracking-tight text-white relative z-10">{selectedMember.name}</h3>
                <p className="text-[16px] text-white/60 mb-4 relative z-10">{selectedMember.title}</p>
                
                <div className="text-[12px] font-bold text-white/50 tracking-wider mb-8 flex items-center justify-center gap-2 relative z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                  {selectedMember.exp}
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
                  {selectedMember.skills.map(skill => (
                    <span key={skill} className="text-[13px] px-4 py-1.5 bg-white/5 rounded-full text-white/80 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>

                {selectedMember.linkedin && (
                  <a 
                    href={selectedMember.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 px-6 py-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-full transition-colors z-20 shadow-lg"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
