import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
 return (
  <div className="bg-black h-screen flex items-center justify-center p-12">
   <div className="w-full h-full rounded-2xl flex overflow-hidden">
    <Sidebar />
    <Dashboard />
   </div>
  </div>
 );
}

export default App;
