import React from 'react';
import Avatar from './avatar';
import Image from 'next/image';

interface LinkedinCardProps {
  title: string;
  image: string;
  url: string;
}

const LinkedinCard = ({ title, image, url }: LinkedinCardProps) => {
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

      <div className="w-full flex flex-col items-end justify-end gap-2">
        <div className="flex flex-col items-center justify-center rounded-full bg-black/80 p-1">
          <Image src="/icons/close.svg" alt="linkedin" width={16} height={16} />
        </div>
        {/* banner */}
        <div className="w-full p-2 border-[1px] border-black/20 flex items-center rounded-lg gap-2 min-h-[70px]">
          <Image
            src={image}
            alt="linkedin"
            width={512}
            height={512}
            className="w-[100px] object-cover rounded-lg"
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <p className="text-sm font-medium text-black line-clamp-1">{title}</p>
            <p className="text-xs text-black/50 leading-none">
              {url.replace('https://', '').replace('http://', '')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinCard;
