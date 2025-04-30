'use client';

import Image from 'next/image';
import Link from 'next/link';

const TopButtons = () => {
  return (
    <div className="fixed top-6 right-6 flex items-center gap-6 z-10">
      <Link
        href="https://github.com/samitkapoor/peeklink"
        target="_blank"
        className="flex items-center gap-1.5 text-gray-700 hover:text-orange-500 transition-colors duration-200 group"
      >
        <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
        <span className="relative after:absolute after:w-0 after:h-px after:bg-orange-500 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-200">
          Star
        </span>
      </Link>

      <Link
        href="https://buymeacoffee.com/samitkapoow"
        target="_blank"
        className="flex items-center gap-1.5 text-gray-700 hover:text-orange-500 transition-colors duration-200 group"
      >
        <Image src="/icons/buymeacoffee.svg" alt="Buy me a Coffee" width={20} height={20} />
        <span className="relative after:absolute after:w-0 after:h-px after:bg-orange-500 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-200">
          Support
        </span>
      </Link>
    </div>
  );
};

export default TopButtons;
