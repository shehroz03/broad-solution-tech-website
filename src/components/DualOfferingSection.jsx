import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Zap, Layers, Cpu, Cloud, ArrowRight } from 'lucide-react';

export default function DualOfferingSection() {
  return (
    <section className="w-full relative bg-[#050505] text-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-[6px] h-[6px] rounded-full bg-brand-accent shrink-0"></div>
            <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/50">
              Solutions Tailored For You
            </span>
          </div>
          <h2 className="text-[40px] md:text-[56px] font-[800] tracking-[-0.03em] leading-[1.1] mb-6">
            Engineered for <span className="text-brand-accent">Growth.</span>
          </h2>
          <p className="text-[18px] text-white/50 max-w-[600px] mx-auto leading-[1.6]">
            Whether you are launching your first product or scaling a massive enterprise system, we have the exact architecture and team you need.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* STARTUP CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative bg-[#0a0a0f] border border-white/5 rounded-[32px] overflow-hidden hover:border-brand-accent/30 transition-all duration-500"
          >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glow Background */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[12px] font-bold tracking-[0.1em] uppercase mb-8 w-fit shadow-[0_0_15px_rgba(230,57,70,0.15)]">
                <Rocket className="w-4 h-4" />
                <span>For Startups</span>
              </div>
              
              <h3 className="text-[36px] md:text-[44px] font-[800] tracking-tight leading-[1.1] mb-4">
                Build Fast,<br />Launch Smart.
              </h3>
              
              <p className="text-[16px] text-white/60 leading-[1.6] mb-12">
                We turn ideas into market-ready products with aggressive timelines. Stop worrying about technical debt and start focusing on growth.
              </p>

              <div className="space-y-8 mb-12 flex-1">
                <Feature 
                  icon={<Zap className="w-5 h-5 text-brand-accent" />}
                  title="MVPs & Rapid Prototyping"
                  desc="Go from concept to a fully functional product in weeks, not months."
                />
                <Feature 
                  icon={<Layers className="w-5 h-5 text-brand-accent" />}
                  title="Cross-Platform Mobile"
                  desc="Native-feel apps for iOS and Android using React Native & Flutter."
                />
                <Feature 
                  icon={<Cpu className="w-5 h-5 text-brand-accent" />}
                  title="AI Integration"
                  desc="Embed OpenAI and custom LLMs to give your product a competitive edge."
                />
              </div>

              <button className="flex items-center justify-between w-full h-[60px] px-8 bg-white/5 border border-white/10 hover:border-brand-accent hover:bg-brand-accent/10 text-white font-bold rounded-[16px] transition-all duration-300 group/btn">
                Launch Your Startup
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2 text-brand-accent" />
              </button>
            </div>
          </motion.div>

          {/* ENTERPRISE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-[#0a0a0f] border border-white/5 rounded-[32px] overflow-hidden hover:border-[#3b82f6]/30 transition-all duration-500"
          >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glow Background */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/15 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-[12px] font-bold tracking-[0.1em] uppercase mb-8 w-fit shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <ShieldCheck className="w-4 h-4" />
                <span>For Enterprises</span>
              </div>
              
              <h3 className="text-[36px] md:text-[44px] font-[800] tracking-tight leading-[1.1] mb-4">
                Scale with<br />Confidence.
              </h3>
              
              <p className="text-[16px] text-white/60 leading-[1.6] mb-12">
                Modernize legacy systems, secure your data, and build highly scalable architectures capable of handling millions of requests.
              </p>

              <div className="space-y-8 mb-12 flex-1">
                <Feature 
                  icon={<Cloud className="w-5 h-5 text-[#3b82f6]" />}
                  title="Cloud Architecture"
                  desc="Resilient, auto-scaling infrastructure on AWS, Azure, and Google Cloud."
                />
                <Feature 
                  icon={<Layers className="w-5 h-5 text-[#3b82f6]" />}
                  title="Complex Backend Systems"
                  desc="High-performance APIs and microservices using .NET, Node.js, and Python."
                />
                <Feature 
                  icon={<ShieldCheck className="w-5 h-5 text-[#3b82f6]" />}
                  title="Security & Pentesting"
                  desc="Rigorous vulnerability assessments to keep your enterprise data bulletproof."
                />
              </div>

              <button className="flex items-center justify-between w-full h-[60px] px-8 bg-white/5 border border-white/10 hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 text-white font-bold rounded-[16px] transition-all duration-300 group/btn">
                Upgrade Your Tech
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2 text-[#3b82f6]" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-5 group/feature">
      <div className="w-12 h-12 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover/feature:bg-white/10 group-hover/feature:border-white/20">
        {icon}
      </div>
      <div>
        <h4 className="text-[18px] font-bold text-white mb-1.5">{title}</h4>
        <p className="text-[14px] text-white/50 leading-[1.6]">{desc}</p>
      </div>
    </div>
  );
}
