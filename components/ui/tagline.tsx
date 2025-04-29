import { cn } from '@/lib/utils';

const Tagline = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('text-xs sm:text-xl font-medium mt-2', className)}>{children}</div>;
};

export default Tagline;
