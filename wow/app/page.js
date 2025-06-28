
"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());
  }, []);

  const handleRefresh = () => {
    setDate(new Date());
  };

  const formattedDate = date.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Today's Day</h1>
        <p className="text-xl mb-4">Date: {formattedDate}</p>
        <button
          onClick={handleRefresh}
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Refresh Date
        </button>
      </header>
    </div>
  );
}
