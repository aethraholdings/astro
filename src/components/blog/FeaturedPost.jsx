import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import blogPosts from "../../data/blog";

function FeaturedPost() {
  const post = blogPosts.find((item) => item.featured);

  if (!post) return null;

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
            Featured Article
          </p>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="group grid overflow-hidden rounded-[36px] bg-[#F8F6F2] lg:grid-cols-2"
        >
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full min-h-[350px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <span className="w-fit rounded-full bg-amber-100 px-4 py-2 text-sm text-amber-700">
              {post.category}
            </span>

            <h2 className="mt-6 text-3xl font-light leading-tight md:text-4xl">
              {post.title}
            </h2>

            <p className="mt-6 leading-8 text-zinc-600">
              {post.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-2 font-medium">
              Read Article
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>

            <div className="mt-8 text-sm text-zinc-500">
              {post.date} · {post.readTime}
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}

export default FeaturedPost;