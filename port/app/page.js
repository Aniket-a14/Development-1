import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#f4f4f5", color: "#1a1a1a" }}>
      <Navbar />
      <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <About />
        <Projects />
        <Education />
      </div>
      <Footer />
    </div>
  );
}
