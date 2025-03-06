import { useState } from "react";

function Branchselection() {
  // State variables
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");
  const [resource, setResource] = useState("");

  // Branch-wise subjects
  const subjects = {
    CSE: ["Data Structures", "Algorithms", "Operating Systems", "DBMS"],
    ECE: ["Circuit Theory", "Digital Electronics", "Communication Systems"],
  };

  // Available resources
  const resources = ["PYQ", "Recommended Videos", "Notes", "Textbooks"];

  // Handle branch selection
  const handleBranchChange = (e) => {
    setBranch(e.target.value);
    setSubject(""); // Reset subject when branch changes
    setResource(""); // Reset resource when branch changes
  };

  // Handle subject selection with validation
  const handleSubjectChange = (e) => {
    if (!branch) {
      alert("Please select a branch first!");
      return;
    }
    setSubject(e.target.value);
    setResource(""); // Reset resource when subject changes
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10 mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Course</h2>

      {/* Dropdowns Container */}
      <div className="flex gap-6">
        {/* Branch Dropdown */}
        <select
          value={branch}
          onChange={handleBranchChange}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
        </select>

        {/* Subject Dropdown */}
        <select
          value={subject}
          onChange={handleSubjectChange}
          disabled={!branch}
          className={`p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 ${
            !branch ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Select Subject</option>
          {branch &&
            subjects[branch].map((subj, index) => (
              <option key={index} value={subj}>
                {subj}
              </option>
            ))}
        </select>

        {/* Resource Dropdown */}
        <select
          value={resource}
          onChange={(e) => setResource(e.target.value)}
          disabled={!subject}
          className={`p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 ${
            !subject ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Select Resource</option>
          {resources.map((res, index) => (
            <option key={index} value={res}>
              {res}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      {resource && (
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
          Submit
        </button>
      )}
    </div>
  );
}

export default Branchselection;
