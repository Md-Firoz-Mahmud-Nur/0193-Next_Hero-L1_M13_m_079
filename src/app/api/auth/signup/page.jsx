"use client";
import React from "react";

const Page = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      image: e.target.image.value,
      type: e.target.type.value,
      password: e.target.password.value,
    };

    const resp = await fetch("http://localhost:3000/api/auth/signup/new-user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    e.target.reset();
    console.log(resp);
  };

  return (
    <div className="flex items-center justify-center pt-24">
      <div>
        <h6 className="text-lg font-semibold">
          Sign Up with Email and Password
        </h6>

        <div>
          <form onSubmit={handleRegister} action="">
            <label htmlFor="name"> Name </label> <br />
            <input
              type="text"
              name="name"
              placeholder="your full name"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br /> <br />
            <label htmlFor="email"> Email </label> <br />
            <input
              type="text"
              name="email"
              placeholder="your email"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br /> <br />
            <label htmlFor="password"> Password </label> <br />
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <label htmlFor="image"> Image </label> <br />
            <input
              type="text"
              name="image"
              placeholder="your image"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <label htmlFor="type"> Type </label> <br />
            <select
              name="type"
              placeholder="user type"
              className="outline-none border-transparent p-3 text-slate-700">
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="member">Member</option>
            </select>
            <br />
            <button className="bg-orange-500 p-3">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
