import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-stone-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link to={`/blog/${post.slug}`}>
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-7">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700">
              {post.category}
            </span>

            <span className="text-xs text-zinc-500">
              {post.readTime}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-medium leading-tight">
            {post.title}
          </h3>

          <p className="mt-4 line-clamp-3 leading-7 text-zinc-600">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-2 font-medium">
            Read More
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </div>

          <p className="mt-5 text-xs text-zinc-400">
            {post.date}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;