import { Link } from "react-router-dom";
import { useTheme } from "../../utils/themeMode";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header
      className={`p-5 flex justify-between items-center transition-all duration-500 ease-in-out ${
        darkMode ? "bg-gray-900" : "bg-white"
      } text-${darkMode ? "gray-200" : "rose-500"}`}
      style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex items-center">
        <Link to="/" className={`text-lg`}>
          <span className="text-4xl font-bold ml-1 text-yellow-500">Ibadah</span>
        </Link>
      </div>
      <div className="flex items-center relative">
        <div
          onClick={handleDarkModeChange}
          className="flex items-center cursor-pointer mr-4 transition-all duration-300"
        >
          <RiSunLine
            className={`dark:text-gray-500 ${
              darkMode ? "hidden" : "block"
            } transform hover:scale-110 transition-transform duration-300`}
            size={24}
          />
          <RiMoonLine
            className={`dark:text-gray-500 ${
              darkMode ? "block" : "hidden"
            } transform hover:scale-110 transition-transform duration-300`}
            size={24}
          />
          <div className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600 mx-3 focus:outline-none transition-all duration-300">
            <div
              className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                darkMode ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none hover:text-yellow-500 transform hover:scale-110 transition-transform duration-300"
          >
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {showDropdown && (
            <div
              className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 z-10 ${
                darkMode ? "bg-[#111827]" : "bg-white"
              }`}
            >
              <a
                href="/asmaulHusna"
                className={`flex items-center px-4 py-2 hover:text-yellow-500`}
              >
                <svg
                  className="w-8 h-8 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.303,4.362l-2.358,-2.359c-1.074,-1.074 -2.816,-1.074 -3.89,0c-0.799,0.8 -1.757,1.758 -2.358,2.359c-0.234,0.234 -0.552,0.366 -0.884,0.366c-0.85,-0 -2.204,-0 -3.335,-0c-1.519,-0 -2.75,1.231 -2.75,2.75c-0,1.131 -0,2.485 -0,3.335c-0,0.332 -0.132,0.65 -0.366,0.884c-0.601,0.601 -1.559,1.559 -2.359,2.358c-1.074,1.074 -1.074,2.816 0,3.89c0.8,0.799 1.758,1.757 2.359,2.358c0.234,0.234 0.366,0.552 0.366,0.884c-0,0.85 -0,2.204 -0,3.335c-0,1.519 1.231,2.75 2.75,2.75c1.131,0 2.485,0 3.335,0c0.332,0 0.65,0.132 0.884,0.366c0.601,0.601 1.559,1.559 2.358,2.359c1.074,1.074 2.816,1.074 3.89,-0c0.799,-0.8 1.757,-1.758 2.358,-2.359c0.234,-0.234 0.552,-0.366 0.884,-0.366c0.85,0 2.204,0 3.335,0c1.519,0 2.75,-1.231 2.75,-2.75c0,-1.131 0,-2.485 0,-3.335c0,-0.332 0.132,-0.65 0.366,-0.884c0.601,-0.601 1.559,-1.559 2.359,-2.358c1.074,-1.074 1.074,-2.816 -0,-3.89c-0.8,-0.799 -1.758,-1.757 -2.359,-2.358c-0.234,-0.234 -0.366,-0.552 -0.366,-0.884c0,-0.85 0,-2.204 0,-3.335c0,-1.519 -1.231,-2.75 -2.75,-2.75c-1.131,-0 -2.485,-0 -3.335,-0c-0.332,-0 -0.65,-0.132 -0.884,-0.366Zm-1.061,1.06c0.516,0.516 1.215,0.806 1.945,0.806c0.85,-0 2.204,-0 3.335,-0c0.69,-0 1.25,0.56 1.25,1.25c0,1.131 0,2.485 0,3.335c0,0.73 0.29,1.429 0.806,1.945c0.601,0.601 1.558,1.558 2.358,2.358c0.488,0.488 0.488,1.28 -0,1.768c-0.8,0.8 -1.757,1.757 -2.358,2.358c-0.516,0.516 -0.806,1.215 -0.806,1.945c0,0.85 0,2.204 0,3.335c0,0.69 -0.56,1.25 -1.25,1.25c-1.131,0 -2.485,0 -3.335,0c-0.73,0 -1.429,0.29 -1.945,0.806c-0.601,0.601 -1.558,1.558 -2.358,2.358c-0.488,0.488 -1.28,0.488 -1.768,-0c-0.8,-0.8 -1.757,-1.757 -2.358,-2.358c-0.516,-0.516 -1.215,-0.806 -1.945,-0.806c-0.85,0 -2.204,0 -3.335,0c-0.69,0 -1.25,-0.56 -1.25,-1.25c-0,-1.131 -0,-2.485 -0,-3.335c-0,-0.73 -0.29,-1.429 -0.806,-1.945c-0.601,-0.601 -1.558,-1.558 -2.358,-2.358c-0.488,-0.488 -0.488,-1.28 0,-1.768c0.8,-0.8 1.757,-1.757 2.358,-2.358c0.516,-0.516 0.806,-1.215 0.806,-1.945c-0,-0.85 -0,-2.204 -0,-3.335c-0,-0.69 0.56,-1.25 1.25,-1.25c1.131,-0 2.485,-0 3.335,-0c0.73,-0 1.429,-0.29 1.945,-0.806c0.601,-0.601 1.558,-1.558 2.358,-2.358c0.488,-0.488 1.28,-0.488 1.768,0l2.358,2.358Zm-4.266,9.738c-0.02,0.375 -0.029,0.647 -0.029,0.816c-0,1.137 0.178,2.467 0.534,3.991c-0.248,0.099 -0.621,0.195 -1.12,0.289c-0.5,0.094 -0.913,0.131 -1.239,0.111c-0.099,-0.593 -0.168,-1.083 -0.208,-1.469c-0.04,-0.385 -0.059,-0.786 -0.059,-1.201c-0,-0.347 0.005,-0.623 0.014,-0.831c-0.455,0.01 -0.89,-0.062 -1.305,-0.215c-0.416,-0.154 -0.757,-0.394 -1.024,-0.72c-0.267,-0.326 -0.401,-0.732 -0.401,-1.217c0,-0.415 0.097,-0.865 0.29,-1.35c0.193,-0.484 0.475,-0.895 0.845,-1.231c0.371,-0.336 0.804,-0.505 1.299,-0.505c0.84,-0.019 1.461,0.302 1.862,0.965c0.4,0.663 0.581,1.518 0.541,2.567Zm6.38,-0c-0.02,0.375 -0.03,0.647 -0.03,0.816c0,1.137 0.178,2.467 0.535,3.991c-0.248,0.099 -0.621,0.195 -1.121,0.289c-0.499,0.094 -0.912,0.131 -1.239,0.111c-0.098,-0.593 -0.168,-1.083 -0.207,-1.469c-0.04,-0.385 -0.06,-0.786 -0.06,-1.201c0,-0.347 0.005,-0.623 0.015,-0.831c-0.455,0.01 -0.89,-0.062 -1.305,-0.215c-0.416,-0.154 -0.757,-0.394 -1.024,-0.72c-0.267,-0.326 -0.401,-0.732 -0.401,-1.217c0,-0.415 0.097,-0.865 0.29,-1.35c0.192,-0.484 0.474,-0.895 0.845,-1.231c0.371,-0.336 0.804,-0.505 1.299,-0.505c0.84,-0.019 1.461,0.302 1.862,0.965c0.4,0.663 0.581,1.518 0.541,2.567Zm-8.724,-0.638c0.376,-0 0.712,-0.03 1.009,-0.089c-0.168,-0.188 -0.376,-0.334 -0.623,-0.438c-0.247,-0.104 -0.49,-0.156 -0.727,-0.156c-0.188,0 -0.344,0.045 -0.468,0.134c-0.123,0.089 -0.18,0.207 -0.17,0.356c0.099,0.128 0.425,0.193 0.979,0.193Zm6.38,-0c0.376,-0 0.712,-0.03 1.009,-0.089c-0.168,-0.188 -0.376,-0.334 -0.623,-0.438c-0.248,-0.104 -0.49,-0.156 -0.727,-0.156c-0.188,0 -0.344,0.045 -0.468,0.134c-0.123,0.089 -0.18,0.207 -0.17,0.356c0.099,0.128 0.425,0.193 0.979,0.193Z"
                    clipRule="evenodd"
                  />
                </svg>
                Asmaul Husna
              </a>
              <a
                href="/about"
                className={`flex items-center px-4 py-2 hover:text-yellow-500`}
              >
                <svg
                  className="w-7 h-7 mr-2 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke="currentColor"
                    d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                About
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
