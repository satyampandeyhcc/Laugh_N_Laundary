import React from 'react'
import '../Project.css';
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    
         <div className="footor">
        <div className="footer">
          <div className="footer-child" />
          <div className="nav-b-text">
            <div className="address-of-the">Address of the company</div>
            <div className="mon-fri-8am-8pm">Mon -Fri: 8am-8pm</div>
            <div className="saturday-9am-7pm">Saturday: 9am-7pm</div>
            <div className="sunday-9am-6pm">Sunday: 9am-6pm</div>
            <b className="company-address">Company Address</b>
            <b className="operating-hours">Operating Hours</b>
            <b className="check-us-out">Check us out</b>
            <div className="iconlinkedin-parent">
              <Link className="iconlinkedin">
                <img className="vector-icon8" alt="" src="/vector@2x.png" />
              </Link>
              <Link className="iconinstagram">
                <img className="vector-icon9" alt="" src="/vector@2x.png" />
                <img className="vector-icon10" alt="" src="/vector@2x.png" />
              </Link>
              <Link className="iconinstagram">
                <img className="vector-icon11" alt="" src="/vector@2x.png" />
              </Link>
            </div>
          </div>
          <div className="logo1">
            <div className="logo2">
              <div className="logo2">
                <Link className="laundry"> Laundry</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footor-child" />
        {/* <img className="pngwing-10-icon" alt="" src="/pngwing-10@2x.png" /> */}
        <Link className="design-developed">{`Design & Developed by Appenius `}</Link>
      </div>
    
  )
}

export default Footer