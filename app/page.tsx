'use client';

import { useState } from 'react';
import { Metadata } from '@/types/metadata';

import LargeHeading from '@/components/ui/heading';
import Tagline from '@/components/ui/tagline';
import UrlInput from '@/components/ui/url-input';
import LinkPreviews from '@/components/link-previews';

export default function Home() {
  const [data, setData] = useState<{ success: boolean; metadata: Metadata; error: object }>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    const response = await fetch('/api/link-previews', {
      method: 'POST',
      body: JSON.stringify({ url })
    });

    setData(await response.json());
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-start overflow-y-auto w-screen gap-10 pb-32 min-h-screen">
      <div className="flex flex-col items-center justify-center gap-2 relative mt-20 sm:mt-36 md:mt-52">
        <LargeHeading className="text-orange-500">
          <h1>peeklink</h1>
        </LargeHeading>
        <Tagline className="absolute top-full leading-none right-0">
          <h3>Perfect Your Presence Before You Share.</h3>
        </Tagline>
      </div>
      <UrlInput onSubmit={handleSubmit} />
      {isLoading && (
        <div className="animate-spin h-8 w-8 border-t-3 border-l-3 blur-[1px] rounded-full border-orange-500"></div>
      )}
      {data &&
        (data.success === true ? (
          <LinkPreviews data={data.metadata} />
        ) : (
          <p className="text-red-500">Something went wrong.</p>
        ))}
    </div>
  );
}
