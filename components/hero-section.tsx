import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandWhatsapp,
} from '@tabler/icons-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="flex h-screen flex-col gap-8 pb-32 pt-24 sm:justify-center">
      <div className="flex w-fit items-center rounded-full gap-3 py-1.5 pl-3 pr-4 border border-zinc-600/75 bg-slate-950/25 enter-animation">
        <div className="relative size-3">
          <div className="absolute size-full animate-ping rounded-full bg-cyan-400 opacity-65"></div>
          <div className="drop-shadow-green size-full rounded-full bg-cyan-400"></div>
        </div>
        <h3 className="text-sm text-white max-xs:text-xs">
          Available for projects
        </h3>
      </div>
      <h1 className="enter-animation text-[clamp(2rem,7vw,3rem)] font-medium leading-[1.05] tracking-tight text-white">
        Hi, I’m Ibnu. <br /> A software engineer.
      </h1>
      <h2 className="enter-animation mb-8 max-w-xl leading-relaxed text-white">
        Mainly working in the JavaScript ecosystem, I’m a dedicated
        problem-solver who thrives on learning and building.
      </h2>
      <div className="enter-animation flex gap-4 justify-start">
        <Link
          href="https://github.com/ibnuimam"
          className="px-6 py-2.5 rounded-full glassmorphism glassmorphism-hover"
          target="_blank"
        >
          <IconBrandGithub className="size-6 text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ibnuimam/"
          className="px-6 py-2.5 rounded-full glassmorphism glassmorphism-hover"
          target="_blank"
        >
          <IconBrandLinkedin className="size-6 text-white" />
        </Link>
        <Link
          href="mailto:me@ibnuimam.com"
          className="px-6 py-2.5 rounded-full glassmorphism glassmorphism-hover"
        >
          <IconMail className="size-6 text-white" />
        </Link>
        <Link
          href="https://wa.me/6285222338644?text=Halo%20Ibnu%2C%20saya%20dapat%20kontak%20kamu%20dari%20website."
          className="px-6 py-2.5 rounded-full glassmorphism glassmorphism-hover"
          target="_blank"
        >
          <IconBrandWhatsapp className="size-6 text-white" />
        </Link>
        <Link
          href="/#bento"
          className="hidden sm:block px-6 py-2.5 rounded-full glassmorphism glassmorphism-hover"
        >
          <span className="link-hover text-white">Explore more</span>
        </Link>
      </div>
      <Link
        href="/#bento"
        className="sm:hidden px-6 py-2.5 w-fit rounded-full glassmorphism glassmorphism-hover"
      >
        <span className="link-hover">Explore more</span>
      </Link>
    </section>
  );
};

export default HeroSection;
