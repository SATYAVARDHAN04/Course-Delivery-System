import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Gitamsection from "../components/Gitamsection";
import Campusselection from "../components/Campusselection";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";
import CampusPage from "../components/Campuspage";  
import Branchselection from "../components/Branchselection";
import Loginform from "../components/Loginform";  
import SubmitFeedback from "../components/Submitfeedback";  // Import the Feedback Component

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
              <Gitamsection />
              <Campusselection /> {/* Campus Selection on Home Page */}
              <Branchselection />
            </>
          } 
        />

        {/* Static Pages */}
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact" element={<Contactform />} />
        <Route path="/login" element={<Loginform />} />

        {/* Dynamic Faculty Page */}
        <Route path="/campus/:campusName" element={<CampusPage />} />

        {/* Submit Feedback Page Route */}
        <Route path="/submit-feedback" element={<SubmitFeedback />} />  
      </Routes>

      <Footer /> {/* Footer remains global */}
    </BrowserRouter>
  );
}

export default App;
