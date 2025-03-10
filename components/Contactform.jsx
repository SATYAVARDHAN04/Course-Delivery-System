import { useState } from "react";
import styled from "styled-components";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Feedback Submitted Successfully!");
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <StyledWrapper>

      {/* Left Side - Image Section */}
      <div className="image-container">
        <img src="/images/contact2.jpg" alt="Contact Us" />
      </div>
      <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-box">
            <label>Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Write your feedback..."
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  background: url("coffee.webp");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;

  .container {
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    max-width: 450px;
    width: 100%;
    text-align: center;
  }
  .image-container img {
    width: 10cm;
    height: 10cm;
    object-fit: cover;
    margin-left:-3cm;
  }


  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #800000;
    margin-bottom: 20px;
  }

  .input-box {
    text-align: left;
    margin-bottom: 15px;
  }

  .input-box label {
    font-weight: bold;
    color: #800000;
  }

input, textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid black; /* Bottom border only */
  background: transparent;
  font-size: 16px;
  outline: none; /* Removes the default focus outline */
  transition: border-color 0.3s ease-in-out;
}

input:focus, textarea:focus {
  border-bottom: 3px solid #800000; /* Change color on focus */
}

  button {
    width: 100%;
    background-color: #800000;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 15px;
  }

  button:hover {
    background: black;
    transform: scale(1.05);
  }
`;

export default ContactForm;
