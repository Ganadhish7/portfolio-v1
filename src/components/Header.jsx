import { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <header className={`  relative bg-blue-200 p-4`}>
      <nav className=" container mx-auto flex items-center justify-between">
        <h2 className=" text-xl font-bold uppercase tracking-widest text-white">
          Ganadhish
        </h2>
        <ul className=" hidden space-x-10 text-center font-bold uppercase text-white sm:flex">
          <li className=" cursor-pointer transition duration-300 hover:text-slate-600">
            <Link to="section-1" smooth={true}>
              Projects
            </Link>
          </li>
          <li className=" cursor-pointer transition duration-300 hover:text-slate-600">
            <Link to="section-2" smooth={true}>
              Skills
            </Link>
          </li>
          <li className=" cursor-pointer transition duration-300 hover:text-slate-600">
            <Link to="section-3" smooth={true}>
              Resume
            </Link>
          </li>
          <li className=" cursor-pointer transition duration-300 hover:text-slate-600">
            <Link to="section-4" smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
        <div className=" sm:hidden">
          <button className=" sm:hidden" onClick={handleMenu}>
            <span className="mb-1 block h-1 w-6 bg-white"></span>
            <span className="mb-1 block h-1 w-6 bg-white"></span>
            <span className="mb-1 block h-1 w-6 bg-white"></span>
          </button>
          {isOpen && (
            <div className=" absolute right-0 top-16 bg-inherit p-4 font-semibold uppercase text-white backdrop-blur-sm md:hidden">
              <ul
                className={`flex-col items-center space-y-4 sm:flex ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <li className=" cursor-pointer ">
                  <Link to="section-1" smooth={true}>
                    Projects
                  </Link>
                </li>
                <li className=" cursor-pointer">
                  <Link to="section-2" smooth={true}>
                    Skills
                  </Link>
                </li>
                <li className=" cursor-pointer">
                  <Link to="section-3" smooth={true}>
                    Resume
                  </Link>
                </li>
                <li className=" cursor-pointer">
                  <Link to="section-4" smooth={true}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

// flex flex-col sm:hidden
export default Header;
