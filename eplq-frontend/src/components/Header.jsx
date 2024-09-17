import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar, Dropdown } from "flowbite-react";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <header className={`bg-white dark:bg-gray-900 shadow-lg`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
           EPLQ
          </span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/3">
          <input
            type="text"
            className="px-4 py-2 w-full rounded-l-md border dark:bg-gray-800 dark:text-white"
            placeholder="Search articles, tutorials..."
          />
          <button className="bg-indigo-500 text-white p-2 rounded-r-md">
            <AiOutlineSearch />
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 dark:text-white hover:text-indigo-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 dark:text-white hover:text-indigo-500">
            About
          </Link>
          <Link to="/articles" className="text-gray-800 dark:text-white hover:text-indigo-500">
            Articles
          </Link>
          <Link to="/contact" className="text-gray-800 dark:text-white hover:text-indigo-500">
            Contact
          </Link>
        </nav>

        {/* Dark Mode Toggle & User Profile */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-gray-800 dark:text-white">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar img="https://source.unsplash.com/80x80/?portrait" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm font-medium">User Name</span>
              <span className="block text-xs text-gray-500">user@example.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-800 dark:text-white"
          onClick={toggleMobileMenu}
        >
          <FaBars />
        </button>

        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
         <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <Link to='/signin'>
          Signin
          </Link> 
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/" className="text-gray-800 dark:text-white hover:text-indigo-500">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 dark:text-white hover:text-indigo-500">
              About
            </Link>
            <Link to="/articles" className="text-gray-800 dark:text-white hover:text-indigo-500">
              Articles
            </Link>
            <Link to="/contact" className="text-gray-800 dark:text-white hover:text-indigo-500">
              Contact
            </Link>
          </nav>
          
        </div>
      )}
      
    </header>
  );
}
