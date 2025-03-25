import React from "react";
import styled from "styled-components";

const Profile = () => {
  // Retrieve user data from localStorage, fallback to "Unknown" and "N/A"
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Unknown", email: "N/A" };
  const { name, email } = user;

  return (
    <ProfileContainer>
      <h2 className="title">🎓 Student Profile</h2>
      <div className="profile-card">
        <div className="profile-image">
          <img src="/Images/logo.png" alt="Profile Logo" />
        </div>
        <div className="profile-info">
          <h3 className="name">{name}</h3>
          <p>
            <span>Email:</span> {email}
          </p>
        </div>
      </div>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;
  font-family: "Arial", sans-serif;

  .title {
    font-size: 26px;
    font-weight: bold;
    color: #800000;
    margin-bottom: 20px;
  }

  .profile-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.1);
  }

  .profile-image img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    border: 3px solid #800000;
    object-fit: cover;
  }

  .profile-info {
    text-align: left;
    font-size: 18px;
  }

  .profile-info .name {
    font-size: 22px;
    font-weight: bold;
    color: #800000;
  }

  .profile-info p {
    margin: 8px 0;
    font-size: 16px;
    color: #333;
  }

  .profile-info span {
    font-weight: bold;
    color: #800000;
  }
`;

export default Profile;