export default function Navbar() {
  return (
    <nav className="bg-[#5e548e] text-white p-4 flex justify-center gap-8 shadow-lg">
      <a href="#" className="hover:text-pink-300 transition">Home</a>
      <a href="#about" className="hover:text-pink-300 transition">About</a>
      <a href="#footer" className="hover:text-pink-300 transition">Contact</a>
    </nav>
  );
}
