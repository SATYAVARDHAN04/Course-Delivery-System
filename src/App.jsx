import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile"; // ✅ Import the Profile Page
import Settings from "../components/Settings"; // ✅ Settings Page
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

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
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

        {/* ✅ Profile & Settings Pages */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
