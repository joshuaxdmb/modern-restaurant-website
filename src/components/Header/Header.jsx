import { Button } from 'react-bootstrap'
import React from 'react'
import Subheading from '../Subheading/Subheading'
import './Header.css'

const Header = () => {
  return (
    <div className='header app_wrapper section_padding' id='home'>
        <div className='app_wrapper_info'>
            <Subheading title='Chase the new flavour'/>
            <h1 className='header-h1 p__cormorant'>The Key to Fine Dining</h1>
            <p className='long-paragraph mt-1 mb-1'>
                Our chef has tailored his unique dishes with years of industry experience. We continuously adapt Our
                recipes to adapt to new trends. We also keep a book of timeless recipes and classics.
            </p>
            <Button href='#menu' className='custom-button mt-2'><p className='p__cormorant'>Explore Menu</p></Button>
        </div>
        <div className='app-wrapper_img'>
            <img  src='/assets/welcome.jpeg' alt='welcome-img'/>
        </div>
    </div>
  )
}

export default Header
