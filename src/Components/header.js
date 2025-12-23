import { useEffect, useState } from "react";
import logo from "../Components/Images/header.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { connect } from "react-redux";
import { setLogin } from "../Action";

function Header({ commonData, setLogin }) {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

     function f1()
    {
        return(
            <>
                <li className="nav-item active">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </>
        );
    }
    function f2()
    {
        return(
            <>
                <li className="nav-item active">
                    <Link className="nav-link" to="/profile">My Profile</Link>
                </li>
                <li className="nav-item active">
                    <input type="button" value="Logout" className="nav-link" onClick={Logout} />
                </li>
            </>
        );
    }

 

  function Logout() {
    setLogin('N');
    nav('/login')

  }
  

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
          {/* {["/", "/Courses", "/AboutUs", "/contact"].map((path, i) => (
            <li key={i}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "text-purple-600" : "text-gray-700"} hover:text-grey-600 transition`
                }
              >
                {["Home", "Courses", "About Us", "Contact Us"][i]}
              </NavLink>
            </li>
            
          ))} */}
          <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600" : "text-gray-700"} > Home </NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? "text-purple-600" : "text-gray-700"} > Courses </NavLink>
          <NavLink to="/AboutUs" className={({ isActive }) => isActive ? "text-purple-600" : "text-gray-700"} > About Us </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-purple-600" : "text-gray-700"} > Contacts </NavLink>


                           {commonData.isLogin=="Y"?f1():f2()}

          {/* {commonData.isLogin == 'N' &&
            <div className="flex gap-4">
              <Link to="/login">
                <input
                  type="button"
                  value="Login"
                  className="px-6 py-2 rounded-lg border border-purple-600 text-purple-600 font-semibold
                 hover:bg-purple-600 hover:text-white transition duration-300 cursor-pointer"
                />
              </Link>

              <Link to="/register">
                <input
                  type="button"
                  value="Register"
                  className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold
                 hover:bg-purple-700 transition duration-300 cursor-pointer"
                />
              </Link>
            </div>

          } */}

          {/* {commonData.isLogin == 'Y' &&

            <input
              type="button"
              value="Logout"
              onClick={Logout}
              className="px-6 py-2 rounded-lg border border-purple-600 text-purple-600 font-semibold
                 hover:bg-purple-600 hover:text-white transition duration-300 cursor-pointer"
            />
          } */}
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
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>
          <NavLink to="/logout" onClick={() => setOpen(false)}>Logout</NavLink>

        </ul>
      </div>
    </>
  );
}

let connectToStore = (state) => ({ commonData: state });
let dispatchToStore = (dispatch) => ({
  setLogin: (value) => dispatch(setLogin(value))
})
export default connect(connectToStore, dispatchToStore)(Header);
