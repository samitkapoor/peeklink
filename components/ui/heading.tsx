import { cn } from '@/lib/utils';
import { Moirai_One } from 'next/font/google';

const moiraiOne = Moirai_One({
  variable: '--font-moirai-one',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: '400'
});

const LargeHeading = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black',
        className,
        moiraiOne.className
      )}
    >
      {children}
    </div>
  );
};

export default LargeHeading;
