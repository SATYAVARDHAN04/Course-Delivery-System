function Gitamsection() {
  return (
    <>
      <style>
        {`
          .gitam-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 500px;
            position: relative;
            background: 
              linear-gradient(to right, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.8)), 
              url('./Images/gitam.jpg') no-repeat center center/cover;
          }

          .glass-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(3px);
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            padding: 40px;
            width: 100%;
            height: 15cm;
            text-align: center;
          }

          @media (min-width: 768px) {
            .glass-container {
              flex-direction: row;
              text-align: left;
              padding: 50px;
            }
          }

          .gitam-image-container {
            flex: 1;
            max-width: 500px;
            overflow: hidden;
            border-radius: 12px;
            position: relative;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          }

          .gitam-image {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 12px;
          }

          .gitam-content {
            flex: 1;
            padding: 40px;
          }

          .gitam-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 20px;
            text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
          }

          .gitam-text {
            font-size: 1.2rem;
            color: #f3f3f3;
            line-height: 1.8;
            text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <section className="gitam-section">
        <div className="glass-container">
          {/* Left Side - Image */}
          <div className="gitam-image-container">
            <img 
              src="./Images/gitam2.jpg" 
              alt="GITAM Campus" 
              className="gitam-image"
            />
          </div>

          {/* Right Side - Content */}
          <div className="gitam-content">
            <h1 className="gitam-title">
              GITAM University
            </h1>
            <p className="gitam-text"> 
              Founded in 1980, GITAM University stands at the forefront of multidisciplinary 
              education and research. With campuses in Bengaluru, Hyderabad, and Visakhapatnam, 
              GITAM fosters innovation, global collaboration, and academic excellence. 
              Our mission is to create future leaders driven by integrity, entrepreneurship, and societal impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gitamsection;
