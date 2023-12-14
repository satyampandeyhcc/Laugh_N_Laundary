import React from 'react'
import '../Project.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

<div className="header">
        <div className="header-child" />
        <button className="primary-button1">
          <div className="rectangle1" />
          <div className="login1">Sign In</div>
        </button>
        <button className="primary-button2">
          <div className="rectangle2" />
          <div className="login1">LOGIN</div>
        </button>
        <div className="services-parent">
          <Link className="services">{`Services `}</Link>
          <Link className="contact">Contact</Link>
        </div>
        <img className="pngwing-2-icon" alt="" src="/pngwing-2@2x.png" />
        <Link className="header-item" />
        <div className="logo">LOGO</div>
      </div>

    </div>
  )
}

export default Navbar