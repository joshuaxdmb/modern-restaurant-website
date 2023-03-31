import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = (props) => {
  return (
    <Button style={{zIndex:1}} className='custom-button mt-3'>
    <p className='p__cormorant' style={{fontWeight:'normal', zIndex:1}}>{props.children}</p>
    </Button>
  )
}

export default CustomButton
