function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="./Images/logo.png" alt="Logo" className="h-12 w-12" />
            <span className="text-2xl font-semibold ml-2">SATYOLOGY</span>
          </div>
  
          {/* Navigation Links */}
          <ul className="flex space-x-4 text-lg font-semibold" style={{marginLeft: '800px'}}>
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
  
          {/* Profile Icon */}
          <div>
            <img
              src="./Images/profile.png"
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-white hover:border-gray-300 cursor-pointer"
            />
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  