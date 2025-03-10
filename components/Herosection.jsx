function Herosection() {
  return (
    <>
      <style>
        {`
          .hero-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: #f3f4f6;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            margin: 40px 0;
          }

          @media (min-width: 768px) {
            .hero-section {
              flex-direction: row;
            }
          }

          .hero-image-container {
            width: 10cm;
            display: flex;
            justify-content: center;
            border: 2px solid #d1d5db;
            margin-left:5cm;
          }

          .hero-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
          }

          .hero-content {
            width: 100%;
            text-align: center;
            margin-top: 24px;
          }

          @media (min-width: 768px) {
            .hero-content {
              width: 50%;
              text-align: left;
              margin-left: 32px;
              margin-top: 0;
            }
          }

          .hero-title {
            font-size: 2rem;
            font-weight: bold;
            color: #800000;
          }

          .hero-text {
            font-size: 1.125rem;
            color: #4b5563;
            margin-top: 16px;
            line-height: 1.6;
          }
        `}
      </style>

      <section className="hero-section">
        {/* Left Side - Image */}
        <div className="hero-image-container">
          <img 
            src="./Images/intro2.png" 
            alt="Hero" 
            className="hero-image"
          />
        </div>

        {/* Right Side - Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Our Platform
          </h1>
          <p className="hero-text">
            Founded in 1980, GITAM Deemed to be University stands at the intersection of multidisciplinary applied education and translational research. With 12 schools across Bengaluru, Hyderabad, and Visakhapatnam, GITAM empowers students to discover their potential through global perspectives, industry collaborations, and holistic development. Guided by integrity and the pursuit of knowledge and moral values, GITAM shapes future-ready citizens who drive entrepreneurship, innovation, and create meaningful societal impact. Committed to excellence, GITAM fosters diligence, innovation, entrepreneurship, collaboration, and community service.
          </p>
        </div>
      </section>
    </>
  );
}

export default Herosection;
