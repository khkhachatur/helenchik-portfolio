'use client';

import { League_Gothic } from 'next/font/google';

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  display: 'swap',
});

const fashionExperience = [
  { year: '2025', title: 'Fashion Scout Armenia Polimoda Prize', role: 'Winner' },
  { year: '2025', title: 'TUMO Studios Internship Knitwear Collection', role: 'Brand: @h.lelenh' },
  { year: '2023', title: 'Photo Vogue Competition', role: 'Styling Assistant' },
  { year: '2023', title: 'Naira Khachatryan\'s Fashion Show "Nature Within"', role: 'Backstage Dresser' },
  { year: '2023', title: 'Sonya Avagyan\'s "Dragons" Collection', role: 'Assistant' },
];

const handsOnExperience = [
  { year: '2025', title: 'Materials & Manipulation', instructor: 'Shanshan Ruan / TUMO' },
  { year: '2025', title: 'Hand-Lettering', instructor: 'Liza Rasskazova & Anna Khorash / TUMO' },
  { year: '2025', title: 'Contemporary Sashiko & Boro', instructor: 'Karina Tanabe Jones / TUMO' },
  { year: '2025', title: 'Uniform for Moscow Transport Museum', instructor: 'Tanmay Saxena / TUMO' },
  { year: '2025', title: 'Embroidery Tech Course', instructor: 'Mariam Gharibyan / TUMO' },
  { year: '2023', title: 'Bag Construction', instructor: 'Armin Sahakyan / TUMO' },
  { year: '2023', title: 'Machine Knitting Tech Course', instructor: 'Victoria Salmon / TUMO' },
  { year: '2023', title: 'Felt Bags: Design, Knitting, Dyeing', instructor: 'Diane Goignoux / TUMO' },
  { year: '2023', title: 'Embroidery Accessories', instructor: 'Mariam Gharibyan / TUMO' },
  { year: '2023', title: 'Fashion Sketching', instructor: 'Lili Mehrabyan / TUMO' },
  { year: '2023', title: 'Pattern Making Tech Course', instructor: 'Anna Rafaelyan / TUMO' },
  { year: '2023', title: 'Doll Making (Paper-Mache & Costume)', instructor: 'Susanna Alaverdyan' },
];

const education = [
  { year: '2023—2025', title: 'TUMO Studios', desc: '' },
  { year: '2020—2023', title: 'Hayordyats Tun Cultural Center (Yerevan)', desc: 'Fine Arts' },
  { year: '2021—2023', title: 'Hayordyats Tun Cultural Center (Ejmiatsin)', desc: 'Fine Arts' },
  { year: '2020—2022', title: 'A. Margaryan High School No.29', desc: '' },
];

const skills = ['Styling', 'Sketching', 'Crafting', 'Photography', 'Videography', 'Sewing', 'Hand Knitting', 'Machine Knitting', 'Crochet', 'Embroidery', 'Macrame'];
const tools = ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'];
const languages = ['Armenian (Native)', 'Russian (Native)', 'English (Advanced)', 'Portuguese (Intermediate)'];

export default function Info() {
  return (
    <section id="about" className="w-full bg-[#050505] text-[#F5E1D9] py-24 md:py-32 px-4 md:px-8 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="mb-20 md:mb-32">
          <h2 className={`${leagueGothic.className} text-7xl md:text-[10rem] tracking-wide uppercase leading-none`}>
            Helen Khachatryan
          </h2>
          <p className="font-mono opacity-50 uppercase tracking-widest mt-4">
            [ Fashion Designer & Creator ]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#F5E1D9]/20 pt-12 md:pt-16 mb-24">
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-xl md:text-2xl uppercase tracking-widest font-light text-[#DC2626]">Fashion-Related Experience</h3>
          </div>
          <div className="col-span-1 md:col-span-8 flex flex-col">
            {fashionExperience.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center py-6 border-b border-[#F5E1D9]/10 group hover:border-[#F5E1D9]/40 transition-colors">
                <span className="font-mono opacity-50 w-24 mb-2 md:mb-0 shrink-0">{item.year}</span>
                <span className="text-lg md:text-2xl uppercase tracking-wider grow group-hover:text-[#DC2626] transition-colors">{item.title}</span>
                <span className="font-mono opacity-70 text-sm mt-2 md:mt-0 md:text-right shrink-0">{item.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#F5E1D9]/20 pt-12 md:pt-16 mb-24">
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-xl md:text-2xl uppercase tracking-widest font-light text-[#DC2626]">Hands-On Experience</h3>
          </div>
          <div className="col-span-1 md:col-span-8 flex flex-col">
            {handsOnExperience.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center py-5 border-b border-[#F5E1D9]/10 group hover:border-[#F5E1D9]/40 transition-colors">
                <span className="font-mono opacity-50 w-24 mb-1 md:mb-0 shrink-0">{item.year}</span>
                <span className="text-lg md:text-xl uppercase tracking-wider grow group-hover:text-[#DC2626] transition-colors">{item.title}</span>
                <span className="font-mono opacity-70 text-sm mt-1 md:mt-0 md:text-right shrink-0">{item.instructor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#F5E1D9]/20 pt-12 md:pt-16 mb-24">
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-xl md:text-2xl uppercase tracking-widest font-light text-[#DC2626]">Education</h3>
          </div>
          <div className="col-span-1 md:col-span-8 flex flex-col">
            {education.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center py-6 border-b border-[#F5E1D9]/10 group hover:border-[#F5E1D9]/40 transition-colors">
                <span className="font-mono opacity-50 w-32 mb-2 md:mb-0 shrink-0">{item.year}</span>
                <span className="text-lg md:text-2xl uppercase tracking-wider grow group-hover:text-[#DC2626] transition-colors">{item.title}</span>
                {item.desc && <span className="font-mono opacity-70 text-sm mt-2 md:mt-0 md:text-right shrink-0">{item.desc}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#F5E1D9]/20 pt-12 md:pt-16">
          
          <div>
            <h3 className="text-sm font-mono opacity-50 uppercase tracking-widest mb-8">[ Skills ]</h3>
            <ul className="flex flex-col gap-3">
              {skills.map(skill => (
                <li key={skill} className="text-lg md:text-xl uppercase tracking-wider">{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-mono opacity-50 uppercase tracking-widest mb-8">[ Tools ]</h3>
            <ul className="flex flex-col gap-3">
              {tools.map(tool => (
                <li key={tool} className="text-lg md:text-xl uppercase tracking-wider">{tool}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-mono opacity-50 uppercase tracking-widest mb-8">[ Languages ]</h3>
            <ul className="flex flex-col gap-3">
              {languages.map(lang => (
                <li key={lang} className="text-lg md:text-xl uppercase tracking-wider">{lang}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}