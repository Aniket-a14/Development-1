
import { FaGithub, FaLinkedin, FaPinterest } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>

      <div className="flex gap-6 text-2xl">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.pinterest.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaPinterest />
        </a>
      </div>
    </nav>
  );
}
