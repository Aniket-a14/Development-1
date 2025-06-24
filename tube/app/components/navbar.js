// src/components/Navbar.js
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="flex gap-6 text-xl">
        <a href="https://github.com/pallavithakur06/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-gray-400" />
        </a>
        <a href="mailto:rajputpallu786@gmail.com">
          <SiGmail className="hover:text-gray-400" />
        </a>
      </div>
    </nav>
  );
}
