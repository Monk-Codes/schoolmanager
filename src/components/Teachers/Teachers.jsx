import { useState } from "react";

const Teachers = () => {
 // Sample data for classrooms and students
 const [classroom, setClassroom] = useState({
  name: "Math Class",
  teacher: "Mr. Smith",
  students: [
   { id: 1, name: "John Doe", age: 16 },
   { id: 2, name: "Jane Smith", age: 15 },
   { id: 3, name: "Emily Johnson", age: 17 },
   { id: 1, name: "John Doe", age: 16 },
   { id: 2, name: "Jane Smith", age: 15 },
   { id: 3, name: "Emily Johnson", age: 17 },
   { id: 1, name: "John Doe", age: 16 },
   { id: 2, name: "Jane Smith", age: 15 },
   { id: 3, name: "Emily Johnson", age: 17 },
   { id: 1, name: "John Doe", age: 16 },
   { id: 2, name: "Jane Smith", age: 15 },
   { id: 3, name: "Emily Johnson", age: 17 },
  ],
  timetable: [
   { day: "Monday", startTime: "12:00 PM", endTime: "6:00 PM" },
   { day: "Wednesday", startTime: "12:00 PM", endTime: "6:00 PM" },
   { day: "Saturday", startTime: "12:00 PM", endTime: "4:00 PM" },
  ],
 });

 const handleDeleteStudent = (id) => {
  const updatedStudents = classroom.students.filter((student) => student.id !== id);
  setClassroom({ ...classroom, students: updatedStudents });
  console.log(`Student with id ${id} deleted!`);
 };

 const handleEditStudent = (id, newName, newAge) => {
  const updatedStudents = classroom.students.map((student) => (student.id === id ? { ...student, name: newName, age: newAge } : student));
  setClassroom({ ...classroom, students: updatedStudents });
  console.log(`Student with id ${id} updated!`);
 };

 return (
  <section className="flex flex-1 h-fit justify-center bg-gradient-to-r from-blue-500 to-green-500 relative">
   {/* Dashboard Content */}
   <div className="flex flex-col text-white p-4 w-full max-w-screen-lg">
    {/* Header */}
    <div className="flex justify-between p-4 bg-amber-400 rounded-lg shadow-lg font-semibold">
     <span>Welcome to Teacher&apos;s Dashboard</span>
     <span>School Year 2024-2025</span>
    </div>

    {/* Classroom Details */}
    <div className="p-4">
     <h3 className="text-lg font-semibold">Classroom Details:</h3>
     <p>
      <strong>Classroom Name:</strong> {classroom.name}
     </p>
     <p>
      <strong>Assigned Teacher:</strong> {classroom.teacher}
     </p>
     {/* Timetable */}
     <div className="mt-8">
      <h3 className="text-lg font-semibold">Classroom Timetable:</h3>
      <table className="w-full bg-white text-black rounded-lg">
       <thead>
        <tr className="bg-gray-200">
         <th className="p-2">Day</th>
         <th className="p-2">Start Time</th>
         <th className="p-2">End Time</th>
        </tr>
       </thead>
       <tbody>
        {classroom.timetable.map((session, index) => (
         <tr key={index} className="border-b">
          <td className="p-2 text-center">{session.day}</td>
          <td className="p-2 text-center">{session.startTime}</td>
          <td className="p-2 text-center">{session.endTime}</td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>

     {/* Students Table */}
     <div className="mt-8">
      <h3 className="text-lg font-semibold">Students in Classroom:</h3>
      <table className="w-full bg-blue-300 text-black rounded-lg">
       <thead>
        <tr className="bg-gray-200">
         <th className="p-2">ID</th>
         <th className="p-2">Name</th>
         <th className="p-2">Age</th>
         <th className="p-2">Actions</th>
        </tr>
       </thead>
       <tbody>
        {classroom.students.map((student) => (
         <tr key={student.id} className="">
          <td className="p-2 text-center">{student.id}</td>
          <td className="p-2 text-center">{student.name}</td>
          <td className="p-2 text-center">{student.age}</td>
          <td className="p-2 text-center">
           <button onClick={() => handleEditStudent(student.id, "New Name", student.age)} className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 mr-2">
            Edit
           </button>
           <button onClick={() => handleDeleteStudent(student.id)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
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
  </section>
 );
};

export default Teachers;
