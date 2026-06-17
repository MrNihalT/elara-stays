import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import WhatsappForm from "@/src/components/WhatsappForm";
import { blogs } from "@/src/data/blogs";
import { createMetadata } from "@/src/lib/seo";
import { absoluteUrl } from "@/src/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) return {};
  return createMetadata({
    title: blog.title,
    description: blog.description,
    path: `/blogs/${blog.slug}`,
    image: blog.heroImage,
    keywords: blog.keywords,
  });
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) notFound();

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.title,
          description: blog.description,
          image: absoluteUrl(blog.heroImage),
          url: absoluteUrl(`/blogs/${blog.slug}`),
          publisher: { "@type": "Organization", name: "Elara Stays" },
        }}
      />
      <section className="relative min-h-[64vh] overflow-hidden pt-24 text-white">
        <Image src={blog.heroImage} alt={blog.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#0B3F3A]/90" />
        <div className="relative mx-auto flex min-h-[calc(64vh-6rem)] max-w-4xl items-end px-4 py-14 md:px-6">
          <div>
            <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">Wayanad guide</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">{blog.title}</h1>
            <p className="mt-5 text-lg leading-8 text-white/85">{blog.description}</p>
          </div>
        </div>
      </section>
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        {blog.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="text-3xl font-bold">{section.heading}</h2>
            <p className="mt-4 text-lg leading-9 text-[#4B5563]">{section.body}</p>
          </section>
        ))}
      </article>
      <WhatsappForm />
    </main>
  );
}
