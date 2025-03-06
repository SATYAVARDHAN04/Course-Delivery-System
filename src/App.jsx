import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Campusselection from "../components/Campusselection";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";
import CampusPage from "../components/Campuspage";  // Import CampusPage
import Branchselection from "../components/Branchselection";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar remains global */}

      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Herosection />
              <Campusselection /> {/* Campus Selection on Home Page */}
              <Branchselection/>
            </>
          } 
        />

        {/* Static Pages */}
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact" element={<Contactform />} />

        {/* Dynamic Faculty Page */}
        <Route path="/campus/:campusName" element={<CampusPage />} />
      </Routes>

      <Footer /> {/* Footer remains global */}
    </BrowserRouter>
  );
}

export default App;
