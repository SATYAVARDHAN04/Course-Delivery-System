import { Link } from "react-router-dom";

function Facultycard({ image, name, designation, department, profileUrl }) {
  return (
    <>
      <style>
        {`
          .faculty-card {
            background: linear-gradient(145deg, #ffffff, #f1f5f9); /* Softer gradient */
            border-radius: 16px; /* Slightly larger radius for a modern look */
            box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1), /* Subtle shadow */
                        -6px -6px 20px rgba(255, 255, 255, 0.8); /* Light inset */
            padding: 24px; /* Increased padding for breathing room */
            width: 280px; /* Slightly wider card */
            text-align: center;
            transition: all 0.4s ease-in-out; /* Smoother transition */
            border: 2px solid #e5e7eb; /* Light gray border */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between; /* Better spacing */
            min-height: 360px; /* Consistent height */
          }

          .faculty-card:hover {
            transform: translateY(-6px); /* More pronounced lift */
            box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
            border-color: #800000; /* Maroon border on hover */
            background: linear-gradient(145deg, #fefefe, #ebedf0); /* Subtle hover gradient */
          }

          .faculty-image-container {
            width: 130px; /* Slightly larger image */
            height: 130px;
            border-radius: 50%;
            border: 4px solid #800000; /* Consistent maroon border */
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: #ffffff; /* White background for image */
            margin-bottom: 20px; /* More spacing */
            transition: border-color 0.3s ease;
          }

          .faculty-card:hover .faculty-image-container {
            border-color: #600000; /* Darker maroon on hover */
          }

          .faculty-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }

          .faculty-name {
            font-size: 1.3rem; /* Slightly larger text */
            font-weight: 700; /* Bolder */
            color: #1e293b; /* Darker slate for contrast */
            margin: 8px 0; /* Consistent spacing */
            line-height: 1.4; /* Better readability */
          }

          .faculty-designation {
            font-size: 0.95rem; /* Slightly larger */
            color: #64748b; /* Softer gray */
            font-weight: 500;
            margin: 6px 0; /* Adjusted spacing */
            line-height: 1.3;
          }

          .faculty-department {
            font-size: 0.95rem;
            color: #800000; /* Maroon for emphasis */
            font-weight: 600;
            margin: 6px 0;
            letter-spacing: 0.5px; /* Slight letter spacing for elegance */
          }

          .profile-button {
            display: inline-block;
            margin: 10px 0; /* Even spacing between buttons */
            background: #800000; /* Maroon base color */
            color: #ffffff;
            padding: 10px 18px; /* Slightly larger padding */
            border-radius: 24px; /* More rounded */
            font-size: 0.95rem;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 4px 12px rgba(128, 0, 0, 0.2); /* Subtle shadow */
          }

          .profile-button:hover {
            background: #600000; /* Darker maroon */
            transform: translateY(-2px); /* Slight lift */
            box-shadow: 0 6px 16px rgba(128, 0, 0, 0.3); /* Stronger shadow */
            color: #fff; /* Ensure text stays white */
          }
        `}
      </style>

      <div className="faculty-card">
        <div className="faculty-image-container">
          <img src={image} alt={name} className="faculty-image" />
        </div>
        <h3 className="faculty-name">{name}</h3>
        <p className="faculty-designation">{designation}</p>
        <p className="faculty-department">{department}</p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-button"
        >
          View Profile
        </a>
        <Link
          to="/view-feedback"
          state={{ facultyName: name }}
          className="profile-button"
        >
          View Feedback
        </Link>
        <Link
          to="/submit-feedback"
          state={{ facultyName: name }}
          className="profile-button"
        >
          Submit Feedback
        </Link>
      </div>
    </>
  );
}

export default Facultycard;