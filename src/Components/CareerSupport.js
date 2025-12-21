import React from "react";

function CareerSupport() {
  return (
    <div className="bg-gradient-to-br from-purple-300 to-yellow-50 min-h-screen px-6 lg:px-24 py-16">
      
      <h1 className="text-5xl font-extrabold text-purple-800 mb-8">
        Career Support 🚀
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl mb-14">
        Our Career Support program is designed to help learners confidently
        transition from learning to employment with structured guidance,
        mentorship, and interview preparation.
      </p>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        <Feature
          title="Resume Building"
          desc="ATS-friendly resumes tailored for developer and designer roles."
          img="https://img.freepik.com/free-vector/resume-concept-illustration_114360-260.jpg"
        />

        <Feature
          title="Mock Interviews"
          desc="Practice real interview questions with expert feedback."
          img="https://img.freepik.com/free-vector/interview-concept-illustration_114360-1648.jpg"
        />

        <Feature
          title="Portfolio Guidance"
          desc="Build strong projects and GitHub profiles that recruiters love."
          img="https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-5148.jpg"
        />

        <Feature
          title="Job Referrals"
          desc="Access hiring partners and referral opportunities."
          img="https://img.freepik.com/free-vector/job-search-concept-illustration_114360-512.jpg"
        />

        <Feature
          title="Career Mentorship"
          desc="1:1 guidance from industry professionals."
          img="https://img.freepik.com/free-vector/mentorship-concept-illustration_114360-5305.jpg"
        />

        <Feature
          title="Placement Strategy"
          desc="Learn how to apply, follow up, and crack interviews efficiently."
          img="https://img.freepik.com/free-vector/business-strategy-concept-illustration_114360-5137.jpg"
        />
      </div>

      {/* Application Form */}
      <div className="flex justify-center">
        <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
            Apply for Career Support
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Designation */}
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Select Designation</option>
              <option>Student</option>
              <option>Fresher</option>
              <option>Working Professional</option>
            </select>

            {/* Role */}
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Select Role</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full-stack Developer</option>
              <option>Full Stack Developer</option>
              <option>UI/UX Designer</option>
              <option>Data Analyst</option>
            </select>

            {/* Resume */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Upload Resume
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const Feature = ({ title, desc, img }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <img src={img} alt={title} className="h-40 mx-auto mb-6" />
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default CareerSupport;
