import { cn } from '@/lib/utils';
import { thumbs } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import React from 'react';

const Avatar = ({ className }: { className?: string }) => {
  const avatar = createAvatar(thumbs, {
    seed: Math.random().toString(36).substring(2, 15)
  });

  const svg = avatar.toString();

  return (
    <div className={cn('relative w-10 h-10 overflow-hidden', className)}>
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
};

export default Avatar;
