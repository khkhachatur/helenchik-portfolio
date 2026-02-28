'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-screen bg-black text-[#F2EBE3] flex flex-col relative overflow-hidden">
      

      <header className="w-full p-6 flex justify-between items-center z-20">
        <div className="text-sm tracking-widest uppercase">Elen Khachatryan</div>
        <nav className="space-x-6 text-sm">
          <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
        </nav>
      </header>


      <main className="flex-1 flex flex-col items-center justify-center z-10 relative">
        
        <h1 className="text-8xl md:text-[150px] font-bold tracking-tighter uppercase mb-12 z-20">
          Portfolio
        </h1>


        <div className="flex gap-10 md:gap-32 relative z-30">
          

          <motion.img 
            src="/images/eye-lf.png" 
            alt="Organic texture left"
            className="w-48 md:w-80 cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            animate={{ y: [0, -20, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />


          <motion.img 
            src="/images/eye-rh.png" 
            alt="Organic texture right"
            className="w-48 md:w-80 cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            animate={{ y: [0, -25, 0] }} // Slightly different timing for organic feel
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>

        <h2 className="text-4xl md:text-6xl font-light tracking-tight mt-12 z-20">
          Elen Khachatryan
        </h2>

      </main>
    </div>
  );
}