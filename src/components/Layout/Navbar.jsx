import React, { useContext, useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const ThanhDieuHuong = () => {
  const [hienThi, setHienThi] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const dieuHuongDen = useNavigate();
  const [moMenu, setMoMenu] = useState(false);

  const thayDoiMenu = () => {
    setMoMenu(!moMenu);
  };

  const xuLyDangXuat = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      dieuHuongDen("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  if (!isAuthorized) {
    return null;
  }

  return (
    <header className="max-w-screen-2xl container mx-auto px-4 md:px-24">
      <nav className="flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/image/logo1.png" alt="Logo" className="w-36 md:w-44" />
        </Link>

        <ul className="hidden md:flex gap-10">
          <li className="text-base text-blue-900 hover:text-blue-600">
            <Link to={"/"} onClick={() => setHienThi(false)}>
              Trang Chủ
            </Link>
          </li>

          <li className="text-base text-blue-900 hover:text-blue-600">
            <Link to={"/About/About"} onClick={() => setHienThi(false)}>
              Về Chúng Tôi
            </Link>
          </li>

          <li className="text-base text-blue-900 hover:text-blue-600">
            <Link to={"/job/getall"} onClick={() => setHienThi(false)}>
              Tìm Việc
            </Link>
          </li>

          <li className="text-base text-blue-900 hover:text-blue-600">
            <Link to={"/applications/me"} onClick={() => setHienThi(false)}>
              {user && user.role === "Employer"
                ? "Hồ Sơ Ứng Viên"
                : "Ứng tuyển Của Tôi"}
            </Link>
          </li>

          {user && user.role === "Employer" && (
            <>
              <li className="text-base text-blue-900 hover:text-blue-600">
                <Link to={"/job/me"} onClick={() => setHienThi(false)}>
                  Xem Công Việc Của Bạn
                </Link>
              </li>
              <li className="text-base text-blue-900 hover:text-blue-600">
                <Link to={"/job/post"} onClick={() => setHienThi(false)}>
                  Đăng Việc Làm
                </Link>
              </li>
            </>
          )}
        </ul>

        <div className="text-base font-medium space-x-5 hidden lg:block">
          <button
            onClick={xuLyDangXuat}
            className="py-2 px-5 border rounded bg-blue-950 text-white hover:bg-blue-700 transition"
          >
            Đăng Xuất
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={thayDoiMenu}
            className="text-blue-900 focus:outline-none"
          >
            {moMenu ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBarsStaggered className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu Di Động */}
      <div
        className={`px-4 py-5 bg-blue-950 text-white rounded-sm md:hidden ${
          moMenu ? "" : "hidden"
        }`}
      >
        <ul>
          <li className="text-base py-2">
            <Link
              to={"/"}
              className="hover:text-blue-600"
              onClick={() => setMoMenu(false)}
            >
              Trang Chủ
            </Link>
          </li>
          <li className="text-base py-2">
            <Link
              to={"/job/getall"}
              className="hover:text-blue-600"
              onClick={() => setMoMenu(false)}
            >
              Tìm Việc
            </Link>
          </li>
          <li className="text-base py-2">
            <Link
              to={"/applications/me"}
              className="hover:text-blue-600"
              onClick={() => setMoMenu(false)}
            >
              {user && user.role === "Employer"
                ? "Hồ Sơ Ứng Viên"
                : "Ứng Dụng Của Tôi"}
            </Link>
          </li>
          {user && user.role === "Employer" && (
            <>
              <li className="text-base py-2">
                <Link
                  to={"/job/me"}
                  className="hover:text-blue-600"
                  onClick={() => setMoMenu(false)}
                >
                  Xem Công Việc Của Bạn
                </Link>
              </li>
              <li className="text-base py-2">
                <Link
                  to="/job/post"
                  className="hover:text-blue-600"
                  onClick={() => setMoMenu(false)}
                >
                  Đăng Việc Làm
                </Link>
              </li>
            </>
          )}
          <li className="py-2">
            <button
              onClick={xuLyDangXuat}
              className="text-white hover:text-red-600"
            >
              Đăng Xuất
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default ThanhDieuHuong;


// import React, { useContext, useState } from "react";
// import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
// import { Link,  useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Context } from "../../main";


// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthorized, setIsAuthorized, user } = useContext(Context);
//   const navigateTo = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const handleMenuToggler = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:4000/api/v1/user/logout",
//         {
//           withCredentials: true,
//         }
//       );
//       toast.success(response.data.message);
//       setIsAuthorized(false);
//       navigateTo("/login");
//     } catch (error) {
//       toast.error(error.response.data.message), setIsAuthorized(true);
//     }
//   };

//   if (!isAuthorized) {
//     return null;
// }
//   return (
    
//     <header className=" max-w-screen-2xl container max-auto xl:px-24 px-4">
//       <nav className="flex justify-between mx-auto container items-center py-2 md:py-4">
//         <Link to="/" className=" ">
//           <img src="/image/logo1.png" alt="" width={180} height={250} />
//         </Link>
//         <ul className="hidden md:flex gap-14">
          
//             <li className="text-base text-blue-900 text-primary">
//             <Link to={"/"} onClick={() => setShow(false)}>
//             Home
//             </Link>
//             </li>

//             <li className="text-base text-blue-900 text-primary">
//             <Link to={"/About/About"} onClick={() => setShow(false)}>
//             About us
//             </Link>
//             </li>

//             <li className="text-base text-blue-900 text-primary">
//             <Link to={"/job/getall"} onClick={() => setShow(false)}>
//             Find Job
//             </Link>
//             </li>
//             <li className="text-base text-blue-900 text-primary">
//             <Link to={"/applications/me"} onClick={() => setShow(false)}>
//               {user && user.role === "Employer"
//                 ? "Applicant's Application"
//                 : "My Application"}
//             </Link>
//             </li>
//             {user && user.role === "Employer" ? (
//               <>
//             <li className="text-base text-blue-900 text-primary">
//             <Link to={"/job/me"} onClick={() => setShow(false)}>
//                   View your jobs
//                 </Link>
//             </li>
//             <li className="text-base text-blue-900 text-primary">
//             <Link
//               to={"/job/post"}
//               onClick={() => setShow(false)}>
            
//               Post a job
//             </Link>
//             </li>
            
//             </>
            
//             ) : ( 
//               <></>
//             )}
          
//         </ul>
//         <div className="text-base text-primary font-medium space-x-5 hidden lg:block">     
//             <button
//               onClick={handleLogout}
//               className="py-2 px-5 border rounded bg-blue-950 text-white"
//             >
//               Logout
//             </button>
          
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={handleMenuToggler}
//             className="text-primary focus:outline-none"
//           >
//             {isMenuOpen ? (
//               <FaXmark className="w-6 h-6" />
//             ) : (
//               <FaBarsStaggered className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </nav>

// {/* ---------------------------------------------------------------------------------------------------- */}


//       <div className={`px-4 bg-blue-900 py-5 rounded-sm ${isMenuOpen ? "" : "hidden"} md:hidden`}>
//         <ul>
//         <li className="text-base text-primary">
//             <Link to={"/"} className=" text-white hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
//             Home
//             </Link>
//             </li>
//             <li className="text-base text-primary">
//             <Link to={"/job/getall"} className=" text-white hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
//             Find Job
//             </Link>
//             </li>
//             <li className="text-base text-primary">
//             <Link to={"/applications/me"} className=" text-white hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
//               {user && user.role === "Employer"
//                 ? "Applicant's Application"
//                 : "My Appliication"}
//             </Link>
//             </li>
//             {user && user.role === "Employer" ? (
//               <>
//             <li className="text-base text-primary">
//             <Link  to={"/job/me"} className=" text-white hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
//                   View your jobs
//                 </Link>
//             </li>
//             <li>
//             <Link
//               to="/job/post"
//               className=" text-white hover:text-blue-600" onClick={() => setIsMenuOpen(false)}
//             >
//               Post A Job
//             </Link>
//             </li>
            
//             </>
            
//             ) : ( 
//               <></>
//             )}
//           <li className="text-white py-1">
//             <button
//               onClick={handleLogout}
//               className="hover:text-red-600"
//             >
//               Logout
//             </button> 
//           </li>
//         </ul>
//       </div>
//     </header>
    
//   );
// };

// export default Navbar;
