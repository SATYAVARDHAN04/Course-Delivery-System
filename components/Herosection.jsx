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
            padding: 32px;
            margin: 40px 0;
          }

          @media (min-width: 768px) {
            .hero-section {
              flex-direction: row;
            }
          }

          .hero-image-container {
            width: 300px; /* Increased image size */
            display: flex;
            justify-content: flex-end; /* Move image to the right */
            padding: 8px;
            margin-top: 20px;
          }

          @media (min-width: 768px) {
            .hero-image-container {
              width: 450px; /* Further increased size on larger screens */
              margin-left: 50px; /* Push image further right */
            }
          }

          .hero-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
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
            font-size: 2.5rem;
            font-weight: bold;
            color: #800000;
          }

          .hero-text {
            font-size: 1.125rem;
            color: #4b5563;
            margin-top: 16px;
            line-height: 1.6;
          }

          .highlight {
            font-weight: bold;
            color: #800000;
          }
        `}
      </style>

      <section className="hero-section">
        {/* Left Side - Content */}
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Platform</h1>
          <p className="hero-text">
            Discover everything you need to know about GITAM’s esteemed faculty and academic resources in one place. 
            Our platform provides detailed insights into faculty profiles, research areas, and available learning materials 
            to enhance your academic journey. Stay connected, explore expert guidance, and access essential university 
            resources effortlessly.
            <br /><br />
            <span className="highlight">Start exploring now!</span>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hero-image-container">
          <img 
            src="./Images/intro2.png" 
            alt="Hero" 
            className="hero-image"
          />
        </div>
      </section>
    </>
  );
}

export default Herosection;
