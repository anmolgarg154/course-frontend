// import { useState } from "react";
// import {
//   LayoutDashboard,
//   Code,
//   Brush,
//   Briefcase,
// } from "lucide-react";

// function Courses() {
//   const categories = [
//     { key: "all", label: "All Courses", icon: <LayoutDashboard size={18} /> },
//      { key: "development", label: "Development", icon: <Code size={18} /> },
//     { key: "design", label: "Design", icon: <Brush size={18} /> },
   
//   ];

//   const courses = [
//     {
//       title: "React Development",
//       slug: "react-development",
//       category: "development",
//       image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
//        description: "Learn React from scratch with projects",
//       price: 699,
//     },
//     {
//       title: "Node.js Backend",
//       category: "development",
//       image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
//     },
//     {
//         title: "Angular Development",
//         category: "development",
//         image: "https://tse4.mm.bing.net/th/id/OIP.3k1p8lilrOXaLbpx-sQnwwHaHa?pid=Api&P=0&h=180",
//     },
//     {
//         title: "Next JS ",
//         category: "development",
//         image: "https://www.chaiyohosting.com/img/nextjs-img.png",
//     },
//     {
//         title: "Web Development With Mern Stack",
//         category: "development",
//         image: "https://tse2.mm.bing.net/th/id/OIP.zJ1tH9_FpoAHbJypkD2mZQHaHa?pid=Api&P=0&h=180",
//     },
//     {
//       title: "UI UX Designing",
//       category: "design",
//       image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
//     },
//     {
//       title: "Graphic Design",
//       category: "design",
//       image: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
//     },
//     {
//       title: "Graphic Design with AI",
//       category: "design",
//       image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
//     },
//     {
//       title: "Adobe Photoshop",
//       category: "design",
//       image: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
//     },
//     {
//       title: "VFX",
//       category: "design",
//       image: "https://cdn-icons-png.flaticon.com/512/10169/10169747.png",
//     },
//     {
//       title: "Adobe Premiere Pro",
//       category: "design",
//       image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
//     },
//     {
//       title: "Adobe After Effects",
//       category: "design",
//       image: "https://cdn-icons-png.flaticon.com/512/5968/5968514.png",
//     },
//     {
//       title: "Motion Graphics",
//       category: "design",
//       image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
//     },
    
//   ];

//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredCourses =
//     activeCategory === "all"
//       ? courses
//       : courses.filter(course => course.category === activeCategory);

//   return (
//     <div className="bg-[#FFF8E7] py-16 px-10">

//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-5xl font-extrabold text-purple-700 mb-2">
//           Browse Our Courses
//         </h2>
//         <p className="text-lg text-gray-600">
//           Click a category to explore courses ⚡
//         </p>
//       </div>

//       {/* Category Tabs */}
//       <div className="flex flex-wrap justify-center gap-5 mb-14">
//         {categories.map(cat => (
//           <button
//             key={cat.key}
//             onClick={() => setActiveCategory(cat.key)}
//             className={`flex items-center gap-2 px-7 py-3 rounded-full border-2 font-semibold transition
//               ${
//                 activeCategory === cat.key
//                   ? "bg-purple-600 text-white border-purple-600"
//                   : "bg-white text-purple-600 border-purple-600 hover:bg-purple-100"
//               }`}
//           >
//             {cat.icon}
//             {cat.label}
//           </button>
//         ))}
//       </div>

//       {/* Course Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {filteredCourses.map((course, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl border border-red-300 p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition"
//           >
//             <img
//               src={course.image}
//               alt={course.title}
//               className="w-28 h-28 object-contain mb-6"
//             />
//             <h3 className="text-xl font-bold text-purple-700 text-center">
//               {course.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Code, Brush } from "lucide-react";

function Courses() {
  const navigate = useNavigate();

  const categories = [
    { key: "all", label: "All Courses", icon: <LayoutDashboard size={18} /> },
    { key: "development", label: "Development", icon: <Code size={18} /> },
    { key: "design", label: "Design", icon: <Brush size={18} /> },
  ];

  const courses = [
    {
      title: "React Development",
      slug: "react-development",
      category: "development",
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      description: "Learn React from scratch with projects",
      price: 699,
    },
    {
      title: "Node.js Backend",
      slug: "node-js-backend",
      category: "development",
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      description: "Build scalable backend using Node.js",
      price: 699,
    },
    {
      title: "UI UX Designing",
      slug: "ui-ux-design",
      category: "design",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      description: "Master UI/UX design principles",
      price: 699,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter(c => c.category === activeCategory);  

  return (
    <div className="bg-[#FFF8E7] py-16 px-10">

      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-purple-700 mb-2">
          Browse Our Courses
        </h2>
        <p className="text-lg text-gray-600">
          Click a category to explore courses ⚡
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mb-14">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-7 py-3 rounded-full border-2 font-semibold
              ${
                activeCategory === cat.key
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600"
              }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredCourses.map((course) => (
          <div
            key={course.slug}
            onClick={() => navigate(`/course/${course.slug}`)}
            className="bg-white rounded-2xl border p-6 cursor-pointer
                       hover:shadow-xl hover:-translate-y-2 transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-28 h-28 object-contain mb-6 mx-auto"
            />
            <h3 className="text-xl font-bold text-purple-700 text-center">
              {course.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
