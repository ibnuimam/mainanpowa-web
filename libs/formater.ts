import { formatDate } from 'date-fns';
import { id } from 'date-fns/locale';

export const formateDateID = (
  dateString: string | Date,
  format = 'dd MMMM'
) => {
  return dateString ? formatDate(dateString, format, { locale: id }) : '';
};

export const stripHTML = (content: string): string => {
  return content ? content.replace(/<\/?[^>]+(>|$)/g, '') : '';
};

export const stripMarkdown = (content: string): string => {
  return content
    ? content
        .replace(/^#{1,6}\s*/gm, '')
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/`{1,3}([^`]+)`{1,3}/g, '$1')
        .replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
        .replace(/^>\s*/gm, '')
        .replace(/^- /gm, '')
        .replace(/^\d+\.\s*/gm, '')
        .replace(/---/g, '')
        .replace(/\|/g, '')
        .replace(/\n{2,}/g, '\n')
        .trim()
    : '';
};

export const cleanContent = (content: string): string => {
  return stripMarkdown(stripHTML(content));
};

export const truncateByWords = (text: string, wordLimit: number): string => {
  const words = cleanContent(text).split(' ');
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(' ') + '...'
    : text;
};

export const removeScriptTags = (html: string) => {
  if (typeof html === 'string') {
    return html
      ? html.replace(/<script\b[^<]*>([\s\S]*?)<\/script>/gi, '')
      : '';
  }
  return '';
};
