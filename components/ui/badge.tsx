import { ReactNode } from 'react';

type PillBadgeProps = {
  icon: ReactNode;
  title: string;
  className?: string;
};

export default function Badge({ icon, title, className = '' }: PillBadgeProps) {
  return (
    <div
      className={[
        'flex w-fit items-center gap-3 rounded-full px-4 py-2 glassmorphism',
        className,
      ].join(' ')}
    >
      {icon}
      <span className="text-sm font-medium text-white">{title}</span>
    </div>
  );
}
