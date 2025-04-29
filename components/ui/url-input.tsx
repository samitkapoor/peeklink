'use client';

import Image from 'next/image';
import React, { useState } from 'react';

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
        boxShadow: hovering && !pressed ? '4px 4px 0px 0px rgba(255, 165, 0, 1)' : 'none'
      }}
      className="bg-orange-500 text-white py-3 pl-5 pr-8 rounded-[14px] flex items-center gap-1 group cursor-pointer hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all duration-300"
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

const UrlInput = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex items-center gap-2 justify-center pl-6 max-w-[500px] w-full mt-4 relative border-2 border-black/80 ring-4 ring-transparent focus-within:ring-orange-800/20 focus-within:ring-4 focus-within:border-orange-500 transition-all rounded-2xl"
    >
      <input placeholder="Enter URL" className="w-full outline-none border-none" />
      <PeekButton type="submit" />
    </form>
  );
};

export default UrlInput;
