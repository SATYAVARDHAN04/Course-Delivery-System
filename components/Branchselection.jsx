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
    setSubject("");
    setResource("");
  };

  // Handle subject selection with validation
  const handleSubjectChange = (e) => {
    if (!branch) {
      alert("Please select a branch first!");
      return;
    }
    setSubject(e.target.value);
    setResource("");
  };

  return (
    <>
      <style>
        {`
          .selection-container {
            background: linear-gradient(to right, #f8fafc, #e2e8f0);
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 40px auto;
            text-align: center;
          }

          .title {
            font-size: 2rem;
            font-weight: bold;
            color: #800000;
            margin-bottom: 20px;
          }

          .dropdown-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
          }

          .dropdown {
            width: 80%;
            padding: 10px;
            border: 2px solid #cbd5e1;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          .dropdown:focus {
            outline: none;
            border-color: #800000;
            box-shadow: 0px 4px 12px rgba(59, 130, 246, 0.3);
          }

          .disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .submit-button {
            margin-top: 20px;
            padding: 10px 24px;
            background-color: #800000;
            color: white;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.3s ease, background-color 0.3s ease;
          }

          .submit-button:hover {
            background-color:rgb(0, 0, 0);
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="selection-container">
        <h2 className="title">Select Your Course</h2>

        {/* Dropdowns Container */}
        <div className="dropdown-container">
          {/* Branch Dropdown */}
          <select value={branch} onChange={handleBranchChange} className="dropdown">
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
          </select>

          {/* Subject Dropdown */}
          <select
            value={subject}
            onChange={handleSubjectChange}
            disabled={!branch}
            className={`dropdown ${!branch ? "disabled" : ""}`}
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
            className={`dropdown ${!subject ? "disabled" : ""}`}
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
        {resource && <button className="submit-button">Submit</button>}
      </div>
    </>
  );
}

export default Branchselection;
