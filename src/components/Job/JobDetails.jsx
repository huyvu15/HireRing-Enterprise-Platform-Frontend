import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, [id, navigateTo]);

  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <div className="pt-10 pb-12 w-[80%] mx-auto mt-[4rem] gap-[3rem] items-center">
      <section className="overflow-hidden bg-gradient-to-r from-indigo-100 via-gray-100 to-white p-6 border-2 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-500 border-gray-300 rounded-xl shadow-md">
        <div className="text-center mb-6">
          <p className="text-4xl font-extrabold text-gray-900">{job.title}</p>
          <p className="text-xl font-medium text-gray-700">{job.companyName}</p>
        </div>

        <div className="mb-4 space-y-3">
          <p className="text-lg text-gray-600">
            <strong>Nơi làm việc:</strong> {job.location}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Mức lương:</strong>{" "}
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Kinh nghiệm làm việc:</strong> {job.experienceLevel}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-lg text-gray-600">
            <strong>Mô tả công việc:</strong> {job.description}
          </p>
        </div>

        <div className="text-center mt-8">
          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link
              to={`/application/${job._id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Apply Now
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobDetails;


// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { Context } from "../../main";
// const JobDetails = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState({});
//   const navigateTo = useNavigate();

//   const { isAuthorized, user } = useContext(Context);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/api/v1/job/${id}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setJob(res.data.job);
//       })
//       .catch((error) => {
//         navigateTo("/notfound");
//       });
//   }, []);

//   if (!isAuthorized) {
//     navigateTo("/login");
//   }

//   return (
//     <div className='pt-10 pb-12 w-[80%] mx-auto  mt-[4rem] gap-[3rem]
//     items-center '>
//       <section className=' overflow-hidden bg-slate-100 p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-500 border-gray-500 rounded-lg border-opacity-10'>
//       <div className=' px-6 py-4'>
//       <p className='text-2xl font-bold'>{job.title}</p>
//       <p>{job.companyName}
//           </p>
//           <p>
//           Workplace: {job.location}
//           </p>
//           <p>
//             Salary:{" "}
//             {job.fixedSalary ? (
//               <span>{job.fixedSalary}</span>
//             ) : (
//               <span>
//                 {job.salaryFrom} - {job.salaryTo}
//               </span>
//             )}
//           </p>
//           <p>
//             Experience: {job.experienceLevel}
//           </p>
//           <p>
//             Job description: {job.description}
//           </p >
//           <p className="mt-8">
//         {user && user.role === "Employer" ? (
//             <></>
//           ) : (
//             <Link className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' to={`/application/${job._id}`}>Apply Now</Link>
//           )}
//           </p>
//       </div>
//       </section>
      
//       </div>
//   )
// }

// export default JobDetails