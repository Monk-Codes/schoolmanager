import { useState } from "react";

const Exams = () => {
 // Sample data for exams
 const [exams, setExams] = useState({
  "Grade 1": {
   "Section A": [
    { id: 1, subject: "Math", date: "2024-09-10", time: "9:00 AM" },
    { id: 2, subject: "English", date: "2024-09-12", time: "11:00 AM" },
   ],
   "Section B": [{ id: 3, subject: "Science", date: "2024-09-15", time: "10:00 AM" }],
  },
  "Grade 2": {
   "Section A": [{ id: 4, subject: "History", date: "2024-09-20", time: "1:00 PM" }],
  },
  // Add more grades and sections as needed
 });

 return (
  <section className="flex flex-1 h-fit justify-center bg-gradient-to-r from-blue-500 to-green-500 relative">
   {/* Dashboard Content */}
   <div className="flex flex-col text-white p-4 w-full max-w-screen-lg">
    {/* Header */}
    <div className="flex justify-between p-4 bg-amber-400 rounded-lg shadow-lg font-semibold">
     <span>Welcome to St. Elios Academy</span>
     <span>School Year 2024-2025</span>
    </div>

    {/* Exams List */}
    <div className="mt-4">
     <h2 className="text-xl font-bold mb-4">Exams Schedule</h2>
     {Object.keys(exams).map((grade) => (
      <div key={grade} className="mb-6">
       <h3 className="text-lg font-semibold">{grade}</h3>
       {Object.keys(exams[grade]).map((section) => (
        <div key={section} className="mb-4">
         <h4 className="text-md font-semibold">Section {section}</h4>
         <ul className="list-disc ml-4">
          {exams[grade][section].map((exam) => (
           <li key={exam.id} className="py-1">
            <strong>{exam.subject}</strong> - {exam.date} at {exam.time}
           </li>
          ))}
         </ul>
        </div>
       ))}
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default Exams;
