'use client';

import { motion } from 'framer-motion';
import { League_Gothic } from 'next/font/google';
import Image from 'next/image';

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  display: 'swap',
});

const DONATION_LINK = "https://whydonate.com/fundraising/help-helen-study-fashion-in-europe";
const NOTE_TEXT = "Important: Please leave your email or IG handle in the donation message so we can send your reward.";
const NOTE_WORDS = NOTE_TEXT.split(" ");

export default function SupportCampaignClient({ liveData }: { liveData: any }) {
  let delayCounter = 0; 

  return (
    <main className="min-h-screen bg-[#050505] text-[#F5E1D9] selection:bg-[#DC2626] selection:text-white pb-32">
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-32 px-4 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] z-10" />
          <Image 
            src="/images/imprisonment.JPEG" 
            alt="Helen Khachatryan Design Process" 
            fill 
            className="object-cover grayscale"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="font-mono text-[#DC2626] uppercase tracking-[0.3em] text-xs md:text-sm mb-6 border border-[#DC2626] px-4 py-1">
            Official Campaign
          </span>
          <h1 className={`${leagueGothic.className} text-7xl md:text-[140px] leading-[0.85] tracking-wide uppercase text-[#F5E1D9] drop-shadow-2xl`}>
            Shape the Future <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E1D9] to-[#737373]">Of Fashion.</span>
          </h1>
        </motion.div>
      </section>

      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex justify-between font-mono text-sm uppercase tracking-widest mb-4">
            <span>Raised: <span className="text-[#DC2626]">{liveData.raised}</span></span>
            <span className="opacity-50">Goal: {liveData.target}</span>
          </div>
          <div className="w-full h-2 bg-[#F5E1D9]/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${liveData.percentage}%` }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full bg-[#DC2626]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className={`${leagueGothic.className} text-5xl md:text-7xl uppercase tracking-wide text-[#DC2626] mb-6`}>
              The Goal: $30,000
            </h2>
            <a 
              href={DONATION_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block w-full text-center bg-[#F5E1D9] text-[#050505] font-mono uppercase tracking-widest font-bold text-sm py-4 hover:bg-[#DC2626] hover:text-white transition-colors duration-300"
            >
              Support on WhyDonate
            </a>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Academic Tuition", amount: "$15k - $25k", desc: "Secures the yearly tuition fee at Europe's top academies." },
              { title: "Housing & Living", amount: "~$10k", desc: "Accommodation and basic living expenses for one year." },
            ].map((item, i) => (
              <div key={i} className="border border-[#F5E1D9]/20 p-6 bg-[#0A0A0A]">
                <h3 className={`${leagueGothic.className} text-3xl uppercase tracking-wide text-[#F5E1D9]`}>{item.title}</h3>
                <p className="font-mono text-xl text-[#DC2626] mb-4">{item.amount}</p>
                <p className="font-mono text-[10px] opacity-50 uppercase tracking-widest leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-20 relative z-10 border-t border-[#F5E1D9]/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tier: "The Advocate", price: "$50+", reward: "High-resolution digital unreleased sketch." },
            { tier: "The Muse", price: "$300+", reward: "A custom design moodboard inspired by YOU." },
            { tier: "The Visionary", price: "$1,000+", reward: "Original mixed-media portrait on canvas (50x40cm)." }
          ].map((tier, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 border border-[#F5E1D9]/10 bg-[#0A0A0A]">
              <span className="font-mono text-[#DC2626] text-sm uppercase tracking-widest mb-2">{tier.tier}</span>
              <h3 className={`${leagueGothic.className} text-5xl text-[#F5E1D9] mb-6`}>{tier.price}</h3>
              <p className="font-mono text-[11px] opacity-70 uppercase tracking-widest leading-relaxed flex-grow">{tier.reward}</p>
              <a href={DONATION_LINK} target="_blank" rel="noreferrer" className="mt-8 border border-[#F5E1D9]/30 font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black transition-all">Select Tier</a>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mt-16 max-w-3xl mx-auto text-center">
          {NOTE_WORDS.map((word, wordIndex) => (
            <div key={wordIndex} className="flex">
              {Array.from(word).map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0], color: ['#F5E1D9', '#DC2626', '#F5E1D9'] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: delayCounter++ * 0.05 }}
                  className="font-mono text-[10px] md:text-sm uppercase tracking-widest font-bold"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#050505] to-transparent z-[100] md:hidden flex justify-center">
        <a href={DONATION_LINK} target="_blank" rel="noreferrer" className="w-full max-w-sm bg-[#DC2626] text-white font-mono uppercase tracking-widest font-bold text-center py-4">Donate Now</a>
      </div>
    </main>
  );
}