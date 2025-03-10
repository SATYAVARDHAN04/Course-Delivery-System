import Campuscard from "./Campuscard";

function Aboutus() {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center mb-10" >
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-[#800000] mb-4">ABOUT US</h1>

      {/* Description */}
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        We are a passionate team dedicated to innovation and excellence. Our mission is to create impactful solutions that 
        drive change. Meet our team members who bring diverse skills and creativity to the table.
      </p>

      {/* Cards Container */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Campuscard 
          image="./Images/satya.jpeg" 
          title="SATYA VARDHAN" 
          description="Frontend developer with a passion for UI/UX design." 
        />
        <Campuscard 
          image="./Images/anish.jpeg" 
          title="ANISH" 
          description="Backend specialist focusing on database optimization." 
        />
        <Campuscard 
          image="./Images/dinesh.jpeg" 
          title="DINESH" 
          description="Full Stack Developer passionate about AI and cloud computing." 
        />
        <Campuscard 
          image="./Images/naveen.jpeg" 
          title="NAVEEN" 
          description="Machine Learning enthusiast working on innovative solutions." 
        />
      </div>
    </section>
  );
}

export default Aboutus;
