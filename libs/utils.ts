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

export const thumbnail = (image: any, defaultImage?: string) => {
  if (image) {
    return image?.formats?.medium
      ? `${process.env.STRAPI_URL}${image?.formats?.medium.url}`
      : `${process.env.STRAPI_URL}${image.url}`;
  } else {
    return defaultImage ? defaultImage : '/img/img-notfound.png';
  }
};
