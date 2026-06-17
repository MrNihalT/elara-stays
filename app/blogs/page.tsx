import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/src/components/SectionHeading";
import { blogs } from "@/src/data/blogs";
import { reviews } from "@/src/data/reviews";
import { createMetadata } from "@/src/lib/seo";
import { FaStar } from "react-icons/fa6";

export const metadata: Metadata = createMetadata({
  title: "Wayanad Resort and Travel Blogs",
  description: "Read Wayanad travel blogs about resorts, tourist places, itineraries, pool resorts, family stays, honeymoon stays, and best time to visit.",
  path: "/blogs",
});

export default function BlogsPage() {
  return (
    <main className="px-4 pb-16 pt-32 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Travel blogs" title="Wayanad planning guides" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm font-bold text-[#8B6F1F]">Elara Stays Guide</p>
              <h2 className="mt-3 text-2xl font-bold">{blog.title}</h2>
              <p className="mt-3 leading-7 text-[#5F6B7A]">{blog.description}</p>
            </Link>
          ))}
        </div>
        <section className="mt-16">
          <SectionHeading eyebrow="Reviews" title="Guest reviews" description="A growing collection of guest notes. You can edit or add more reviews later from the static reviews data file." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="flex gap-1 text-[#D4AF37]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} aria-hidden />
                  ))}
                </div>
                <p className="mt-4 leading-7 text-[#4B5563]">&ldquo;{review.text}&rdquo;</p>
                <p className="mt-5 font-bold">{review.name}</p>
                <p className="text-sm text-[#6B7280]">{review.place}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
