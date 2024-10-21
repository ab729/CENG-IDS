import './Navbar.css';

import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="list">
        <li>
            <Link to="/students">Students</Link>
        </li>
        <li>
            <Link to='/teachers'>Teachers</Link>
        </li>
        <li>
            <Link to='/about-us'>About the project</Link>
        </li>
      </ul>
        <p>IDS-Test</p>
        <div></div>
    </div>
  );
}
