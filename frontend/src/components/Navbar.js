import './Navbar.css';

import React from 'react'
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';


export default function Navbar() {
  const { logout } = useLogout();
  const { isAuthenticated, user } = useAuthContext();

  const handleClick = () => {
    logout();
  }


  return (
    <div className="navbar">
      <ul className="list">
        {isAuthenticated && (
            <li>
              <Link to="/students">Students</Link>
            </li>
        )}
        {isAuthenticated && (
            <li>
              <Link to="/teachers">Teachers</Link>
            </li>
        )}
          <li>
            <Link to="/about-us">About the project</Link>
          </li>
      </ul>

      <p>IDS-Test</p>

      {isAuthenticated ? (
        <div className="options">
          <span>Hello, {user.username}</span>
          <button onClick={handleClick}>Log out</button>
        </div>
      ) : (
        <div className="options">
          <Link to="/login">Sign in</Link>
          {/* <Link to="/signup">Sign up</Link> */}
        </div>
      )}
    </div>
  );
}
