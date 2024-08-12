import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/Students/Students";
import Teachers from "./components/Teachers/Teachers";
import Parents from "./components/Parents/Parents";
import Events from "./components/Events/Events";
import Exams from "./components/Exams/Exams";

function App() {
 const [activeSection, setActiveSection] = useState("dashboard");

 return (
  <div className="bg-black h-screen flex">
   <Sidebar setActiveSection={setActiveSection} />
   <div className="flex flex-1 items-center px-4">
    {activeSection === "dashboard" && <Dashboard />}
    {activeSection === "students" && <Students />}
    {activeSection === "teachers" && <Teachers />}
    {activeSection === "parents" && <Parents />}
    {activeSection === "events" && <Events />}
    {activeSection === "exams" && <Exams />}
   </div>
  </div>
 );
}

export default App;
