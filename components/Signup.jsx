import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        fullName,
        email,
        password,
      });

      if (response.data.message === "Signup successful") {
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify({ name: fullName, email }));
        // Redirect to /home
        navigate("/home");
      }
    } catch (err) {
      setError("Signup failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <StyledWrapper>
      <div className="content">
        <div className="image-container">
          <img src="./Images/login.png" alt="Signup Illustration" className="signup-image" />
        </div>

        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>SIGN UP</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="input-box">
              <input
                type="text"
                placeholder="FULL NAME"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <i className="bi bi-person"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="EMAIL ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bi bi-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="bi bi-lock"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="CONFIRM PASSWORD"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <i className="bi bi-lock"></i>
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
            <div className="login-link">
              <p>Already have an account? <a href="/login">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

// StyledWrapper remains unchanged
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;

  .content {
    display: flex;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 2px 1px 30px 0 rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px);
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.18);
    padding: 30px;
    width: 100%;
    max-width: 900px;
    margin-top: -3cm;
  }

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .signup-image {
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
  }

  .container {
    flex: 1;
    text-align: center;
    padding: 20px;
  }

  h1 {
    font-family: "Didot", serif;
    font-size: 2.5em;
    font-weight: 900;
    color: #800000;
  }

  .input-box {
    position: relative;
    margin: 15px 0;
  }

  .input-box input {
    width: 100%;
    padding: 12px;
    border: none;
    border-bottom: 2px solid black;
    background: transparent;
    font-size: 16px;
    outline: none;
    text-align: center;
  }

  .signup-button {
    width: 100%;
    background: #800000;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 15px;
  }

  .signup-button:hover {
    background: black;
    transform: scale(1.05);
  }

  .login-link a {
    color: #800000;
    text-decoration: none;
    font-weight: bold;
  }

  .login-link a:hover {
    color: black;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }

    .signup-image {
      width: 100%;
      max-width: 250px;
      margin-bottom: 20px;
    }
  }
`;

export default Signup;