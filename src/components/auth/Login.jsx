import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images4.alphacoders.com/973/973967.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        <p className="text-lg text-white mb-6 text-center">
          Welcome back! Please log in to continue.
        </p>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-transparent text-white placeholder-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
            >
              <option value="" className="text-gray-300">
                Select Role
              </option>
              <option value="Employer" className="text-black">
                HR
              </option>
              <option value="Job Seeker" className="text-black">
                Job Seeker
              </option>
            </select>
          </div>
          <div>
            <input
              id="email"
              type="email"
              autoComplete="off"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-transparent text-white placeholder-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-transparent text-white placeholder-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-black">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-black hover:underline transition-all"
            >
              Forgot password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Login
            </button>
          </div>
          <div className="text-center mt-6">
            <Link
              to="/register"
              className="text-white hover:underline font-medium transition-all duration-300 transform hover:scale-105"
            >
              Don't have an account? Register now
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;


// import React, { useContext, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Context } from "../../main";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   const { isAuthorized, setIsAuthorized } = useContext(Context);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/user/login",
//         { email, password, role },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       setEmail("");
//       setPassword("");
//       setRole("");
//       setIsAuthorized(true);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   if(isAuthorized){
//     return <Navigate to={'/'}/>
//   }
  
//   return (
//     <>
//       <section className="min-h-screen py-20">
//         <div className="container mx-auto">
//           <div className="flex flex-col lg:flex-row w-8/12  bg-indigo-50 rounded-xl mx-auto shadow-lg overflow-hidden">
//           <div className=" w-full  lg:w-1/2">
//           <img src="/image/login.jpg" alt="" className=" h-full "  />
//           </div>
//             <div className="w-full py-6 mt-10 mb-10  px-12  lg:w-1/2">
//               <h2 className="text-3xl mb-4 text-blue-950">Login</h2>
//               <p className="mb-4">
//               Welcome to your professional community
//               </p>
//               <form >
//                 <div className="gap-5">
//                   <select
//                     id="role"
//                     value={role}
//                     onChange={(e) => setRole(e.target.value)}
//                     className="border py-1 px-2 w-full bg-indigo-50 rounded-lg"
//                   >
//                     <option value="">Select Role</option>
//                     <option value="Employer">Employer</option>
//                     <option value="Job Seeker">Job Seeker</option>
//                   </select>
//                 </div>
//                 <div className="mt-5">
//                   <input
//                     id="email"
//                     type="email"
//                     autoComplete="off"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="border border-gray-400 py-1 px-2 w-full rounded-lg"
//                   />
//                 </div>
//                 <div className="mt-5">
//                   <input
//                     id="password"
//                     type="password"
//                     autoComplete="off"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="border border-gray-400 py-1 px-2 w-full rounded-lg"
//                   />
//                 </div>
//                 <div className="mt-5">
//                   <button
//                     type="submit"
//                     onClick={handleLogin}
//                     className="w-full border rounded-lg  bg-blue-950 py-3 text-center text-white"
//                   >
//                     Login
//                   </button>
//                 </div>
//                 <div className="mt-5 flex flex-col items-center">
//                   <Link
//                     to={"/register"}
//                     className="w-full py-3 text-center border rounded-lg bg-blue-950 text-white"
//                   >
//                     Register Now
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;
