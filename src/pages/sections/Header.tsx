import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import useDarkMode from "~/hooks/useDarkMode";
import logoNoxun from "~/images/LooNoxun-256x300.png";
import { headerMenuData } from "~/constants/landing.constants";
import { useState } from "react";

function Header() {
  const { theme, setTheme } = useDarkMode();

  const handleDarkMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const [isActive, setIsActive] = useState(0);

  return (
    <header className="fixed w-full">
      <nav className="border-gray-200 bg-white py-2.5 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
          <a href="#" className="flex items-center">
            <img
              src={logoNoxun}
              // src="https://demo.themesberg.com/landwind/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Landwind Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Noxun Logística
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button
              className="rounded-full bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 sm:mr-2 lg:mr-0 lg:px-5 lg:py-2.5"
              onClick={() => handleDarkMode()}
            >
              {theme === "light" ? <FaMoon /> : <MdSunny />}
            </button>
            {/* <a
              href="#"
              target="_blank"
              className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 sm:mr-2 lg:mr-0 lg:px-5 lg:py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Download
            </a> */}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {headerMenuData.map((item, i) => (
                <li key={item.id}>
                  <a
                    onClick={() => {
                      setIsActive(i);
                    }}
                    key={item.id}
                    href={item.link}
                    className={`${i === isActive ? "text-purple-700 dark:text-white" : "dark:text-gray-400"} lg:dark:hover:text-white" block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700 lg:dark:hover:bg-transparent`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
