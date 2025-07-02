import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import ffLogo from "../../assets/images/ffLogo.png";
import Logout from "../../components/pages/Login/LogOutForm";
import { getUserinfo } from "../../services/auth.services";
import "./Navbar.css";
import { BsFillMoonFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const userInfo = getUserinfo();

  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const topFunction = () => {
    setNav(!nav);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleToggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="w-full z-50 fixed bg-gray-50 dark:bg-black dark:text-white border-b dark:border-gray-600 border-gray-200">
        <div className="py-4 container  md:px-20 h-24 font-semibold flex justify-between items-center ">
          <div className=" ">
            <div className="cursor-pointer flex items-center gap-1">
              <NavLink
                onClick={topFunction}
                to="/"
                className=" text-white duration-500"
              >
                <img className="w-16" src={ffLogo} alt="logo" />
              </NavLink>
              <div className="flex space-x-2 md:text-3xl text-2xl font-bold">
                <h1>BD</h1>
                <h1 className="text-[#023e8a] font-bold">Food</h1>
                <h1>
                  <span>Flow</span>
                </h1>
              </div>
            </div>
          </div>

          <div className=" ">
            <ul className="hidden cursor-pointer md:flex gap-7 items-center justify-center">
              <li>
                <NavLink onClick={topFunction} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={topFunction} to="/all-supplies">
                  All Supplies
                </NavLink>
              </li>

              <li>
                <NavLink onClick={topFunction} to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink onClick={topFunction} to="/contact">
                  Contact
                </NavLink>
              </li>
              {userInfo && (
                <li>
                  <NavLink
                    onClick={topFunction}
                    to="/dashboard"
                    className=" duration-500 cursor-pointer"
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
              <div className=" ">
                <button
                  onClick={handleToggleTheme}
                  className="border-2 border-[#023e8a] px-4 py-1 rounded-full"
                >
                  {!theme ? (
                    <BsFillMoonFill size={20} className="w-5 text-[#023e8a]" />
                  ) : (
                    <HiOutlineLightBulb size={20} className="text-[#ffffff]" />
                  )}
                </button>
              </div>
              <Logout />
            </ul>
          </div>
          <div
            onClick={topFunction}
            className="md:hidden duration-500 transition-all"
          >
            {!nav ? (
              <AiOutlineMenu size={25} />
            ) : (
              <AiOutlineClose className="text-[#023e8a]" size={25} />
            )}
          </div>
        </div>
        {/* mobile menu  */}

        <div>
          <div
            className={
              !nav
                ? "hidden"
                : "absolute duration-500 transition-all bg-black  font-semibold w-full  h-screen md:hidden px-8"
            }
          >
            <li className="py-6 list-none">
              <NavLink onClick={topFunction} to="/">
                Home
              </NavLink>
            </li>
            <div className="border-b-2 border-[#023e8a]"></div>
            <li className="py-6 list-none">
              {" "}
              <NavLink onClick={topFunction} to="/all-supplies">
                All Supplies
              </NavLink>
            </li>

            <div className="border-b-2 border-[#023e8a]"></div>
            <li className="py-6 list-none">
              <NavLink onClick={topFunction} to="/contact">
                Contact
              </NavLink>
            </li>
            <div className="border-b-2 border-[#023e8a]"></div>
            {userInfo && (
              <li className="py-6 list-none">
                <NavLink
                  onClick={topFunction}
                  to="/dashboard"
                  className="text-white duration-500 cursor-pointer"
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            <div className="border-b-2 border-[#023e8a]"></div>
            <div className="py-6 list-none">
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
