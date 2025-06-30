"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [image, setImage] = useState("");

  const images = [
    "/download (1).jpg",
    "/download (3).jpg",
    "/download.jpg",
    "/pic1.jpg",
    "/download (2).jpg",
  ];

  useEffect(() => {
    setImage(images[currentIndex]);
  }, [currentIndex]);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      <main className="flex-grow p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Hello Everyone Click me!!</h1>

        {image && (
          <img
            src={image}
            alt="Random view"
            onClick={handleClick}
            className="mx-auto rounded shadow-lg cursor-pointer transition-transform hover:scale-105 w-[400px] h-[500px] object-cover"
          />
        )}

        <p className="mt-4 text-gray-600"> </p>

        <About />
      </main>

      <Footer />
    </div>
  );
}
