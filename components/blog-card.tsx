import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

type BlogCardProps = {
  image?: string;
  title?: string;
  description?: string;
  date?: string;
  href?: string;
};

export default function BlogCard({
  image = 'https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg',
  title = 'Bookmarked Android: A Simple Viewer for My Bookmarked Content',
  description = 'Built with Jetpack Compose, it aims to offer an improved reading experience on my laggy phone.',
  date = 'January 3, 2024',
  href = '/projects/bookmarked-android',
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group flex gap-8 border-t border-t-zinc-800 pt-6 max-md:flex-col"
    >
      <div className="relative h-36 w-full max-w-40 overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={image}
          alt={title}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          className="object-cover aspect-[2] transition-all duration-800 group-hover:scale-105 md:aspect-[1.5]"
          fill
        />
      </div>

      <div className="flex w-full flex-col justify-between">
        <div className="font-light">
          <p className="text-sm text-zinc-400">{date}</p>
          <p className="font-display mt-3 line-clamp-2 text-lg font-semibold leading-[1.4] text-white">
            {title}
          </p>
          <p className="mt-2 line-clamp-2 text-zinc-400 max-md:text-sm">
            {description}
          </p>
        </div>

        <div className="mt-4 flex justify-between gap-6 max-xs:flex-col-reverse xs:mt-6 xs:items-center">
          <div className="flex items-center gap-2 text-sm text-white/80 transition group-hover:text-cyan-400">
            <span>Read more</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <IconArrowRight size={16} />
            </span>
          </div>
          <ul className="flex flex-wrap gap-2">
            {['JS', 'React'].map((item) => (
              <li
                key={item}
                className="font-mono text-white text-xs tracking-tight glassmorphism px-2 rounded-full flex items-center justify-center"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
