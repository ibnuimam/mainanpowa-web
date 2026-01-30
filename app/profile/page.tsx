import BackgroundComp from '@/components/ui/background';
import Badge from '@/components/ui/badge';
import { cn } from '@/libs/utils';
import { IconUserFilled } from '@tabler/icons-react';
import Image from 'next/image';

export default function Profile() {
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
        <section className="flex flex-col gap-8 pb-32 sm:justify-center">
          <div className="flex justify-between items-center">
            <Badge
              icon={<IconUserFilled className="h-5 w-5 text-cyan-200" />}
              title="Profile"
              accent
            />
          </div>
          <div className="flex justify-start items-center gap-6 flex-col">
            <div className="w-full mb-6">
              <h2 className="text-4xl font-semibold mb-4 text-white">
                I’m Ibnu Imam,
              </h2>
              <p className="text-white">
                a full-stack developer passionate about building end-to-end
                digital experiences that are fast, scalable and user-focused.
                With strong expertise in both front-end and back-end
                technologies, I enjoy transforming ideas into fully functional
                web applications that feel seamless and intuitive.
              </p>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-6">
                <div>
                  <p className="font-bold text-lg">Education</p>
                </div>
                <div className="col-span-5">
                  <div className="glassmorphism p-4 rounded-2xl mb-4 flex gap-4 items-center justify-between">
                    <div className="flex gap-4 items-center">
                      <div className="p-1 bg-white rounded-xl">
                        <Image
                          src="/img/itb.png"
                          alt="ITB"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-white">
                          Bachelor of Applied Science
                        </p>
                        <p className="text-white">
                          Institut Teknologi - Bandung
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm">
                        - From 2012 to 2014
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
