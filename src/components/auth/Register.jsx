import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
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
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Create Your Account
        </h2>
        <p className="text-lg text-white mb-6 text-center">
          Join us and get started with your journey!
        </p>
        <form autoComplete="off" onSubmit={handleRegister} className="space-y-5">
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
              id="name"
              type="text"
              autoComplete="off"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-transparent text-white placeholder-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
            />
          </div>
          <div>
            <input
              id="phone"
              type="number"
              autoComplete="off"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-transparent text-white placeholder-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
            />
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
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </button>
          </div>
          <div className="text-center mt-6">
            <Link
              to="/login"
              className="text-white hover:underline font-medium transition-all duration-300 transform hover:scale-105"
            >
              Already have an account? Login here
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;


// import React, { useContext, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Context } from "../../main";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/user/register",
//         { name, phone, email, role, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       setName("");
//       setEmail("");
//       setPassword("");
//       setPhone("");
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
//     <div className="min-h-screen py-20">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row w-8/12 bg-indigo-50 rounded-xl mx-auto shadow-lg overflow-hidden">
//         <div className=" w-full lg:w-1/2  ">
//           <img src="/image/signup.jpg" alt="" className=" h-full " />
//           </div>
//             <div className="w-full mt-10 mb-10 px-12  lg:w-1/2">
//             <h2 className="text-3xl mb-4 text-blue-950">Register</h2>
//             <p className="mb-4">
//               Create your account. It’s free and only takes a minute.
//             </p>
//             <form autoComplete="off" onSubmit={handleRegister} >
//               <div className="gap-5">
//                 <select
//                   id="role"
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                   className="border py-1 px-2 w-full bg-indigo-50 rounded-lg"
//                 >
//                   <option value="">Select Role</option>
//                   <option value="Employer">Employer</option>
//                   <option value="Job Seeker">Job Seeker</option>
//                 </select>
//               </div>
//               <div className="mt-5">
//                 <input
//                   id="name"
//                   autoComplete="off"
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="border border-gray-400 bg-indigo-50 py-1 px-2 w-full rounded-lg"
//                 />
//               </div>
//               <div className="mt-5">
//                 <input
//                   id="phone"
//                   type="number"
//                   autoComplete="off"
//                   placeholder="Phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="border border-gray-400 bg-indigo-50 py-1 px-2 w-full rounded-lg"
//                 />
//               </div>
//               <div className="mt-5">
//                 <input
//                   id="email"
//                   type="email"
//                   autoComplete="off"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="border border-gray-400 py-1 px-2 w-full rounded-lg"
//                 />
//               </div>
//               <div className="mt-5">
//                 <input
//                   id="password"
//                   type="password"
//                   autoComplete="off"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="border border-gray-400 py-1 px-2 w-full rounded-lg"
//                 />
//               </div>
//               <div className="mt-5">
//                 <button
//                   type="submit"
//                   className="w-full border  bg-blue-950 py-3 text-center text-white rounded-lg"
//                 >
//                   Register Now
//                 </button>
//               </div>
//               <div className="mt-5 flex flex-col items-center">
//                 <Link
//                   to={"/login"}
//                   className="w-full py-3 text-center border rounded-lg bg-blue-950 text-white"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Register;
