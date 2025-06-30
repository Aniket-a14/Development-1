"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // ✅ Correct Next.js Image component
import Navbar from "@/app/components/Navbar";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/Calm Lord Shiv Painting.jpg",
    "/download (1).jpg",
    "/download (2).jpg",
    "/download (3).jpg",
    "/download.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-pink-50 min-h-screen text-gray-800 font-sans">
      <Navbar />
      <About />

      <section className="flex justify-center items-center py-10 px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-md text-center border border-pink-200">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Dear Mom</h2>
          <p className="text-gray-600 mb-4">
            Every heartbeat of mine carries your love. You are not just my mother,
            you're my home, my strength, and my forever blessing. I love you more
            than words can ever say.
          </p>
          <Image
            src={images[currentImage]}
            alt="Mom Memory"
            width={400}
            height={500}
            className="rounded-xl mx-auto"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
