export default function About() {
  return (
    <section id="about" className="p-10 bg-white text-gray-900">
      <h2 className="text-3xl font-semibold mb-10 text-center">About Me</h2>

      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        {}
        <img
          src="/mastt.png"  
          alt="Profile"
          className="w-48 h-48 object-cover shadow-md mb-6"
        />

        {}
        <p className="text-lg mb-4">
          Hi! I'm Pallavi, a dedicated software developer with a passion for crafting efficient and user-friendly web applications.
        </p>
        <p className="text-lg">
          With experience in modern JavaScript frameworks and a keen eye for design, I enjoy transforming ideas into impactful digital solutions. I love learning new technologies, collaborating with creative teams, and building products that make a difference.
        </p>
      </div>
    </section>
  );
}
