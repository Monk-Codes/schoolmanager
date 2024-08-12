import Calendar from "react-calendar";
const Dashboard = () => {
 return (
  <section className="flex flex-1 h-fit justify-center bg-gradient-to-r from-blue-500 to-purple-500 relative ">
   {/* Animated Background Shapes */}
   <div className="absolute inset-0">
    <div className="absolute w-32 h-32 bg-white rounded-full opacity-10 top-1/4 left-1/3 transform animate-bounce"></div>
    <div className="absolute w-48 h-48 bg-white rounded-full opacity-20 bottom-1/4 right-1/3 transform animate-pulse"></div>
   </div>

   {/* Dashboard Content */}
   <div className="flex flex-col text-white p-4 w-full max-w-screen-lg cursor-pointer">
    {/* Header */}
    <div className="flex justify-between p-4 bg-amber-400 rounded-lg shadow-lg font-semibold">
     <span>Welcome to St. Elios Academy</span>
     <span>School Year 2024-2025</span>
    </div>

    {/* Info Tabs */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
     <div className="flex flex-col bg-red-400 text-center p-1 rounded-lg">
      <div className="p-1 bg-white text-blue-500 font-semibold rounded-full shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95">Schools</div>
      <span className="bg-red-500 p-1 mt-2 rounded-lg">23</span>
     </div>
     <div className="flex flex-col bg-red-400 text-center p-1 rounded-lg">
      <div className="p-1 bg-white text-blue-500 font-semibold rounded-full shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95">Teachers</div>
      <span className="bg-red-500 p-1 mt-2 rounded-lg">23</span>
     </div>
     <div className="flex flex-col bg-red-400 text-center p-1 rounded-lg">
      <div className="p-1 bg-white text-blue-500 font-semibold rounded-full shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95">Students</div>
      <span className="bg-red-500 p-1 mt-2 rounded-lg">23</span>
     </div>
     <div className="flex flex-col bg-red-400 text-center p-1 rounded-lg">
      <div className="p-1 bg-white text-blue-500 font-semibold rounded-full shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95">Staffs</div>
      <span className="bg-red-500 p-1 mt-2 rounded-lg">23</span>
     </div>
    </div>

    {/* Grid Tabs */}
    <div className="grid grid-cols-2 gap-2 mt-2 text-center">
     <div className="flex flex-col bg-slate-600 rounded-xl p-1">
      <div className="p-1 bg-white text-blue-500 font-semibold rounded-full">Calendar</div>
      <div>
       <Calendar />
      </div>
     </div>
     <div className="flex flex-col bg-slate-600 rounded-xl p-1">
      <div className="p-1 bg-white text-blue-500 font-semibold rounded-full">Educational Stage</div>
      <div className="grid grid-cols-3 gap-2 font-semibold p-2 text-center">
       <div>Grade 1</div>
       <div>Grade 2</div>
       <div>Grade 3</div>
       <div>Grade 4</div>
       <div>Grade 5</div>
       <div>Grade 6</div>
       <div>Grade 7</div>
       <div>Grade 8</div>
       <div>Grade 9</div>
       <div>Grade 10</div>
       <div>Grade 11</div>
       <div>Grade 12</div>
      </div>
     </div>
     <div className="flex flex-col bg-slate-600 rounded-xl p-1">
      <div className="p-1 bg-white text-blue-500 font-semibold rounded-full">Activity & Events</div>
      <div>List of events</div>
      <div>List of activities</div>
      <div>List of assignments</div>
      <div>List of exams</div>
      <div>List of quizzes</div>
      <div>List of tests</div>
     </div>
     <div className="flex flex-col bg-slate-600 rounded-xl p-1">
      <div className="p-1 bg-white text-blue-500 font-semibold rounded-full">Star Toppers</div>
      <div>Pic of students</div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Dashboard;
