import { useState } from "react";
import CreateClassroom from "../../utils/CreateClassroom";

const Principal = () => {
 const [classrooms, setClassrooms] = useState([]);

 const handleCreateClassroom = (newClassroomName, assignedTeacher) => {
  // Add the new classroom with its assigned teacher to the classrooms array
  setClassrooms([...classrooms, { name: newClassroomName, assignTeacher: assignedTeacher }]);
  console.log(`Classroom "${newClassroomName}" created and assigned to teacher "${assignedTeacher}"!`);
 };

 return (
  <section className="flex flex-1 justify-center bg-gradient-to-r from-blue-500 to-green-500 relative">
   {/* Dashboard Content */}
   <div className="flex flex-col text-white p-4 w-full max-w-screen-lg">
    {/* Header */}
    <div className="flex justify-between p-4 bg-amber-400 rounded-lg shadow-lg font-semibold">
     <span>Welcome to Principal Dashboard</span>
     <span>School Year 2024-2025</span>
    </div>

    {/* Create Classroom */}
    <div className="p-4">
     <CreateClassroom onCreate={handleCreateClassroom} />
     <div className="mt-8">
      <h3 className="text-lg font-semibold">Existing Classrooms:</h3>
      <ul className="list-disc ml-4">
       {classrooms.map((classroom, index) => (
        <li key={index}>
         <strong>Classroom Name:</strong> {classroom.name} <br />
         <strong>Assigned Teacher:</strong> {classroom.assignTeacher}
        </li>
       ))}
      </ul>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Principal;
