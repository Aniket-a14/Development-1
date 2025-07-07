import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-purple-800 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-bold">Food Allergy Checker</h3>
          <p className="text-sm text-gray-600">It detect the things of food.</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-bold">Good Touch And Bad Touch</h3>
          <p className="text-sm text-gray-600">Helps People!!</p>
        </div>
      </div>
    </section>
  );
}
