import { useState } from "react";
import CreateClassroom from "../../utils/CreateClassroom";

const Principal = () => {
 const [classrooms, setClassrooms] = useState([]);

 const handleCreateClassroom = (newClassroomName, assignedTeacher, schedule) => {
  // Add the new classroom with its assigned teacher to the classrooms array
  setClassrooms([...classrooms, { name: newClassroomName, assignTeacher: assignedTeacher, schedule }]);
  console.log(`Classroom "${newClassroomName}" created and assigned to teacher "${assignedTeacher}"!`);
 };

 const handleDeleteClassroom = (indexToDelete) => {
  // Remove the classroom at the specified index
  const updatedClassrooms = classrooms.filter((_, index) => index !== indexToDelete);
  setClassrooms(updatedClassrooms);
  console.log(`Classroom at index ${indexToDelete} deleted!`);
 };

 return (
  <section className="flex flex-1 h-fit justify-center bg-gradient-to-r from-blue-500 to-green-500 relative ">
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
      <ul className="list-disc ml-2 p-2 bg-blue-800 rounded-md">
       {classrooms.map((classroom, index) => (
        <li key={index} className="flex justify-between items-center border-b-2">
         <div>
          <strong>Classroom Name:</strong> {classroom.name} <br />
          <strong>Assigned Teacher:</strong> {classroom.assignTeacher} <br />
          <strong>Schedule:</strong>
          <ul className="list-none ml-4 mt-2">
           {Object.entries(classroom.schedule).map(
            ([day, { startTime, endTime, active }]) =>
             active && (
              <li key={day}>
               <strong>{day}:</strong> {startTime} - {endTime}
              </li>
             )
           )}
          </ul>
         </div>
         <button onClick={() => handleDeleteClassroom(index)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-4">
          Delete
         </button>
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
