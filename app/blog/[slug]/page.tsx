import BackgroundComp from '@/components/ui/background';
import { cn } from '@/libs/utils';
import { fetchBlog } from '@/services/blog.serv';
import { IconArrowLeft } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function BlogDetail({ params }: any) {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-full min-h-dvh flex flex-col items-center">
      <main className="w-full max-w-210 px-12 pb-16 tracking-wide transition-all max-sm:px-4 pt-18">
        <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 mb-6 lg:mt-12 lg:rounded-xl">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            unoptimized
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
            className="object-cover aspect-[2.5] w-full xs:aspect-[3.25]"
          />
        </div>
        <section className="mt-8 sm:font-light">
          <p className="text-sm text-zinc-400">{blog.date}</p>
          <h1 className="font-display mt-4 text-[clamp(1.8rem,5vw,2rem)] font-semibold leading-tight text-white tracking-[-0.01em]! md:leading-[1.1]">
            {blog.title}
          </h1>
          <h3 className="mt-2 text-zinc-400 max-sm:text-sm">
            {blog.shortDescription ?? blog.description}
          </h3>
          {blog.tags?.length ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {blog.tags.map((item: any) => (
                <li
                  key={item.id ?? item.title}
                  className="rounded bg-zinc-900 px-2 py-1 font-mono text-xs tracking-tight text-zinc-500"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <div className="mt-8 h-px w-full bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900" />

        <section className="mt-8 flex w-full gap-16">
          <article
            id="article"
            className={[
              'prose prose-invert min-w-0 max-w-none max-sm:prose-sm',
              'prose-headings:font-display prose-headings:scroll-m-16 sm:prose-headings:scroll-m-24',
              'prose-a:text-cyan-300 prose-a:no-underline hover:prose-a:underline',
            ].join(' ')}
          >
            {blog.description ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {blog.description}
              </ReactMarkdown>
            ) : null}
          </article>
        </section>

        <section className="mt-16">
          <Link
            href="/blog"
            className="text-zinc-200 no-underline hover:text-cyan-400 flex gap-2"
          >
            <IconArrowLeft className="size-6" />
            <span>Explore more blog</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
