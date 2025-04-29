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
    <div className={cn('text-6xl sm:text-8xl text-black', className, moiraiOne.className)}>
      {children}
    </div>
  );
};

export default LargeHeading;
