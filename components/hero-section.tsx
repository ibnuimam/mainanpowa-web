import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const HeroSection = () => {
  return (
    <section className="flex h-screen flex-col gap-8 pb-32 pt-24 sm:justify-center">
      <div className="flex w-fit items-center rounded-full gap-3 py-1.5 pl-3 pr-4 border border-zinc-600/75 bg-slate-950/25 enter-animation">
        <div className="relative size-3">
          <div className="absolute size-full animate-ping rounded-full bg-green-300 opacity-65"></div>
          <div className="drop-shadow-green size-full rounded-full bg-green-400"></div>
        </div>
        <h3 className="text-sm text-slate-200 max-xs:text-xs">
          Available for projects
        </h3>
      </div>
      <h1 className="enter-animation text-[clamp(2rem,7vw,3rem)] font-medium leading-[1.05] tracking-tight">
        Hi, I’m Ibnu. <br /> A software engineer.
      </h1>
      <h2 className="enter-animation mb-8 max-w-xl leading-relaxed text-slate-400 max-sm:text-sm">
        Mainly working in the JavaScript ecosystem, I’m a dedicated
        problem-solver who thrives on learning and building.
      </h2>
      <div className="enter-animation flex gap-4">
        <button className="px-6 py-2.5 rounded-full glassmorphism glassmorphism-hover">
          <IconBrandGithub className="size-6" />
        </button>
        <button className="px-6 py-2.5 rounded-full glassmorphism glassmorphism-hover">
          <IconBrandLinkedin className="size-6" />
        </button>
        <button className="px-6 py-2.5 rounded-full glassmorphism glassmorphism-hover">
          <IconMail className="size-6" />
        </button>
        <button className="px-6 py-2.5 rounded-full glassmorphism glassmorphism-hover">
          <IconBrandWhatsapp className="size-6" />
        </button>
        <button className="px-6 py-2.5 rounded-full glassmorphism glassmorphism-hover">
          <span>Explore more</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
