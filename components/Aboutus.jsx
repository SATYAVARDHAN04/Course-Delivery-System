import Campuscard from "./Campuscard";

function Aboutus() {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center mb-10" style={{border:"3px solid black"}}>
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">ABOUT US</h1>

      {/* Cards Container */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Campuscard image="./Images/GOAT.png" title="SATYA VARDHAN" />
        <Campuscard image="./Images/GOAT.png" title="ANISH" />
        <Campuscard image="./Images/GOAT.png" title="DINESH" />
        <Campuscard image="./Images/GOAT.png" title="NAVEEN" />
      </div>
    </section>
  );
}

export default Aboutus;
