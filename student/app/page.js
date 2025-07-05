
'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import StudentTable from './components/StudentTable';
import Footer from './components/Footer';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <button
          onClick={() => setIsLoggedIn(true)}
          className="bg-White-700 text-white px-6 py-3 rounded-lg hover:bg-Purple-800 text-xl"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <About />
      <StudentTable />
      <Footer />
    </>
  );
}
