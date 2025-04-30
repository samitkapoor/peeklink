import React from 'react';
import Image from 'next/image';
import Avatar from './avatar';

interface TwitterCardProps {
  title: string;
  image: string;
  url: string;
}

const TwitterCard = ({ title, image, url }: TwitterCardProps) => {
  return (
    <div className="rounded-2xl bg-black p-5 pb-10 overflow-hidden w-full flex flex-col h-full items-start justify-start">
      <div className="flex items-start justify-start w-full gap-2 h-full">
        <Avatar className="rounded-full" />

        <div className="flex flex-col items-start justify-between w-full h-full gap-3">
          <p className="text-blue-400/90 font-medium">
            {url.replace('https://', '').replace('http://', '')}
          </p>
          <div>
            <div className="max-h-[250px] h-full w-full border-[1px] border-white/40 rounded-xl overflow-hidden relative">
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
                height={250}
                width={250}
              />
              <p className="absolute bottom-2 left-2 text-white line-clamp-1 px-1.5 rounded-sm bg-black text-xs">
                {title}
              </p>
            </div>
            <p className="text-white/60 text-xs leading-none">
              From {url.replace('https://', '').replace('http://', '')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
