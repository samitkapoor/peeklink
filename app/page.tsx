'use client';

import LargeHeading from '@/components/ui/heading';
import Tagline from '@/components/ui/tagline';
import UrlInput from '@/components/ui/url-input';

export default function Home() {
  const handleSubmit = (url: string) => {
    console.log(url);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-screen gap-10">
      <div className="flex flex-col items-center justify-center gap-2 relative mt-20 sm:mt-36 md:mt-52">
        <LargeHeading className="text-orange-500">
          <h1>peeklink</h1>
        </LargeHeading>
        <Tagline className="absolute top-full leading-none right-0">
          <h3>Perfect Your Presence Before You Share.</h3>
        </Tagline>
      </div>
      <UrlInput onSubmit={handleSubmit} />
    </div>
  );
}
