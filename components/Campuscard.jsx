function Campuscard({ image, title }) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-xl font-semibold text-gray-700 mt-4">{title}</h3>
      </div>
    );
  }
  
  export default Campuscard;
  