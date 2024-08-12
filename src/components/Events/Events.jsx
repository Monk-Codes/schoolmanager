import { useState } from "react";

const Events = () => {
 // Sample data for events
 const [events, setEvents] = useState([
  { id: 1, title: "School Assembly", date: "2024-09-15", time: "10:00 AM" },
  { id: 2, title: "Parent-Teacher Meeting", date: "2024-09-20", time: "2:00 PM" },
  { id: 3, title: "Science Fair", date: "2024-10-05", time: "9:00 AM" },
  { id: 4, title: "Sports Day", date: "2024-10-15", time: "1:00 PM" },
  { id: 5, title: "Winter Concert", date: "2024-12-12", time: "6:00 PM" },
 ]);

 return (
  <section className="flex flex-1 h-full justify-center bg-gradient-to-r from-blue-500 to-green-500 relative">
   {/* Dashboard Content */}
   <div className="flex flex-col text-white p-4 w-full max-w-screen-lg">
    {/* Header */}
    <div className="flex justify-between p-4 bg-amber-400 rounded-lg shadow-lg font-semibold">
     <span>Welcome to St. Elios Academy</span>
     <span>School Year 2024-2025</span>
    </div>

    <div className="flex flex-col bg-slate-600 rounded-xl p-1 m-2">
     <div className="p-1 bg-white text-blue-500 font-semibold rounded-full">Activity & Events</div>
     <div className="mt-2">
      <h4 className="font-semibold text-lg">Upcoming Events:</h4>
      <ul className="list-disc ml-4">
       {events.map((event) => (
        <li key={event.id} className="py-1">
         <strong>{event.title}</strong> - {event.date} at {event.time}
        </li>
       ))}
      </ul>
     </div>
    </div>
    <div className="flex flex-col bg-slate-600 rounded-xl p-1">
     <div className="p-1 bg-white text-blue-500 font-semibold rounded-full">Events Teams</div>
     <div className="mt-2">
      {/* Placeholder for student pictures */}
      <p>Pictures of top-performing students will be displayed here.</p>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Events;
