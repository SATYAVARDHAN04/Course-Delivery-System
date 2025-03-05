import Campuscard from "./Campuscard";

function Campusselection() {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center mb-10" style={{border:"3px solid black"}}>
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">SELECT CAMPUS</h1>

      {/* Cards Container */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Campuscard image="./Images/vizag.png" title="VIZAG CAMPUS" />
        <Campuscard image="./Images/hyd.png" title="HYDERABAD CAMPUS" />
        <Campuscard image="./Images/blr.png" title="BENGALURU CAMPUS" />
      </div>
    </section>
  );
}

export default Campusselection;
