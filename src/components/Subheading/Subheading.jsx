import React from 'react'

const Subheading = (props) => {
  return (
    <div style={{ color:'white', fontSize:18, textAlign:props.alignment?props.aligment:'start', lineHeight:1.2}}>
      <p style={{textAlign:props.alignment?props.alignment:''}} className='p__cormorant'>{props.title}</p>
      <img src='/assets/spoon.svg' alt='spoon' className='spoon_img'/>
    </div>
  )
}

export default Subheading
