import React from 'react';
import Avatar from './avatar';
import Image from 'next/image';

interface SubstackCardProps {
  title: string;
  image: string;
  url: string;
}

const SubstackCard = ({ title, image, url }: SubstackCardProps) => {
  return (
    <div className="flex flex-col items-start justify-between p-5 bg-[#161718] rounded-2xl w-full h-full">
      {/* Header */}
      <div className="flex items-center w-full gap-3 mb-4">
        <Avatar className="rounded-full" />
        <div className="flex flex-col items-start justify-center gap-1 ">
          <p className="text-sm font-medium text-white">John Doe</p>

          {/* Post content */}
          <div className="w-full flex flex-col items-start justify-start">
            <p className="text-sm text-blue-400">{url}</p>
          </div>
        </div>
      </div>

      {/* Substack Preview Card */}
      <div className="pl-10 w-full">
        <div className="w-full border-[1px] border-gray-600 rounded-lg overflow-hidden bg-[#1B1C1D]">
          <div className="flex items-start p-3 gap-3 relative">
            {/* Content - Left side */}
            <div className="flex flex-col items-start justify-start flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-[#797979] font-medium">
                  {url.replace('https://', '').replace('http://', '').split('/')[0]}
                </span>
              </div>
              <h3 className="text-sm font-medium text-white line-clamp-2 mb-1">{title}</h3>
            </div>

            {/* Image - Right side */}
            <div className="w-16 h-16 relative overflow-hidden rounded-md flex-shrink-0">
              <Image
                src={image}
                alt={title}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col absolute top-2 right-2 items-center justify-center rounded-full bg-black/80 p-1">
              <Image src="/icons/close.svg" alt="linkedin" width={16} height={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubstackCard;
