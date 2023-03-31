import React from 'react'
import CustomButton from '../components/CustomButton'
import Title from '../components/Title'
import './FindUs.css'

const FindUs = () => {
  return (
    <div className='findus' id='contact'>
    <div className='content'>
    <div className='content-inner'>
        <Title heading='Contact'>Find Us</Title>
        <p className='long-paragraph'>
                99 University Avenue, Toronto
            </p>
            <h2 className='heading'>Opening Hours</h2>
            <p className='long-paragraph'>
                Mon-Fri: 10 am - 2 am
            </p>
            <p className='long-paragraph'>
                Sat-Sun: 11 am - 3 am
            </p>
            <CustomButton>Contact Us</CustomButton>
        </div>
    </div>
    <div className='image-container'>
        <img className='main-image' src='/assets/restaurant.png' alt='restaurant'/>
    </div>

    </div>
  )
}

export default FindUs
