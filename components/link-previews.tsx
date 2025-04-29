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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 max-w-7xl w-full">
      {PREVIEW_PLATFORMS.map((platform) => (
        <div key={platform.name} className="flex flex-col gap-2 w-full">
          <Tagline>{platform.name}</Tagline>
          {renderPreview(platform.component)}
        </div>
      ))}
    </div>
  );
};

export default LinkPreviews;
