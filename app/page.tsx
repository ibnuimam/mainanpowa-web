import BentoSection from '@/components/bento-section';
import BlogSection from '@/components/blog-section';
import HeroSection from '@/components/hero-section';
import HobbySection from '@/components/hobby-section';
import ProjectSection from '@/components/project-section';
import BackgroundComp from '@/components/ui/background';
import { cn } from '@/libs/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Portfolio of Ibnu Imam — software engineer focused on building modern web experiences.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Home',
    description:
      'Portfolio of Ibnu Imam — software engineer focused on building modern web experiences.',
    url: '/',
  },
  twitter: {
    title: 'Home',
    description:
      'Portfolio of Ibnu Imam — software engineer focused on building modern web experiences.',
  },
};

export default function Home() {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center">
      <div className="absolute -z-10 h-screen w-screen max-w-full overflow-hidden min-512:max-w-512">
        <BackgroundComp
          className={cn(
            'h-66 w-298 rotate-[-20deg] opacity-100 md:opacity-40',
            '-top-63 left-25'
          )}
        />
        <BackgroundComp
          className={cn(
            'h-69 w-298 rotate-[-32deg] opacity-25',
            '-top-50 left-60'
          )}
        />
      </div>
      <main className="w-full max-w-6xl px-12 pb-16 tracking-wide transition-all max-sm:px-4">
        <HeroSection />
        <div id="bento">
          <BentoSection />
        </div>
        <div id="projects">
          <ProjectSection />
        </div>
        <div id="blog">
          <BlogSection />
        </div>
        <div id="hobbies">
          <HobbySection />
        </div>
      </main>
    </div>
  );
}
