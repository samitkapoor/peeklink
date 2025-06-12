'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Metadata } from '@/types/metadata';
import TwitterCard from '@/components/ui/twitter-card';
import LinkedinCard from './ui/linkedin-card';
import PeerlistCard from './ui/peerlist-card';
import WhatsappCard from './ui/whatsapp-card';
import FacebookCard from './ui/facebook-card';
import SubstackCard from './ui/substack-card';

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
  },
  {
    name: 'Facebook',
    component: 'facebook'
  },
  {
    name: 'Substack',
    component: 'substack'
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
      case 'facebook':
        return (
          <FacebookCard
            title={openGraph.title || 'Untitled'}
            description={openGraph.description || ''}
            image={openGraph.image || ''}
            url={url}
          />
        );
      case 'substack':
        return (
          <SubstackCard
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4 w-full max-w-[1400px] px-4 mt-10">
      {PREVIEW_PLATFORMS.map((platform, i) => (
        <motion.div
          initial={{
            filter: 'blur(10px)'
          }}
          animate={{
            filter: 'blur(0px)'
          }}
          transition={{
            duration: 0.2,
            delay: i * 0.05
          }}
          key={platform.name}
          className="flex flex-col gap-2 w-full min-h-[375px]"
        >
          <p className="w-full text-center text-lg leading-none">{platform.name}</p>
          <div className="shadow-md bg-transparent rounded-2xl h-full overflow-hidden">
            {renderPreview(platform.component)}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LinkPreviews;
