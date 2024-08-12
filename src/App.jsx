import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/Students/Students";
import Teachers from "./components/Teachers/Teachers";
import Principal from "./components/Principal/Principal";
import Events from "./components/Events/Events";
import Exams from "./components/Exams/Exams";
import Login from "./components/Login/Login";
function App() {
 // State to manage login status
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [activeSection, setActiveSection] = useState("dashboard");

 // Handle login logic
 const handleLogin = () => {
  // Implement actual login logic here
  setIsLoggedIn(true);
 };

 // Handle logout logic
 const handleLogout = () => {
  setIsLoggedIn(false);
 };
 //  handleLogout();

 return (
  <div className="bg-blue-500 h-screen items-center justify-center flex p-16">
   <div className="w-full h-full flex">
    {!isLoggedIn ? (
     <Login onLogin={handleLogin} />
    ) : (
     <>
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex flex-1 overflow-y-scroll no-scrollbar">
       {activeSection === "dashboard" && <Dashboard />}
       {activeSection === "students" && <Students />}
       {activeSection === "teachers" && <Teachers />}
       {activeSection === "principal" && <Principal />}
       {activeSection === "events" && <Events />}
       {activeSection === "exams" && <Exams />}
      </div>
     </>
    )}
   </div>
  </div>
 );
}

export default App;
