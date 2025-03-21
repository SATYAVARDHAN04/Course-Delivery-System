import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <ProfileContainer>
      <h2 className="title">🎓 Student Profile</h2>
      <div className="profile-card">
        <div className="profile-image">
          <img src="https://static.vecteezy.com/system/resources/previews/026/632/089/original/profile-icon-symbol-design-illustration-vector.jpg" />
        </div>
        <div className="profile-info">
          <h3 className="name">Satya</h3>
          <p>
            <span> Student ID:</span> 321000001
          </p>
          <p>
            <span> Class:</span> 3rd Year
          </p>
          <p>
            <span> Section:</span> A
          </p>
        </div>
      </div>

      <div className="profile-details">
        <h3>General Information</h3>
        <table>
          <tbody>
            <tr>
              <td> Roll:</td> <td>125</td>
            </tr>
            <tr>
              <td> Academic Year:</td> <td>2022</td>
            </tr>
            <tr>
              <td> Gender:</td> <td>Male</td>
            </tr>
          </tbody>
        </table>
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

  .profile-details {
    margin-top: 20px;
    padding: 20px;
    background: #f8f8f8;
    border-radius: 10px;
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.1);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
  }

  td:first-child {
    font-weight: bold;
    color: #800000;
  }
`;

export default Profile;
