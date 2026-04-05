'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../lib/data';
import { leagueGothic } from '../lib/fonts';

export default function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="works" className="w-full min-h-screen bg-[#050505] text-[#F5E1D9] py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-[#F5E1D9]/20 pb-8 z-20 relative">
          <h2 className={`${leagueGothic.className} text-6xl md:text-8xl tracking-wide uppercase`}>
            Selected Works
          </h2>
          <p className="text-sm md:text-base font-light tracking-widest uppercase opacity-70 mt-4 md:mt-0">
            [ {projects.length} Featured Projects ]
          </p>
        </div>

        <div className="flex flex-col w-full relative">
          {projects.map((project, index) => (
            <Link href={`/works/${project.id}`} key={project.id} className="block w-full z-20">
              
              <motion.div
                className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-10 md:py-16 border-b border-[#F5E1D9]/10 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                
                <div className="flex items-start md:items-center gap-6 md:gap-12 pointer-events-none">
                  <span className="text-sm md:text-lg font-mono opacity-40 mt-2 md:mt-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.id}
                  </span>
                  <motion.h3 
                    className={`${leagueGothic.className} text-5xl md:text-8xl lg:text-[9rem] uppercase leading-none tracking-wide`}
                    animate={{ 
                      x: hoveredIndex === index ? 30 : 0,
                      color: hoveredIndex === index ? '#DC2626' : '#F5E1D9'
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <div className="block lg:hidden relative w-full aspect-video mt-8 mb-6 overflow-hidden rounded-sm pointer-events-none">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-80"
                    sizes="(max-width: 1024px) 100vw, 0px"
                  />
                  <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
                </div>

                <motion.div
                  className="absolute left-[45%] top-1/2 -translate-y-1/2 w-[320px] h-[420px] pointer-events-none z-10 hidden lg:block overflow-hidden rounded-md shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8,
                    rotate: hoveredIndex === index ? 3 : -5,
                    x: hoveredIndex === index ? 0 : -20
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="relative w-full h-full bg-[#111]">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover opacity-90"
                      sizes="320px"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
                  </div>
                </motion.div>

                <div className="flex items-center gap-8 mt-2 md:mt-0 pointer-events-none">
                  <div className="text-left md:text-right transition-transform duration-300 lg:group-hover:-translate-x-4">
                    <p className="text-lg md:text-xl font-light uppercase tracking-widest text-[#F5E1D9]">
                      {project.category}
                    </p>
                    <p className="text-sm md:text-md opacity-50 font-mono mt-1 text-[#F5E1D9]">
                      {project.year}
                    </p>
                  </div>
                  
                  <motion.div 
                    className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-[#F5E1D9]/30"
                    animate={{ 
                      rotate: hoveredIndex === index ? -45 : 0,
                      backgroundColor: hoveredIndex === index ? '#F5E1D9' : 'transparent',
                      borderColor: hoveredIndex === index ? '#F5E1D9' : 'rgba(245, 225, 217, 0.3)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg 
                      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: hoveredIndex === index ? '#050505' : '#F5E1D9', transition: 'stroke 0.3s' }}
                    >
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>

              </motion.div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}