import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoSrc from '/logu.png';

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Decide colors based on route
  const textColor = isHomePage ? "text-text-primary" : "text-white";
  const mutedTextColor = isHomePage ? "text-text-secondary" : "text-white/60";
  const hoverTextColor = isHomePage ? "hover:text-brand-accent" : "hover:text-white";
  const btnBg = isHomePage ? "bg-[#101214] text-white" : "bg-white text-black";

  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full h-[88px] flex items-center justify-between z-50 px-6 md:px-12 lg:px-[80px]"
    >
      {/* Left: Logo */}
      <Link to="/" className="flex items-center group">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-2 py-1"
        >
          <div style={{ overflow: 'hidden', height: '36px', display: 'flex', alignItems: 'flex-start' }}>
            <img 
              src={logoSrc} 
              alt="BST Logo" 
              className="h-[46px] w-auto object-contain transition-all duration-300"
              style={{
                clipPath: 'inset(0% 0% 22% 0%)'
              }}
            />
          </div>
        </motion.div>
      </Link>

      {/* Center Navigation */}
      <nav className={`hidden xl:flex items-center gap-8 text-[15px] font-medium ${mutedTextColor}`}>
        <Link to="/" className={`${hoverTextColor} transition-colors`}>Home</Link>
        <Link to="/about" className={`${hoverTextColor} transition-colors`}>About</Link>
        <Link to="/our-work" className={`${hoverTextColor} transition-colors`}>Our Work</Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <Link to="/contact" className={`text-[15px] font-medium ${mutedTextColor} ${hoverTextColor} transition-colors hidden md:block`}>
          Contact
        </Link>
        <Link to="/contact" className={`h-[48px] flex items-center justify-center px-[22px] ${btnBg} font-medium rounded-[8px] transition-all duration-200 hover:bg-brand-accent hover:text-white hover:-translate-y-[2px]`}>
          Start a Project
        </Link>
      </div>
    </motion.header>
  );
}
