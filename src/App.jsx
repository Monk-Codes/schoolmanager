import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/Students/Students";
import Teachers from "./components/Teachers/Teachers";
import Principal from "./components/Principal/Principal";
import Events from "./components/Events/Events";
import Exams from "./components/Exams/Exams";

function App() {
 const [activeSection, setActiveSection] = useState("dashboard");

 return (
  <div className="bg-black h-screen items-center justify-center flex  p-12">
   <div className="w-full h-full rounded-xl flex ">
    <Sidebar setActiveSection={setActiveSection} />
    <div className=" flex flex-1 overflow-y-scroll">
     {activeSection === "dashboard" && <Dashboard />}
     {activeSection === "students" && <Students />}
     {activeSection === "teachers" && <Teachers />}
     {activeSection === "principal" && <Principal />}
     {activeSection === "events" && <Events />}
     {activeSection === "exams" && <Exams />}
    </div>
   </div>
  </div>
 );
}

export default App;
