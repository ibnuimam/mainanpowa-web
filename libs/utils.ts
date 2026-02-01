import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const removeHashtags = (title: string) => {
  return title
    .replace(/#\S+/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
};

export const thumbnail = (
  image: any,
  defaultImage?: string,
  isLarge?: boolean
) => {
  if (image && isLarge) {
    return image?.formats?.large ? image?.formats?.large.url : image.url;
  } else if (image && !isLarge) {
    return image?.formats?.medium ? image?.formats?.medium.url : image.url;
  } else {
    return defaultImage ? defaultImage : '/img/img-notfound.png';
  }
};
