import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <>
      <style>
        {`
          .navbar {
            background-color: #800000;
            padding: 10px;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
          }

          .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: auto;
            height:1.7cm;
          }

          .logo-container {
            display: flex;
            align-items: center;
            margin-left:-120px;
          }

          .logo-container img {
            display: flex;
            align-items: center;
            margin-left:-120px;
            height: 3cm;
            margin-top:2cm;
          }

          .logo-text {
            font-size: 2rem;
            font-family: "serif";
            font-weight: bold;
            color: white;
            margin-left: 10px;
          }

          .nav-links {
            display: flex;
            gap: 40px;
            font-size: 18px;
            font-weight: 600;
            margin-left: auto;
          }

          .nav-links a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .nav-links a:hover {
            color: yellow;
          }

          .profile-container {
            position: relative;
            padding-left: 20px;
          }

          .profile-img {
            height: 48px;
            width: 48px;
            border-radius: 50%;
            border: 2px solid gold;
            cursor: pointer;
            transition: border 0.3s ease;
          }

          .profile-img:hover {
            border-color: white;
          }

          .dropdown-menu {
            position: absolute;
            right: 0;
            margin-top: 8px;
            width: 180px;
            background-color: white;
            border: 1px solid gray;
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 50;
            overflow: hidden;
          }

          .dropdown-menu li {
            padding: 12px;
            cursor: pointer;
            transition: background 0.3s ease, color 0.3s ease;
          }

          .dropdown-menu li:hover {
            background-color: #102A43;
            color: white;
          }

          .dropdown-menu li:last-child:hover {
            background-color: red;
          }
        `}
      </style>

      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="logo-container">
            <Link to="/">
              <img
                src="/Images/griffin-crop.png"
                alt="Logo"
                style={{ marginLeft: "50px", marginBottom: "10px" }}
              />
            </Link>
            <span className="logo-text">CDS</span>
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="profile-container">
            <img
              src="/Images/profile.png"
              alt="Profile"
              className="profile-img"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            />

            {/* Dropdown Menu */}
            {dropdownVisible && (
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/settings">Settings</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
