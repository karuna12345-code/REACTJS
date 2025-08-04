import React  from "react";


const Index=()=>{
    const students = [
    { id: 1, name: "Sima Limbu", address: "Kathmandu", faculty: "Computer Science" },
    { id: 2, name: "Aarav Shrestha", address: "Pokhara", faculty: "Management" },
    { id: 3, name: "Nisha Rai", address: "Biratnagar", faculty: "Engineering" },
  ];
    return(
        <>
        <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Records</h1>

        <div className="bg-white shadow-md rounded-2xl overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Address</th>
                <th className="px-6 py-4">Faculty</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{student.id}</td>
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4">{student.address}</td>
                  <td className="px-6 py-4">{student.faculty}</td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
    
    )
}
export default Index