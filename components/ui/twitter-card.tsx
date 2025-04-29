import React from 'react';
import Image from 'next/image';

interface TwitterCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const TwitterCard = ({ title, description, image, url }: TwitterCardProps) => {
  return <div className="rounded-lg border border-neutral-200 overflow-hidden max-w-md"></div>;
};

export default TwitterCard;
