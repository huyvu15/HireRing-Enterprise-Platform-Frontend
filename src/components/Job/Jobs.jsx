import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiBook, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Context } from "../../main";
import Banner from './Banner';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/api/v1/job/getall", {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!isAuthorized) {
    navigateTo("/");
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className="pt-10 pb-16 w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[2rem] items-stretch">
        {jobs.jobs &&
          jobs.jobs
            .filter((element) => {
              return query.toLowerCase() === ""
                ? element
                : element.title.toLowerCase().includes(query);
            })
            .map((element) => {
              return (
                <section
                  className="overflow-hidden bg-gradient-to-r from-indigo-100 via-gray-100 to-white p-6 border-2 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 border-gray-400 rounded-xl min-h-[350px] flex flex-col"
                  key={element._id}
                >
                  <div className="px-6 py-4 flex-grow">
                    <h4 className="text-indigo-600 mb-2 font-semibold">{element.companyName}</h4>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{element.title}</h3>

                    <div className="text-gray-600 text-base flex flex-wrap gap-4 mb-4">
                      <span className="flex items-center gap-2">
                        <FiMapPin className="text-indigo-500" />
                        {element.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiClock className="text-indigo-500" />
                        {element.experienceLevel}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiDollarSign className="text-indigo-500" />
                        {element.salaryFrom}-{element.salaryTo}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiBook className="text-indigo-500" />
                        {element.category}
                      </span>
                    </div>

                    <p className="text-base text-gray-600 mt-2 truncate">{element.description}</p>
                  </div>

                  <div className="px-6 pt-4 pb-6 mt-auto">
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-md"
                      to={`/job/${element._id}`}
                    >
                      Chi tiết công việc
                    </Link>
                  </div>
                </section>
              );
            })}
      </div>
    </>
  );
};

export default Jobs;



// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FiBook, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
// import { Context } from "../../main";
// import Banner from './Banner';

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const { isAuthorized } = useContext(Context);
//   const navigateTo = useNavigate();
//   const [query, setQuery] = useState("");
//   useEffect(() => {
//     try {
//       axios
//         .get("http://localhost:4000/api/v1/job/getall", {
//           withCredentials: true,
//         })
//         .then((res) => {
//           setJobs(res.data);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
//   if (!isAuthorized) {
//     navigateTo("/");
//   }
  
//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };
  
//   return (
//     <>

//     <Banner query={query} handleInputChange={handleInputChange} />

//     <div className='  pt-10 pb-12 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem]
//         items-center '>
//       {jobs.jobs &&
//             jobs.jobs.filter((element)=>{
//               return query.toLowerCase() === '' 
//               ? element
//               :element.title.toLowerCase().includes(query)
//             })
//             .map((element) => {
//               return (
              
//     <section className=' overflow-hidden bg-slate-100 p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10' key={element._id}>
//       <div className=' px-6 py-4'>
//         <h4 className=' text-primary mb-1'>{element.companyName}</h4>
//         <h3 className=' text-lg font-semibold mb-2'>{element.title}</h3>

//         <div className=' text-primary/70 text-base  gap-2 mp-2'>
//           <span className=' flex items-center gap-2'>< FiMapPin />{element.location}</span>
//           <span className=' flex items-center gap-2'>< FiClock />{element.experienceLevel}</span>
//           <span className=' flex items-center gap-2'>< FiDollarSign />{element.salaryFrom}-{element.salaryTo}</span>
//           <span className=' flex items-center gap-2'>< FiBook />{element.category}</span>
//         </div>

//         <p className='text-base text-primary/70 truncate'>{element.description}</p>
//       </div>
//       <div className=' px-6 pt-4 pb-2'>
//       <Link className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' to={`/job/${element._id}`}>Job Details</Link>
//       </div>
//     </section>
    
//     );
//   })}
//     </div>
//     </>
//   )
// }

// export default Jobs