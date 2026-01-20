'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IconBookmark, IconBriefcase2Filled } from '@tabler/icons-react';
import Badge from './ui/badge';
import NotificationCard from './ui/notification-card';

export default function LastWorkCard() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target
          .querySelectorAll('.hidden-notification-card')
          .forEach((el) => {
            if (entry.isIntersecting) {
              el.classList.add('show-notification-card');
            }
          });
      });
    });

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href="/projects/bookmarked"
      className="group relative flex h-full flex-col gap-6 rounded-3xl px-6 py-6 text-white glassmorphism"
    >
      {/* Header */}
      <div className="space-y-4 z-10">
        <Badge
          icon={<IconBriefcase2Filled className="h-5 w-5 text-white" />}
          title="Last work"
          className="w-fit"
        />

        <div className="space-y-3 max-w-sm">
          <h3 className="text-2xl font-semibold tracking-tight">Bookmarked</h3>
          <p className="text-base leading-relaxed text-slate-400">
            My most recent professional position.
          </p>
        </div>
      </div>

      {/* Notifications */}
      <div className="relative mt-6 flex justify-center">
        <div
          ref={cardRef}
          className="relative flex flex-col items-center bookmarked-notification-card"
        >
          {/* Top notification */}
          <NotificationCard
            sender="Bookmarked"
            time="Just now"
            message="Your bookmark has been saved"
            className="
              hidden-notification-card z-20
              flex items-center gap-4
              w-85
              rounded-2xl
              bg-linear-to-br from-slate-200 to-slate-400
              px-5 py-4 text-slate-900
              shadow-xl
              transition-all duration-300
              group-hover:-translate-y-2 group-hover:scale-[1.03]
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
              <IconBookmark className="h-6 w-6" />
            </div>
          </NotificationCard>

          {/* Stacked notification */}
          <NotificationCard
            sender="Bookmarked"
            time="1m ago"
            message="Bookmarking this thread"
            className="
              hidden-notification-card z-10
              -mt-10 w-75
              rounded-2xl
              bg-slate-500/60
              px-5 py-4 text-slate-800
              blur-[1px]
              transition-all duration-500
              group-hover:-translate-y-2 group-hover:scale-[1.02]
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/80 text-white">
              <IconBookmark className="h-6 w-6" />
            </div>
          </NotificationCard>
        </div>
      </div>
    </Link>
  );
}
