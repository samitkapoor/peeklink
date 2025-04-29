import LargeHeading from '@/components/ui/heading';
import Tagline from '@/components/ui/tagline';
import UrlInput from '@/components/ui/url-input';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen gap-10">
      <div className="flex flex-col items-center justify-center gap-2 relative">
        <LargeHeading className="text-orange-500">peeklink</LargeHeading>
        <Tagline className="absolute top-full leading-none right-0">
          Perfect Your Presence Before You Post.
        </Tagline>
      </div>
      <UrlInput />
    </div>
  );
}
