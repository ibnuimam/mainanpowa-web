import Link from 'next/link';
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

type FooterContent = {
  title: string;
  links: {
    text: string;
    href: string;
    withIcon?: boolean;
    inNewTab?: boolean;
  }[];
};

const description =
  "Hi! I'm Ibnu Imam, a software engineer specializing in web development.";

const socialMediaData = [
  {
    icon: IconBrandGithub,
    href: 'https://github.com/ibnuimam',
    name: 'github',
  },
  {
    icon: IconBrandLinkedin,
    href: 'https://www.linkedin.com/in/ibnuimam',
    name: 'linkedin',
  },
  {
    icon: IconBrandInstagram,
    href: 'https://www.instagram.com/ibnuimam',
    name: 'instagram',
  },
  { icon: IconBrandX, href: 'https://twitter.com/ibnuimam', name: 'x' },
];

const FOOTER_CONTENTS: FooterContent[] = [
  {
    title: 'Me',
    links: [
      { text: 'Projects', href: '/projects' },
      { text: 'Blog', href: '/blog' },
      { text: 'Hobbies', href: '/hobbies' },
    ],
  },
  {
    title: 'This site',
    links: [
      {
        text: 'Source code',
        href: 'https://github.com/ibnuimam/mainanpowa-web',
        inNewTab: true,
      },
      {
        text: 'Refrence code',
        href: 'https://github.com/jestsee/jestsee.com',
        inNewTab: true,
      },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      {
        text: 'Sahabat Finansial',
        href: 'https://sahabatfinansial.com',
        inNewTab: true,
        withIcon: true,
      },
      {
        text: 'Kreasi Awan Nusantara',
        href: 'https://hq.gotfloop.com',
        inNewTab: true,
        withIcon: true,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto w-full">
      <div className="absolute left-1/2 top-0 -z-10 h-48 w-3/5 -translate-x-1/2 bg-emerald-400/20 opacity-25 blur-[160px] xs:top-24" />

      <div className="h-px w-full bg-linear-to-r from-zinc-800/25 via-zinc-800/75 to-zinc-800/25" />

      <div className="flex justify-center bg-zinc-950/70 pb-16 pt-20 max-[960px]:pb-8">
        <div className="flex w-full items-stretch justify-between gap-16 px-12 text-sm tracking-wide text-zinc-200 max-[960px]:flex-col-reverse max-sm:px-4 min-[1200px]:w-300">
          <div className="space-y-10 lg:space-y-24">
            <div className="space-y-1 lg:space-y-3">
              <p className="text-lg leading-none text-zinc-200">
                <span className="tracking-widest"> Ibnu Imam </span>
              </p>
              <p className="text-[13px] text-zinc-500">{description}</p>
            </div>
            <div className="space-y-6">
              <ul className="flex gap-3 text-zinc-200">
                {socialMediaData.map(({ icon: Icon, href, name }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      className="group"
                    >
                      <Icon className="size-5 rounded group-focus-visible:outline outline-offset-4 outline-emerald-300" />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-zinc-500">
                &copy; {new Date().getFullYear()} Ibnu Imam. All rights
                reserved.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between text-zinc-200 max-xs:gap-16 max-[960px]:flex-col-reverse max-[960px]:gap-12">
            <div className="grid grid-cols-3 gap-y-16 max-[960px]:max-w-120 max-xs:grid-cols-2 sm:gap-24">
              {FOOTER_CONTENTS.map(({ title, links }) => (
                <div key={title} className="space-y-4">
                  <p className="text-zinc-200">{title}</p>
                  <ul className="flex flex-col gap-3 text-zinc-400">
                    {links.map(({ text, href, withIcon, inNewTab }) => (
                      <li key={`${title}-${text}`}>
                        <Link
                          href={href}
                          target={inNewTab ? '_blank' : '_self'}
                          rel={inNewTab ? 'noreferrer' : undefined}
                          className="flex items-center gap-1 font-normal hover:text-zinc-200"
                        >
                          <span>{text}</span>
                          {withIcon && <IconArrowUpRight className="size-3" />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
