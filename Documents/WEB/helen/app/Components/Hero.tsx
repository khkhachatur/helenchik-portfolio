'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { League_Gothic } from 'next/font/google';

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  display: 'swap',
});

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <main className="w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden">
      
      <div className="relative w-full max-w-[1440px] h-screen max-h-[1000px] overflow-hidden bg-[#050505]">
        
        <motion.div 
          className="absolute inset-0 z-0 origin-center"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image 
            src="/images/bg.png" 
            alt="Red Background" 
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover z-0"
          />
          <Image 
            src="/images/texture.png" 
            alt="Dark Texture Overlay" 
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover z-10 opacity-70 mix-blend-multiply"
          />
        </motion.div>

        <motion.div 
          className="absolute inset-0 z-20 flex items-center justify-center cursor-crosshair"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ 
            scale: isHovered ? 1.03 : 1,
            filter: isHovered 
              ? "drop-shadow(0px 0px 45px rgba(220, 38, 38, 0.8))"
              : "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.5))"
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image 
            src="/images/women.png" 
            alt="Central Figure" 
            width={600}
            height={800}
            className="h-[65%] w-auto object-contain pointer-events-none"
          />
        </motion.div>

        <motion.div 
          className="absolute inset-y-0 left-0 w-1/2 md:w-[55%] z-30 pointer-events-none"
          animate={{ 
            x: isHovered ? -30 : 0,
            filter: isHovered 
              ? "drop-shadow(15px 0px 25px rgba(220, 38, 38, 0.9))" 
              : "drop-shadow(0px 0px 0px rgba(0,0,0,0))"
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image 
            src="/images/left-crack.png" 
            alt="Left Crack" 
            fill
            sizes="(max-width: 1440px) 55vw, 800px"
            className="object-cover object-left" 
          />
        </motion.div>

        <motion.div 
          className="absolute inset-y-0 right-0 w-1/2 md:w-[55%] z-30 pointer-events-none"
          animate={{ 
            x: isHovered ? 30 : 0,
            filter: isHovered 
              ? "drop-shadow(-15px 0px 25px rgba(220, 38, 38, 0.9))" 
              : "drop-shadow(0px 0px 0px rgba(0,0,0,0))"
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image 
            src="/images/right-crack.png" 
            alt="Right Crack" 
            fill
            sizes="(max-width: 1440px) 55vw, 800px"
            className="object-cover object-right" 
          />
        </motion.div>

        <motion.div
          className="absolute left-[15%] top-[50%] -translate-y-1/2 z-40 cursor-pointer w-60 h-60 md:w-120 md:h-120"
          animate={floatingAnimation}
          whileHover={{ 
            scale: 1.05, 
            x: -15, 
            y: -10, 
            rotate: -5,
            transition: { type: "spring", stiffness: 100, damping: 10 }
          }}
        >
          <Image src="/images/left-eye.png" alt="Left eye" fill sizes="320px" className="object-contain" />
        </motion.div>

        <motion.div
          className="absolute right-[15%] top-[50%] -translate-y-1/2 z-40 cursor-pointer w-65 h-65 md:w-120 md:h-120"
          animate={floatingAnimation}
          whileHover={{ 
            scale: 1.05, 
            x: 15, 
            y: -10, 
            rotate: 5,
            transition: { type: "spring", stiffness: 100, damping: 10 }
          }}
        >
          <Image src="/images/right-eye.png" alt="Right eye" fill sizes="320px" className="object-contain" />
        </motion.div>

       <div className="absolute left-4 md:left-8 top-0 bottom-0 py-8 flex items-center justify-center z-50 pointer-events-none">
          <h1 
            className={`${leagueGothic.className} text-[#F5E1D9] uppercase whitespace-nowrap`}
            style={{ 
              writingMode: 'vertical-rl', 
              transform: 'rotate(180deg)',
              fontSize: 'clamp(6rem, 16vh, 14rem)', 
              letterSpacing: '0.02em',
            }}
          >
            Portfolio
          </h1>
        </div>

        <div className="absolute right-4 md:right-8 top-0 bottom-0 py-8 flex items-center justify-center z-50 pointer-events-none">
          <h1 
            className={`${leagueGothic.className} text-[#F5E1D9] uppercase whitespace-nowrap`}
            style={{ 
              writingMode: 'vertical-rl',
              fontSize: 'clamp(6rem, 16vh, 14rem)', 
              letterSpacing: '0.02em',
            }}
          >
            Helen Khachatryan
          </h1>
        </div>

      </div>
    </main>
  );
}