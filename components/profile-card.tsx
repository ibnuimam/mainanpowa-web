'use client';

import { cn } from '@/libs/utils';
import Image from 'next/image';
import React from 'react';

export default function ProfileCard({
  image,
  title,
  shortDescription,
  periode,
  description,
  imageClassName,
}: {
  image: string;
  title: string;
  shortDescription: string;
  periode: string;
  description?: React.ReactNode;
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
        <div>
          <p className="text-zinc-400 text-sm">{periode}</p>
        </div>
      </div>
      {description}
    </div>
  );
}
