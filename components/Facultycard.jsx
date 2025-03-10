function FacultyCard({ image, name, designation, department, profileUrl }) {
  return (
    <div className="faculty-card">
      <style>
        {`
          .faculty-card {
            background: white;
            border-radius: 12px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            padding: 24px;
            transition: transform 0.3s, box-shadow 0.3s;
            text-align: center;
            border: 1px solid #ddd;
          }

          .faculty-card:hover {
            transform: scale(1.05);
            box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
          }

          .faculty-image {
            width: 100%;
            height: 192px;
            border-radius: 8px;
            object-fit: cover;
          }

          .faculty-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: #374151;
            margin-top: 16px;
          }

          .faculty-designation {
            font-size: 1rem;
            color: #6b7280;
            font-weight: 500;
            margin-top: 4px;
          }

          .faculty-department {
            font-size: 1rem;
            color: #2563eb;
            font-weight: 600;
            margin-top: 4px;
          }

          .profile-button {
            display: block;
            margin-top: 20px;
            background-color: #2563eb;
            color: white;
            text-align: center;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            text-decoration: none;
            transition: background-color 0.3s, transform 0.3s;
          }

          .profile-button:hover {
            background-color: #1e40af;
            transform: scale(1.05);
          }
        `}
      </style>

      {/* Image Section */}
      <img src={image} alt={name} className="faculty-image" />

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
  );
}

export default FacultyCard;
