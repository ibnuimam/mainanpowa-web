'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconX } from '@tabler/icons-react';
import VideoCard from './video-card';

export default function YoutubeList({
  videos,
  limit = 12,
}: {
  videos: any[];
  limit: number;
}) {
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);

  return (
    <div>
      <div className="grid gap-4 lg:gap-6 grid-cols-2 md:grid-cols-4">
        {videos.slice(0, limit).map((item: any) => (
          <VideoCard
            key={item.id}
            title={item.title}
            image={item.imageSrc}
            onClick={() => setSelectedVideo(item)}
          />
        ))}
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-zinc-900/80 p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-112.5 w-full glassmorphism rounded-3xl p-4"
          >
            <button
              className="absolute -top-3 -right-3 text-white bg-zinc-900 p-2 rounded-full"
              onClick={() => setSelectedVideo(null)}
            >
              <IconX className="size-6" />
            </button>
            <iframe
              className="w-full max-w-112.5 mx-auto rounded-2xl"
              width="450"
              height="550"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              title={selectedVideo.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </motion.div>
        </div>
      )}
    </div>
  );
}
