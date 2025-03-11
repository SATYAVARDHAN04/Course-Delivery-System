function Campuscard({ image, title }) {
  return (
    <>
      <style>
        {`
          .campus-card {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;
            text-align: center;
            cursor: pointer;
            max-width: 300px;
          }

          .campus-card:hover {
            box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
            transform: translateY(-5px);
          }

          .campus-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 10px;
          }

          .campus-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: #4a4a4a;
            margin-top: 12px;
          }
        `}
      </style>

      <div className="campus-card">
        <img src={image} alt={title} className="campus-image" />
        <h3 className="campus-title">{title}</h3>
      </div>
    </>
  );
}

export default Campuscard;
