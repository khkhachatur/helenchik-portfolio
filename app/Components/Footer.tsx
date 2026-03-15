'use client';

import { League_Gothic } from 'next/font/google';

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  display: 'swap',
});

export default function Footer() {
  return (
    <footer className="w-full bg-[#DC2626] text-[#050505] py-20 md:py-32 px-4 md:px-8 overflow-hidden relative selection:bg-[#050505] selection:text-[#F5E1D9]">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap opacity-10 pointer-events-none flex justify-center">
        <h2 className={`${leagueGothic.className} text-[17vw] uppercase leading-none`}>
          HELEN KHACHATRYAN
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
        
        <div className="flex flex-col gap-6">
          <p className="font-mono font-bold uppercase tracking-widest text-sm md:text-base">
            [ Open for Opportunities & Scholarships ]
          </p>
          <a 
            href="mailto:helenkhachatryan27@gmail.com" 
            className={`${leagueGothic.className} text-7xl md:text-[8rem] lg:text-[10rem] uppercase leading-[0.85] hover:opacity-70 transition-opacity inline-block`}
          >
            LET'S TALK
          </a>
        </div>

        <div className="flex flex-col gap-8 md:text-right font-mono uppercase text-sm md:text-base font-bold tracking-widest">
          
          <div className="flex flex-col gap-2">
            <span className="opacity-60 text-xs">Email</span>
            <a href="mailto:helenkhachatryan27@gmail.com" className="hover:underline underline-offset-4">
              helenkhachatryan27@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="opacity-60 text-xs">Phone</span>
            <a href="tel:+37495229767" className="hover:underline underline-offset-4">
              +374 95 229767
            </a>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="opacity-60 text-xs">Socials</span>
            <div className="flex flex-col md:items-end gap-1">
              <a href="https://www.instagram.com/helen.chik?igsh=MXduenM1OG9wNTlr&utm_source=qr" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
                Personal IG // @helen.chik
              </a>
              <a href="https://www.instagram.com/h.lelenh?igsh=MWF4dmdpdW0ydmUwdA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
                Brand IG // @h.lelenh
              </a>
              <a href="https://www.linkedin.com/in/helen-khachatryan-47630b3b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
                LinkedIn
              </a> 
            </div>
          </div>

          <div className="mt-8 opacity-60 text-xs">
            <p>© {new Date().getFullYear()} Helen Khachatryan.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}