"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

interface User {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">Sign Up</h1>
      <hr />

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
        onClick={onLogin}
        className="p-2 border  border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login
      </button>
      <Link href="/signup">Not Registered ? Sign Up</Link>
    </div>
  );
};

export default LoginPage;
