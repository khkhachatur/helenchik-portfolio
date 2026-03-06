'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[80] group flex items-center gap-3 mix-blend-difference"
        >
          <span className="font-mono text-[#F5E1D9] text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
            Back to
          </span>
          <div className="text-[#F5E1D9] hover:text-[#DC2626] transition-colors font-mono uppercase tracking-widest text-sm bg-black/20 px-4 py-2 backdrop-blur-md border border-[#F5E1D9]/20">
            [ Top ]
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}