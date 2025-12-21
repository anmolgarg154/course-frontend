import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LayoutDashboard, Code, Brush } from "lucide-react";
import { useEffect } from "react";
import Packs from "./Packs";

function Courses() {
  const navigate = useNavigate();
  let pp = useParams()

  const categories = [
    { key: "all", label: "All Courses", icon: <LayoutDashboard size={18} /> },
    { key: "development", label: "Development", icon: <Code size={18} /> },
    { key: "design", label: "Design", icon: <Brush size={18} /> },
  ];

  const courses = [
    {
      id: 1,
      title: "React Development",
      slug: "react-development",
      category: "development",
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      description: "Learn React from scratch with projects",
      price: 699,
    },
    {
      id: 2,
      title: "Node.js Backend",
      slug: "node-js-backend",
      category: "development",
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      description: "Build scalable backend using Node.js",
      price: 699,
    },
    {
      id: 3,
      title: "Angular Development",
      slug: "angular-development",
      category: "development",
      image: "https://tse4.mm.bing.net/th/id/OIP.3k1p8lilrOXaLbpx-sQnwwHaHa?pid=Api&P=0&h=180",
    },
    {
      id:4,
      title: "Next JS ",
      slug: "next-js",
      category: "development",
      image: "https://www.chaiyohosting.com/img/nextjs-img.png",
    },
    {
      id:5,
      title: "Web Development With Mern Stack",
      slug: "mern-stack-development",
      category: "development",
      image: "https://tse2.mm.bing.net/th/id/OIP.zJ1tH9_FpoAHbJypkD2mZQHaHa?pid=Api&P=0&h=180",
    },
    {
      id:6,
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


      function LoadCourses(){
        
      }

  


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
              ${activeCategory === cat.key
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
         <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="bg-white rounded-2xl border p-6 block cursor-pointer
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
          </Link>
        ))}

      </div>
      <Packs/>
    </div>
  );
}

export default Courses;
