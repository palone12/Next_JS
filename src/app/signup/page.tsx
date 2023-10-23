"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

interface User {
  email: string;
  password: string;
  username: string;
}

const SignUpPage: React.FC = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    username: "",
  });

  const onSignUp = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">Sign Up</h1>
      <hr />
      <label htmlFor="username"> Username</label>
      <input
        className="p-4  text-black border-gray-300 rounded-lg mb-4 focus-outline-none focus:border-gray-600"
        id="username"
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="email"> Email</label>
      <input
        className="p-4  text-black border-gray-300 rounded-lg mb-4 focus-outline-none focus:border-gray-600"
        id="email"
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password"> Password</label>
      <input
        className="p-4 text-black border-gray-300 rounded-lg mb-4 focus-outline-none focus:border-gray-600"
        id="password"
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={onSignUp}
        className="p-2 border  border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Sign Up
      </button>
      <Link href="/login">Already User ? Login</Link>
    </div>
  );
};

export default SignUpPage;
