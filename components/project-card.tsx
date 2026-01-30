import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  image?: string;
  title?: string;
  description?: string;
  year?: string;
  href?: string;
};

export default function ProjectCard({
  image = 'https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg',
  title = 'Bookmarked Android: A Simple Viewer for My Bookmarked Content',
  description = 'Built with Jetpack Compose, it aims to offer an improved reading experience on my laggy phone.',
  year = '2024',
  href = '/projects/bookmarked-android',
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col justify-between gap-8"
    >
      <div className="space-y-4">
        <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover aspect-[2] transition-all duration-800 group-hover:scale-105 md:aspect-[1.5]"
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          />
        </div>
        <span className="inline-flex items-center rounded-full text-xs font-medium tracking-wide glassmorphism px-3 py-1 text-white">
          {year}
        </span>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold leading-snug text-white">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-slate-300">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-white/80 transition group-hover:text-cyan-400">
        <span>Read more</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          <IconArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
