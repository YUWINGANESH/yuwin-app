import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Import CSS file for styling

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        College Timetable
        <button className="menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <hr />
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/home" className="sidebar-link">
            Home
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/departments" className="sidebar-link">
            Departments
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/courses" className="sidebar-link">
            Courses
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/faculties" className="sidebar-link">
            Faculties
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings" className="sidebar-link">
            Settings
          </Link>
        </li>
      </ul>
      <footer className="footer">© 2024 College Timetable</footer>
    </nav>
  );
};

export default Dashboard;
