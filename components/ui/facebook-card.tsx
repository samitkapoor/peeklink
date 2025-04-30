import React from 'react';
import Avatar from './avatar';
import Image from 'next/image';

interface FacebookCardProps {
  title: string;
  image: string;
  url: string;
  description: string;
}

const FacebookCard = ({ title, image, url, description }: FacebookCardProps) => {
  return (
    <div className="flex flex-col items-start justify-between p-5 bg-white rounded-2xl w-full h-full">
      <div>
        <div className="flex items-center w-full gap-2">
          <Avatar className="rounded-full" />
          <div className="flex flex-col items-start justify-start">
            <p className="text-sm font-medium text-black">John Doe</p>
            <p className="text-xs text-black/50 leading-none">Post to Anyone</p>
          </div>
        </div>
        <p className="mt-5">{url.replace('https://', '').replace('http://', '')}</p>
      </div>

      <div className="w-full flex flex-col items-end justify-end gap-2 relative">
        <div className="flex flex-col items-center justify-center rounded-full bg-black/80 p-1 absolute top-2 right-2">
          <Image src="/icons/close.svg" alt="linkedin" width={16} height={16} />
        </div>
        {/* banner */}
        <div className="w-full border-[1px] border-black/20 flex flex-col items-center rounded-lg overflow-hidden min-h-[70px]">
          <Image
            src={image}
            alt="linkedin"
            width={512}
            height={512}
            className="w-full object-cover"
          />
          <div className="flex flex-col items-start justify-start px-2 py-2 bg-[#D6D8E0] w-full">
            <p className="text-xs text-black/50">
              {url.replace('https://', '').replace('http://', '')}
            </p>
            <p className="text-sm font-medium text-black line-clamp-1">{title}</p>
            <p className="text-sm text-black/50 line-clamp-1">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookCard;
