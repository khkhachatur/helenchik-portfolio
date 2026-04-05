"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SliderImage } from "../lib/data";

interface InfiniteSliderProps {
  images: SliderImage[];
  duration?: number; 
  direction?: "left" | "right";
}

const InfiniteSlider = ({ 
  images, 
  duration = 50,
  direction = "left" 
}: InfiniteSliderProps) => {
  const repeatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4 z-40">
      <div className="flex w-fit">
        <motion.div
          className="flex gap-4 md:gap-8 pr-4 md:pr-8"
          animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          }}
        >
          {repeatedImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-[200px] md:w-[300px] aspect-[4/5] shrink-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={100}
                unoptimized
                className={`hide-in-mask ${
                  img.fit === 'contain' ? 'object-contain p-4 drop-shadow-2xl' : 'object-cover'
                }`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteSlider;