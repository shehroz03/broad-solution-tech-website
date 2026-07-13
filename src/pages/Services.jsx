import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MonitorSmartphone, Code2, Sparkles, Server, Palette, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import PhonePortalSection from '../components/PhonePortalSection';

const SERVICES_DATA = [
  {
    id: '01',
    title: 'Web & Mobile Apps',
    description: 'We engineer high-performance web platforms and native mobile applications that scale effortlessly. Built with modern stacks like React, Next.js, and React Native.',
    icon: <MonitorSmartphone className="w-12 h-12" />,
    color: '#E63946',
    bgColor: 'rgba(230,57,70,0.1)',
    features: ['React & Next.js', 'React Native', 'High Performance', 'Scalable Architecture']
  },
  {
    id: '02',
    title: 'UI/UX Design',
    description: 'We create intuitive, user-centric interfaces that not only look visually stunning but are scientifically designed to increase engagement and conversion rates.',
    icon: <Sparkles className="w-12 h-12" />,
    color: '#8B5CF6',
    bgColor: 'rgba(139,92,246,0.1)',
    features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
  },
  {
    id: '03',
    title: 'Custom Software',
    description: 'Bespoke enterprise software tailored precisely to your unique business workflows, ensuring seamless operations and extreme reliability.',
    icon: <Code2 className="w-12 h-12" />,
    color: '#0EA5E9',
    bgColor: 'rgba(14,165,233,0.1)',
    features: ['Enterprise Solutions', 'API Integrations', 'Legacy Modernization', 'Automation']
  },
  {
    id: '04',
    title: 'Cloud & DevOps',
    description: 'Robust cloud architectures designed for 99.9% uptime. We handle complex deployments, CI/CD pipelines, and infrastructure management.',
    icon: <Server className="w-12 h-12" />,
    color: '#10B981',
    bgColor: 'rgba(16,185,129,0.1)',
    features: ['AWS / GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Security Audits']
  }
];

export default function Services() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full bg-bg-canvas min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative pt-[200px] pb-32 px-6 md:px-12 lg:px-[80px] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-white/50 backdrop-blur-md text-[13px] font-bold uppercase tracking-widest text-text-secondary mb-8">
              What We Do
            </div>
            
            <h1 className="text-[56px] md:text-[80px] lg:text-[100px] font-[800] tracking-[-0.04em] leading-[1.1] text-text-primary mb-8">
              We engineer <br className="hidden md:block"/> 
              <span className="text-brand-accent">digital success.</span>
            </h1>
            
            <p className="text-[18px] md:text-[22px] text-text-secondary max-w-[700px] mx-auto leading-[1.6]">
              From concept to deployment, we deliver premium engineering and design solutions that empower modern businesses to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D PORTAL SECTION */}
      <PhonePortalSection />

      {/* STICKY SCROLL SECTION */}
      <section ref={containerRef} className="relative w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px] relative">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* Left Side: Sticky Titles (Desktop only for sticky, mobile normal) */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-[150px] lg:h-[calc(100vh-200px)] flex flex-col justify-center">
              <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight mb-12">
                Our Capabilities
              </h2>
              <div className="hidden lg:flex flex-col gap-6 relative pl-6 border-l-2 border-border-subtle">
                {/* Progress Line */}
                <motion.div 
                  className="absolute top-0 left-[-2px] w-[2px] bg-brand-accent origin-top"
                  style={{ scaleY: smoothProgress }}
                />

                {SERVICES_DATA.map((service, index) => {
                  const isActive = scrollYProgress.get() >= (index / SERVICES_DATA.length) && scrollYProgress.get() < ((index + 1) / SERVICES_DATA.length);
                  return (
                    <div key={index} className="flex items-center gap-4 transition-all duration-300">
                      <span className="text-text-muted font-bold text-lg">{service.id}</span>
                      <h3 className="text-2xl font-bold text-text-primary">{service.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Scrolling Cards */}
            <div className="w-full lg:w-1/2 flex flex-col gap-[10vh] pb-[20vh]">
              {SERVICES_DATA.map((service, index) => (
                <div key={index} className="min-h-[60vh] flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-20% 0px -20% 0px", once: false }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                    className="group relative rounded-[32px] border border-border-subtle p-8 md:p-12 overflow-hidden bg-white/50 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:border-brand-accent/50 transition-colors duration-500"
                  >
                    {/* Background Glow inside card */}
                    <div 
                      className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                      style={{ backgroundColor: service.color }}
                    ></div>

                    {/* Icon */}
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-border-subtle"
                      style={{ backgroundColor: service.bgColor, color: service.color }}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-[32px] md:text-[40px] font-bold text-text-primary mb-6 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-[18px] text-text-secondary leading-[1.6] mb-10">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: service.color }}></div>
                          <span className="text-[15px] font-medium text-text-primary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-[#101214] text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="text-[40px] md:text-[64px] font-[800] tracking-tight mb-8">
            Ready to build something <span className="text-brand-accent">amazing?</span>
          </h2>
          <p className="text-[20px] text-white/70 mb-12 max-w-[600px] mx-auto">
            Let's discuss your project and figure out how we can help you achieve your goals with premium technology.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex h-[60px] items-center justify-center px-[32px] bg-brand-accent text-white font-bold rounded-[12px] text-lg hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgba(230,57,70,0.4)] hover:shadow-[0_12px_40px_rgba(230,57,70,0.6)]"
          >
            Start Your Project
          </Link>
        </div>
      </section>

    </div>
  );
}
