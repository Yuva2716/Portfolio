import React from 'react';
import './Sidebar.css';
import {Link, useNavigate} from "react-router-dom"

import { MdHome } from "react-icons/md";


const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
                <ul className="side-item">
                        <Link to='/'>
                            <li className="sidebar-items">Home</li>
                        </Link>
                        <Link to='/about'>
                            <li className="sidebar-items">About</li>
                        </Link>
                        <Link to='/skills'>
                            <li className="sidebar-items">Skills</li>
                        </Link>
                        <Link to='/all-projects'>
                            <li className="sidebar-items">Projects</li>
                        </Link>
                        <Link to='/contact'>
                            <li className="sidebar-items">Contact</li>
                        </Link>                
                </ul>
    </div>
  );
};

export default Sidebar;
