import { useState } from "react";
import logo from "../Components/Images/header.png";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-4 md:px-20 py-4 flex items-center justify-between">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={logo} className="w-16 md:w-20" alt="logo" />
          </Link>
          <span className="text-3xl md:text-4xl font-bold text-purple-600">
            Xpert
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {["/", "/Courses", "/AboutUs", "/cc"].map((path, i) => (
            <li key={i}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "text-purple-600" : "text-gray-700"} hover:text-purple-600 transition`
                }
              >
                {["Home", "Courses", "About Us", "Contact Us"][i]}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-purple-600"
          onClick={() => setOpen(true)}
        >
          <HiMenu />
        </button>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-2xl font-bold text-purple-600">Menu</span>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-6 px-6 py-6 text-lg font-medium">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/Courses" onClick={() => setOpen(false)}>Courses</NavLink>
          <NavLink to="/AboutUs" onClick={() => setOpen(false)}>About Us</NavLink>
          <NavLink to="/cc" onClick={() => setOpen(false)}>Contact Us</NavLink>
        </ul>
      </div>
    </>
  );
}

export default Header;
