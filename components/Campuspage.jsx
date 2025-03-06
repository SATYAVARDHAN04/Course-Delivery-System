import { useLocation } from "react-router-dom";
import { useState } from "react";
import Facultycard from "./Facultycard";

function CampusPage() {
  const location = useLocation();
  const { data } = location.state || { data: [] };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaculty = data.filter((faculty) =>
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        {data.length > 0 ? data[0].campus.toUpperCase() + " CAMPUS" : "Campus"}
      </h1>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search faculty..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Faculty Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredFaculty.map((faculty) => (
          <Facultycard
            key={faculty.email}
            image={faculty.image}
            name={faculty.name}
            designation={faculty.designation}
            department={faculty.departments[0]}
            profileUrl={faculty.profile_url}
          />
        ))}
      </div>
    </section>
  );
}

export default CampusPage;
