'use client';

import { IconStack2Filled } from '@tabler/icons-react';
import { NextJsIcon } from '@/components/ui/icons/nextjs-icon';
import { JSX } from 'react/jsx-dev-runtime';
import { SVGProps } from 'react';
import { TypeScriptIcon } from './ui/icons/typescript-icon';
import { ReactJsIcon } from './ui/icons/reactjs-icon';
import { DockerIcon } from './ui/icons/docker-icon';
import { TailwindcssIcon } from './ui/icons/tailwindcss-icon';
import { PhpIcon } from './ui/icons/php-icon';
import { LaravelIcon } from './ui/icons/laravel-icon';
import { GoIcon } from './ui/icons/go-icon';
import { DrizzleIcon } from './ui/icons/drizzle-icon';
import Badge from './ui/badge';

type TechStack = {
  name: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  description: string;
};

const techStacks: TechStack[] = [
  {
    name: 'NextJS',
    icon: NextJsIcon,
    description:
      'Next.js is an open-source, full-stack React framework that provides building blocks and features for creating fast, production-ready web applications. It is developed and maintained by the company Vercel.',
  },
  {
    name: 'Typescript',
    icon: TypeScriptIcon,
    description:
      'TypeScript is a strongly typed, open-source programming language that is a syntactic superset of JavaScript.',
  },
  {
    name: 'ReactJS',
    icon: ReactJsIcon,
    description:
      'ReactJS is a JavaScript library for building user interfaces, developed and maintained by Facebook.',
  },
  {
    name: 'Docker',
    icon: DockerIcon,
    description:
      'Docker is a platform for developing, shipping, and running applications in containers.',
  },
  {
    name: 'TailwindCSS',
    icon: TailwindcssIcon,
    description:
      'TailwindCSS is a utility-first CSS framework for rapidly building custom user interfaces.',
  },
  {
    name: 'PHP',
    icon: PhpIcon,
    description:
      'PHP is a server-side scripting language designed for web development.',
  },
  {
    name: 'Laravel',
    icon: LaravelIcon,
    description:
      'Laravel is a PHP web application framework with expressive, elegant syntax.',
  },
  {
    name: 'GO',
    icon: GoIcon,
    description:
      'GO is a statically typed, compiled programming language designed for simplicity and efficiency.',
  },
  {
    name: 'Drizzle ORM',
    icon: DrizzleIcon,
    description:
      'Drizzle ORM is a lightweight, type-safe ORM for TypeScript and JavaScript.',
  },
];

export default function TechStackCard() {
  return (
    <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border p-6 glassmorphism">
      {/* Header */}
      <Badge
        icon={<IconStack2Filled className="h-5 w-5 text-white" />}
        title="Tech stack"
        className="w-fit mb-4"
      />

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade mask */}
        <div className="pointer-events-none absolute inset-0 z-10" />

        <div className="flex w-max gap-6 animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
          {[...techStacks, ...techStacks].map((t, index) => (
            <div
              key={index}
              className="flex h-20 w-20 items-center justify-center opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <t.icon className="h-16 w-16 text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="mt-10 max-w-xl">
        <h3 className="text-2xl font-semibold text-white">
          Tech stacks I&apos;m familiar with
        </h3>
        <p className="mt-3 text-sm text-white/60">
          Primarily focused on the JavaScript ecosystem, but always eager to
          explore and learn new technologies.
        </p>
      </div>
    </div>
  );
}
