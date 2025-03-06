function FacultyCard({ image, name, designation, department, profileUrl }) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-xl font-semibold text-gray-700 mt-4">{name}</h3>
        <p className="text-gray-500">{designation}</p>
        <p className="text-blue-600">{department}</p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700"
        >
          View Profile
        </a>
      </div>
    );
  }
  
  export default FacultyCard;
  