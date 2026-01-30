export const isHTML = (content: string): boolean => {
  return /<\/?[a-z][\s\S]*>/i.test(content);
};

export function parseDuration(duration: any) {
  const match = duration.match(/PT(\d+M)?(\d+S)?/);
  const minutes = match[1] ? parseInt(match[1]) : 0;
  const seconds = match[2] ? parseInt(match[2]) : 0;
  return minutes * 60 + seconds;
}
