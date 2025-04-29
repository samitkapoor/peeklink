import React from 'react';
import Image from 'next/image';
import Avatar from './avatar';

interface TwitterCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const TwitterCard = ({ title, description, image, url }: TwitterCardProps) => {
  return (
    <div className="rounded-2xl bg-black p-5 overflow-hidden w-full flex flex-col items-start justify-start">
      <div className="flex items-start justify-start w-full gap-2">
        <Avatar className="rounded-full" />

        <div className="flex flex-col items-start justify-start w-full">
          <p className="text-blue-400/90 font-medium">
            {url.replace('https://', '').replace('http://', '')}
          </p>
          <div className="max-h-[350px] h-full w-full border-[1px] border-white/40 rounded-xl overflow-hidden relative mt-10">
            <Image
              src="/icons/close.svg"
              alt="close"
              className="absolute top-2 left-2"
              height={18}
              width={18}
            />
            <Image
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              height={350}
              width={350}
            />
            <p className="absolute bottom-2 left-2 text-white line-clamp-1 bg-black text-xs">
              {title}
            </p>
          </div>
          <p className="text-white/60 text-xs leading-none">
            From {url.replace('https://', '').replace('http://', '')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
