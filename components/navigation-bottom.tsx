import {
  IconBriefcaseFilled,
  IconArticleFilled,
  IconLayoutDashboardFilled,
  IconCameraFilled,
  IconMessageFilled,
} from '@tabler/icons-react';
import Link from 'next/link';

const NavigationBottom = () => {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-20 mx-auto max-w-xs">
      <nav className="glassmorphism rounded-full">
        <div className="flex justify-between items-center px-2 gap-x-0 hover:gap-x-3 transition-[gap] duration-300 ease-out">
          <Link href="/" className="group relative px-2 py-3">
            <IconLayoutDashboardFilled className="text-gray-800 dark:text-white" />
            <span className="pointer-events-none absolute bottom-14 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 glassmorphism">
              Hi
            </span>
          </Link>
          <Link href="/" className="group relative px-2 py-3">
            <IconBriefcaseFilled className="text-gray-800 dark:text-white" />
            <span className="pointer-events-none absolute bottom-14 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 glassmorphism">
              Projects
            </span>
          </Link>
          <Link href="/" className="group relative px-2 py-3">
            <IconMessageFilled className="text-gray-800 dark:text-white" />
            <span className="pointer-events-none absolute bottom-14 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 glassmorphism">
              Blog
            </span>
          </Link>
          <Link href="/" className="group relative px-2 py-3">
            <IconCameraFilled className="text-gray-800 dark:text-white" />
            <span className="pointer-events-none absolute bottom-14 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 glassmorphism">
              Hobby
            </span>
          </Link>
          <Link href="/" className="group relative px-2 py-3">
            <IconArticleFilled className="text-gray-800 dark:text-white" />
            <span className="pointer-events-none absolute bottom-14 left-1/2 transform -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 glassmorphism">
              Profile
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBottom;
