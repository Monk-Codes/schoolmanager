import { useState } from "react";

const Login = ({ onLogin }) => {
 const [isRegistering, setIsRegistering] = useState(false);
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [rollNo, setRollNo] = useState(""); // For registration
 const [studentClass, setStudentClass] = useState(""); // For registration

 const handleLoginSubmit = (e) => {
  e.preventDefault();
  // Implement authentication logic here
  if (username && password) {
   onLogin();
  }
 };

 const handleRegisterSubmit = (e) => {
  e.preventDefault();
  if (rollNo && username && studentClass) {
   console.log("Student Registered:", { rollNo, username, studentClass });
  }
 };

 return (
  <section className="flex flex-1 h-full justify-center relative ">
   <div className="flex flex-col items-center justify-center">
    <div className="bg-blue-400 p-2 rounded-lg shadow-md text-sm w-full max-w-lg">
     <h2 className="text-sm font-bold mb-4">{isRegistering ? "Register Student" : "Login"}</h2>
     {isRegistering ? (
      <form onSubmit={handleRegisterSubmit}>
       <div className="mb-2">
        <label htmlFor="studentName" className="block text-gray-700 text-sm ">
         Student Name:
        </label>
        <input type="text" id="studentName" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 p-2 w-full outline-none rounded-md text-sm" placeholder="Enter name" required />
       </div>
       <div className="mb-2">
        <label htmlFor="rollNo" className="block text-gray-700 text-sm">
         Roll Number:
        </label>
        <input type="text" id="rollNo" value={rollNo} onChange={(e) => setRollNo(e.target.value)} className="mt-1 p-2 w-full outline-none rounded-md text-sm" placeholder="Enter roll number" required />
       </div>
       <div className="mb-2">
        <label htmlFor="studentClass" className="block text-gray-700 text-sm">
         Student Class:
        </label>
        <input type="text" id="studentClass" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} className="mt-1 p-2 w-full outline-none rounded-md text-sm" placeholder="Enter studentClass" required />
       </div>
       <div className="mb-2">
        <label htmlFor="rollNo" className="block text-gray-700 text-sm">
         Contact Number:
        </label>
        <input type="text" id="rollNo" value={rollNo} onChange={(e) => setRollNo(e.target.value)} className="mt-1 p-2 w-full outline-none rounded-md text-sm" placeholder="Enter roll number" required />
       </div>
       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
        Register
       </button>
       <p className="text-sm text-gray-600 mt-2">
        Already have an account?{" "}
        <button onClick={() => setIsRegistering(false)} className="text-blue-500 hover:text-blue-600">
         Login
        </button>
       </p>
      </form>
     ) : (
      <form onSubmit={handleLoginSubmit}>
       <div className="mb-2">
        <label htmlFor="username" className="block text-gray-700 text-sm">
         Username:
        </label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 p-2 w-full outline-none rounded-md text-sm" placeholder="Enter username" required />
       </div>
       <div className="mb-2">
        <label htmlFor="password" className="block text-gray-700 text-sm">
         Password:
        </label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 w-full outline-none rounded-md text-sm" placeholder="Enter password" required />
       </div>
       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
        Login
       </button>
       <p className="text-sm text-gray-600 mt-4">
        Don&apos;t have an account?{" "}
        <button onClick={() => setIsRegistering(true)} className="text-blue-500 hover:text-blue-600">
         Register
        </button>
       </p>
      </form>
     )}
    </div>
   </div>
  </section>
 );
};

export default Login;
