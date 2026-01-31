import { IconMessageFilled } from '@tabler/icons-react';
import Badge from './ui/badge';
import MoreButton from './ui/more-botton';
import BlogCard from './blog-card';
import { BlogItemType, fetchBlogs } from '@/services/blog.serv';

type BlogSectionProps = {
  isPage?: boolean;
};

const BlogSection = async ({ isPage = false }: BlogSectionProps) => {
  let blogs: BlogItemType[] = [];
  const fetchedBlogs = await fetchBlogs({
    page: 1,
    limit: 3,
    sort: 'createdAt:desc',
  });
  blogs = fetchedBlogs.data;

  return (
    <section className="flex flex-col gap-8 pb-32 sm:justify-center">
      <div className="flex justify-between items-center">
        <Badge
          icon={<IconMessageFilled className="h-5 w-5 text-cyan-200" />}
          title="Blog"
          accent
        />
        {!isPage && (
          <div className="lg:hidden">
            <MoreButton href="/blog" title="View all blogs" />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-6 flex-col lg:flex-row">
        <div className="w-full lg:max-w-1/2">
          <h2 className="text-4xl font-semibold mb-4 text-white">
            Notes Along the Journey
          </h2>
          <p className="text-white">
            Thoughts, lessons, and experiences from my journey in web
            development, technology, and personal interests.
          </p>
        </div>
        {!isPage && (
          <div className="hidden lg:flex w-1/2 justify-start lg:justify-end items-center">
            <MoreButton href="/blog" title="View all blogs" />
          </div>
        )}
      </div>
      <div className="mt-12 flex flex-col gap-8">
        {blogs.map((blog) => (
          <div key={blog.slug}>
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
