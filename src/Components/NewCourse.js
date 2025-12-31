import React, { useEffect, useState } from "react";

function NewCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/course/all");

        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await res.json();
        setCourses(data.data);


      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Courses</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
             <img
              src={`http://localhost:5000/${course.image}`}
              alt={course.courseName}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">
                {course.courseName}
              </h2>

              <p className="text-gray-600 text-sm">
                {course.subtitle}
              </p>

              <p className="text-sm">
                <span className="font-semibold">Level:</span>{" "}
                {course.level}
              </p>

              <p className="text-sm">
                <span className="font-semibold">Duration:</span>{" "}
                {course.duration}
              </p>

              <p className="text-lg font-bold text-green-600">
                ₹ {course.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewCourses;
