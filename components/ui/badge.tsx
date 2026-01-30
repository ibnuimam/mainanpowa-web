import { ReactNode } from 'react';

type PillBadgeProps = {
  icon: ReactNode;
  title: string;
  accent?: boolean;
};

export default function Badge({ icon, title, accent = false }: PillBadgeProps) {
  return (
    <div
      className={`flex w-fit items-center gap-3 rounded-full backdrop-blur-md shadow-md px-4 py-2 ${
        accent
          ? 'bg-cyan-400/30 border border-cyan-400/40 hover:bg-cyan-400/40'
          : 'bg-white/10 border border-white/20'
      }`}
    >
      {icon}
      <span
        className={`text-sm font-medium ${accent ? 'text-cyan-200' : 'text-white'}`}
      >
        {title}
      </span>
    </div>
  );
}
