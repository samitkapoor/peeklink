'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const PeekButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <button
      {...props}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        boxShadow:
          hovering && !pressed
            ? '6px 6px 0px 0px rgba(255, 180, 120, 0.6), 3px 3px 0px 0px rgba(255, 120, 50, 0.65)'
            : 'none'
      }}
      className="bg-orange-500 text-white py-2 pl-3 pr-7 sm:py-3 sm:pl-5 sm:pr-8 rounded-[14px] flex items-center gap-1 group cursor-pointer hover:-translate-x-[6px] hover:-translate-y-[6px] active:translate-x-0 active:translate-y-0 transition-all duration-300 border-none outline-none"
    >
      {hovering && !pressed ? (
        <Image src="/icons/eye-open.svg" alt="eyeopen" width={16} height={16} />
      ) : (
        <Image src="/icons/eye-close.svg" alt="eyeclose" width={16} height={16} />
      )}
      <p>Peek</p>
    </button>
  );
};

const UrlInput = ({ onSubmit }: { onSubmit: (url: string) => void }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const formAnimationControl = useAnimationControls();

  const isUrl = (url: string) => {
    return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(url);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) {
      formAnimationControl.start({
        x: [100, -100, 100, -100, 0],
        transition: {
          duration: 0.3,
          ease: 'easeInOut'
        }
      });
      setError('Please enter a URL.');
    } else if (!isUrl(url)) {
      formAnimationControl.start({
        x: [100, -100, 100, -100, 0],
        transition: {
          duration: 0.3,
          ease: 'easeInOut'
        }
      });
      setError('Invalid URL.');
    } else {
      setError('');
      onSubmit(url);
    }
  };

  return (
    <motion.div
      initial={{
        filter: 'blur(10px)'
      }}
      animate={{
        filter: 'blur(0px)'
      }}
      transition={{
        duration: 0.2,
        delay: 0.1
      }}
      className="flex flex-col max-w-[500px] w-full gap-1 px-5"
    >
      <motion.form
        animate={formAnimationControl}
        onSubmit={handleSubmit}
        className="flex items-center gap-2 justify-center pl-6 w-full mt-4 relative border-2 border-black/80 ring-4 ring-transparent focus-within:ring-orange-800/20 focus-within:ring-4 focus-within:border-orange-500 transition-all rounded-2xl"
      >
        <input
          placeholder="Enter URL"
          className="w-full outline-none border-none"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <PeekButton type="submit" />
      </motion.form>
      <p className="text-red-500 text-sm ml-6">{error}</p>
    </motion.div>
  );
};

export default UrlInput;
