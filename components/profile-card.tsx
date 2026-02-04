'use client';

import { cn } from '@/libs/utils';
import Image from 'next/image';

export default function ProfileCard({
  image,
  title,
  shortDescription,
  jobs,
  imageClassName,
}: {
  image: string;
  title: string;
  shortDescription: string;
  jobs: any[];
  imageClassName?: string;
}) {
  return (
    <div className="glassmorphism p-4 rounded-2xl">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className={cn('p-1 rounded-xl', imageClassName)}>
            <Image src={image} alt={title} width={42} height={42} />
          </div>
          <div>
            <p className="font-bold text-white">{title}</p>
            <p className="text-white text-sm">{shortDescription}</p>
          </div>
        </div>
      </div>
      {jobs.map((job) => (
        <div key={job.id} className="mt-4">
          <div className="flex justify-between items-center">
            <p className="text-white text-sm font-semibold mb-2">{job.title}</p>
            <p className="text-xs text-zinc-400">{`${job.start} - ${job.end}`}</p>
          </div>
          {job.description && job.description != '' && (
            <div>
              <p className="text-zinc-300 text-sm">{job.description}</p>
            </div>
          )}
          {job.tasks && job.tasks.length > 0 && (
            <div className="ml-4">
              <ul className="list-disc text-zinc-300 text-sm">
                {job.tasks.map((task: string) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
