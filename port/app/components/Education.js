import React from 'react';

export default function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-purple-800 text-center">Education</h2>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-xl shadow">
          <h3 className="font-bold">B.Tech in CSE</h3>
          <p className="text-sm text-gray-600">LPU University | 2023–2027</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <h3 className="font-bold">12th Grade</h3>
          <p className="text-sm text-gray-600">St.Joesph's Convent School | 2008–2023</p>
        </div>
      </div>
    </section>
  );
}
