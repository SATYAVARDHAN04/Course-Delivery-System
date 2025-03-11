function FacultyCard({ image, name, designation, department, profileUrl }) {
  return (
    <>
      <style>
        {`
          .faculty-card {
            background: linear-gradient(145deg, rgb(255, 255, 255), #e9ecef);
            border-radius: 14px;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15),
                        -5px -5px 15px rgba(0, 0, 0, 0.13);
            padding: 20px;
            width: 260px;
            text-align: center;
            transition: all 0.3s ease-in-out;
            border: 2px solid #d1d5db;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .faculty-card:hover {
            transform: translateY(-4px);
            box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.2);
            border-color: #800000;
          }

          .faculty-image-container {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 4px solid #800000;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: white;
            margin-bottom: 15px;
          }

          .faculty-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }

          .faculty-name {
            font-size: 1.2rem;
            font-weight: bold;
            color: #2c3e50;
            margin-top: 5px;
          }

          .faculty-designation {
            font-size: 0.9rem;
            color: #555;
            font-weight: 500;
            margin-top: 5px;
          }

          .faculty-department {
            font-size: 0.9rem;
            color: #800000;
            font-weight: 600;
            margin-top: 5px;
          }

          .profile-button {
            display: inline-block;
            margin-top: 12px;
            background: #800000;
            color: white;
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 0.9rem;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          }

          .profile-button:hover {
            background: #600000;
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="faculty-card">
        {/* Centered Image Section */}
        <div className="faculty-image-container">
          <img src={image} alt={name} className="faculty-image" />
        </div>

        {/* Faculty Details */}
        <h3 className="faculty-name">{name}</h3>
        <p className="faculty-designation">{designation}</p>
        <p className="faculty-department">{department}</p>

        {/* Profile Button */}
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-button"
        >
          View Profile
        </a>
      </div>
    </>
  );
}

export default FacultyCard;
