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

  const trackDonationClick = (buttonLocation: string) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'donate_button_click', {
        event_category: 'Fundraising',
        event_label: buttonLocation,
      });
      console.log(`GA4 Event Fired: donate_button_click from ${buttonLocation}`);
    }
  };

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
          <p className="font-mono text-xs md:text-sm opacity-70 uppercase tracking-widest mt-8 max-w-xl leading-relaxed">
            From winning Fashion Scout Armenia to Vogue Italia. Now accepted into Europe's top fashion academies. Join the journey to raise $30,000 and turn this vision into reality.
          </p>
        </motion.div>
      </section>

      <div className="w-full overflow-hidden border-y border-[#DC2626] bg-[#DC2626] text-white py-3 my-8 relative z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap font-mono text-sm uppercase tracking-widest"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 pr-12 font-bold">
              {liveData.recentDonors.map((donorText: string, index: number) => (
                <span key={index}>{donorText}</span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-20 relative z-10">
        
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex justify-between font-mono text-sm uppercase tracking-widest mb-4">
            <span>Raised: <span className="text-[#DC2626]">{liveData.raised}</span></span>
            <span className="opacity-50">Goal: {liveData.target}</span>
          </div>
          <div className="w-full h-2 bg-[#F5E1D9]/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${liveData.percentage}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-[#DC2626]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className={`${leagueGothic.className} text-5xl md:text-7xl uppercase tracking-wide text-[#DC2626] mb-6`}>
              The Goal: $30,000
            </h2>
            <p className="font-mono text-sm opacity-70 leading-relaxed uppercase tracking-wider mb-8">
              Transparency is key. The primary goal of this fund is to secure the university tuition. We are taking on the living and material expenses ourselves to make this dream possible.
            </p>
            <a 
              href={DONATION_LINK} 
              target="_blank" 
              rel="noreferrer"
              onClick={() => trackDonationClick('Main Hero Button')}
              className="inline-block w-full text-center bg-[#F5E1D9] text-[#050505] font-mono uppercase tracking-widest font-bold text-sm py-4 hover:bg-[#DC2626] hover:text-white transition-colors duration-300"
            >
              Support on WhyDonate
            </a>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { 
                title: "Academic Tuition", 
                amount: "$15k - $25k", 
                desc: "The core focus. This secures the yearly tuition fee. If Helen receives a scholarship (bringing the cost to $15k), the remaining funds will be strictly applied to her second year of study." 
              },
              { 
                title: "Housing & Living", 
                amount: "~$10k", 
                desc: "Accommodation and basic living expenses for one year. (Self-managed: Our family is actively working to cover this portion ourselves)." 
              },
              { 
                title: "Materials & Fabrics", 
                amount: "~$4k", 
                desc: "Sourcing textiles and hardware for the graduate collection. (Self-managed: We are taking this on ourselves)." 
              }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="border border-[#F5E1D9]/20 p-6 bg-[#0A0A0A] hover:border-[#DC2626]/50 transition-colors duration-300"
              >
                <h3 className={`${leagueGothic.className} text-3xl uppercase tracking-wide text-[#F5E1D9]`}>{item.title}</h3>
                <p className="font-mono text-xl text-[#DC2626] mb-4">{item.amount}</p>
                <p className="font-mono text-[10px] opacity-50 uppercase tracking-widest leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      {/* Admissions & Scholarships Ledger */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-20 relative z-10 border-t border-[#F5E1D9]/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className={`${leagueGothic.className} text-5xl md:text-6xl uppercase tracking-wide text-[#F5E1D9]`}>
              Proof of Potential
            </h2>
            <p className="font-mono text-sm opacity-50 uppercase tracking-widest mt-2">
              Top academies have already verified Helen's talent with official scholarships.
            </p>
          </div>

          <div className="flex flex-col border-t border-[#F5E1D9]/20">
            {[
              { 
                name: "Istituto Marangoni", 
                location: "Florence, Italy", 
                offer: "€5,000 Scholarship", 
                status: "ACCEPTED",
                highlight: true
              },
              { 
                name: "NABA - Nuova Accademia Di Belle Arti", 
                location: "Milan / Rome", 
                offer: "€5,000 Scholarship", 
                status: "ACCEPTED",
                highlight: true
              },
              { 
                name: "IED - Istituto Europeo di Design", 
                location: "Florence, Italy", 
                offer: "15% Tuition Discount", 
                status: "ACCEPTED",
                highlight: true
              },
              { 
                name: "Accademia Italiana", 
                location: "Florence / Rome", 
                offer: "Awaiting Decision", 
                status: "MARCH 20",
                highlight: false
              }
            ].map((academy, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 10, backgroundColor: "#0A0A0A" }}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center py-6 md:py-8 border-b border-[#F5E1D9]/10 cursor-default transition-colors duration-300 px-4 -mx-4"
              >
                <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
                  <span className="font-mono text-[10px] text-[#DC2626] uppercase tracking-widest mb-2">
                    [ {academy.location} ]
                  </span>
                  <h3 className={`${leagueGothic.className} text-3xl md:text-5xl text-[#F5E1D9] group-hover:text-white transition-colors`}>
                    {academy.name}
                  </h3>
                </div>
                
                <div className="flex flex-col md:w-1/4 md:items-end text-left md:text-right mb-4 md:mb-0">
                  <span className="font-mono text-[10px] opacity-50 uppercase tracking-widest mb-1">
                    Award
                  </span>
                  <span className={`font-mono text-lg md:text-xl uppercase tracking-widest ${academy.highlight ? 'text-[#DC2626] font-bold' : 'text-[#F5E1D9] opacity-70'}`}>
                    {academy.offer}
                  </span>
                </div>

                <div className="flex flex-col md:w-1/4 items-start md:items-end">
                  <span className={`border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${academy.highlight ? 'border-[#DC2626] text-[#DC2626]' : 'border-[#F5E1D9]/30 text-[#F5E1D9]/50'}`}>
                    Status: {academy.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-20 relative z-10 border-t border-[#F5E1D9]/10">
        <div className="text-center mb-16">
           <h2 className={`${leagueGothic.className} text-5xl md:text-7xl uppercase tracking-wide text-[#F5E1D9]`}>
            Sponsorship Tiers
          </h2>
          <p className="font-mono text-sm opacity-50 uppercase tracking-widest mt-2">Claim your reward via the donation page</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              tier: "The Advocate", 
              price: "$50+", 
              reward: "High-resolution digital download of an exclusive, unreleased design sketch." 
            },
            { 
              tier: "The Muse", 
              price: "$300+", 
              reward: "A custom design inspired by YOU. Share your favorite color, personality, and story. Helen will create a bespoke moodboard, fashion sketch, and concept explanation—a personal, one-look mini-collection." 
            },
            { 
              tier: "The Visionary", 
              price: "$1,000+", 
              reward: "Everything from 'The Muse' tier, PLUS a stunning, original mixed-media fashion portrait painted on a 50x40cm canvas, shipped directly to you." 
            }
          ].map((tier, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 border border-[#F5E1D9]/10 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
              <span className="font-mono text-[#DC2626] text-sm uppercase tracking-widest mb-2">{tier.tier}</span>
              <h3 className={`${leagueGothic.className} text-5xl text-[#F5E1D9] mb-6`}>{tier.price}</h3>
              <p className="font-mono text-[11px] opacity-70 uppercase tracking-widest leading-relaxed flex-grow">{tier.reward}</p>
              <a 
                href={DONATION_LINK} 
                target="_blank" 
                rel="noreferrer"
                onClick={() => trackDonationClick(`Tier: ${tier.tier}`)}
                className="mt-8 border border-[#F5E1D9]/30 font-mono text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#F5E1D9] hover:text-[#050505] transition-all"
              >
                Select Tier
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mt-16 max-w-3xl mx-auto text-center pointer-events-none">
          {NOTE_WORDS.map((word, wordIndex) => (
            <div key={wordIndex} className="flex">
              {Array.from(word).map((char, charIndex) => {
                const currentDelay = delayCounter * 0.05;
                delayCounter++; 
                return (
                  <motion.span
                    key={charIndex}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      y: [0, -3, 0],
                      color: ['#F5E1D9', '#DC2626', '#F5E1D9']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3, 
                      delay: currentDelay,
                      ease: "easeInOut"
                    }}
                    className="font-mono text-[10px] md:text-sm uppercase tracking-widest font-bold"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent z-[100] md:hidden flex justify-center">
        <a 
          href={DONATION_LINK} 
          target="_blank" 
          rel="noreferrer"
          onClick={() => trackDonationClick('Mobile Sticky Button')}
          className="w-full max-w-sm bg-[#DC2626] text-white font-mono uppercase tracking-widest font-bold text-center py-4 shadow-[0_0_30px_rgba(220,38,38,0.3)]"
        >
          Donate Now
        </a>
      </div>
      {/* Portfolio Bridge Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-20 relative z-10 border-t border-[#F5E1D9]/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#0A0A0A] p-8 md:p-12 border border-[#F5E1D9]/20 hover:border-[#DC2626]/50 transition-colors duration-500">
          <div className="md:w-2/3 text-left">
            <h2 className={`${leagueGothic.className} text-5xl md:text-7xl uppercase tracking-wide text-[#F5E1D9] mb-4`}>
              The Vision You Are Funding.
            </h2>
            <p className="font-mono text-sm opacity-70 uppercase tracking-widest leading-relaxed max-w-2xl">
              Want to know the artist behind the campaign? Explore My complete archive, unreleased sketches, and Vogue-featured collections to see exactly what you are supporting.
            </p>
          </div>
          <div className="md:w-1/3 w-full flex md:justify-end">
            <a 
              href="/" 
              className="w-full md:w-auto text-center border border-[#DC2626] text-[#DC2626] font-mono uppercase tracking-widest font-bold text-sm px-10 py-5 hover:bg-[#DC2626] hover:text-white transition-all duration-300"
            >
              Explore Portfolio
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}