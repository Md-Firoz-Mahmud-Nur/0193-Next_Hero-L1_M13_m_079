import React from "react";

const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postData = await res.json();
  return {
    title: postData.title,
    description: postData.body,
    keywords: postData.body.split(" "),
  };
};

const PostDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { title, body } = await getDetailsPost(id);
  console.log(id);
  return (
    <div className="container mx-auto">
      Post Details {id}
      <h2> title: {title}</h2>
      <p>Body: {body}</p>
    </div>
  );
};

export default PostDetailsPage;
