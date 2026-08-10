import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
} from "lucide-react";

import Container from "../components/common/Container";
import BlogCard from "../components/blog/BlogCard";
import blogPosts from "../data/blog";

function BlogDetails() {
  const { slug } = useParams();

  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    return (
      <section className="min-h-[70vh] bg-[#F8F6F2] py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
              Article Not Found
            </p>

            <h1 className="mt-5 text-5xl font-light">
              We couldn't find that article.
            </h1>

            <Link
              to="/blog"
              className="mt-8 inline-flex rounded-full bg-black px-8 py-4 text-white"
            >
              Back to Journal
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const relatedPosts = blogPosts
    .filter(
      (item) =>
        item.category === post.category &&
        item.id !== post.id
    )
    .slice(0, 3);

  return (
    <>
      {/* Article Hero */}
      <section className="bg-[#F8F6F2] py-16 lg:py-24">
        <Container>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-black"
          >
            <ArrowLeft size={17} />
            Back to Journal
          </Link>

          <div className="mx-auto mt-14 max-w-4xl text-center">
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm text-amber-700">
              {post.category}
            </span>

            <h1 className="mt-7 text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
              <span>{post.author}</span>

              <span>•</span>

              <span>{post.date}</span>

              <span>•</span>

              <span className="flex items-center gap-1">
                <Clock size={15} />
                {post.readTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="bg-white pt-8">
        <Container>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px]">
            <img
              src={post.image}
              alt={post.title}
              className="max-h-[650px] w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_220px]">
            
            <article className="max-w-3xl">
              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="mb-5 mt-14 text-3xl font-medium first:mt-0"
                    >
                      {block.text}
                    </h2>
                  );
                }

                return (
                  <p
                    key={index}
                    className="mb-7 text-lg leading-9 text-zinc-700"
                  >
                    {block.text}
                  </p>
                );
              })}
            </article>

            {/* Share */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Share
              </p>

              <div className="mt-5 flex gap-3 lg:flex-col">
  <button
    aria-label="Share on Facebook"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-sm font-medium transition hover:bg-black hover:text-white"
  >
    f
  </button>

  <button
    aria-label="Share on X"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-sm font-medium transition hover:bg-black hover:text-white"
  >
    X
  </button>

  <button
    aria-label="Share on LinkedIn"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-sm font-medium transition hover:bg-black hover:text-white"
  >
    in
  </button>
</div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Author */}
      <section className="bg-[#F8F6F2] py-16">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[30px] bg-white p-8 md:flex-row md:items-center md:p-10">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl">
              ✦
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-amber-600">
                Written By
              </p>

              <h3 className="mt-2 text-2xl font-medium">
                {post.author}
              </h3>

              <p className="mt-2 leading-7 text-zinc-600">
                Thoughtful insights on astrology, spirituality,
                self-reflection, and personal growth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-24">
          <Container>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
                  Continue Reading
                </p>

                <h2 className="mt-4 text-4xl font-light md:text-5xl">
                  You May Also Like
                </h2>
              </div>

              <Link
                to="/blog"
                className="hidden items-center gap-2 md:flex"
              >
                View All
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  post={relatedPost}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Consultation CTA */}
      <section className="bg-[#1A1715] py-24 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Looking For Personal Guidance?
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              Take the next step in your journey.
            </h2>

            <p className="mt-6 leading-8 text-zinc-300">
              Explore your questions with a personalized
              astrology consultation.
            </p>

            <Link
              to="/booking"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-amber-600 px-8 py-4 transition hover:bg-amber-700"
            >
              Book a Consultation
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default BlogDetails;