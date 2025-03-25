import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import Herosection from "../components/Herosection";
import Gitamsection from "../components/Gitamsection";
import Campusselection from "../components/Campusselection";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";
import CampusPage from "../components/Campuspage";
import Branchselection from "../components/Branchselection";
import Loginform from "../components/Loginform";
import SubmitFeedback from "../components/Submitfeedback";
import Signup from "../components/Signup"; // ✅ Import the SignUp Page
import Viewfeedback from "../components/Viewfeedback";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ✅ Set SignUp as the default route */}
        <Route path="/" element={<Signup />} />

        {/* Previous home page moved to /home */}
        <Route
          path="/home"
          element={
            <>
              <Herosection />
              <Gitamsection />
              <Campusselection />
              <Branchselection />
            </>
          }
        />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact" element={<Contactform />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/campus/:campusName" element={<CampusPage />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/view-feedback" element={<Viewfeedback />} /> {/* New route */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;