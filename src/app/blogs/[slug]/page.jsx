import React from "react";

const BlogDetailsPage = ({ params }) => {
  console.log(params.slug);

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

  const { title, description } = blogs.find(
    (blog) => blog.slug === params.slug
  );

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold">blog details</h3>
      <h4 className="text-xl">{title}</h4>
      <h4>{description}</h4>
    </div>
  );
};

export default BlogDetailsPage;
