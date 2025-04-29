import LargeHeading from '@/components/ui/heading';
import Tagline from '@/components/ui/tagline';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <div className="flex flex-col items-center justify-center gap-2 relative">
        <LargeHeading className="text-orange-500">peeklink</LargeHeading>
        <Tagline className="absolute top-full leading-none right-0">
          Perfect Your Presence Before You Post.
        </Tagline>
      </div>
    </div>
  );
}
