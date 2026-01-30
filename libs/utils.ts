import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const removeHashtags = (title: string) => {
  return title.replace(/#\S+/g, "").replace(/\s{2,}/g, " ").trim();
};
