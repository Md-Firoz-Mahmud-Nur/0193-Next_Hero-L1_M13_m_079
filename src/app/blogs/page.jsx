import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      slug: "my-first-post",
      title: "My First Post",
      description: "This is my first post",
    },
    {
      slug: "my-second-post",
      title: "My Second Post",
      description: "This is my second post",
    },
    {
      slug: "my-third-post",
      title: "My Third Post",
      description: "This is my third post",
    },
    {
      slug: "my-fourth-post",
      title: "My Fourth Post",
      description: "This is my fourth post",
    },
    {
      slug: "my-fifth-post",
      title: "My Fifth Post",
      description: "This is my fifth post",
    },
    {
      slug: "my-sixth-post",
      title: "My Sixth Post",
      description: "This is my sixth post",
    },
  ];

  return (
    <div className="p-24">
      <h4>Blogs</h4>
      {blogs.map((blog) => (
        <div className="border-2 p-12 my-7" key={blog.slug}>
          <h5>{blog.title}</h5>
          <p>{blog.description}</p>
          <button
            className="bg-red-300 p-2
          ">
            <Link href={`/blogs/${blog.slug}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
