import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

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
      {/* Left: Wordmark */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-3 h-3 bg-brand-accent transition-transform group-hover:scale-110"></div>
        <span className={`font-bold text-xl tracking-tight ${textColor}`}>BST</span>
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
