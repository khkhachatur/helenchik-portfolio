'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { leagueGothic } from '../lib/fonts';
import { useMemo, useState, useEffect, useRef, useCallback } from 'react';

interface BubbleState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  name: string;
  amount: number;
  symbol: string;
  message: string;
}

const MIN_SIZE_DESKTOP = 66;
const MAX_SIZE_DESKTOP = 180;
const MIN_SIZE_MOBILE = 58;
const MAX_SIZE_MOBILE = 132;
const CONTAINER_HEIGHT = 500;
const SPEED = 0.3;

function initBubbles(donors: any[], width: number, height: number, mobile: boolean): BubbleState[] {
  if (!donors.length || !width) return [];
  const maxAmount = Math.max(...donors.map((d: any) => d.amount));
  const minSize = mobile ? MIN_SIZE_MOBILE : MIN_SIZE_DESKTOP;
  const maxSize = mobile ? MAX_SIZE_MOBILE : MAX_SIZE_DESKTOP;

  const bubbles: BubbleState[] = [];
  const padding = 16;

  for (const d of donors) {
    const ratio = d.amount / maxAmount;
    const size = minSize + (maxSize - minSize) * Math.sqrt(ratio);
    const r = size / 2;

    let x = r + Math.random() * (width - size);
    let y = r + Math.random() * (height - size);

    for (let attempt = 0; attempt < 200; attempt++) {
      x = r + Math.random() * (width - size);
      y = r + Math.random() * (height - size);
      let ok = true;
      for (const b of bubbles) {
        const dist = Math.sqrt((x - b.x) ** 2 + (y - b.y) ** 2);
        if (dist < r + b.size / 2 + padding) { ok = false; break; }
      }
      if (ok) break;
    }

    const angle = Math.random() * Math.PI * 2;
    const speed = SPEED * (0.6 + Math.random() * 0.8);
    bubbles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size,
      name: d.name || 'Anonymous',
      amount: Math.round(d.amount),
      symbol: d.symbol || '$',
      message: d.message || '',
    });
  }
  return bubbles;
}

const DONATION_LINK = "https://whydonate.com/fundraising/help-helen-study-fashion-in-europe";

const NOTE_TEXT = "Important: Please leave your email or IG handle in the donation message so we can send your reward.";
const NOTE_WORDS = NOTE_TEXT.split(" ");

function BubbleCloud({ donors }: { donors: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<BubbleState[]>([]);
  const [positions, setPositions] = useState<BubbleState[]>([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);

  const maxSize = isMobile ? MAX_SIZE_MOBILE : MAX_SIZE_DESKTOP;
  const height = CONTAINER_HEIGHT;

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      const w = Math.min(window.innerWidth - 32, 900);
      setContainerWidth(w);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (!containerWidth) return;
    bubblesRef.current = initBubbles(donors, containerWidth, height, isMobile);
    setPositions([...bubblesRef.current]);
  }, [donors, containerWidth, height, isMobile]);

  const tick = useCallback(() => {
    const bs = bubblesRef.current;
    const w = containerWidth;
    const h = height;
    if (!bs.length || !w) return;

    for (const b of bs) {
      b.x += b.vx;
      b.y += b.vy;

      const r = b.size / 2;
      const inset = 20; // room for shadow glow
      if (b.x - r <= inset) { b.x = r + inset; b.vx = Math.abs(b.vx); }
      if (b.x + r >= w - inset) { b.x = w - r - inset; b.vx = -Math.abs(b.vx); }
      if (b.y - r <= inset) { b.y = r + inset; b.vy = Math.abs(b.vy); }
      if (b.y + r >= h - inset) { b.y = h - r - inset; b.vy = -Math.abs(b.vy); }
    }

    // Bubble-to-bubble collision
    for (let i = 0; i < bs.length; i++) {
      for (let j = i + 1; j < bs.length; j++) {
        const a = bs[i], b = bs[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = (a.size + b.size) / 2 + 8;
        if (dist < minDist && dist > 0) {
          const nx = dx / dist;
          const ny = dy / dist;
          const overlap = minDist - dist;
          a.x -= nx * overlap / 2;
          a.y -= ny * overlap / 2;
          b.x += nx * overlap / 2;
          b.y += ny * overlap / 2;

          const dvx = a.vx - b.vx;
          const dvy = a.vy - b.vy;
          const dot = dvx * nx + dvy * ny;
          if (dot > 0) {
            a.vx -= dot * nx * 0.5;
            a.vy -= dot * ny * 0.5;
            b.vx += dot * nx * 0.5;
            b.vy += dot * ny * 0.5;
          }
        }
      }
    }

    setPositions(bs.map(b => ({ ...b })));
  }, [containerWidth, height]);

  useEffect(() => {
    let running = true;
    const loop = () => {
      if (!running) return;
      tick();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => { running = false; cancelAnimationFrame(rafRef.current); };
  }, [tick]);

  if (!containerWidth || !positions.length) return null;

  // Shadow pulse uses a CSS animation since it's purely visual
  const glowStyle = `
    @keyframes glow-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
  `;

  return (
    <div className="max-w-4xl mx-auto mb-20">
      <style>{glowStyle}</style>
      <div className="mb-10">
        <h2 className={`${leagueGothic.className} text-5xl md:text-6xl uppercase tracking-wide text-[#F5E1D9]`}>
          Top Supporters
        </h2>
        <p className="font-mono text-sm opacity-50 uppercase tracking-widest mt-2">
          Climb the ranks — every donation moves you up
        </p>
      </div>

      <div ref={containerRef} className="relative w-full" style={{ height }}>
        {positions.map((bubble, i) => {
          const sizeRatio = bubble.size / maxSize;
          const shadowBlur = Math.round(12 + sizeRatio * 28);
          const shadowSpread = Math.round(2 + sizeRatio * 8);
          const shadowAlpha = 0.08 + sizeRatio * 0.18;

          return (
            <div
              key={i}
              className="absolute rounded-full border border-[#F5E1D9]/25 bg-[#0A0A0A]/85 flex flex-col items-center justify-center cursor-default hover:border-[#DC2626] transition-[border-color] duration-300"
              style={{
                width: bubble.size,
                height: bubble.size,
                transform: `translate(${bubble.x - bubble.size / 2}px, ${bubble.y - bubble.size / 2}px)`,
                willChange: 'transform',
                boxShadow: `0 0 ${shadowBlur}px ${shadowSpread}px rgba(220,38,38,${shadowAlpha.toFixed(2)})`,
                animation: `glow-pulse ${3 + (1 - sizeRatio) * 2}s ease-in-out infinite`,
              }}
            >
              <span className={`${leagueGothic.className} uppercase text-[#F5E1D9] leading-none text-center px-2`}
                style={{ fontSize: Math.max(bubble.size * 0.14, 10) }}>
                {bubble.name}
              </span>
              {bubble.message && (
                <span className="font-mono opacity-40 uppercase tracking-widest text-center px-2 mt-0.5 truncate max-w-full"
                  style={{ fontSize: Math.max(bubble.size * 0.07, 6) }}>
                  &quot;{bubble.message}&quot;
                </span>
              )}
              <span className="font-mono text-[#DC2626] font-bold mt-1"
                style={{ fontSize: Math.max(bubble.size * 0.12, 9) }}>
                {bubble.symbol}{bubble.amount.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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

      <div className="w-full overflow-hidden border-y border-[#DC2626] bg-[#DC2626] text-white py-3 my-8 relative z-20 flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex flex-nowrap w-max font-mono text-sm uppercase tracking-widest"
        >
          {[...Array(6)].map((_, blockIndex) => (
            <div key={blockIndex} className="flex items-center gap-12 pr-12 font-bold shrink-0">
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

        {liveData.topDonors && liveData.topDonors.length > 0 && (
          <BubbleCloud donors={liveData.topDonors} />
        )}

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
                offer: "50% Scholarship",
                status: "ACCEPTED",
                highlight: true
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