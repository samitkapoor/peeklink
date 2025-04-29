import React from 'react';

import { Metadata } from '@/types/metadata';
import TwitterCard from '@/components/ui/twitter-card';
import Tagline from './ui/tagline';

const PREVIEW_PLATFORMS = [{ name: 'Twitter', component: 'twitter' }];

const LinkPreviews = ({ data }: { data: Metadata }) => {
  const { twitter, openGraph, url } = data;

  const renderPreview = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return (
          <TwitterCard
            title={twitter.title || openGraph.title || 'Untitled'}
            description={twitter.description || openGraph.description || 'No description available'}
            image={twitter.image || openGraph.image || ''}
            url={url}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4 max-w-7xl w-full px-4">
      {PREVIEW_PLATFORMS.map((platform) => (
        <div key={platform.name} className="flex flex-col gap-2 w-full">
          <p className="w-full text-center text-lg leading-none">{platform.name}</p>
          {renderPreview(platform.component)}
        </div>
      ))}
    </div>
  );
};

export default LinkPreviews;
