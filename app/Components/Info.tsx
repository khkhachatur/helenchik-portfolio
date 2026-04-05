'use client';

import { education, fashionExperience, handsOnExperience, languages, skills, tools } from '../lib/data';
import { leagueGothic } from '../lib/fonts';




export default function Info() {
  return (
    <section id="about" className="w-full bg-[#050505] text-[#F5E1D9] py-16 md:py-32 px-4 md:px-8 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="mb-12 md:mb-32">
          <h2 className={`${leagueGothic.className} text-7xl md:text-[10rem] tracking-wide uppercase leading-none`}>
            Helen Khachatryan
          </h2>
          <p className="font-mono opacity-50 uppercase tracking-widest mt-4 text-xs md:text-base">
            [ Fashion Designer & Creator ]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-[#F5E1D9]/20 pt-8 md:pt-16 mb-16 md:mb-24">
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-lg md:text-2xl uppercase tracking-widest font-light text-[#DC2626]">Fashion-Related Experience</h3>
          </div>
          <div className="col-span-1 md:col-span-8 flex flex-col">
            {fashionExperience.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center py-3 md:py-6 border-b border-[#F5E1D9]/10 group hover:border-[#F5E1D9]/40 transition-colors">
                <span className="font-mono text-xs md:text-base opacity-50 md:w-24 mb-1 md:mb-0 shrink-0">{item.year}</span>
                <span className="text-base md:text-2xl uppercase tracking-wider grow group-hover:text-[#DC2626] transition-colors leading-tight">{item.title}</span>
                <span className="font-mono opacity-70 text-[10px] md:text-sm mt-1 md:mt-0 md:text-right shrink-0">{item.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-[#F5E1D9]/20 pt-8 md:pt-16 mb-16 md:mb-24">
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-lg md:text-2xl uppercase tracking-widest font-light text-[#DC2626]">Hands-On Experience</h3>
          </div>
          <div className="col-span-1 md:col-span-8 flex flex-col">
            {handsOnExperience.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center py-3 md:py-5 border-b border-[#F5E1D9]/10 group hover:border-[#F5E1D9]/40 transition-colors">
                <span className="font-mono text-xs md:text-base opacity-50 md:w-24 mb-1 md:mb-0 shrink-0">{item.year}</span>
                <span className="text-base md:text-xl uppercase tracking-wider grow group-hover:text-[#DC2626] transition-colors leading-tight">{item.title}</span>
                <span className="font-mono opacity-70 text-[10px] md:text-sm mt-1 md:mt-0 md:text-right shrink-0">{item.instructor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-[#F5E1D9]/20 pt-8 md:pt-16 mb-16 md:mb-24">
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-lg md:text-2xl uppercase tracking-widest font-light text-[#DC2626]">Education</h3>
          </div>
          <div className="col-span-1 md:col-span-8 flex flex-col">
            {education.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center py-3 md:py-6 border-b border-[#F5E1D9]/10 group hover:border-[#F5E1D9]/40 transition-colors">
                <span className="font-mono text-xs md:text-base opacity-50 md:w-32 mb-1 md:mb-0 shrink-0">{item.year}</span>
                <span className="text-base md:text-2xl uppercase tracking-wider grow group-hover:text-[#DC2626] transition-colors leading-tight">{item.title}</span>
                {item.desc && <span className="font-mono opacity-70 text-[10px] md:text-sm mt-1 md:mt-0 md:text-right shrink-0">{item.desc}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-[#F5E1D9]/20 pt-8 md:pt-16">
          
          <div>
            <h3 className="text-xs md:text-sm font-mono opacity-50 uppercase tracking-widest mb-4 md:mb-8">[ Skills ]</h3>
            <ul className="flex flex-wrap md:flex-col gap-x-3 gap-y-2 md:gap-3">
              {skills.map(skill => (
                <li key={skill} className="text-sm md:text-xl uppercase tracking-wider flex items-center gap-2">
                  <span className="block md:hidden w-1 h-1 rounded-full bg-[#DC2626]" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs md:text-sm font-mono opacity-50 uppercase tracking-widest mb-4 md:mb-8">[ Tools ]</h3>
            <ul className="flex flex-wrap md:flex-col gap-x-3 gap-y-2 md:gap-3">
              {tools.map(tool => (
                <li key={tool} className="text-sm md:text-xl uppercase tracking-wider flex items-center gap-2">
                  <span className="block md:hidden w-1 h-1 rounded-full bg-[#DC2626]" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs md:text-sm font-mono opacity-50 uppercase tracking-widest mb-4 md:mb-8">[ Languages ]</h3>
            <ul className="flex flex-wrap md:flex-col gap-x-3 gap-y-2 md:gap-3">
              {languages.map(lang => (
                <li key={lang} className="text-sm md:text-xl uppercase tracking-wider flex items-center gap-2">
                  <span className="block md:hidden w-1 h-1 rounded-full bg-[#DC2626]" />
                  {lang}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}