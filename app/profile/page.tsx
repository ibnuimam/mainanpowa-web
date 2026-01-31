import ProfileCard from '@/components/profile-card';
import BackgroundComp from '@/components/ui/background';
import Badge from '@/components/ui/badge';
import { cn } from '@/libs/utils';
import { IconUserFilled } from '@tabler/icons-react';

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
            <div className="w-full flex flex-col gap-10">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
                <div>
                  <p className="font-bold text-lg">Experience</p>
                </div>
                <div className="md:col-span-5 flex flex-col gap-4">
                  <ProfileCard
                    image="/img/sunterra.jpeg"
                    imageClassName="bg-[#f78c22]"
                    title="Full Stack Engineer"
                    shortDescription="PT Energi Indonesia Berkarya (SUN Group) - Jakarta"
                    periode="Jan 2025 - Present"
                    description={
                      <div className="mt-4 ml-4">
                        <ul className="list-disc text-zinc-300 text-sm">
                          <li>
                            Developed and maintained web applications using
                            Typescript, Nextjs, Node.js, Go, PHP, Postgree,
                            MySql and MongoDB.
                          </li>
                          <li>
                            Collaborated with cross-functional teams to design
                            and implement new features based on user feedback.
                          </li>
                          <li>
                            Optimized application performance and bug fixes.
                          </li>
                        </ul>
                      </div>
                    }
                  />
                  <ProfileCard
                    image="/img/sunterra.jpeg"
                    imageClassName="bg-[#f78c22]"
                    title="Lead Software Engineer"
                    shortDescription="PT Energi Indonesia Berkarya (SUN Group) - Jakarta"
                    periode="May 2022 - Jan 2025"
                    description={
                      <div className="mt-4 ml-4">
                        <ul className="list-disc text-zinc-300 text-sm">
                          <li>
                            Led a team of developers to design and implement
                            scalable web applications using modern technologies
                            such as React, Node.js, and Postgree.
                          </li>
                          <li>
                            Architected and developed RESTful APIs to support
                            front-end functionality and improve data retrieval
                            efficiency.
                          </li>
                          <li>
                            Mentored junior developers and conducted code
                            reviews to ensure adherence to best practices and
                            coding standards.
                          </li>
                        </ul>
                      </div>
                    }
                  />
                  <ProfileCard
                    image="/img/tanihub.jpeg"
                    imageClassName="bg-[#22ab97]"
                    title="Technical Lead"
                    shortDescription="PT Tani Group Indonesia - Jakarta"
                    periode="Feb 2021 - May 2022"
                    description={
                      <div className="mt-4 ml-2">
                        <p className="text-zinc-300 text-sm">
                          As Technical Lead at PT Tani Group Indonesia, I led a
                          customer‑facing squad, architected and developed
                          services for customer‑facing products, and ensured
                          high delivery quality through mentoring, code reviews,
                          and technical guidance.
                        </p>
                      </div>
                    }
                  />
                  <ProfileCard
                    image="/img/kalbe.jpg"
                    imageClassName="bg-white"
                    title="Senior Frontend Engineer"
                    shortDescription="PT Karsa Lintas Buana (Kalbe E-Health) - Tangerang"
                    periode="Oct 2019 - Feb 2021"
                    description={
                      <div className="mt-4 ml-2">
                        <p className="text-zinc-300 text-sm">
                          As a Senior Frontend Engineer, I build high‑quality,
                          user‑focused web applications, translating product
                          goals into responsive, accessible, and performant
                          interfaces. I collaborate across design and backend
                          teams, drive front‑end architecture decisions, and
                          improve code quality through best practices, reusable
                          components, and thoughtful reviews. I also mentor
                          engineers and help teams ship reliable features with a
                          strong focus on user experience.
                        </p>
                      </div>
                    }
                  />
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
                <div>
                  <p className="font-bold text-lg">Education</p>
                </div>
                <div className="md:col-span-5 ">
                  <ProfileCard
                    image="/img/itb.png"
                    imageClassName="bg-white"
                    title="Bachelor of Applied Science"
                    shortDescription="Institut Teknologi - Bandung"
                    periode="- From 2012 to 2014"
                  />
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
                <div>
                  <p className="font-bold text-lg">Skills</p>
                </div>
                <div className="md:col-span-5 flex flex-wrap gap-3">
                  <Badge title="JavaScript" />
                  <Badge title="TypeScript" />
                  <Badge title="React" />
                  <Badge title="React Native" />
                  <Badge title="Next.js" />
                  <Badge title="Node.js" />
                  <Badge title="Go" />
                  <Badge title="PHP" />
                  <Badge title="MySQL" />
                  <Badge title="PostgreSQL" />
                  <Badge title="MongoDB" />
                  <Badge title="Docker" />
                  <Badge title="Kubernetes" />
                  <Badge title="AWS" />
                  <Badge title="Git" />
                  <Badge title="Leadership" />
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
