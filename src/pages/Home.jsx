import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrustSection from '../components/TrustSection';
import ParticleMorphSection from '../components/ParticleMorphSection';
import DualOfferingSection from '../components/DualOfferingSection';
import ProcessSection from '../components/ProcessSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';

const NODES = [
  // --- TOP LEFT QUADRANT ---
  { id: 1, label: "Web Platforms", top: "12%", left: "10%", level: 2 },
  { id: 16, label: "Cybersecurity", top: "8%", left: "28%", level: 3, hideOnMobile: true },
  { id: 27, label: "TypeScript", top: "20%", left: "4%", level: 1, hideOnMobile: true },
  
  // --- MID LEFT QUADRANT ---
  { id: 2, label: "React", top: "35%", left: "18%", level: 3 },
  { id: 11, label: "Python", top: "45%", left: "6%", level: 1, hideOnMobile: true },
  { id: 18, label: "Cloud Infra", top: "55%", left: "15%", level: 2 },
  { id: 21, label: "Supabase", top: "30%", left: "2%", level: 2, hideOnMobile: true },
  { id: 4, label: "Mobile Apps", top: "70%", left: "4%", level: 1 },

  // --- BOTTOM LEFT QUADRANT ---
  { id: 8, label: "OpenAI", bottom: "25%", left: "12%", level: 3 },
  { id: 15, label: "FastAPI", bottom: "15%", left: "22%", level: 2, hideOnMobile: true },
  { id: 17, label: "Pentesting", bottom: "8%", left: "8%", level: 1, hideOnMobile: true },
  { id: 26, label: "Enterprise", bottom: "35%", left: "2%", level: 1, hideOnMobile: true },

  // --- TOP CENTER (Above Text) ---
  { id: 9, label: "PyTorch", top: "5%", left: "45%", level: 1, hideOnMobile: true },
  { id: 24, label: "QA Testing", top: "15%", left: "55%", level: 2, hideOnMobile: true },

  // --- BOTTOM CENTER (Below Text) ---
  { id: 10, label: "TensorFlow", bottom: "8%", left: "40%", level: 1, hideOnMobile: true },
  { id: 19, label: "PostgreSQL", bottom: "15%", left: "52%", level: 3 },

  // --- TOP RIGHT QUADRANT ---
  { id: 7, label: "AI & ML", top: "18%", right: "12%", level: 2 },
  { id: 14, label: "C#", top: "10%", right: "25%", level: 1, hideOnMobile: true },
  { id: 20, label: "MongoDB", top: "25%", right: "22%", level: 2, hideOnMobile: true },

  // --- MID RIGHT QUADRANT ---
  { id: 6, label: "React Native", top: "40%", right: "15%", level: 2 },
  { id: 13, label: ".NET", top: "52%", right: "20%", level: 3, hideOnMobile: true },
  { id: 25, label: "Full Stack", top: "65%", right: "8%", level: 1 },
  { id: 3, label: "Next.js", top: "45%", right: "2%", level: 1, hideOnMobile: true },
  { id: 22, label: "Firebase", top: "30%", right: "4%", level: 3, hideOnMobile: true },

  // --- BOTTOM RIGHT QUADRANT ---
  { id: 5, label: "Flutter", bottom: "22%", right: "25%", level: 3 },
  { id: 12, label: "Node.js", bottom: "15%", right: "12%", level: 2, hideOnMobile: true },
  { id: 23, label: "Data Analytics", bottom: "8%", right: "28%", level: 1, hideOnMobile: true },
  { id: 28, label: "UI/UX Design", bottom: "32%", right: "5%", level: 2 },
];

const getLevelStyles = (level) => {
  switch(level) {
    case 1: return { opacity: 0.35, scale: 0.85, filter: 'blur(1.5px)' };
    case 2: return { opacity: 0.70, scale: 0.95, filter: 'blur(0.5px)' };
    case 3: return { opacity: 1.0, scale: 1.05, filter: 'blur(0px)' };
    default: return { opacity: 1, scale: 1, filter: 'blur(0px)' };
  }
};

const CapabilityNode = ({ node, mouseX, mouseY, windowSize }) => {
  const nodeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [distance, setDistance] = useState(Infinity);
  
  const baseStyles = getLevelStyles(node.level);
  
  // Global Parallax calculations
  const parallaxMultiplier = node.level === 1 ? 0.4 : node.level === 2 ? 0.9 : 1.5;
  const maxOffset = 45 * parallaxMultiplier;
  
  const pX = useTransform(mouseX, [0, windowSize.width || 1440], [maxOffset, -maxOffset]);
  const pY = useTransform(mouseY, [0, windowSize.height || 900], [maxOffset, -maxOffset]);

  useEffect(() => {
    const updateDistance = () => {
      if (nodeRef.current) {
        const rect = nodeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = mouseX.get() - centerX;
        const dy = mouseY.get() - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        setDistance(dist);
      }
      requestAnimationFrame(updateDistance);
    };
    const animId = requestAnimationFrame(updateDistance);
    return () => cancelAnimationFrame(animId);
  }, [mouseX, mouseY]);

  const isProximity = distance < 160 && !isHovered;
  
  // Dynamic positioning for repulsion
  const repelX = isProximity ? (nodeRef.current?.getBoundingClientRect().left + nodeRef.current?.getBoundingClientRect().width/2 < mouseX.get() ? -12 : 12) : 0;
  const repelY = isProximity ? (nodeRef.current?.getBoundingClientRect().top + nodeRef.current?.getBoundingClientRect().height/2 < mouseY.get() ? -12 : 12) : 0;

  let currentStyles = {
    background: '#FFFFFF',
    borderColor: '#E5E5E2',
    color: '#65676B',
    scale: baseStyles.scale,
    opacity: baseStyles.opacity,
    x: 0,
    y: 0,
    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
  };

  if (isHovered) {
    currentStyles = {
      background: '#E63946',
      borderColor: '#E63946',
      color: '#FFFFFF',
      scale: 1.1,
      opacity: 1,
      x: 0,
      y: -4,
      boxShadow: '0 8px 24px rgba(230,57,70,0.3)',
    };
  } else if (isProximity) {
    currentStyles = {
      background: '#FFF1F2',
      borderColor: '#E63946',
      color: '#D92D3A',
      scale: 1.06,
      opacity: 1,
      x: repelX,
      y: repelY,
      boxShadow: '0 8px 24px rgba(230,57,70,0.15)',
    };
  } else if (distance < 250) {
    currentStyles.x = repelX * 0.4;
    currentStyles.y = repelY * 0.4;
  }

  return (
    <motion.div
      className={node.hideOnMobile ? "hidden md:block" : "block"}
      style={{
        position: 'absolute',
        top: node.top,
        left: node.left,
        right: node.right,
        bottom: node.bottom,
        x: pX,
        y: pY,
        zIndex: isHovered || isProximity ? 50 : node.level * 10,
        pointerEvents: 'none'
      }}
    >
      <motion.div
        ref={nodeRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: currentStyles.opacity,
          scale: currentStyles.scale,
          x: currentStyles.x,
          y: currentStyles.y,
          backgroundColor: currentStyles.background,
          borderColor: currentStyles.borderColor,
          color: currentStyles.color,
          boxShadow: currentStyles.boxShadow,
        }}
        transition={{ 
          duration: 0.35,
          ease: "easeOut"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: node.level === 3 ? '16px 26px' : node.level === 2 ? '14px 20px' : '10px 16px',
          borderRadius: '12px',
          borderWidth: '1px',
          borderStyle: 'solid',
          fontSize: node.level === 3 ? '17px' : node.level === 2 ? '15px' : '13px',
          fontWeight: 500,
          cursor: 'default',
          filter: (isHovered || isProximity) ? 'blur(0px)' : baseStyles.filter,
          pointerEvents: 'auto',
          whiteSpace: 'nowrap'
        }}
      >
        {node.label}
      </motion.div>
    </motion.div>
  );
};

export default function Home({ mouseX, mouseY }) {
  const [windowSize, setWindowSize] = useState({ width: 1440, height: 900 });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px] min-h-[900px] h-screen relative flex flex-col pointer-events-none">
        
        {/* Capability Nodes Field (Background Layer) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
          {NODES.map((node, i) => (
            <motion.div 
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (i * 0.02), duration: 0.6 }}
              className="absolute inset-0"
            >
              <CapabilityNode node={node} mouseX={mouseX} mouseY={mouseY} windowSize={windowSize} />
            </motion.div>
          ))}
        </div>

        {/* Hero Content - Centered Layout */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pb-20 relative z-10 pointer-events-none mt-[88px]">
          
          <div className="w-full max-w-[950px] flex flex-col items-center pointer-events-auto">
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="flex items-center justify-center gap-3 mb-6 mt-12"
            >
              <div className="w-[6px] h-[6px] rounded-full bg-brand-accent shrink-0"></div>
              <span className="text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.12em] text-text-secondary">
                BROAD SOLUTION TECH
              </span>
            </motion.div>

            {/* Headline */}
            <div className="max-w-[950px] mb-8 flex flex-col items-center">
              <motion.h1 
                initial={{ y: 50, opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ delay: 0.22, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-[40px] sm:text-[56px] md:text-[72px] xl:text-[92px] leading-[1] font-[800] tracking-[-0.04em] text-text-primary m-0 text-center flex flex-wrap justify-center gap-[0.25em]"
              >
                {["We", "build", "digital"].map((word, i) => (
                  <span key={i} className="hover:text-brand-accent transition-colors duration-300 cursor-default">{word}</span>
                ))}
              </motion.h1>
              <motion.h1 
                initial={{ y: 50, opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ delay: 0.34, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-[40px] sm:text-[56px] md:text-[72px] xl:text-[92px] leading-[1] font-[800] tracking-[-0.04em] text-text-primary m-0 text-center flex flex-wrap justify-center gap-[0.25em] mt-1"
              >
                {["products", "that", "scale."].map((word, i) => (
                  <span key={i} className="hover:text-brand-accent transition-colors duration-300 cursor-default">{word}</span>
                ))}
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.5 }}
              className="max-w-[700px] text-[16px] md:text-[19px] leading-[1.55] text-text-secondary mb-12 text-center"
            >
              Broad Solution Tech delivers high-end web, mobile, and AI solutions for startups and growing businesses. Fast execution. Premium engineering. Your trusted technical partner.
            </motion.p>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.60, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <Link to="/contact" className="h-[54px] flex items-center justify-center px-[26px] bg-brand-accent text-white font-medium rounded-[8px] transition-all duration-200 hover:-translate-y-[2px] shadow-sm hover:shadow-[0_4px_12px_rgba(230,57,70,0.3)] hover:brightness-95">
                Start a Project
              </Link>
              
              <Link to="/our-work" className="group flex items-center justify-center gap-2 text-[16px] font-medium text-text-primary transition-colors duration-200 hover:text-brand-accent bg-transparent border-none">
                Explore Our Work
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-[4px] group-hover:-translate-y-[4px]" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Elements */}
        <div className="absolute bottom-[40px] left-6 md:left-[80px] right-6 md:right-[80px] flex justify-between items-end z-10 pointer-events-none hidden md:flex">
          
          {/* Trust Detail */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col gap-2 pointer-events-auto"
          >
            <span className="text-[12px] font-semibold tracking-wider text-text-muted uppercase">
              ENGINEERING ACROSS WEB, MOBILE, AI & CLOUD
            </span>
            <div className="flex items-center gap-4 text-[13px] text-text-secondary font-medium">
              <span>15+ projects delivered</span>
              <span className="w-1 h-1 bg-border-subtle rounded-full"></span>
              <span>5+ countries reached</span>
              <span className="w-1 h-1 bg-border-subtle rounded-full"></span>
              <span>Built for long-term partnerships</span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col items-center gap-4 pointer-events-auto"
          >
            <span className="text-[11px] font-bold tracking-[0.2em] text-text-muted uppercase [writing-mode:vertical-rl] rotate-180">
              SCROLL TO EXPLORE
            </span>
            <div className="w-[1px] h-[60px] bg-border-subtle relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full h-[30px] bg-brand-accent"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* NEW SECTIONS */}
      <div className="relative z-20">
        <ParticleMorphSection />
        <TrustSection />
        <DualOfferingSection />
        <ProcessSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
      </div>

    </div>
  );
}
