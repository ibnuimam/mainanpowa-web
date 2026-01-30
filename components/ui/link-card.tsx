import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { ReactNode } from 'react';

type LnkCardProps = {
  icon?: ReactNode;
  href: string;
  title?: string;
  className?: string;
};

export default function LinkCard({
  icon,
  href,
  title,
  className = '',
}: LnkCardProps) {
  return (
    <Link
      href={href}
      className={[
        'flex items-center justify-center w-full h-full glassmorphism rounded-3xl text-white hover:text-cyan-400 group',
        className,
      ].join(' ')}
    >
      {icon ? icon : null}
      {title ? (
        <div className="flex justify-between w-full px-4">
          <span className="font-medium relative inline-block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:opacity-0 after:bg-current after:transition-all after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:opacity-100">
            {title}
          </span>
          <IconArrowRight className="size-6 group-hover:rotate-90 transition duration-300 " />
        </div>
      ) : null}
    </Link>
  );
}
