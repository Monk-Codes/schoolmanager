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
  <div className="bg-black h-screen items-center justify-center flex p-12">
   <div className="w-full h-full rounded-2xl flex ">
    <Sidebar setActiveSection={setActiveSection} />
    <div className="overflow-y-scroll">
     {activeSection === "dashboard" && <Dashboard />}
     {activeSection === "students" && <Students />}
     {activeSection === "teachers" && <Teachers />}
     {activeSection === "parents" && <Parents />}
     {activeSection === "events" && <Events />}
     {activeSection === "exams" && <Exams />}
    </div>
   </div>
  </div>
 );
}

export default App;
