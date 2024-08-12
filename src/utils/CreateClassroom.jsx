import { useState } from "react";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const CreateClassroom = ({ onCreate }) => {
 const [className, setClassName] = useState("");
 const [assignTeacher, setAssignTeacher] = useState("");
 const [schedule, setSchedule] = useState(
  daysOfWeek.reduce((acc, day) => {
   acc[day] = { startTime: "", endTime: "", active: false };
   return acc;
  }, {})
 );

 const handleScheduleChange = (day, field, value) => {
  setSchedule({
   ...schedule,
   [day]: {
    ...schedule[day],
    [field]: value,
   },
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (className.trim()) {
   onCreate(className, assignTeacher, schedule);
   setClassName("");
   setAssignTeacher("");
   setSchedule(
    daysOfWeek.reduce((acc, day) => {
     acc[day] = { startTime: "", endTime: "", active: false };
     return acc;
    }, {})
   );
  } else {
   alert("Please enter a classroom name.");
  }
 };

 return (
  <div className="bg-yellow-300 p-6 rounded-lg shadow-md w-full max-w-md mx-auto z-30">
   <h2 className="text-xl font-bold mb-4">Create Classroom</h2>
   <form onSubmit={handleSubmit}>
    <div className="mb-4">
     <label htmlFor="className" className="block text-gray-700">
      Classroom Name:
     </label>
     <input type="text" id="className" value={className} onChange={(e) => setClassName(e.target.value)} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" placeholder="Enter classroom name" />
    </div>
    <div className="mb-4">
     <label htmlFor="assignTeacher" className="block text-gray-700">
      Assign Teacher:
     </label>
     <input
      type="text"
      id="assignTeacher"
      value={assignTeacher}
      onChange={(e) => setAssignTeacher(e.target.value)}
      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      placeholder="Enter Teacher name"
     />
    </div>
    <div className="mb-4">
     <h3 className="text-gray-700 mb-2">Classroom Schedule:</h3>
     {daysOfWeek.map((day) => (
      <div key={day} className="mb-2">
       <label className="block text-gray-700">
        <input type="checkbox" checked={schedule[day].active} onChange={(e) => handleScheduleChange(day, "active", e.target.checked)} className="mr-2" />
        {day}
       </label>
       {schedule[day].active && (
        <div className="flex space-x-2 mt-2">
         <input type="time" value={schedule[day].startTime} onChange={(e) => handleScheduleChange(day, "startTime", e.target.value)} className="p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
         <input type="time" value={schedule[day].endTime} onChange={(e) => handleScheduleChange(day, "endTime", e.target.value)} className="p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
        </div>
       )}
      </div>
     ))}
    </div>
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
     Create Classroom
    </button>
   </form>
  </div>
 );
};

export default CreateClassroom;
