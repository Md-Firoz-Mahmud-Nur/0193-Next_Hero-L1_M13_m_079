import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="min-h-screen px-12 py-24">
      <div className="text-3xl mb-12">
        {[1, 2, 3, 4, 5].map((item) => (
          <Image
            key={item}
            src={`/images/${item}.jpg`}
            alt=""
            width={1920}
            height={1080}
            className="inline-block mr-8"></Image>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
