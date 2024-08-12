import { useState } from "react";

const CreateClassroom = ({ onCreate }) => {
 const [className, setClassName] = useState("");
 const [assignTeacher, setAssignTeacher] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  if (className.trim()) {
   onCreate(className, assignTeacher);
   setClassName("");
   setAssignTeacher("");
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
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
     Create Classroom
    </button>
   </form>
   <p className="text-sm text-gray-600 mt-4">
    Already have a classroom?{" "}
    <a href="#" className="text-blue-500 hover:text-blue-600">
     Login
    </a>
   </p>
  </div>
 );
};

export default CreateClassroom;
