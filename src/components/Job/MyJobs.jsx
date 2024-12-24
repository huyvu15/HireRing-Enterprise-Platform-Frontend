import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../../main";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [editingMode, setEditingMode] = useState(null);
  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/job/getmyjobs",
          { withCredentials: true }
        );
        setMyJobs(data.myJobs);
      } catch (error) {
        toast.error(error.response.data.message);
        setMyJobs([]);
      }
    };
    fetchJobs();
  }, []);

  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/");
  }

  const handleEnableEdit = (jobId) => {
    setEditingMode(jobId);
  };

  const handleDisableEdit = () => {
    setEditingMode(null);
  };

  const handleUpdateJob = async (jobId) => {
    const updatedJob = myJobs.find((job) => job._id === jobId);
    try {
      const res = await axios.put(`http://localhost:4000/api/v1/job/update/${jobId}`, updatedJob, {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setEditingMode(null);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteJob = async (jobId) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/v1/job/delete/${jobId}`, {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleInputChange = (jobId, field, value) => {
    setMyJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === jobId ? { ...job, [field]: value } : job
      )
    );
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-8">
      <div className="w-8/12 rounded-xl mx-auto overflow-hidden">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center text-blue-950">Việc bạn đã đăng</h1>

        {myJobs.length > 0 ? (
          <div className="shadow-lg">
            {myJobs.map((job) => (
              <div key={job._id} className="flex flex-col bg-slate-100 p-5 mb-5 border-2 border-gray-500 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="font-semibold">Tiêu đề: </span>
                      <input
                        className="ml-6 p-2 border border-gray-300 rounded-md w-full"
                        type="text"
                        disabled={editingMode !== job._id}
                        value={job.title}
                        onChange={(e) => handleInputChange(job._id, "title", e.target.value)}
                      />
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">Tên công ty: </span>
                      <input
                        className="ml-6 p-2 border border-gray-300 rounded-md w-full"
                        type="text"
                        disabled={editingMode !== job._id}
                        value={job.companyName}
                        onChange={(e) => handleInputChange(job._id, "companyName", e.target.value)}
                      />
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">Experience Level: </span>
                      <input
                        className="ml-6 p-2 border border-gray-300 rounded-md w-full"
                        type="text"
                        disabled={editingMode !== job._id}
                        value={job.experienceLevel}
                        onChange={(e) => handleInputChange(job._id, "experienceLevel", e.target.value)}
                      />
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">Danh mục: </span>
                      <select
                        className="ml-6 p-2 border border-gray-300 rounded-md w-full"
                        value={job.category}
                        onChange={(e) => handleInputChange(job._id, "category", e.target.value)}
                        disabled={editingMode !== job._id}
                      >
                        <option value="Human Resource">Nhân Sự</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Design">Thiết Kế</option>
                        <option value="Software Engineer">Kỹ Sư Phần Mềm</option>
                        <option value="Account & Finance">
                          Kế Toán & Tài Chính
                        </option>
                        <option value="Artificial Intelligence">
                          Trí Tuệ Nhân Tạo
                        </option>
                        <option value="Video Animation">Video Animation</option>
                        <option value="Automotive Jobs">Công Việc Ô Tô</option>
                        <option value="Customer Service">
                          Dịch Vụ Khách Hàng
                        </option>
                        <option value="Health and Care">
                          Sức Khỏe và Chăm Sóc
                        </option>

                      </select>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">Mức lương: </span>
                      <input
                        className="ml-6 p-2 border border-gray-300 rounded-md w-full"
                        type="number"
                        disabled={editingMode !== job._id}
                        value={job.fixedSalary || `${job.salaryFrom} - ${job.salaryTo}`}
                        onChange={(e) => handleInputChange(job._id, "fixedSalary", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="font-semibold">Thời hạn: </span>
                      <select
                        className="ml-6 p-2 border border-gray-300 rounded-md w-full"
                        value={job.expired}
                        onChange={(e) => handleInputChange(job._id, "expired", e.target.value)}
                        disabled={editingMode !== job._id}
                      >
                        <option value={true}>TRUE</option>
                        <option value={false}>FALSE</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">Vị trí: </span>
                      <textarea
                        className="ml-6 p-2 border border-gray-300 rounded-md w-full h-24 resize-none"
                        value={job.location}
                        disabled={editingMode !== job._id}
                        onChange={(e) => handleInputChange(job._id, "location", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="flex items-center">
                    <span className="font-semibold">Mô tả: </span>
                    <textarea
                      className="ml-6 p-2 border border-gray-300 rounded-md w-full h-80 resize-none"
                      value={job.description}
                      disabled={editingMode !== job._id}
                      onChange={(e) => handleInputChange(job._id, "description", e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  {editingMode === job._id ? (
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleUpdateJob(job._id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                      >
                        <FaCheck />
                      </button>
                      <button
                        onClick={handleDisableEdit}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleEnableEdit(job._id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => handleDeleteJob(job._id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                      >
                        Xóa
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl font-semibold text-gray-600">Bạn chưa đăng job nào cả!</p>
        )}
      </div>
    </div>
  );
};

export default MyJobs;

// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { FaCheck } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
// import { Context } from "../../main";

// const MyJobs = () => {
//   const [myJobs, setMyJobs] = useState([]);
//   const [editingMode, setEditingMode] = useState(null);
//   const { isAuthorized, user } = useContext(Context);

//   const navigateTo = useNavigate();
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:4000/api/v1/job/getmyjobs",
//           { withCredentials: true }
//         );
//         setMyJobs(data.myJobs);
//       } catch (error) {
//         toast.error(error.response.data.message);
//         setMyJobs([]);
//       }
//     };
//     fetchJobs();
//   }, []);
//   if (!isAuthorized || (user && user.role !== "Employer")) {
//     navigateTo("/");
//   }

//   const handleEnableEdit = (jobId) => {
//     setEditingMode(jobId);
//   };

//   const handleDisableEdit = () => {
//     setEditingMode(null);
//   };

//   const handleUpdateJob = async (jobId) => {
//     const updatedJob = myJobs.find((job) => job._id === jobId);
//     await axios
//       .put(`http://localhost:4000/api/v1/job/update/${jobId}`, updatedJob, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         toast.success(res.data.message);
//         setEditingMode(null);
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };

//   const handleDeleteJob = async (jobId) => {
//     await axios
//       .delete(`http://localhost:4000/api/v1/job/delete/${jobId}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         toast.success(res.data.message);
//         setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };

//   const handleInputChange = (jobId, field, value) => {
//     setMyJobs((prevJobs) =>
//       prevJobs.map((job) =>
//         job._id === jobId ? { ...job, [field]: value } : job
//       )
//     );
//   };

//   return (
//     <>
//     <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-8">
//       <div className=" w-8/12 rounded-xl mx-auto overflow-hidden">
//         <h1 className=' text-3xl font-bold text-primary mb-3 text-center text-blue-950'>Your Posted Jobs</h1>

//         {myJobs.length > 0 ? (
//           <>
//             <div className="shadow-lg">
//               {myJobs.map((element) => (
//                 <div className=" flex overflow-hidden shadow-lg mt-5 bg-slate-100 p-4 border-2 border-gray-500 rounded-lg border-opacity-10" key={element._id}>
//                   <div className="w-5/6 px-10 ">
//                     <div className=''>
//                     <div>
//                     <div className="short_fields">
//                       <div className="border py-1 px-2 w-full">
//                         <span>Title :</span>
//                         <input
//                         className=' ml-6'
//                           type="text"
//                           disabled={
//                             editingMode !== element._id ? true : false
//                           }
//                           value={element.title}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "title",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
//                       <div className="border mt-2  py-1 px-2 w-full">
//                         {" "}
//                         <span>Company Name :</span>
//                         <input
//                           className=' ml-6'
//                           type="text"
//                           disabled={
//                             editingMode !== element._id ? true : false
//                           }
//                           value={element.companyName}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "companyName",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
//                       <div className="border mt-2  py-1 px-2 w-full">
//                         <span>Experience Level :</span>
//                         <input
//                           className=' ml-6'
//                           type="text"
//                           disabled={
//                             editingMode !== element._id ? true : false
//                           }
//                           value={element.experienceLevel}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "experienceLevel",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div >
//                       <div className="border mt-2  py-1 px-2 w-full">
//                         <span>Category :</span>
//                         <select
//                           className=' ml-6'
//                           value={element.category}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "category",
//                               e.target.value
//                             )
//                           }
//                           disabled={
//                             editingMode !== element._id ? true : false
//                           }
//                         >
//                           <option value="Human Resource">
//                           Human Resource
//                           </option>
//                           <option value="Marketing">
//                           Marketing
//                           </option>
//                           <option value="Design">
//                           Design
//                           </option>
//                           <option value="Software Engineer">
//                           Software Engineer
//                           </option>
//                           <option value="Account & Finance">
//                             Account & Finance
//                           </option>
//                           <option value="Artificial Intelligence">
//                             Artificial Intelligence
//                           </option>
//                           <option value="Video Animation">
//                             Video Animation
//                           </option>
//                           <option value="Automotive Jobs">
//                           Automotive Jobs
//                           </option>
//                           <option value="Coustomer Service">
//                           Coustomer Service
//                           </option>
//                           <option value="Health and Care">
//                           Health and Care
//                           </option>
//                         </select>
//                       </div>
//                       <div className="border mt-2  py-1 px-2 w-full">
//                         <span>
//                           Salary :{" "}
//                           {element.fixedSalary ? (
//                             <input
//                             className=' ml-6'
//                               type="number"
//                               disabled={
//                                 editingMode !== element._id ? true : false
//                               }
//                               value={element.fixedSalary}
//                               onChange={(e) =>
//                                 handleInputChange(
//                                   element._id,
//                                   "fixedSalary",
//                                   e.target.value
//                                 )
//                               }
//                             />
//                           ) : (
//                             <div className="border mt-2  py-1 px-2 w-full">
//                               <input
//                                 className=' ml-6'
//                                 type="number"
//                                 disabled={
//                                   editingMode !== element._id ? true : false
//                                 }
//                                 value={element.salaryFrom}
//                                 onChange={(e) =>
//                                   handleInputChange(
//                                     element._id,
//                                     "salaryFrom",
//                                     e.target.value
//                                   )
//                                 }
//                               />
//                               <input
//                                 className=' ml-6'
//                                 type="number"
//                                 disabled={
//                                   editingMode !== element._id ? true : false
//                                 }
//                                 value={element.salaryTo}
//                                 onChange={(e) =>
//                                   handleInputChange(
//                                     element._id,
//                                     "salaryTo",
//                                     e.target.value
//                                   )
//                                 }
//                               />
//                             </div>
//                           )}
//                         </span>
//                       </div>
//                       <div className="border mt-2  py-1 px-2 w-full">
//                         {" "}
//                         <span>Expired :</span>
//                         <select
//                           className=' ml-6'
//                           value={element.expired}
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "expired",
//                               e.target.value
//                             )
//                           }
//                           disabled={
//                             editingMode !== element._id ? true : false
//                           }
//                         >
//                           <option value={true}>TRUE</option>
//                           <option value={false}>FALSE</option>
//                         </select>
//                       </div>
//                     </div>
//                     </div>
//                     <section>
//                     <div>
//                       <div className="border mt-2  py-1 px-2 w-full">
//                         <span>Description:</span>{" "}
//                         <textarea
//                         className=" mt-2  py-1 px-2 w-full"
//                           rows={5}
//                           value={element.description}
//                           disabled={
//                             editingMode !== element._id ? true : false
//                           }
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "description",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
//                       <div className="border mt-2  py-1 px-2 w-full">
//                         <span>Location: </span>
//                         <textarea
//                         className=" mt-2  py-1 px-2 w-full"
//                           value={element.location}
//                           rows={2}
//                           disabled={
//                             editingMode !== element._id ? true : false
//                           }
//                           onChange={(e) =>
//                             handleInputChange(
//                               element._id,
//                               "location",
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
                      
//                     </div>
//                     </section>
//                     </div>
//                   </div>
//                   <div className=' w-1/6 inline-block align-middle mt-10 py-20'>
//                   <div className="">
//                     <div className="edit_btn_wrapper">
//                       {editingMode === element._id ? (
//                         <>
//                           <div className='grid grid-cols-2 gap-1'>
//                           <button
//                             onClick={() => handleUpdateJob(element._id)}
//                             className=" px-3 "
//                           >
//                             <FaCheck />
//                           </button>
//                           <button
//                             onClick={() => handleDisableEdit()}
//                             className=" px-3 "
//                           >
//                             <RxCross2 />
//                           </button>
//                           </div>
//                         </>
//                       ) : (
//                         <button
//                           onClick={() => handleEnableEdit(element._id)}
//                           className=" bg-blue-700 hover:bg-blue-950 text-white font-bold py-2 px-4 w-full rounded-full "
//                         >
//                           Edit
//                         </button>
//                       )}
//                     </div>
//                     <div className=' mt-6'>
//                     <button
//                       onClick={() => handleDeleteJob(element._id)}
//                       className=" bg-red-700 hover:bg-red-950 text-white font-bold py-2 px-4 w-full rounded-full "
//                     >
//                       Delete
//                     </button>
//                     </div>
//                   </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <p>
//             You've not posted any job or may be you deleted all of your jobs!
//           </p>
//         )}
//       </div>
//     </div>
//   </>
//   );
// };

// export default MyJobs;
