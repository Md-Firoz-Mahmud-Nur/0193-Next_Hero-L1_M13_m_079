import { NextResponse } from "next/server";

const coo = "next-superhero";

export const middleware = (request) => {
  console.log(request.cookies.get("token")?.value);
  const cookies = request.cookies.get("token");

  if (!cookies || cookies.value !== coo) {
    return NextResponse.redirect(new URL("/about", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/service"],
};
