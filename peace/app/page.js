'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // For image rotation

  const galleryData = [
    { title: 'Are we really', img: '/art  starry naight 🎨.jpg', created: 'HAPPY' },
    { title: 'Peace exist in', img: '/download (2).jpg', created: 'LIFE' },
    { title: 'Do we know the real meaning of', img: '/download (1).jpg', created: 'LOVE' },
    { title: 'Ever loved', img: '/download.jpg', created: 'YOURSELF' },
    { title: 'Do you think of', img: '/rain rain go away.jpg', created: 'PEACE' },
  ];
  useEffect(() => {
    if (!isLoggedIn) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isLoggedIn]);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#000', minHeight: '100vh' }}>
      <Navbar />

      <main style={{ padding: '30px' }}>
        {!isLoggedIn ? (
          <div style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '60px',
            textAlign: 'center',
            height: 'calc(100vh - 100px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px'
          }}>
            <h1>Welcome to Pallavi’s World</h1>
            <p>Step into a world of peace, power, and positivity.</p>

            {/* Login Button Box */}
            <div style={{
              backgroundColor: 'white',
              padding: '15px 30px',
              borderRadius: '10px',
              marginTop: '30px',
              display: 'inline-block',
              boxShadow: '0 4px 8px rgba(255,255,255,0.2)'
            }}>
              <button
                onClick={() => setIsLoggedIn(true)}
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  padding: '10px 25px',
                  border: 'none',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
              >
                Login
              </button>
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', color: 'white' }}>
            <h1>Hello to Pallavi’s World</h1>
            <p>Here's your personal journey through peace and beauty.</p>

            {/* Rotating Image Section */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
              paddingBottom: '20px'
            }}>
              <div style={{
                backgroundColor: '#1a1a1a',
                padding: '10px',
                borderRadius: '10px',
                width: '400px', // Image box width
                boxShadow: '0 2px 10px rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <img
                  src={galleryData[currentIndex].img}
                  alt={galleryData[currentIndex].title}
                  style={{
                    width: '100%',
                    height: '500px', // Image height
                    objectFit: 'cover',
                    borderRadius: '6px'
                  }}
                />
                <h3 style={{ margin: '10px 0 5px', color: 'white', fontSize: '1rem' }}>
                  {galleryData[currentIndex].title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.8em', color: '#ccc' }}>
                  Created: {galleryData[currentIndex].created}
                </p>
              </div>
            </div>

            {/* About Section */}
            <div style={{ backgroundColor: '#000', color: 'white', padding: '40px', marginTop: '40px', borderRadius: '10px' }}>
              <About />
            </div>
          </div>
        )}
      </main>

      {/* Footer Section */}
      <div style={{ backgroundColor: '#000', color: 'white' }}>
        <Footer />
      </div>
    </div>
  );
}
