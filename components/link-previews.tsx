import React from 'react';

import { Metadata } from '@/types/metadata';
import TwitterCard from '@/components/ui/twitter-card';
import LinkedinCard from './ui/linkedin-card';

const PREVIEW_PLATFORMS = [
  { name: 'Twitter', component: 'twitter' },
  {
    name: 'Linkedin',
    component: 'linkedin'
  }
];

const LinkPreviews = ({ data }: { data: Metadata }) => {
  const { twitter, openGraph, url } = data;

  const renderPreview = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return (
          <TwitterCard
            title={twitter.title || openGraph.title || 'Untitled'}
            image={twitter.image || openGraph.image || ''}
            url={url}
          />
        );
      case 'linkedin':
        return (
          <LinkedinCard
            title={openGraph.title || 'Untitled'}
            image={openGraph.image || ''}
            url={url}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4 w-full max-w-[1400px] px-4">
      {PREVIEW_PLATFORMS.map((platform) => (
        <div key={platform.name} className="flex flex-col gap-2 w-full max-h-[375px] h-full">
          <p className="w-full text-center text-lg leading-none">{platform.name}</p>
          <div className="shadow-md bg-transparent rounded-2xl h-full">
            {renderPreview(platform.component)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkPreviews;
