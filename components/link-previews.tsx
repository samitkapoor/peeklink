import React from 'react';

import { Metadata } from '@/types/metadata';
import TwitterCard from '@/components/ui/twitter-card';
import LinkedinCard from './ui/linkedin-card';
import PeerlistCard from './ui/peerlist-card';
import WhatsappCard from './ui/whatsapp-card';

const PREVIEW_PLATFORMS = [
  { name: 'Twitter', component: 'twitter' },
  {
    name: 'Linkedin',
    component: 'linkedin'
  },
  {
    name: 'Peerlist',
    component: 'peerlist'
  },
  {
    name: 'Whatsapp',
    component: 'whatsapp'
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
      case 'peerlist':
        return (
          <PeerlistCard
            title={openGraph.title || 'Untitled'}
            description={openGraph.description || ''}
            image={openGraph.image || ''}
            url={url}
          />
        );
      case 'whatsapp':
        return (
          <WhatsappCard
            title={openGraph.title || 'Untitled'}
            description={openGraph.description || ''}
            url={url}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4 w-full max-w-[1400px] px-4">
      {PREVIEW_PLATFORMS.map((platform) => (
        <div key={platform.name} className="flex flex-col gap-2 w-full h-[375px]">
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
