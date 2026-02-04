import ProfileCard from '@/components/profile-card';
import BackgroundComp from '@/components/ui/background';
import Badge from '@/components/ui/badge';
import { cn } from '@/libs/utils';
import { fetchProfile } from '@/services/profile.serv';
import { IconUserFilled } from '@tabler/icons-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile',
  description:
    'About Ibnu Imam — experience, education, skills, and contact details.',
  alternates: {
    canonical: '/profile',
  },
  openGraph: {
    title: 'Profile',
    description:
      'About Ibnu Imam — experience, education, skills, and contact details.',
    url: '/profile',
  },
  twitter: {
    title: 'Profile',
    description:
      'About Ibnu Imam — experience, education, skills, and contact details.',
  },
};

export default function Profile() {
  const profile = fetchProfile();
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
            <div className="w-full flex flex-col gap-10">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
                <div>
                  <p className="font-bold text-lg">Experience</p>
                </div>
                <div className="md:col-span-5 flex flex-col gap-4">
                  {profile &&
                    profile.experiences &&
                    profile.experiences.map((exp) => (
                      <ProfileCard
                        key={exp.id}
                        image={exp.image}
                        imageClassName={exp.imageBackground}
                        title={exp.company}
                        shortDescription={exp.location}
                        jobs={exp.jobs}
                      />
                    ))}
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
                <div>
                  <p className="font-bold text-lg">Education</p>
                </div>
                <div className="md:col-span-5 flex flex-col gap-4">
                  {profile &&
                    profile.educations &&
                    profile.educations.map((edu) => (
                      <ProfileCard
                        key={edu.id}
                        image={edu.image}
                        imageClassName={edu.imageBackground}
                        title={edu.company}
                        shortDescription={edu.location}
                        jobs={edu.jobs}
                      />
                    ))}
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
                <div>
                  <p className="font-bold text-lg">Skills</p>
                </div>
                <div className="md:col-span-5 flex flex-wrap gap-3">
                  {profile &&
                    profile.skills &&
                    profile.skills.map((skill) => (
                      <Badge key={skill} title={skill} />
                    ))}
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
                <div>
                  <p className="font-bold text-lg">Contact</p>
                </div>
                <div className="md:col-span-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-zinc-300 text-sm">
                      Email: me@ibnuimam.com
                    </p>
                    <p className="text-zinc-300 text-sm">
                      Phone: +62 852 2233 8644
                    </p>
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
