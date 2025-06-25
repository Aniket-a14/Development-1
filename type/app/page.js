// app/page.js
import Navbar from './components/Navbar';
import About from './components/About';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
    </main>
  );
}
