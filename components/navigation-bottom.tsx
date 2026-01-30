'use client';

import { useEffect, useState } from 'react';
import {
  IconBriefcaseFilled,
  IconLayoutDashboardFilled,
  IconCameraFilled,
  IconMessageFilled,
  IconUserFilled,
} from '@tabler/icons-react';
import Link from 'next/link';

const NavigationBottom = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const nearTop = currentScrollY < 25;

      setIsVisible(nearTop || !scrollingDown);
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed left-1/2 bottom-6 z-20 mx-auto max-w-xs -translate-x-1/2 transition-transform duration-500 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-24'
      }`}
    >
      <nav className="glassmorphism rounded-full">
        <div className="flex justify-between items-center px-2 gap-x-0 hover:gap-x-3 transition-[gap] duration-300 ease-out">
          <Link href="/" className="group relative px-2 py-3">
            <IconLayoutDashboardFilled className="text-white" />
            <span className="pointer-events-none absolute bottom-14 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 bg-zinc-900">
              Hi
            </span>
          </Link>
          <Link href="/projects" className="group relative px-2 py-3">
            <IconBriefcaseFilled className="text-white" />
            <span className="pointer-events-none absolute bottom-14 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 bg-zinc-900">
              Projects
            </span>
          </Link>
          <Link href="/blog" className="group relative px-2 py-3">
            <IconMessageFilled className="text-white" />
            <span className="pointer-events-none absolute bottom-14 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 bg-zinc-900">
              Blog
            </span>
          </Link>
          <Link href="/hobbies" className="group relative px-2 py-3">
            <IconCameraFilled className="text-white" />
            <span className="pointer-events-none absolute bottom-14 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 bg-zinc-900">
              Hobby
            </span>
          </Link>
          <Link href="/profile" className="group relative px-2 py-3">
            <IconUserFilled className="text-white" />
            <span className="pointer-events-none absolute bottom-14 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 bg-zinc-900">
              Profile
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBottom;
