"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Image from "next/image";

export default function HomePage() {
  const cards = [
    {
      image: "/strength.jpg",
      quote: "She found her power not by shouting — but by sitting still and listening to her own soul.",
    },
    {
      image: "/light.jpg",
      quote: "The universe whispered not in sound, but in silence that shimmered through her soul.",
    },
    {
      image: "/📍Mt_ Machapuchhre (seen from Sarangkot, Pokhara) 🇳🇵.jpg",
      quote: "Where silence meets the sky and the soul stands still — strength rises like a mountain, and peace flows like a prayer.",
    },
    {
      image: "/fire.jpg",
      quote: "She meditates not to escape the fire, but to become one with its truth.",
    },
    {
      image: "/wave.jpg",
      quote: "In the glow of devotion, the soul finds its fire — steady, sacred, and infinite like the rising sun.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="bg-gradient-to-br from-[#f5f5f5] to-[#fdebd0] min-h-screen text-gray-800">
      <Navbar />

      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-purple-800"> Live Happy </h1>
        <p className="text-lg mt-4 text-gray-600">
          This space is just for you — to feel calm, focused, and strong.
        </p>
      </header>

      <main className="flex flex-col items-center px-4">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md transition-all duration-700 ease-in-out text-center overflow-hidden">
          <Image
            src={cards[index].image}
            alt="Motivational"
            width={320}
            height={384}
            className="rounded-xl mx-auto w-80 h-96 object-cover mb-4 min-w-80 min-h-96 max-w-80 max-h-96"
            style={{ width: '320px', height: '384px', objectFit: 'cover' }}
          />
          <p className="text-xl italic font-medium text-[#7b2cbf] h-20 overflow-y-auto px-2 whitespace-pre-line text-ellipsis">
            {cards[index].quote}
          </p>
        </div>
      </main>

      <About />
      <Footer />
    </div>
  );
}
