import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, ShieldCheck, Zap, Wifi, Battery, Command, ChevronDown, Menu } from 'lucide-react';

const CARDS = [
  {
    title: "Web3 Integration",
    desc: "Seamlessly connect dApps with real-world enterprise architectures.",
    icon: <Database className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Real-time AI",
    desc: "Low-latency machine learning models built directly into your platform.",
    icon: <Zap className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Enterprise Sec",
    desc: "Bank-grade encryption and automated threat mitigation protocols.",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "Cloud Scale",
    desc: "Auto-scaling infrastructure designed for extreme traffic loads.",
    icon: <Layers className="w-8 h-8 text-purple-400" />
  }
];

const MarqueeTrack = ({ isGlassy }) => (
  <motion.div 
    className="flex gap-8 w-max pr-8 items-center will-change-transform"
    animate={{ x: ["0%", "-33.333333%"] }} 
    transition={{ ease: "linear", duration: 25, repeat: Infinity }}
  >
    {[...CARDS, ...CARDS, ...CARDS].map((card, i) => (
      <div 
        key={i} 
        className={`w-[280px] h-[360px] rounded-[32px] p-8 flex flex-col justify-end relative overflow-hidden transition-all duration-300 shrink-0 ${
          isGlassy 
            ? 'bg-white/5 backdrop-blur-[4px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]' 
            : 'bg-[#0A0A0F] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
        }`}
      >
        {/* Replaced expensive blur-[60px] with a highly performant radial-gradient */}
        <div className={`absolute -top-12 -right-12 w-64 h-64 pointer-events-none opacity-40 ${isGlassy ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_60%)]' : 'bg-[radial-gradient(circle,rgba(230,57,70,0.4)_0%,transparent_60%)]'}`}></div>
        
        <div className={`absolute top-8 left-8 w-14 h-14 rounded-full flex items-center justify-center ${isGlassy ? 'bg-white/5' : 'bg-white/10'}`}>
          {card.icon}
        </div>
        
        <h3 className={`text-[22px] font-bold mb-3 ${isGlassy ? 'text-white/40' : 'text-white'}`}>
          {card.title}
        </h3>
        <p className={`text-[14px] leading-[1.6] ${isGlassy ? 'text-white/30' : 'text-white/60'}`}>
          {card.desc}
        </p>
      </div>
    ))}
  </motion.div>
);

export default function PhonePortalSection() {
  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden flex flex-col items-center justify-center min-h-[1000px] perspective-[2000px]">
      
      {/* Replaced expensive background blur with radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(230,57,70,0.08)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="relative z-20 text-center mb-12">
         <h2 className="text-[40px] md:text-[56px] font-[800] text-white tracking-tight mb-4">
           Seamless <span className="text-brand-accent">Integrations</span>
         </h2>
         <p className="text-[18px] text-white/60 max-w-[500px] mx-auto">
           Pass through the technical barriers. We connect complex systems into one beautiful interface.
         </p>
      </div>

      {/* 3D Scene Container with responsive scaling wrapper */}
      <div className="relative w-full h-[700px] flex items-center justify-center overflow-visible scale-[0.5] sm:scale-[0.7] md:scale-90 lg:scale-100">
        <div 
          className="relative w-full max-w-[1440px] h-[700px] flex items-center justify-center transform-style-3d mx-auto"
          // Matches the angle from the reference image more closely
          style={{ transform: 'rotateX(55deg) rotateZ(-35deg) rotateY(10deg)' }}
        >
          
          {/* Track 1: Background Glassy Track */}
          <div className="absolute inset-0 flex items-center z-0 pointer-events-none mt-[100px]">
            <MarqueeTrack isGlassy={true} />
          </div>

          {/* The Realistic Phone Frame */}
          {/* Dimensions: 380x780 */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[780px] rounded-[54px] pointer-events-none z-10"
            style={{
              // Outer metallic casing
              background: 'linear-gradient(145deg, #444 0%, #111 50%, #000 100%)',
              padding: '3px',
              // 3D extrusion shadows
              boxShadow: `
                -2px 2px 0 #333,
                -4px 4px 0 #222,
                -6px 6px 0 #111,
                -8px 8px 0 #0a0a0a,
                -10px 10px 0 #000,
                -15px 15px 40px rgba(0,0,0,0.9)
              `
            }}
          >
            {/* Phone Inner Bezel & Screen Background (will be covered by Track 2) */}
            <div className="w-full h-full rounded-[50px] bg-[#050505] border-[8px] border-[#111] relative overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[32px] bg-[#111] rounded-b-[24px] z-50 flex items-center justify-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                 {/* Speaker */}
                 <div className="w-14 h-1.5 bg-[#000] rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"></div>
                 {/* Camera Lens */}
                 <div className="w-4 h-4 bg-[#050505] rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-blue-900/50 rounded-full blur-[0.5px]"></div>
                 </div>
              </div>

              {/* Side Buttons */}
              <div className="absolute top-[130px] -left-[11px] w-[3px] h-[30px] bg-[#333] rounded-l-[4px]"></div>
              <div className="absolute top-[180px] -left-[11px] w-[3px] h-[60px] bg-[#333] rounded-l-[4px]"></div>
              <div className="absolute top-[260px] -left-[11px] w-[3px] h-[60px] bg-[#333] rounded-l-[4px]"></div>
              <div className="absolute top-[200px] -right-[11px] w-[3px] h-[90px] bg-[#333] rounded-r-[4px]"></div>
            </div>
          </div>

          {/* Track 2: Foreground Solid Track, clipped exactly to the phone screen */}
          {/* Inner Width = 380 - 6 (padding) - 16 (border) = 358px. Half = 179px */}
          {/* Inner Height = 780 - 6 - 16 = 758px. Half = 379px */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              clipPath: 'inset(calc(50% - 379px) calc(50% - 179px) calc(50% - 379px) calc(50% - 179px) round 46px)',
              WebkitClipPath: 'inset(calc(50% - 379px) calc(50% - 179px) calc(50% - 379px) calc(50% - 179px) round 46px)'
            }}
          >
            {/* The solid screen background container */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
              
              {/* Internal Phone UI Elements (Status bar, Nav, Titles) */}
              {/* This must be absolutely positioned relative to the center so it stays locked to the screen */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[358px] h-[758px] flex flex-col p-6 z-30">
                
                {/* Status Bar */}
                <div className="flex justify-between items-center w-full px-2 text-white text-[13px] font-semibold opacity-90 mb-8 pt-2">
                  <span>9:41</span>
                  <div className="flex gap-2 items-center">
                    <Wifi className="w-4 h-4" />
                    <Battery className="w-5 h-5" />
                  </div>
                </div>

                {/* Header / Nav */}
                <div className="flex justify-between items-center w-full mb-8 px-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/5">
                    <Command className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center gap-2 bg-[#1A1A1A] rounded-full px-3 py-1.5 text-[12px] font-medium text-white/80 border border-white/10 shadow-lg">
                    <div className="w-3.5 h-3.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                    0x1437...
                    <ChevronDown className="w-3 h-3 ml-1 text-white/50" />
                  </div>
                  <Menu className="w-6 h-6 text-white/80" />
                </div>

                {/* Title Text */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="px-2"
                >
                  <h2 className="text-white text-[32px] font-bold leading-[1.1] mb-4 tracking-tight">
                    Premium<br/>Engineering<br/>Solutions
                  </h2>
                  <p className="text-white/50 text-[14px] leading-relaxed max-w-[250px]">
                    Easily bridge tangible assets across multiple platforms.
                  </p>
                </motion.div>

                {/* Home Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-white rounded-full opacity-80"></div>
              </div>

              {/* The Foreground Solid Marquee */}
              <div className="mt-[100px] z-20">
                <MarqueeTrack isGlassy={false} />
              </div>
              
              {/* Screen Glass Reflection overlaying everything inside the screen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 z-40 pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 70%)' }}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
