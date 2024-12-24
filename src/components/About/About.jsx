import React from 'react';
import Aboutbg from './Aboutbg.png';
import categoriesData from './categoriesData';
import testimonialsData from './TestimonialsData';
import './About.css';

const About = () => {
  const bannerStyle = {
    backgroundImage: 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url("https://firebasestorage.googleapis.com/v0/b/portfolio-6467b.appspot.com/o/bg-min.jpg?alt=media&token=9aaf366f-3df2-4c96-a6b7-3ca2e1011c6f")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-blue-500 text-white py-20 mx-5 my-5 rounded-lg shadow-xl flex justify-center items-center" style={bannerStyle}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to GluTis</h1>
          <p className="text-lg sm:text-xl mb-4">Khám phá cơ hội nghề nghiệp thú vị và xây dựng sự nghiệp cùng chúng tôi.</p>
          <p className="text-md sm:text-lg mb-4">Hãy gia nhập cộng đồng chuyên gia của chúng tôi và mở ra một thế giới đầy cơ hội.</p>
          {/* <p className="text-md sm:text-lg">Explore diverse career paths and find the perfect fit for your skills and passion.</p> */}
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto my-12 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="mb-8 sm:mb-0 sm:mr-8 flex justify-center">
            <img src={Aboutbg} alt="About Us" className="w-full sm:w-3/4 h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full sm:w-3/4 lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-8 text-center sm:text-left">About Us</h2>
            <p className="text-gray-700 mb-4">
            Tại GluTis, chúng tôi tin tưởng vào việc kết nối tài năng với cơ hội để xây dựng một tương lai tươi sáng hơn. Nền tảng của chúng tôi được thiết kế để đơn giản hóa quy trình tìm kiếm việc làm, mang đến trải nghiệm mượt mà cho cả người tìm việc và nhà tuyển dụng.
            </p>
            <p className="text-gray-700 mb-4">
            Dù bạn đang tìm kiếm công việc mơ ước hay tuyển dụng ứng viên hoàn hảo, GluTis luôn sẵn sàng đồng hành cùng bạn trong suốt quá trình. Chúng tôi tập trung vào việc tạo ra một thị trường việc làm năng động và bao gồm, nơi mà kỹ năng gặp gỡ cơ hội và sự nghiệp phát triển.
            </p>
            <p className="text-gray-700 mb-4">
            Hãy gia nhập cùng chúng tôi trên hành trình phát triển và khám phá sự nghiệp. Khám phá những cơ hội thú vị, xây dựng các kết nối ý nghĩa và bước tiếp trên con đường sự nghiệp của bạn cùng GluTis.
            </p>
            <p className="text-gray-700 mb-4">
            Cam kết về sự xuất sắc và đổi mới là điều khiến chúng tôi khác biệt. Chúng tôi không ngừng nỗ lực nâng cao nền tảng của mình, áp dụng những công nghệ mới nhất để mang đến cho bạn trải nghiệm tìm kiếm việc làm tốt nhất có thể.
            </p>
            <p className="text-gray-700">
            Khám phá một thế giới đầy cơ hội cùng GluTis. Thành công của bạn là ưu tiên hàng đầu của chúng tôi, và chúng tôi luôn ở đây để hỗ trợ bạn từng bước trên con đường sự nghiệp.
            </p>
          </div>
        </div>
      </div>

      {/* Explore Categories Section */}
      <div className="container my-12 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Khám Phá Các Danh Mục</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
          {categoriesData.map((category) => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl flex flex-col items-center transition duration-300 ease-in-out cursor-pointer">
              {React.createElement(category.icon, { className: 'text-4xl mb-4 text-[#FFA33C]' })}
              <h3 className="text-xl font-semibold mb-2 text-center">{category.title}</h3>
              <p className="text-gray-600 text-center">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto my-12 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
Người Dùng Của Chúng Tôi Nói Gì</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl flex flex-col items-center h-full transition duration-300 ease-in-out">
              <img
                src={testimonial.imageUrl}
                alt={`User ${testimonial.id}`}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 text-center h-[170px]">{testimonial.text}</p>
              <span className="font-semibold text-center mt-4">{testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from 'react';
// import Aboutbg from './Aboutbg.png'
// import categoriesData from './categoriesData'
// import testimonialsData from './TestimonialsData'
// import './About.css';

// const About = () => {
//   const bannerStyle = {
//     backgroundImage: 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url("https://firebasestorage.googleapis.com/v0/b/portfolio-6467b.appspot.com/o/bg-min.jpg?alt=media&token=9aaf366f-3df2-4c96-a6b7-3ca2e1011c6f")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '600px',
//   };

//   return (
//     <div>
//       {/* Banner Section */}
//       <div className="bg-blue-500 text-white py-16 mx-5 my-5 rounded-md flex justify-center m-auto" style={bannerStyle}>
//         <div className="container mx-auto my-auto text-center">
//           <h1 className="text-4xl font-bold mb-4">Welcome to GluTis</h1>
//           <p className="text-lg">Discover exciting job opportunities and build your career with us.</p>
//           <p className="text-md">Join our community of professionals and unlock a world of possibilities.</p>
//           <p className="text-md">Explore diverse career paths and find the perfect fit for your skills and passion.</p>
//         </div>
//       </div>

//       {/* About Us Section */}
//       <div className="container mx-auto my-12 px-4 sm:px-8">
//   <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
//     <div className="mb-8 sm:mb-0 sm:mr-8 flex justify-center m-auto">
//       <img src={Aboutbg} alt="img" className="w-full sm:w-3/4 h-auto" />
//     </div>
//     <div className="w-full">
//       <h2 className="text-3xl font-bold mb-4 sm:mb-8">About Us</h2>
//       <p className="text-gray-700 mb-4">
//         At GluTis, we believe in connecting talents with opportunities to shape a brighter future. Our platform is designed to simplify the job search process, providing a seamless experience for both job seekers and employers.
//       </p>
//       <p className="text-gray-700 mb-4">
//         Whether you are looking for your dream job or hiring the perfect candidate, GluTis is here to guide you through the process. We focus on creating a dynamic and inclusive job marketplace, where skills meet opportunities, and careers flourish.
//       </p>
//       <p className="text-gray-700 mb-4">
//         Join us on this journey of career growth and exploration. Discover exciting opportunities, build meaningful connections, and take the next step in your professional life with GluTis.
//       </p>
//       <p className="text-gray-700 mb-4">
//         Our commitment to excellence and innovation sets us apart. We continuously strive to enhance our platform, embracing the latest technologies to provide you with the best possible job search experience.
//       </p>
//       <p className="text-gray-700">
//         Explore a world of possibilities with GluTis. Your success is our priority, and we are here to support you every step of the way.
//       </p>
//     </div>
//   </div>
// </div>


//       {/* Explore Categories Section */}
//       <div className="container  my-12 ">
//         <h2 className="text-3xl font-bold mb-8 text-center">Explore Categories</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-4 gap-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
//           {categoriesData.map((category) => (
//             <div key={category.id} className="bg-white p-6 rounded-lg shadow-md dark:shadow-dark hover:shadow-xl dark:hover:shadow-dark flex flex-col items-center cursor-pointer">
//               {React.createElement(category.icon, { className: 'text-4xl mb-4 text-[#FFA33C]' })}
//               <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
//               <p className="text-gray-600">{category.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
        
//         {/* Testimonials*/}
//       <div className="container mx-auto my-12">
//           <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
//           <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
//             {testimonialsData.map((testimonial) => (
//               <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md dark:shadow-dark hover:shadow-xl dark:hover:shadow-dark flex flex-col items-center h-full">
//                 <img
//                   src={testimonial.imageUrl}
//                   alt={`User ${testimonial.id}`}
//                   className="w-16 h-16 rounded-full mb-4 object-cover"
//                 />
//                 <p className="text-gray-700 h-[170px] ">{testimonial.text}</p> <br />
//                 <span className="font-semibold text-center">
//                   {testimonial.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//     </div>
//   );
// };
// export default About;