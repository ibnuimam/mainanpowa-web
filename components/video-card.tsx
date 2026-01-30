import { IconPlayerPlayFilled } from '@tabler/icons-react';
import Image from 'next/image';

type VideoCardProps = {
  image: string;
  title: string;
  onClick?: () => void;
};

export default function VideoCard({ image, title, onClick }: VideoCardProps) {
  return (
    <button
      className="group relative flex h-full flex-col justify-between gap-8 text-left"
      onClick={onClick}
    >
      <div className="space-y-4">
        <div className="relative aspect-9/16 w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover aspect-[2] transition-all duration-800 group-hover:scale-105 md:aspect-[1.5]"
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          />
          <IconPlayerPlayFilled className="size-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-cyan-400" />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold leading-snug text-white">
            {title}
          </h3>
        </div>
      </div>
    </button>
  );
}
