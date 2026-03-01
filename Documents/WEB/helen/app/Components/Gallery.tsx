'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, AnimatePresence, wrap, useDragControls } from 'framer-motion';
import { League_Gothic } from 'next/font/google';
import { galleryItems } from '../lib/data';

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  display: 'swap',
});

const CARD_W = 300;
const GAP_X = 100;
const CELL_W = CARD_W + GAP_X; 
const COLS = 8;
const BLOCK_W = COLS * CELL_W; 

const CARD_H = 375;
const GAP_Y = 125;
const CELL_H = CARD_H + GAP_Y; 
const ROWS = 5;
const BLOCK_H = ROWS * CELL_H; 

const blockItems = Array.from({ length: COLS * ROWS }).map((_, i) => {
  return galleryItems[i % galleryItems.length];
});

const GridBlock = () => (
  <div 
    className="grid relative shrink-0"
    style={{ 
      width: BLOCK_W, 
      height: BLOCK_H, 
      gridTemplateColumns: `repeat(${COLS}, ${CELL_W}px)`,
      gridTemplateRows: `repeat(${ROWS}, ${CELL_H}px)`,
    }}
  >
    {blockItems.map((item, index) => (
      <div key={index} className="flex items-center justify-center w-full h-full">
        <div className="group relative w-[300px] aspect-[4/5] overflow-hidden rounded-sm bg-[#0A0A0A] border border-[#F5E1D9]/10 shadow-2xl">
          <Image
            src={item.src}
            alt={item.title}
            fill
            quality={100}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 pointer-events-none">
            <h3 className={`${leagueGothic.className} text-3xl text-[#F5E1D9] uppercase tracking-wide drop-shadow-md`}>
              {item.title}
            </h3>
            <p className="font-mono text-xs text-[#F5E1D9]/70 uppercase mt-2 drop-shadow-sm">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function Gallery() {
  const [isInteractive, setIsInteractive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const dragControls = useDragControls();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const wrappedX = useTransform(x, (v) => wrap(-BLOCK_W, 0, v));
  const wrappedY = useTransform(y, (v) => wrap(-BLOCK_H, 0, v));

  useEffect(() => {
    if (isInteractive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isInteractive]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isInteractive) return;
      e.preventDefault(); 
      x.set(x.get() - e.deltaX * 1.5);
      y.set(y.get() - e.deltaY * 1.5);
    };

    const container = containerRef.current;
    if (container && isInteractive) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isInteractive, x, y]);

  return (
    <section className="relative h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
          <source src="/videos/helen-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className={`${leagueGothic.className} text-7xl md:text-9xl text-[#F5E1D9] tracking-wide uppercase drop-shadow-lg mb-6`}>
          Archive & Process
        </h2>
        <button 
          onClick={() => setIsInteractive(true)}
          className="group relative px-8 py-4 border border-[#DC2626] bg-[#050505]/50 backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#DC2626] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <span className="relative z-10 font-mono text-[#F5E1D9] uppercase tracking-widest text-sm group-hover:text-[#050505] transition-colors duration-500">
            Enter To Explore
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isInteractive && (
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[100] bg-[#050505] overflow-hidden overscroll-none touch-none"
          >
            
            <button 
              onClick={() => setIsInteractive(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[60] text-[#F5E1D9] hover:text-[#DC2626] transition-colors font-mono uppercase tracking-widest text-sm bg-black/50 px-4 py-2 backdrop-blur-md border border-[#F5E1D9]/20"
            >
              [ Close Archive ]
            </button>

            <div className="absolute top-10 left-6 md:left-10 z-[60] pointer-events-none opacity-80 drop-shadow-lg">
               <h2 className={`${leagueGothic.className} text-5xl md:text-6xl text-[#F5E1D9] tracking-wide uppercase`}>
                Archive
              </h2>
              <p className="font-mono text-[#DC2626] text-xs uppercase tracking-widest mt-1">
                Drag to explore
              </p>
            </div>

            <motion.div 
              drag
              dragControls={dragControls}
              dragListener={false} 
              style={{ x, y }}
              dragConstraints={{ left: -100000, right: 100000, top: -100000, bottom: 100000 }} 
              className="absolute opacity-0 pointer-events-none"
            />

            <div 
              className="absolute inset-0 z-40 cursor-grab active:cursor-grabbing w-full h-full select-none"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <motion.div 
                style={{ x: wrappedX, y: wrappedY }}
                className="absolute top-0 left-0 flex flex-col"
              >
                <div className="flex">
                  <GridBlock />
                  <GridBlock />
                </div>
                <div className="flex">
                  <GridBlock />
                  <GridBlock />
                </div>
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}