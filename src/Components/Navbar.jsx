"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    { title: "About", path: "/about" },
    { title: "Service", path: "/service" },
    { title: "Contact", path: "/contact" },
    { title: "Blogs", path: "/blogs" },
    { title: "Categories", path: "/categories" },
    { title: "Dashboard", path: "/dashboard" },
    { title: "Posts", path: "/posts" },
    { title: "Meals", path: "/meals" },
    { title: "Gallery", path: "/gallery" },
  ];

  const handler = () => {
    router.push("/about");
  };

  if (pathName.includes("dashboard")) {
    return;
  }

  return (
    <nav className="bg-red-500 py-4 px-6 flex justify-between items-center">
      <h6 className="text-3xl">
        Next <span className="text-lime-300 font-bold">Hero</span>
      </h6>
      <ul className="flex justify-between items-center space-x-4 text-white">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className={`${pathName === link.path ? "text-lime-300" : ""}`}>
            {link.title}
          </Link>
        ))}
      </ul>
      <button onClick={handler} className="bg-white text-lime-300 p-4">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
