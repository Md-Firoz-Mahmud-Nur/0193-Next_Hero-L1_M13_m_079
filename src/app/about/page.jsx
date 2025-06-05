import AboutContents from "@/Components/AboutContents";
import React from "react";
import { Headland_One } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


const poppinsFont = Headland_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "About",
  description: "About Page",
  keywords: ["about", "next", "hero", "page", "us"],
};

const getTime = async () => {
const res = await fetch(`${process.env.BASE_URL}/time`, { cache: "no-store" });
  const data = await res.json();
  return data.currentTime;
};

const AboutPage = async () => {
  const session = await getServerSession(authOptions);
  console.log({ session });

  const currentTime = await getTime();

  return (
    <div className={`${poppinsFont.className} px-12 py-6`}>
      <h2>about page</h2>
      <br />
      <h3>Time: {currentTime}</h3>
      <br />
      <AboutContents></AboutContents>
    </div>
  );
};

export default AboutPage;
