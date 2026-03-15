'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { League_Gothic } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  display: 'swap',
});

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Selected Works', href: '#works' },
  { title: 'The Archive', href: '#archive' },
  { title: 'Information', href: '#about' },
  { title: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      if (pathname !== '/') {
        router.push(`/${href}`);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 500); 
  };

 return (
    <>

      <div className="fixed top-4 md:top-10 left-0 right-0 w-full z-[80] pointer-events-none flex justify-center">
        <div className="w-full max-w-[1440px] px-4 md:px-10 flex justify-between items-start gap-2">
          
          <a 
            href={pathname === '/support' ? '/' : '/support'}
            className="pointer-events-auto group flex items-center mix-blend-difference shrink-0"
          >
            <div className="text-[#DC2626] hover:text-white hover:bg-[#DC2626] transition-all duration-300 font-mono uppercase tracking-widest text-[10px] sm:text-xs md:text-sm bg-black/20 px-3 py-2 md:px-4 backdrop-blur-md border border-[#DC2626]/50 shadow-[0_0_15px_rgba(220,38,38,0.2)] whitespace-nowrap">
              {pathname === '/support' ? (
                <>
                  <span className="hidden sm:inline">[ BACK TO PORTFOLIO ]</span>
                  <span className="sm:hidden">[ BACK ]</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">[ HELP HELEN STUDY IN EUROPE ]</span>
                  <span className="sm:hidden">[ SUPPORT ]</span>
                </>
              )}
            </div>
          </a>

          <button 
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto group flex items-center gap-3 mix-blend-difference shrink-0"
          >
            <span className="font-mono text-[#F5E1D9] text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
              Explore
            </span>
            <div className="text-[#F5E1D9] hover:text-[#DC2626] transition-colors font-mono uppercase tracking-widest text-[10px] sm:text-xs md:text-sm bg-black/20 px-3 py-2 md:px-4 backdrop-blur-md border border-[#F5E1D9]/20 whitespace-nowrap">
              [ Menu ]
            </div>
          </button>

        </div>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col justify-between p-6 md:p-12 overflow-hidden"
          >
            
            <div className="absolute inset-0 pointer-events-none z-0 opacity-20 grayscale">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/helen-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
            </div>

            <div className="flex justify-between items-start z-10 w-full relative">
              <span className={`${leagueGothic.className} text-4xl text-[#F5E1D9] uppercase tracking-widest`}>
                HK.
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#F5E1D9] hover:text-[#DC2626] transition-colors font-mono uppercase tracking-widest text-sm bg-black/50 px-4 py-2 backdrop-blur-md border border-[#F5E1D9]/20"
              >
                [ Close ]
              </button>
            </div>

            <div className="flex flex-col items-center justify-center grow z-10 w-full">
              {navLinks.map((link, index) => (
                <div key={link.title} className="overflow-hidden w-full flex justify-center py-4 -my-2">
                  <motion.div
                    initial={{ y: "100%", opacity: 0, rotate: 5 }}
                    animate={{ y: "0%", opacity: 1, rotate: 0 }}
                    exit={{ y: "-100%", opacity: 0, rotate: -5 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <a 
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="group flex items-center gap-6 cursor-pointer"
                    >
                      <span className="font-mono text-xs md:text-sm opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                        0{index + 1}
                      </span>
                      <h2 className={`${leagueGothic.className} text-[12vw] md:text-[8vw] uppercase leading-none tracking-wide text-[#F5E1D9] group-hover:text-[#DC2626] group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500`}>
                        {link.title}
                      </h2>
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end z-10 w-full font-mono text-xs uppercase opacity-50 tracking-widest relative">
              <p>Helen Khachatryan <br/> Fashion Portfolio</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="https://www.instagram.com/helen.chik?igsh=MXduenM1OG9wNTlr&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-[#F5E1D9]">Personal IG</a>
                <a href="https://www.instagram.com/h.lelenh?igsh=MWF4dmdpdW0ydmUwdA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-[#F5E1D9]">Brand IG</a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}