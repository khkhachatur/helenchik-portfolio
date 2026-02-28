'use client';

// Hero section component
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
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

        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <Image 
            src="/images/women.png" 
            alt="Central Figure" 
            width={600}
            height={800}
            className="h-[65%] w-auto object-contain drop-shadow-2xl"
          />
        </div>

        <div className="absolute inset-y-0 left-0 w-1/2 md:w-[55%] z-30 pointer-events-none">
          <Image 
            src="/images/left-crack.png" 
            alt="Left Crack" 
            fill
            sizes="(max-width: 1440px) 55vw, 800px"
            className="object-cover object-left" 
          />
        </div>
        <div className="absolute inset-y-0 right-0 w-1/2 md:w-[55%] z-30 pointer-events-none">
          <Image 
            src="/images/right-crack.png" 
            alt="Right Crack" 
            fill
            sizes="(max-width: 1440px) 55vw, 800px"
            className="object-cover object-right" 
          />
        </div>


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

        <div className="absolute left-6 md:left-12 top-0 bottom-0 py-8 flex items-center justify-center z-50 pointer-events-none">
          <h1 
            className="text-[#F5E1D9] font-black uppercase whitespace-nowrap"
            style={{ 
              writingMode: 'vertical-rl', 
              transform: 'rotate(180deg)',
              fontSize: 'clamp(3rem, 7.5vh, 6rem)', 
              letterSpacing: '0.15em'
            }}
          >
            Portfolio
          </h1>
        </div>

        <div className="absolute right-6 md:right-12 top-0 bottom-0 py-8 flex items-center justify-center z-50 pointer-events-none">
          <h1 
            className="text-[#F5E1D9] font-black uppercase whitespace-nowrap"
            style={{ 
              writingMode: 'vertical-rl',
              fontSize: 'clamp(3rem, 7.5vh, 6rem)', 
              letterSpacing: '0.15em'
            }}
          >
            Helen Khachatryan
          </h1>
        </div>

      </div>
    </main>
  );
}