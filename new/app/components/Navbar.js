"use client";

import { FaGithub, FaLinkedin, FaPinterest } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-end gap-6 p-4 text-2xl shadow-md">
      <FaGithub className="hover:text-pink-400 cursor-pointer" />
      <FaLinkedin className="hover:text-pink-400 cursor-pointer" />
      <FaPinterest className="hover:text-pink-400 cursor-pointer" />
    </nav>
  );
}
