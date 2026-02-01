import { removeScriptTags } from '@/libs/formater';
import { thumbnail } from '@/libs/utils';

export type ProjectItemType = {
  slug: string;
  title: string;
  image: string;
  href: string;
  year: number;
  shortDescription?: string;
  description?: string;
};

export async function fetchProjects({
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
      'fields[2]': 'year',
      'fields[3]': 'short_description',
      'populate[0]': 'image',
      'pagination[page]': `${page}`,
      'pagination[pageSize]': `${limit}`,
      sort: `${sort}`,
    });

    const res = await fetch(
      `${process.env.STRAPI_URL}/api/projects?${query.toString()}`,
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
    const formattedData: ProjectItemType[] = resJson.data.map((n: any) => ({
      slug: n.slug,
      title: removeScriptTags(n.title),
      shortDescription: removeScriptTags(n.short_description),
      image: thumbnail(n.image),
      href: `/projects/${n.slug}`,
      year: n.year,
    }));

    return {
      data: formattedData,
      pagination: resJson.meta.pagination,
    };
  } catch (error) {
    console.error('project', error);
    return {
      data: [],
      pagination: null,
    };
  }
}

export async function fetchProject(slug: string) {
  try {
    const query = new URLSearchParams({
      populate: '*',
      'filters[slug][$eq]': slug,
      'pagination[page]': '1',
      'pagination[pageSize]': '1',
    });

    const res = await fetch(
      `${process.env.STRAPI_URL}/api/projects?${query.toString()}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 120, tags: ['project-cache', 'global-cache'] },
      }
    );
    if (!res.ok) {
      return null;
    }
    const resJson = await res.json();
    const newData: ProjectItemType[] = await resJson.data.map((n: any) => ({
      slug: n.slug,
      title: removeScriptTags(n.title),
      shortDescription: removeScriptTags(n.short_description),
      description: removeScriptTags(n.description),
      image: thumbnail(n.image, '', true),
      href: `/projects/${n.slug}`,
      year: n.year,
    }));
    return newData[0];
  } catch (error) {
    console.error('project', error);
    return null;
  }
}
