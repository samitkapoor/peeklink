import React from 'react';
import Avatar from './avatar';
import Image from 'next/image';

interface PeerlistCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const PeerlistCard = ({ title, description, image, url }: PeerlistCardProps) => {
  return (
    <div className="flex flex-col items-start justify-between p-5 bg-[#171717] text-white rounded-2xl w-full h-full">
      <div>
        <div className="flex items-center w-full gap-2">
          <Avatar className="rounded-full" />
        </div>
        <p className="mt-2 font-medium text-white/60">Title (optional)</p>
        <p className="text-white/90 text-sm">
          {url.replace('https://', '').replace('http://', '')}
        </p>
      </div>

      <div className="w-full flex flex-col items-end justify-end gap-2">
        {/* banner */}
        <div className="w-full p-2 border-[1px] border-white/20 flex items-center justify-between rounded-lg gap-2">
          <div className="flex flex-col items-start justify-start">
            <p className="text-sm font-medium text-white line-clamp-1">{title}</p>
            <p className="text-xs font-medium text-white/80 line-clamp-2">{description}</p>
            <div className="flex items-center gap-1 mt-2">
              <Image
                src="/icons/chevron.svg"
                alt="chevron-right"
                width={16}
                height={16}
                className="rotate-180"
              />
              <p className="text-xs text-white/50 leading-none">
                {url.replace('https://', '').replace('http://', '')}
              </p>
            </div>
          </div>
          <Image
            src={image}
            alt="linkedin"
            width={512}
            height={512}
            className="w-[140px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PeerlistCard;
