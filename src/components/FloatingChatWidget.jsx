import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingChatWidget() {
  const handleChatClick = () => {
    window.open('https://wa.me/923344443671', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <motion.button
        onClick={handleChatClick}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center justify-center w-14 h-14 bg-brand-accent text-white rounded-full shadow-[0_4px_14px_rgba(230,57,70,0.4)] hover:shadow-[0_6px_20px_rgba(230,57,70,0.6)] transition-shadow duration-300"
        aria-label="Open Chat"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>
    </div>
  );
}
