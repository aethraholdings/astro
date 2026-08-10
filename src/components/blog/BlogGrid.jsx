import Container from "../common/Container";
import BlogCard from "./BlogCard";

function BlogGrid({ posts }) {
  return (
    <section className="bg-white py-20">
      <Container>
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-medium">
              No articles found
            </h3>

            <p className="mt-3 text-zinc-500">
              Try another category or search term.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default BlogGrid;