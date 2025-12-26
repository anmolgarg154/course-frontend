import { useState } from "react";
import logo from "../Components/Images/header.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const navItem = [
    { name: "Home", slug: "/" },
    { name: "Course", slug: "/courses" },
    { name: "About Us", slug: "/about" },
    { name: "Contacts", slug: "/contact" },
  ];

  const handleLogout = () => {
    dispatch({ type: "setLogin", value: false });
    nav("/login");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-4 md:px-20 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={logo} className="w-16 md:w-20" alt="logo" />
          </Link>
          <span className="text-3xl md:text-4xl font-bold text-purple-600">
            Xpert
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">

          {/* Always visible */}
          {navItem.map((e) => (
            <li key={e.slug}>
              <button
                onClick={() => nav(e.slug)}
                className="hover:text-purple-600"
              >
                {e.name}
              </button>
            </li>
          ))}

          {/* When logged out */}
          {isLogin && (
  <>
    <li onClick={() => nav("/login")}>Login</li>
    <li onClick={() => nav("/register")}>Register</li>
  </>
)}

{!isLogin && (
  <li onClick={handleLogout}>Logout</li>
)}


        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-purple-600"
          onClick={() => setOpen(true)}
        >
          <HiMenu />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-2xl font-bold text-purple-600">Menu</span>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 py-6 text-lg font-medium">
          {navItem.map((e) => (
            <NavLink key={e.slug} to={e.slug} onClick={() => setOpen(false)}>
              {e.name}
            </NavLink>
          ))}

          {!isLogin && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}

          {isLogin && (
            <button onClick={handleLogout}>Logout</button>
          )}
        </ul>
      </div>
    </>
  );
}

export default Header;
