import React, { useState } from "react";
import styled from "styled-components";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <SettingsContainer>
      <h2 className="title">Settings</h2>

      {/* Account Settings */}
      <Section>
        <h3>👤 Account Settings</h3>
        <div className="setting-item">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="setting-item">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="setting-item">
          <label>Password:</label>
          <input type="password" placeholder="" />
        </div>
      </Section>

      {/* Notification Settings */}
      <Section>
        <h3>🔔 Notifications</h3>
        <div className="setting-item">
          <label>Email Notifications:</label>
          <ToggleSwitch
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>
        <div className="setting-item">
          <label>SMS Alerts:</label>
          <ToggleSwitch />
        </div>
      </Section>
      <SaveButton>Save Changes</SaveButton>
    </SettingsContainer>
  );
};

// Styled Components
const SettingsContainer = styled.div`
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
`;

const Section = styled.div`
  background: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.1);

  h3 {
    color: #800000;
    margin-bottom: 15px;
  }

  .setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 16px;
  }

  input,
  select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
`;

const SaveButton = styled.button`
  background: #800000;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.3s;

  &:hover {
    background: #a00000;
  }
`;

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider"></span>
      <style>
        {`
          .switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 20px;
          }

          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
          }

          .slider:before {
            position: absolute;
            content: "";
            height: 14px;
            width: 14px;
            left: 4px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
          }

          input:checked + .slider {
            background-color: #800000;
          }

          input:checked + .slider:before {
            transform: translateX(18px);
          }
        `}
      </style>
    </label>
  );
};

export default Settings;
