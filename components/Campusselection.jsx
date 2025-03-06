import { useNavigate } from "react-router-dom";
import Campuscard from "./Campuscard";
import vskp from "../src/utils/vsp";
import blr from "../src/utils/blr";
import hyd from "../src/utils/hyd";

function CampusSelection() {
  const navigate = useNavigate();

  const handleCampusClick = (campusName, data) => {
    navigate(`/campus/${campusName.toLowerCase()}`, { state: { data } });
  };

  return (
    <section className="bg-gray-100 py-12 px-6 text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">SELECT CAMPUS</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div onClick={() => handleCampusClick("vizag", vskp)} className="cursor-pointer">
          <Campuscard image="./Images/vizag.png" title="VIZAG CAMPUS" />
        </div>
        <div onClick={() => handleCampusClick("hyderabad", hyd)} className="cursor-pointer">
          <Campuscard image="./Images/hyd.png" title="HYDERABAD CAMPUS" />
        </div>
        <div onClick={() => handleCampusClick("bengaluru", blr)} className="cursor-pointer">
          <Campuscard image="./Images/blr.png" title="BENGALURU CAMPUS" />
        </div>
      </div>
    </section>
  );
}

export default CampusSelection;
