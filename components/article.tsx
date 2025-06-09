'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import React from 'react';

const Article = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4,
        delay: 0.2
      }}
    >
      <Link
        href="https://dev.to/samitkapoor/how-to-make-your-website-link-look-amazing-on-social-media-58n1"
        target="_blank"
        className="mt-10 shadow-xl group hover:scale-105 transition-all duration-300 mx-4 block"
      >
        <div className="flex flex-col rounded-lg overflow-hidden bg-black">
          <div className="max-w-xl w-full max-h-[240px] h-full overflow-hidden relative">
            <Image
              src="/article-banner.png"
              alt="article-banner"
              className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700"
              height={1080}
              width={1080}
            />
            <div className="absolute bottom-0 left-0 right-0 w-full bg-black h-[80px] blur-lg z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 w-full bg-black h-[80px] z-10 flex items-end justify-end flex-col p-4">
              <p className="text-xs sm:text-sm md:text-base text-white text-center w-full font-bold z-20">
                How to Make Your Website Link Look Amazing on Social Media?
              </p>
              <p className="text-xs sm:text-sm md:text-base w-full text-orange-500 text-center font-bold z-20 group-hover:translate-x-1 transition-all duration-300">
                Read {'->'}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Article;
