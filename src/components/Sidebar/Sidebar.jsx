import { useState } from "react";

const Sidebar = () => {
 const [activeLink, setActiveLink] = useState("#dashboard");

 return (
  <aside className="bg-blue-400 shadow-md w-56  flex flex-col ">
   {/* Top Section: Logo */}
   <div className="flex flex-col items-center py-2">
    <div className="text-white font-bold text-xl mb-4">St.Elios Academy</div>

    {/* Search Bar */}
    <div className="w-full px-4 mb-4">
     <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white" />
    </div>
   </div>

   {/* Middle Section: Links */}
   <div className="flex flex-col space-y-2 px-2">
    <a href="#dashboard" onClick={() => setActiveLink("#dashboard")} className={`text-white py-2 rounded-md text-center ${activeLink === "#dashboard" ? "bg-blue-500" : "hover:bg-blue-500"}`}>
     Dashboard
    </a>
    <a href="#students" onClick={() => setActiveLink("#students")} className={`text-white py-2 rounded-md text-center ${activeLink === "#students" ? "bg-blue-500" : "hover:bg-blue-500"}`}>
     Students
    </a>
    <a href="#teachers" onClick={() => setActiveLink("#teachers")} className={`text-white py-2 rounded-md text-center ${activeLink === "#teachers" ? "bg-blue-500" : "hover:bg-blue-500"}`}>
     Teachers
    </a>
    <a href="#parents" onClick={() => setActiveLink("#parents")} className={`text-white py-2 rounded-md text-center ${activeLink === "#parents" ? "bg-blue-500" : "hover:bg-blue-500"}`}>
     Parents
    </a>
    <a href="#events" onClick={() => setActiveLink("#events")} className={`text-white py-2 rounded-md text-center ${activeLink === "#events" ? "bg-blue-500" : "hover:bg-blue-500"}`}>
     Events
    </a>
    <a href="#exams" onClick={() => setActiveLink("#exams")} className={`text-white py-2 rounded-md text-center ${activeLink === "#exams" ? "bg-blue-500" : "hover:bg-blue-500"}`}>
     Exams
    </a>
   </div>
  </aside>
 );
};

export default Sidebar;
