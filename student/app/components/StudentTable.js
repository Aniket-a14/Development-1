export default function StudentTable() {
  const students = [
    { name: 'Aarav', age: 18, tenth: 92, twelfth: 88, cgpa: 8.9 },
    { name: 'Isha', age: 19, tenth: 87, twelfth: 91, cgpa: 9.2 },
    { name: 'Rohan', age: 20, tenth: 75, twelfth: 82, cgpa: 7.8 },
    { name: 'Sanya', age: 18, tenth: 93, twelfth: 95, cgpa: 9.7 },
    { name: 'Dev', age: 21, tenth: 66, twelfth: 72, cgpa: 6.5 },
    { name: 'Kriti', age: 19, tenth: 85, twelfth: 89, cgpa: 8.6 },
    { name: 'Yash', age: 20, tenth: 70, twelfth: 75, cgpa: 7.0 },
    { name: 'Ananya', age: 22, tenth: 95, twelfth: 97, cgpa: 9.8 },
    { name: 'Kabir', age: 19, tenth: 80, twelfth: 78, cgpa: 8.0 },
    { name: 'Meera', age: 18, tenth: 90, twelfth: 92, cgpa: 9.1 },
  ];

  return (
    <section className="p-6 bg-black text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Student Records</h2>
      <table className="w-full border border-gray-600 text-center">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-600 px-4 py-2">Name</th>
            <th className="border border-gray-600 px-4 py-2">Age</th>
            <th className="border border-gray-600 px-4 py-2">10th Marks</th>
            <th className="border border-gray-600 px-4 py-2">12th Marks</th>
            <th className="border border-gray-600 px-4 py-2">CGPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index} className="hover:bg-gray-900">
              <td className="border border-gray-600 px-4 py-2">{s.name}</td>
              <td className="border border-gray-600 px-4 py-2">{s.age}</td>
              <td className="border border-gray-600 px-4 py-2">{s.tenth}</td>
              <td className="border border-gray-600 px-4 py-2">{s.twelfth}</td>
              <td className="border border-gray-600 px-4 py-2">{s.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
