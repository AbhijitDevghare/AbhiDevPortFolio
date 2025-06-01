import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { CiHome } from "react-icons/ci";
import { GrProjects } from "react-icons/gr";
import { FaBlogger, FaLaptopCode } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md text-blue-500 w-full p-4 fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
        <div className="font-bold text-xl md:text-2xl cursor-pointer transition-transform duration-500 hover:scale-105">
          AbhiDevfolio
        </div>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden text-3xl transition-transform duration-300 transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        {/* Nav Menu */}
        <ul className={`
          flex flex-col md:flex-row md:items-center md:justify-center md:gap-10
          fixed md:static top-16 left-0 w-full md:w-auto
          bg-white md:bg-transparent shadow-lg md:shadow-none border md:border-0
          transition-all duration-500 ease-in-out
          ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
          md:translate-x-0 md:opacity-100
          p-6 md:p-0 gap-6 text-center z-40
        `}>
          {[
            { path: "/", label: "Home", icon: <CiHome className='size-5' /> },
            { path: "/about", label: "About Me", icon: <FontAwesomeIcon icon={faUser} /> },
            { path: "/projects", label: "Projects", icon: <GrProjects /> },
            { path: "/blogs", label: "Blogs", icon: <FaBlogger /> },
            { path: "/contact", label: "Contact", icon: <FontAwesomeIcon icon={faEnvelope} /> },
            { path: "/skills", label: "Skills", icon: <FaLaptopCode /> }
          ].map(({ path, label, icon }) => (
            <li key={path} className="flex items-center gap-2 cursor-pointer relative group justify-center md:justify-center">
              <Link to={path} className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                {icon}
                <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
