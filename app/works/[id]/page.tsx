'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { projectDetails } from '../../lib/data';
import InfiniteSlider from '@/app/Components/InfiniteSlider';
import { leagueGothic } from '../../lib/fonts';

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    return notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#050505] text-[#F5E1D9] selection:bg-[#DC2626] selection:text-white pb-32 overflow-x-hidden">

      <nav className="w-full p-6 md:px-12 md:py-6 flex justify-between items-center fixed top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#F5E1D9]/10">
        <Link href="/#works" className="text-sm font-mono tracking-widest uppercase text-[#F5E1D9] hover:text-[#DC2626] transition-colors">
          ← Back to Works
        </Link>
      </nav>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-32 md:pt-40">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-mono opacity-50 mb-4">{id} — {project.year}</p>
          <h1 className={`${leagueGothic.className} text-7xl md:text-[12rem] uppercase leading-[0.85] tracking-wide mb-8 text-[#DC2626]`}>
            {project.title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#F5E1D9]/20 pt-12">
            
            <div className="col-span-1 md:col-span-4 flex flex-col gap-8 font-mono text-sm">
              <div>
                <h4 className="opacity-50 uppercase mb-2">Category</h4>
                <p className="text-lg uppercase">{project.category}</p>
              </div>
              <div>
                <h4 className="opacity-50 uppercase mb-2">Materials</h4>
                <ul className="text-base uppercase">
                  {project.materials.map(mat => <li key={mat}>{mat}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="opacity-50 uppercase mb-2">Techniques</h4>
                <ul className="text-base uppercase">
                  {project.techniques.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
            </div>

            <div className="col-span-1 md:col-span-8">
              <p className="text-xl md:text-3xl font-light leading-relaxed mb-12">
                {project.description}
              </p>
              
              {project.stages && project.stages.length > 0 && (
                <div className="mt-12">
                  <h3 className={`${leagueGothic.className} text-4xl mb-6 text-[#DC2626]`}>THE STAGES</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.stages.map((stage, i) => (
                      <div key={i} className="border-l border-[#F5E1D9]/30 pl-4">
                        <h4 className="font-mono text-lg mb-2">{i + 1}. {stage.name}</h4>
                        <p className="opacity-70 font-light text-sm">{stage.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-12 mt-16">
          

          {project.sketches && project.sketches.length > 0 && (
            <div>
              <div className="max-w-[1440px] mx-auto px-4 md:px-0 mb-4">
                <h3 className={`${leagueGothic.className} text-4xl text-[#DC2626] tracking-wide uppercase`}>01. The Concept</h3>
              </div>
              <InfiniteSlider images={project.sketches} direction="left" duration={60} />
            </div>
          )}

          {project.materialImages && project.materialImages.length > 0 && (
            <div>
              <div className="max-w-[1440px] mx-auto px-4 md:px-0 mb-4 flex justify-end">
                <h3 className={`${leagueGothic.className} text-4xl text-[#F5E1D9] opacity-80 tracking-wide uppercase`}>02. Process & Materials</h3>
              </div>
              <InfiniteSlider images={project.materialImages} direction="right" duration={65} />
            </div>
          )}

          {project.products && project.products.length > 0 && (
            <div>
              <div className="max-w-[1440px] mx-auto px-4 md:px-0 mb-4">
                <h3 className={`${leagueGothic.className} text-4xl text-[#DC2626] tracking-wide uppercase`}>03. Final Garments</h3>
              </div>
              <InfiniteSlider images={project.products} direction="left" duration={55} />
            </div>
          )}

        </div>
      </div>
    </main>
  );
}