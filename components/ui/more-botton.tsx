import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

type MoreButtonProps = {
  title: string;
  href: string;
  className?: string;
};

export default function MoreButton({
  title,
  href,
  className = '',
}: MoreButtonProps) {
  return (
    <Link
      href={href}
      className={[
        'flex w-fit items-center justify-center gap-3 hover:gap-5 rounded-full px-4 py-2 glassmorphism group',
        className,
      ].join(' ')}
    >
      <span className="text-sm font-medium text-white group-hover:text-cyan-400">
        {title}
      </span>
      <IconArrowRight
        size={16}
        className="text-white group-hover:text-cyan-400"
      />
    </Link>
  );
}
