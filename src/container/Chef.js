import React from 'react';
import './Chef.css';
import Subheading from '../components/Subheading/Subheading';

const Chef = () => {
  return (
    <div className="chef" id="chef">
      <div className="chef-image">
        <img src="/assets/chef.png" alt="chef" />
      </div>
      <div className="chef-info">
        <div className='chef-info-content'>
          <Subheading title="Chef's Word" />
          <h1 className="heading mt-1">What We Believe In</h1>
          <div className="chef-content">
            <div className="chef-quote">
              <img src="/assets/quote.png" alt="quote" />
              <p className="long-paragraph">
                Some iconic phrases by Gordon Ramsay: This lamb is so undercooked, it’s following Mary to school!
                I’ve never, ever, ever, ever, ever met someone I believe in as
                little as you. The problem with Yanks is they are wimps.
                This crab is so undercooked I can still hear it singing ‘Under
                the Sea'. I wouldn’t trust you running a bath let alone a
                restaurant. You added so much salt and pepper I can hear the
                dish singing ‘Push It.’
              </p>
            </div>
          </div>
          <div className='signature'>
          <h1 className='heading'>Gordon Ramsay</h1>
          <p className='long-paragraph'>Chef & Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
