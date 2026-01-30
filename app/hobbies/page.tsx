import HobbySection from '@/components/hobby-section';
import BackgroundComp from '@/components/ui/background';
import { cn } from '@/libs/utils';

export default function Hobbies() {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center">
      <div className="absolute -z-10 h-screen w-screen max-w-full overflow-hidden min-512:max-w-512">
        <BackgroundComp
          className={cn(
            'h-29.25 w-146.25 -rotate-37 opacity-20',
            '-top-10 left-140'
          )}
        />
        <BackgroundComp
          className={cn(
            'h-66.75 w-298 -rotate-37 opacity-45',
            '-top-15 left-170'
          )}
        />
      </div>
      <main className="w-full max-w-6xl px-12 pb-16 tracking-wide transition-all max-sm:px-4 pt-24">
        <HobbySection isPage />
      </main>
    </div>
  );
}
