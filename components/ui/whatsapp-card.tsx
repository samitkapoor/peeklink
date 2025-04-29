import React from 'react';

const WhatsappCard = ({
  title,
  description,
  url
}: {
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <div
      style={{ backgroundImage: `url(/whatsappbg.jpg)` }}
      className="bg-black h-full w-full rounded-2xl flex items-end justify-end relative p-4"
    >
      <div className="w-full p-1 bg-[#134D36] flex flex-col max-w-[75%] rounded-lg">
        <div className="bg-[#0F3D2C] px-2 py-1 rounded-lg flex flex-col gap-1 text-white text-sm">
          <p className="line-clamp-2 font-medium">{title}</p>
          <p className="line-clamp-3 text-white/50">{description}</p>
          <p className="text-white/50">{url.replace('https://', '').replace('http://', '')}</p>
        </div>
        <div className="px-1 flex items-center justify-between">
          <p className="text-[#22cb68] underline font-medium">
            {url.replace('https://', '').replace('http://', '')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsappCard;
