import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logoSrc from '/logu.png';

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 2000);
    const t2 = setTimeout(() => setPhase('exit'), 2400);
    const t3 = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      key="splash-main"
      initial={{ opacity: 1 }}
      animate={phase === 'exit' ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FAFAF8',
        overflow: 'hidden',
        willChange: 'opacity',
      }}
    >
      {/* Soft ambient glow behind logo — optimized for performance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          // Removed expensive CSS blur, using a softer gradient instead
          background: 'radial-gradient(circle, rgba(230,57,70,0.06) 0%, rgba(230,57,70,0.02) 40%, rgba(230,57,70,0) 70%)',
          pointerEvents: 'none',
          willChange: 'transform, opacity',
        }}
      />

      {/* Center content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>

        {/* Logo — Optimized animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={
            phase === 'enter'
              ? { opacity: 1, y: 0, scale: 1 }
              : phase === 'reveal'
              ? { opacity: 1, y: -5, scale: 1.02 }
              : { opacity: 0, y: -15, scale: 1.05 }
          }
          transition={{
            duration: phase === 'enter' ? 0.8 : 0.4,
            ease: [0.16, 1, 0.3, 1],
            delay: phase === 'enter' ? 0.1 : 0,
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <img
            src={logoSrc}
            alt="Broad Solution Tech"
            style={{
              height: '280px',
              width: 'auto',
              objectFit: 'contain',
              // Crop the bottom 20% to hide the text and only show the B
              clipPath: 'inset(0% 0% 20% 0%)',
              marginBottom: '-56px' // Compensate for the cropped space so it stays centered
            }}
          />
        </motion.div>

        {/* Thin accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            phase === 'enter'
              ? { scaleX: 1, opacity: 1 }
              : { scaleX: 0, opacity: 0 }
          }
          transition={{
            duration: phase === 'enter' ? 0.8 : 0.3,
            ease: [0.16, 1, 0.3, 1],
            delay: phase === 'enter' ? 0.8 : 0,
          }}
          style={{
            marginTop: '40px',
            width: '80px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #E63946, transparent)',
            transformOrigin: 'center',
            willChange: 'transform, opacity',
          }}
        />

        {/* 3 pulsing dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={phase === 'enter' ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: phase === 'enter' ? 1.1 : 0, duration: 0.4 }}
          style={{
            marginTop: '24px',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            willChange: 'opacity',
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: '#E63946',
                willChange: 'transform, opacity',
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
