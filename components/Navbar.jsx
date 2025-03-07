import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/Images/logo.png" alt="Logo" className="h-12 w-12" />
          <span className="text-2xl font-semibold ml-2">CMS</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-semibold ml-auto">
          <li className="hover:text-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="hover:text-gray-300" style={{ marginRight: "80px" }}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-gray-300" style={{ marginRight: "80px" }}>
            <Link to="/login">Login/Sign Up</Link>
          </li>
        </ul>

        {/* Profile Section */}
        <div className="relative">
          <img
            src="/Images/profile.png"
            alt="Profile"
            className="h-10 w-10 rounded-full border-2 border-white hover:border-gray-300 cursor-pointer"
            onClick={() => setDropdownVisible(!dropdownVisible)} // Toggle Dropdown
          />

          {/* Dropdown Menu */}
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-50">
              <ul>
                <li className="px-4 py-2 text-black hover:bg-blue-500 hover:text-white cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 text-black hover:bg-blue-500 hover:text-white cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 text-black hover:bg-blue-500 hover:text-white cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
