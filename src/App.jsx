import React, { useEffect, useState, useCallback } from 'react';
import { useMotionValue, AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [loading, setLoading] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative w-full min-h-screen bg-bg-canvas text-text-primary font-sans flex flex-col">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="flex flex-col flex-1 w-full"
          >
            <Navbar />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home mouseX={mouseX} mouseY={mouseY} />} />
                <Route path="/about" element={<About />} />
                <Route path="/our-work" element={<OurWork />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            <FooterSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
