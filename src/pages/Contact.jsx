import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full bg-[#050505] text-white pt-[120px] pb-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">
        
        {/* Page Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 mt-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-[6px] h-[6px] rounded-full bg-brand-accent shrink-0"></div>
            <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/50">
              Get In Touch
            </span>
          </div>
          <h1 className="text-[48px] md:text-[72px] font-[800] tracking-[-0.04em] leading-[1.1] mb-6">
            Let's Build <span className="text-brand-accent">Something Great.</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-white/60 max-w-[600px] mx-auto leading-[1.6]">
            Have an idea? Let's turn it into a world-class digital product together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0a0a0f] border border-white/10 rounded-[24px] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-accent to-transparent opacity-50"></div>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand-accent" />
                </div>
                <h3 className="text-[28px] font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-white/60 mb-8 max-w-[300px]">Thank you for reaching out. Our team will get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold transition-colors">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
            <form action="https://formspree.io/f/meevwdbq" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-6">
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-[12px] text-sm text-center">
                  Something went wrong. Please try again.
                </div>
              )}
              
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Full Name" 
                  required 
                  className="bg-white/5 border border-white/10 rounded-[12px] px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email Address" 
                  required 
                  className="bg-white/5 border border-white/10 rounded-[12px] px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase">Project Scope</label>
                <div className="relative">
                  <select 
                    name="scope" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-[12px] px-5 py-4 text-white focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected className="bg-[#0a0a0f]">Select Scope</option>
                    <option value="Small Project" className="bg-[#0a0a0f]">Small Project (&lt; 1 month)</option>
                    <option value="Medium Project" className="bg-[#0a0a0f]">Medium Project (1-3 months)</option>
                    <option value="Large Project" className="bg-[#0a0a0f]">Large Project (3+ months)</option>
                    <option value="Ongoing Partnership" className="bg-[#0a0a0f]">Ongoing Partnership</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase">Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Describe your project, goals, and any specific requirements" 
                  required 
                  className="bg-white/5 border border-white/10 rounded-[12px] px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all resize-none"
                ></textarea>
              </div>

              <button disabled={status === 'submitting'} type="submit" className="mt-4 h-[56px] w-full bg-brand-accent text-white font-bold rounded-[12px] transition-all duration-300 hover:brightness-110 hover:-translate-y-1 shadow-[0_0_20px_rgba(230,57,70,0.3)] disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>

              <div className="flex items-center justify-between mt-2">
                <span className="text-[12px] text-white/40 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                  Free Discovery Call
                </span>
                <span className="text-[12px] text-white/40 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                  NDA Available
                </span>
              </div>
            </form>
            )}
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            


            {/* Email Card */}
            <div className="group bg-[#0a0a0f] border border-white/10 rounded-[20px] p-8 transition-all hover:border-white/30">
              <h3 className="text-[20px] font-bold text-white mb-2">Direct Email</h3>
              <p className="text-[15px] text-white/60 mb-6">broadsolutiontech279@gmail.com</p>
              <a href="mailto:broadsolutiontech279@gmail.com" className="inline-flex items-center gap-2 text-white font-bold">
                Email Us <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="group bg-[#0a0a0f] border border-white/10 rounded-[20px] p-8 transition-all hover:border-[#25d366]/50">
              <h3 className="text-[20px] font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-[15px] text-white/60 mb-6">Connect with us directly for a quick chat and inquiries.</p>
              <a href="https://wa.me/923344443671" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#25d366] font-bold">
                Chat Now <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* Social Card */}
            <div className="group bg-[#0a0a0f] border border-white/10 rounded-[20px] p-8 transition-all hover:border-white/30">
              <h3 className="text-[20px] font-bold text-white mb-2">Social Presence</h3>
              <p className="text-[15px] text-white/60 mb-6">Follow our journey and stay updated.</p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/broadsolutiontech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0a66c2] transition-colors" title="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.instagram.com/broadsolutiontechh?igsh=dm1namJrdmF3Nnk4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#e1306c] transition-colors" title="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.fiverr.com/sellers/scrapingmaster1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#1dbf73] transition-colors" title="Fiverr">
                  <span className="text-[15px] font-black tracking-tighter">fi</span>
                </a>
                <a href="https://www.upwork.com/freelancers/~01f611eabb374e757e?viewMode=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#14a800] transition-colors" title="Upwork">
                  <span className="text-[12px] font-black tracking-tighter">Up</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}
