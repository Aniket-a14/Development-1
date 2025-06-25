// app/components/Navbar.js
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 text-black flex justify-between items-center p-6 shadow-md">
      <div className="text-2xl font-semibold">Pallavi Gallery </div>
      <ul className="flex gap-6 items-center text-gray-700">
        <li className="font-medium border-b-2 border-black">Work</li>
       
        <li className="hover:border-b-2 hover:border-gray-500">Contact</li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-600" />
          </a>
        </li>
        <li>
          <a href="https://github.com/pallavithakur06/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-black" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-600" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
