import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'; // Import file CSS cho trang

const NotFound = () => {
  const navigate = useNavigate(); // Dùng useNavigate để điều hướng về trang chủ

  const handleGoHome = () => {
    navigate('/'); // Quay về trang chủ khi nhấn nút
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h3 className="error-message">Oops! Page Not Found</h3>
        <button className="home-button" onClick={handleGoHome}>Go to Home</button>
      </div>
    </div>
  );
};

export default NotFound;
