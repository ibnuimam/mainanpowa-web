import HeroSection from "@/components/hero-section";
import BackgroundComp from "@/components/ui/background";
import { cn } from "@/libs/utils";

export default function Home() {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center">
      <div className="absolute -z-10 h-screen w-screen max-w-full overflow-hidden min-512:max-w-512">
        <BackgroundComp
          className={cn(
            "h-66 w-298 rotate-[-20deg] opacity-100 md:opacity-40",
            "-top-63 left-25",
          )}
        />
        <BackgroundComp
          className={cn(
            "h-69 w-298 rotate-[-32deg] opacity-25",
            "-top-50 left-60",
          )}
        />
        <BackgroundComp
          className={cn("h-97 w-439 rotate-40 opacity-80", "-left-50 -top-110")}
        />
        <BackgroundComp
          className={cn(
            "h-123 w-298 rotate-[-32deg] opacity-75",
            "-top-70 left-240",
          )}
        />
      </div>
      <main className="w-full max-w-6xl px-12 pb-16 tracking-wide transition-all max-sm:px-4">
        <HeroSection />
      </main>
    </div>
  );
}
