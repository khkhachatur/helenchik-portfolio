'use client';

import { motion } from 'framer-motion';
import { League_Gothic } from 'next/font/google';
import Image from 'next/image';
import { certificates } from '../lib/data';

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  display: 'swap',
});



export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#050505] text-[#F5E1D9] relative z-10 pt-24 md:pt-32 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#F5E1D9]/20 pb-8 mb-12">
            <h2 className={`${leagueGothic.className} text-6xl md:text-8xl tracking-wide uppercase text-[#DC2626]`}>
              Certificates & Awards
            </h2>
            <p className="font-mono opacity-50 uppercase tracking-widest mt-4 text-sm">
              [ Official Documentation ]
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-4xl">
            {certificates.map((cert, index) => (
              <motion.a 
                key={cert.id}
                href={cert.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group block relative w-full aspect-[4/3] bg-[#0A0A0A] border border-[#F5E1D9]/10 overflow-hidden cursor-pointer"
              >
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill 
                  className="object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity"
                />
                
                <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] md:text-xs opacity-70 uppercase border border-[#F5E1D9]/20 px-1.5 md:px-2 py-0.5 md:py-1">
                      {cert.year}
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F5E1D9" strokeWidth="1.5" className="w-4 h-4 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="12" y1="18" x2="12" y2="12"></line>
                      <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className={`${leagueGothic.className} text-2xl md:text-4xl uppercase tracking-wide leading-none md:leading-tight group-hover:text-[#DC2626] transition-colors`}>
                      {cert.title}
                    </h3>
                    <p className="font-mono text-[9px] md:text-sm opacity-70 mt-1 md:mt-2 uppercase leading-tight">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm z-0">
                  <span className="font-mono text-[10px] md:text-sm tracking-widest uppercase border-b border-[#DC2626] text-[#F5E1D9] pb-1">
                    View PDF
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}