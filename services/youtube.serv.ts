import { parseDuration } from '@/libs/checker';
import { removeHashtags } from '@/libs/utils';

async function fetchYoutube(limit: number) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&maxResults=${limit}&type=video&videoDuration=short&order=date&key=${process.env.YOUTUBE_API_KEY}`,
    {
      next: { revalidate: 360, tags: ['videoes-cache', 'global-cache'] },
    }
  );

  if (!res.ok) {
    console.error('Failed to fetch YouTube videos');
    return null;
  }

  const resJson = await res.json();
  return resJson;
}

async function fetchYoutubeDetail(videoId: string) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`,
    {
      next: { revalidate: 360, tags: ['video-cache', 'global-cache'] },
    }
  );

  if (!res.ok) {
    return null;
  }
  const resJson = await res.json();
  return resJson?.items[0]?.contentDetails?.duration || '';
}

async function processItems(items: any[]) {
  const newItems = [];
  for (const item of items) {
    const detail = await fetchYoutubeDetail(item.id);
    newItems.push({
      ...item,
      duration: parseDuration(detail),
    });
  }
  return newItems;
}

export async function getVideos(limit = 4) {
  const short = await fetchYoutube(limit);
  if (!short) {
    return [];
  }

  const videos = short.items.map((s: any) => ({
    id: s.id.videoId,
    title: removeHashtags(s.snippet.title),
    imageSrc: s.snippet.thumbnails.high.url,
  }));

  const x = await processItems(videos);
  const newVideos = x.filter((y) => y.duration < 61);
  return newVideos;
}
