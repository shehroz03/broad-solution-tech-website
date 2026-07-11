import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import shehrozImg from '../assets/shehroz.jpeg';
import mubashirImg from '../assets/mubashir.png';
import asimImg from '../assets/asim.png';
import usmanImg from '../assets/usman.png';
import yaseenImg from '../assets/yaseen.png';
import fasihImg from '../assets/fasih.png';
import waleedImg from '../assets/waleed.png';
import attaImg from '../assets/atta.png';
import arbazImg from '../assets/arbaz.jpg';

const TEAM = [
  {
    role: "Founder & CEO",
    name: "Arbaz Nasir Virk",
    title: "Founder & CEO",
    exp: "8+ YEARS",
    skills: ["Business Strategy", "Innovation", "Tech Architecture"],
    img: arbazImg,
    linkedin: "https://www.linkedin.com/in/arbaznasirvirk/"
  },
  {
    role: "Co-Founder & CTO",
    name: "Shehroz Shafiq",
    title: "Technical Director",
    exp: "3+ YEARS",
    skills: ["React", "Node.js", "Python", "Full Stack"],
    img: shehrozImg,
    linkedin: "https://www.linkedin.com/in/chshehrozshafiq/"
  },
  {
    role: "Co-Founder",
    name: "Mubashir Shafiq",
    title: ".NET Engineer",
    exp: "6+ YEARS",
    skills: ["C#", ".NET", "Enterprise"],
    img: mubashirImg,
    linkedin: "https://www.linkedin.com/in/mubashirshafiq/"
  },
  {
    role: "Co-Founder",
    name: "Asim Yaqoob",
    title: "Web Developer",
    exp: "3+ YEARS",
    skills: ["Frontend", "Backend", "Full Stack"],
    img: asimImg,
    linkedin: "https://www.linkedin.com/in/mian-asim-yaqoob-46580b334/"
  },
  {
    role: "Developer",
    name: "Usman Shan",
    title: "Software Developer",
    exp: "3+ YEARS",
    skills: ["Web Dev", "Programming"],
    img: usmanImg
  },
  {
    role: "Engineer",
    name: "Yaseen Liaqat",
    title: "Full-Stack & Data Engineer",
    exp: "3+ YEARS",
    skills: [".NET", "React", "Data Analytics"],
    img: yaseenImg
  },
  {
    role: "Data Science",
    name: "Fasih Malhi",
    title: "ML Engineer",
    exp: "2+ YEARS",
    skills: ["PyTorch", "TensorFlow", "ML / AI"],
    img: fasihImg
  },
  {
    role: "Security",
    name: "Waleed",
    title: "Cybersecurity Expert",
    exp: "3+ YEARS",
    skills: ["Pentesting", "Cyber Defense"],
    img: waleedImg
  },
  {
    role: "QA",
    name: "Attaullah",
    title: "QA Engineer & Tester",
    exp: "3+ YEARS",
    skills: ["QA", "Testing", "Bug Tracking"],
    img: attaImg
  }
];

function OrbitingAvatar({ member, index, total, onClick }) {
  // We have 9 avatars total.
  // We will place 4 on the inner ring, and 5 on the outer ring.
  const isInnerRing = index < 4;
  const ringTotal = isInnerRing ? 4 : 5;
  const ringIndex = isInnerRing ? index : index - 4;
  
  // Distribute evenly around 360 degrees on their respective ring
  const startAngle = (360 / ringTotal) * ringIndex;
  
  // Fixed radius for each ring so they form a perfect circle
  const radiusDesktop = isInnerRing ? 300 : 440;
  const radiusMobile = isInnerRing ? 160 : 240;
  
  // Constant duration per ring prevents them from colliding/overlapping
  const duration = isInnerRing ? 50 : 70; 
  
  // Sizes based on ring (inner slightly larger for depth effect)
  const sizeClasses = isInnerRing 
    ? "w-[80px] h-[100px] md:w-[130px] md:h-[170px]" 
    : "w-[70px] h-[90px] md:w-[110px] md:h-[150px]";

  // Margin offsets to perfectly center the avatar at the radius coordinate
  const mtMobile = isInnerRing ? -50 : -45;
  const mlMobile = isInnerRing ? -40 : -35;
  const mtDesktop = isInnerRing ? -85 : -75;
  const mlDesktop = isInnerRing ? -65 : -55;

  return (
    <>
      <style>
        {`
          @keyframes orbit-${index} {
            0% { transform: rotate(${startAngle}deg) translateX(var(--radius-${index})) rotate(-${startAngle}deg); }
            100% { transform: rotate(${startAngle + 360}deg) translateX(var(--radius-${index})) rotate(-${startAngle + 360}deg); }
          }
          .avatar-orbit-${index} {
            --radius-${index}: ${radiusMobile}px;
            animation: orbit-${index} ${duration}s linear infinite;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: ${mtMobile}px;
            margin-left: ${mlMobile}px;
            z-index: 0; /* Keep strictly behind the center card */
          }
          .avatar-orbit-${index}:hover {
            animation-play-state: paused;
            z-index: 50; /* Bring to front only on hover */
          }
          @media (min-width: 768px) {
            .avatar-orbit-${index} {
              --radius-${index}: ${radiusDesktop}px;
              margin-top: ${mtDesktop}px;
              margin-left: ${mlDesktop}px;
            }
          }
        `}
      </style>
      <div className={`avatar-orbit-${index} ${sizeClasses} group pointer-events-none`}>
         <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={onClick}
            className="w-full h-full rounded-[24px] overflow-hidden border border-white/10 shadow-xl bg-[#0a0a0f] cursor-pointer hover:scale-110 hover:border-brand-accent/50 hover:shadow-[0_0_30px_rgba(230,57,70,0.4)] transition-all duration-300 pointer-events-auto"
         >
           <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
         </motion.div>
      </div>
    </>
  );
}

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="w-full bg-[#050505] text-white pt-[120px] pb-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
        
        {/* Company About Section */}
        <div className="mb-24 mt-4 max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[13px] font-bold uppercase tracking-widest mb-6">
              Who We Are
            </div>
            <h2 className="text-[36px] md:text-[48px] font-[800] text-white mb-8 leading-tight tracking-tight">
              Engineering Digital Excellence
            </h2>
            <div className="text-[18px] md:text-[20px] text-white/70 leading-[1.8] space-y-6">
              <p>
                <strong className="text-white">Broad Solution Tech</strong> is a premier software development agency specializing in building scalable, high-performance web and mobile applications. We don't just write code; we engineer solutions that solve real-world business challenges and drive measurable growth.
              </p>
              <p>
                Founded by a team of elite developers and strategists, we bring together deep technical expertise and a passion for innovation. Whether it's crafting lightning-fast user interfaces, robust backend architectures, or deploying highly available cloud infrastructure, we are committed to delivering absolute excellence in every project.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-20 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[24px] bg-white/5 border border-white/10 hover:border-brand-accent/40 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-accent/10 group-hover:bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 transition-colors">
                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3">Innovation</h3>
              <p className="text-white/60 text-[15px] leading-relaxed">We leverage the latest cutting-edge technologies to build forward-thinking solutions that keep our clients ahead of the curve.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[24px] bg-white/5 border border-white/10 hover:border-brand-accent/40 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-accent/10 group-hover:bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 transition-colors">
                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3">Reliability</h3>
              <p className="text-white/60 text-[15px] leading-relaxed">Our robust architectures are built to scale safely, ensuring 99.9% uptime and enterprise-grade security standards.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-[24px] bg-white/5 border border-white/10 hover:border-brand-accent/40 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-accent/10 group-hover:bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 transition-colors">
                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3">Collaboration</h3>
              <p className="text-white/60 text-[15px] leading-relaxed">We work closely with our clients, treating their products and business goals as if they were our very own.</p>
            </motion.div>
          </div>
        </div>

        {/* Orbiting Avatar Hero */}
        <div id="team" className="relative w-full h-[700px] md:h-[1050px] flex items-center justify-center mb-12 overflow-hidden rounded-[40px] bg-white/5 border border-white/10">
          
          {/* Background Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[400px] bg-brand-accent/20 blur-[100px] rounded-full"></div>
          </div>

          {/* Orbiting Avatars */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {TEAM.map((member, idx) => (
              <OrbitingAvatar 
                key={member.name}
                member={member} 
                index={idx} 
                total={TEAM.length}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>

          {/* Center Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 text-center max-w-[600px] px-6 bg-[#050505]/70 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-[8px] h-[8px] rounded-full bg-brand-accent shrink-0 shadow-[0_0_10px_#e63946]"></div>
              <span className="text-[14px] font-bold uppercase tracking-[0.15em] text-white/70">
                The Architects
              </span>
            </div>
            <h1 className="text-[56px] md:text-[80px] font-[800] tracking-[-0.04em] leading-[1.1] mb-6">
              Meet the <span className="text-brand-accent">Team</span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-white/60 leading-[1.6]">
              The elite engineers, designers, and strategists dedicated to building your digital future.
            </p>
          </motion.div>

        </div>

        {/* Workflow & Problem Solving Section */}
        <div className="mt-32 max-w-[1200px] mx-auto relative z-10 px-6 lg:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[13px] font-bold uppercase tracking-widest mb-6">
              Our Methodology
            </div>
            <h2 className="text-[36px] md:text-[48px] font-[800] text-white leading-tight tracking-tight mb-6">
              How We Handle Projects & <br className="hidden md:block" /> Solve Complex Problems
            </h2>
            <p className="text-[18px] text-white/60 max-w-[700px] mx-auto leading-relaxed">
              We believe that great software is built on structured processes, transparent communication, and an uncompromising approach to problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Management */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 rounded-[32px] bg-[#0a0a0f] border border-white/10 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </div>
              <h3 className="text-[28px] font-bold text-white mb-8">Project Execution</h3>
              <ul className="space-y-6 text-white/70">
                <li className="flex gap-5">
                  <span className="text-blue-400 font-bold mt-0.5 text-[18px]">01.</span>
                  <div>
                    <strong className="text-white block mb-1.5 text-[16px]">Deep Discovery</strong>
                    <p className="text-[15px] leading-[1.7]">Before coding, we map out every technical requirement, user flow, and edge case to ensure full alignment with your business goals.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="text-blue-400 font-bold mt-0.5 text-[18px]">02.</span>
                  <div>
                    <strong className="text-white block mb-1.5 text-[16px]">Agile Sprints</strong>
                    <p className="text-[15px] leading-[1.7]">We break down complex architectures into deliverable 2-week sprints, giving you total transparency and regular functional updates.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="text-blue-400 font-bold mt-0.5 text-[18px]">03.</span>
                  <div>
                    <strong className="text-white block mb-1.5 text-[16px]">Seamless Delivery</strong>
                    <p className="text-[15px] leading-[1.7]">Deployment is fully automated through CI/CD pipelines, ensuring zero downtime and a flawless transition to production.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Problem Solving */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 rounded-[32px] bg-[#0a0a0f] border border-white/10 hover:border-brand-accent/30 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-accent/20 transition-all duration-700"></div>
              <div className="w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-[28px] font-bold text-white mb-8">How We Fix Problems</h3>
              <ul className="space-y-6 text-white/70">
                <li className="flex gap-5">
                  <span className="text-brand-accent font-bold mt-0.5 text-[18px]">01.</span>
                  <div>
                    <strong className="text-white block mb-1.5 text-[16px]">Root Cause Analysis</strong>
                    <p className="text-[15px] leading-[1.7]">We don't just patch bugs. We investigate system logs and trace errors back to their core architectural source to prevent recurrence.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="text-brand-accent font-bold mt-0.5 text-[18px]">02.</span>
                  <div>
                    <strong className="text-white block mb-1.5 text-[16px]">Proactive Monitoring</strong>
                    <p className="text-[15px] leading-[1.7]">Our infrastructure uses advanced telemetry to alert us of potential bottlenecks or server spikes before they affect your users.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="text-brand-accent font-bold mt-0.5 text-[18px]">03.</span>
                  <div>
                    <strong className="text-white block mb-1.5 text-[16px]">Rapid Hotfixes</strong>
                    <p className="text-[15px] leading-[1.7]">In the event of critical issues, our incident response protocol immediately deploys targeted hotfixes without disrupting core services.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Testimonials / Reviews Section */}
        <div className="mt-32 mb-12 max-w-[1200px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[13px] font-bold uppercase tracking-widest mb-6">
              Client Feedback
            </div>
            <h2 className="text-[36px] md:text-[48px] font-[800] text-white leading-tight tracking-tight">
              What They Say About Us
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[24px] bg-[#0a0a0f] border border-white/10 hover:border-brand-accent/30 transition-all flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[50px] group-hover:bg-brand-accent/20 transition-all rounded-full pointer-events-none"></div>
              <div className="flex gap-1.5 mb-6 text-[#FFD700] text-xl relative z-10">
                ★★★★★
              </div>
              <p className="text-white/80 text-[16px] leading-[1.7] mb-8 italic relative z-10">
                "Broad Solution Tech transformed our digital presence completely. Their team is highly skilled, deeply professional, and delivered our enterprise application well ahead of schedule."
              </p>
              <div className="mt-auto flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-accent to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px]">Sarah Jenkins</h4>
                  <p className="text-white/50 text-[13px]">Operations Director</p>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[24px] bg-[#0a0a0f] border border-white/10 hover:border-brand-accent/30 transition-all flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[50px] group-hover:bg-brand-accent/20 transition-all rounded-full pointer-events-none"></div>
              <div className="flex gap-1.5 mb-6 text-[#FFD700] text-xl relative z-10">
                ★★★★★
              </div>
              <p className="text-white/80 text-[16px] leading-[1.7] mb-8 italic relative z-10">
                "The engineers at BST are simply phenomenal. They handled complex data architecture with ease and provided robust solutions that immediately scaled our startup's capacity."
              </p>
              <div className="mt-auto flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px]">Michael Chang</h4>
                  <p className="text-white/50 text-[13px]">CTO, TechFlow</p>
                </div>
              </div>
            </motion.div>

            {/* Review 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-[24px] bg-[#0a0a0f] border border-white/10 hover:border-brand-accent/30 transition-all flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[50px] group-hover:bg-brand-accent/20 transition-all rounded-full pointer-events-none"></div>
              <div className="flex gap-1.5 mb-6 text-[#FFD700] text-xl relative z-10">
                ★★★★★
              </div>
              <p className="text-white/80 text-[16px] leading-[1.7] mb-8 italic relative z-10">
                "We've worked with several agencies before, but none match the communication and reliability of Broad Solution Tech. They feel like a deeply integrated in-house team."
              </p>
              <div className="mt-auto flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px]">Ayesha Malik</h4>
                  <p className="text-white/50 text-[13px]">Product Manager</p>
                </div>
              </div>
            </motion.div>
          </div>
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
