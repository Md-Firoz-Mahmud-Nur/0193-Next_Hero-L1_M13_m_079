"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log({ session });
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
    router.push("/api/auth/signin");
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

      <div>
        {session.status !== "authenticated" && (
          <Link href={"/api/auth/signup"}>
            <button className="mr-3 bg-white text-orange-600 font-semibold px-6 py-3 hover:bg-slate-300">
              Sign Up
            </button>
          </Link>
        )}
        {session.status !== "authenticated" ? (
          <button
            onClick={handler}
            className="bg-white text-orange-600 font-semibold px-6 py-3 hover:bg-slate-300">
            Login
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="bg-white text-orange-600 font-semibold px-6 py-3 hover:bg-slate-300">
            Logout
          </button>
        )}
      </div>
      {session.data?.user?.image && (
        <div className="pl-2 flex">
          <Image
            src={session.data?.user?.image}
            width={30}
            height={20}
            alt="session.data?.user?.name"></Image>
          <h6>
            {session.data?.user?.name}
            <br />
            {session.data?.user?.type}
          </h6>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
