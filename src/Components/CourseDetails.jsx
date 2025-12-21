import { useParams } from "react-router-dom";
import { Clock, BarChart, Layers, CheckCircle } from "lucide-react";
import Single from "./Single";

function CourseDetails() {
  const { id } = useParams();

  const courses = [
  {
    id: 1,
    title: "React Development",
    subtitle: "Build modern, scalable frontend applications",
    image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    description:
      "This React course takes you from fundamentals to advanced concepts with real-world projects and best practices.",
    duration: "8 Weeks",
    level: "Beginner → Advanced",
    price: 699,
    features: [
      "JSX & Components",
      "State & Props",
      "Hooks (useState, useEffect)",
      "React Router",
      "API Integration",
      "Project Deployment",
    ],
  },
   {
    id: 2,
    title: "Node.js Backend",
    subtitle: "Create scalable backend applications",
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    description:
      "Build secure and scalable backend systems using Node.js, Express, and MongoDB.",
    duration: "6 Weeks",
    level: "Intermediate",
    price: 699,
    features: [
      "Node.js Core Concepts",
      "Express.js Framework",
      "RESTful APIs",
      "MongoDB Integration",
      "Authentication & Authorization",
      "Backend Deployment",
    ],
  },

  {
    id: 3,
    title: "Angular Development",
    subtitle: "Build enterprise-grade frontend applications",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.gvI-qoVKgyrsnycYK_AZIwHaHa?pid=Api&P=0&h=180",
    description:
      "Learn Angular from scratch and build robust, scalable single-page applications using modern Angular architecture.",
    duration: "7 Weeks",
    level: "Beginner → Intermediate",
    price: 699,
    features: [
      "Angular CLI",
      "Components & Modules",
      "Services & Dependency Injection",
      "Routing & Guards",
      "RxJS & Observables",
      "Real-world Project",
    ],
  },

  {
    id: 4,
    title: "Next.js Development",
    subtitle: "Build fast, SEO-friendly React applications",
    image: "https://www.chaiyohosting.com/img/nextjs-img.png",
    description:
      "Master Next.js to build high-performance web apps with server-side rendering, static generation, and modern routing.",
    duration: "6 Weeks",
    level: "Intermediate",
    price: 699,
    features: [
      "Next.js App Router",
      "Server-side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "API Routes",
      "Authentication",
      "Deployment with Vercel",
    ],
  },

  {
    id: 5,
    title: "Web Development (MERN Stack)",
    subtitle: "Become a full-stack web developer",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.zJ1tH9_FpoAHbJypkD2mZQHaHa?pid=Api&P=0&h=180",
    description:
      "A complete full-stack program covering MongoDB, Express, React, and Node.js with multiple real-world projects.",
    duration: "10 Weeks",
    level: "Beginner → Advanced",
    price: 999,
    features: [
      "HTML, CSS, JavaScript",
      "React Frontend",
      "Node & Express Backend",
      "MongoDB & Mongoose",
      "JWT Authentication",
      "Full-stack Projects",
    ],
  },

  {
    id: 6,
    title: "UI / UX Designing",
    subtitle: "Design beautiful & user-friendly interfaces",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    description:
      "Learn UI/UX design fundamentals, tools, and workflows to create engaging digital experiences.",
    duration: "5 Weeks",
    level: "Beginner",
    price: 699,
    features: [
      "Design Principles",
      "User Research",
      "Wireframing & Prototyping",
      "Figma & Design Tools",
      "Usability Testing",
      "Real Design Case Studies",
    ],
  },

 
];

  const course = courses.find(c => c.id === Number(id));

  if (!course) {
    return <h2 className="p-10 text-xl">Course not found</h2>;
  }

  return (
    <div className="bg-gradient-to-br from-purple-300 to-yellow-50  py-12 px-6 lg:px-24">
      
      {/* HERO SECTION */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
            {course.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {course.subtitle}
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            {course.description}
          </p>

          <div className="flex gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="text-purple-600" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart className="text-purple-600" />
              <span>{course.level}</span>
            </div>
          </div>

          <button className="bg-purple-600 text-white px-8 py-4 rounded-xl
          font-semibold hover:bg-purple-700 transition">
            Enroll Now – ₹{course.price}
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={course.image}
            alt={course.title}
            className="w-72 h-72 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* WHAT YOU WILL LEARN */}
      <div className="bg-white rounded-3xl p-10 shadow-lg">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">
          What you’ll learn
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-purple-50 p-4 rounded-xl"
            >
              <CheckCircle className="text-purple-600 mt-1" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* COURSE INCLUDES */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <Layers className="mx-auto text-purple-600 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">Hands-on Projects</h3>
          <p className="text-gray-600">
            Build real applications to strengthen your skills
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <Clock className="mx-auto text-purple-600 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">Lifetime Access</h3>
          <p className="text-gray-600">
            Learn at your own pace with unlimited access
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <BarChart className="mx-auto text-purple-600 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">Beginner Friendly</h3>
          <p className="text-gray-600">
            No prior experience required
          </p>
        </div>
        
      </div>
      <Single courseTitle={course.title} />

    </div>
  );
}

export default CourseDetails;
