
import React from 'react'
import Subheading from '../components/Subheading/Subheading'
import './Title.css'

const Title = (props) => {
  return (
    <div className='menu-title'>
        <Subheading title={props.heading}/>
        <h1 style={{fontWeight:'bold'}} className='heading'>{props.children}</h1>
      </div>
  )
}

export default Title
