import React from 'react';
import './Footer.css';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="contact">
          <h1 className="heading">Contact Us</h1>
          <p className='long-paragraph'>
            99 University Avenue, Toronto
          </p>
          <p className='long-paragraph'>
            +647 891 0123
          </p>
        </div>
        <div className="brand">
          <img src="/assets/name-logo-white.png" alt="name" />
          <p style={{textAlign:'center', marginTop:1}} className='long-paragraph'>The best restaurant in the city.</p>
          <div className='icons'>
              <FiFacebook className='icon' color='white' size={30}/>
              <FiInstagram className='icon' color='white' size={30}/>
              <FiTwitter className='icon' color='white' size={30}/>
          </div>
        </div>
        <div className="working-hours">
          <h1 className="heading">Working Hours</h1>
          <p className='long-paragraph'>
            Mon-Thur: 10 am - 2 am
          </p>
          <p className='long-paragraph'>
            Fri-Sun: 11 am - 3 am
          </p>
        </div>
      </div>
      <div className="trademark"></div>
    </div>
  );
};

export default Footer;
