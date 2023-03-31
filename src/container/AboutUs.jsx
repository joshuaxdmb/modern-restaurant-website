import React from 'react';
import { Button } from 'react-bootstrap';
import CustomButton from '../components/CustomButton';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus" id="about">
      <div className="aboutus-content">
        <div className="aboutus-content-about">
          <h1 className="heading">About Us</h1>
          <img src="/assets/spoon.svg" alt="spoon" className="spoon_img mb-3" />
          <p style={{ textAlign: 'end', color: 'white' }}>
            Ronco's was established in 2002 by the founder chef. The business
            was then passed to his son who now runs the business. Since its
            inception Ronco's has expanded into 3 locations around the city,
            each with a different theme but maintaining the same quality of food
            and exceptional customer service.
          </p>
          <CustomButton>Know More</CustomButton>
        </div>
      </div>
      <div className="aboutus-content-knife">
        <img src="/assets/knife.png" alt="knife" />
      </div>
      <div className="aboutus-content">
        <div className="aboutus-content-history">
          <h1 className="heading">Our History</h1>
          <img src="/assets/spoon.svg" alt="spoon" className="spoon_img mb-3" />
          <p style={{ textAlign: 'start', color: 'white' }}>
            Ronco's was established in 2002 by the founder chef. The business
            was then passed to his son who now runs the business. Since its
            inception Ronco's has expanded into 3 locations around the city,
            each with a different theme but maintaining the same quality of food
            and exceptional customer service.
          </p>
          <CustomButton>Know More</CustomButton>
        </div>
      </div>
      <div className="aboutus-overlay">
        <img style={{ opacity: '20%', zIndex:0, height:400}} src="/assets/r.png" alt="R" />
      </div>
    </div>
  );
};

export default AboutUs;
