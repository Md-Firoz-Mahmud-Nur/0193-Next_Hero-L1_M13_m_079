import { getPosts } from "@/API/postsAPI";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const PostsPage = async () => {
  const postsData = await getPosts();
  // if (postsData) {
  //   redirect(`/posts/${postsData[0].id}`);
  // }
  return (
    <div className="grid grid-cols-4  gap-6 pt-24 px-12">
      {postsData?.slice(0, 5)?.map(({ title, body, id }) => (
        <div key={id} className="border-2 p-6">
          <h6>Title : {title}</h6>
          <h6>Description : {body}</h6>
          <button className="bg-red-400 px-4 py-2">
            <Link href={`/posts/${id}`}>See Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
