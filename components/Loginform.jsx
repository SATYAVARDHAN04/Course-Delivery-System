import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log('Login response:', response.data);

      if (response.data.message === "Login successful") {
        const { FullName, Email } = response.data.user;
        localStorage.setItem("user", JSON.stringify({ name: FullName, email: Email }));
        navigate("/home");
      } else {
        setError(response.data.error || "Login failed");
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error('Login error:', err.response ? err.response.data : err);
    }
  };

  return (
    <StyledWrapper>
      <div className="content">
        <div className="image-container">
          <img src="./Images/login.png" alt="Login Illustration" className="login-image" />
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="input-box">
              <input
                type="email"
                placeholder="USER ID/EMAIL ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bi bi-person"></i>
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
            <div className="remember-me">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit" className="login-button">Login</button>
            <div className="forgot">
              <a href="forgot password.html">Forgot password?</a>
            </div>
            <div className="register-link">
              <p>
                Don't have an account? <a href="/">Sign up</a>
              </p>
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

  .login-image {
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

  .remember-me {
    font-size: 14px;
    text-align: left;
  }

  .login-button {
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

  .login-button:hover {
    background: black;
    transform: scale(1.05);
  }

  .forgot a,
  .register-link a {
    color: #800000;
    text-decoration: none;
    font-weight: bold;
  }

  .forgot a:hover,
  .register-link a:hover {
    color: black;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }

    .login-image {
      width: 100%;
      max-width: 250px;
      margin-bottom: 20px;
    }
  }
`;

export default Loginform;