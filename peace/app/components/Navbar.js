import { FaGithub, FaPinterest, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'black', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ color: '#fff', margin: 0 }}>Pallavi's Gallery</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub color="white" size={24} /></a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest color="white" size={24} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin color="white" size={24} /></a>
      </div>
    </nav>
  );
}
