import { formateDateID, removeScriptTags } from '@/libs/formater';
import { thumbnail } from '@/libs/utils';

export type BlogItemType = {
  slug: string;
  title: string;
  image: string;
  href: string;
  date: string;
  shortDescription?: string;
  description?: string;
  tags?: Array<{ id: string; title: string }>;
};

export async function fetchBlogs({
  page,
  limit,
  sort,
}: {
  page: number;
  limit: number;
  sort: string;
}) {
  try {
    const query = new URLSearchParams({
      'fields[0]': 'slug',
      'fields[1]': 'title',
      'fields[2]': 'createdAt',
      'fields[3]': 'short_description',
      'populate[0]': 'image',
      'populate[1]': 'tags',
      'pagination[page]': `${page}`,
      'pagination[pageSize]': `${limit}`,
      sort: `${sort}`,
    });

    const res = await fetch(
      `${process.env.STRAPI_URL}/api/blogs?${query.toString()}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 0, tags: ['blogs-cache', 'global-cache'] },
      }
    );
    if (!res.ok) {
      return {
        data: [],
        pagination: null,
      };
    }
    const resJson = await res.json();
    const formattedData: BlogItemType[] = resJson.data.map((n: any) => ({
      slug: n.slug,
      title: removeScriptTags(n.title),
      shortDescription: removeScriptTags(n.short_description),
      image: thumbnail(n.image),
      tags: n.tags.map((tag: any) => ({
        id: tag.id,
        title: tag.title,
      })),
      href: `/blog/${n.slug}`,
      date: formateDateID(n.createdAt, 'EEEE, dd MMM yyyy'),
    }));
    return {
      data: formattedData,
      pagination: resJson.meta.pagination,
    };
  } catch (error) {
    console.error('blog', error);
    return {
      data: [],
      pagination: null,
    };
  }
}

export async function fetchBlog(slug: string) {
  try {
    const query = new URLSearchParams({
      populate: '*',
      'filters[slug][$eq]': slug,
      'pagination[page]': '1',
      'pagination[pageSize]': '1',
    });

    const res = await fetch(
      `${process.env.STRAPI_URL}/api/blogs?${query.toString()}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 120, tags: ['blog-cache', 'global-cache'] },
      }
    );
    if (!res.ok) {
      return null;
    }
    const resJson = await res.json();
    const newData: BlogItemType[] = await resJson.data.map((n: any) => ({
      slug: n.slug,
      title: removeScriptTags(n.title),
      shortDescription: removeScriptTags(n.short_description),
      description: removeScriptTags(n.description),
      image: thumbnail(n.image, '', true),
      href: `/blog/${n.slug}`,
      date: formateDateID(n.createdAt, 'EEEE, dd MMM yyyy'),
      tags: n.tags.map((tag: any) => ({
        id: tag.id,
        title: tag.title,
      })),
    }));
    return newData[0];
  } catch (error) {
    console.error('blog', error);
    return null;
  }
}
