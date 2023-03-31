import React from 'react';
import './Menu.css'
import {wines, cocktails, awards} from '../../constants/data'
import Subheading from '../Subheading/Subheading'
import MenuItem from '../MenuItem/MenuItem'
import CustomButton from '../CustomButton';

const Menu = () => {
  return (
    <div className='menu' id='menu'>
      <div className='menu-title'>
        <Subheading alignment='center' title='Menu that fits your palet'/>
        <h1 style={{fontWeight:'bold'}} className='heading'>Today's Specials</h1>
      </div>
      <div className='menus-container'>
      <div className='menu-content'>
      <div className='menu-title'>
        <h1>Wine & Beer</h1>
      </div>
      <div className='menu-items'>
      {wines.map((w)=>(
        <div className='menu-item'>
        <div>
        <h2 style={{fontFamily: 'Cormorant Upright', fontSize:25, textAlign:'start'}}>{w.title}</h2>
        <p style={{fontSize:15, color:'#7a7a7a'}}>{w.tags}</p>
        </div>
        <div style={{width: 150, alignItems:'center',justifyContent:'center', display:'flex'}}>
        <div style={{height:'1px', backgroundColor:'white', width:100, margin:'0 1rem'}}/>
        <p>{w.price}</p>
        </div>
        </div>
      ))}
      </div>
      </div>
      <div className='menu-image'>
        <img src='/assets/menu.png' alt='menu-img'/>
      </div>
      <div className='menu-content'>
      <div className='menu-title'>
        <h1>Cocktails</h1>
      </div>
      <div className='menu-items'>
      {cocktails.map((w)=>(
        <div className='menu-item'>
        <div>
        <h2 style={{fontFamily: 'Cormorant Upright', fontSize:25, textAlign:'start'}}>{w.title}</h2>
        <p style={{fontSize:15,color:'#7a7a7a'}}>{w.tags}</p>
        </div>
        <div style={{width: 150, alignItems:'center',justifyContent:'center', display:'flex'}}>
        <div style={{height:'1px', backgroundColor:'white', width:100, margin:'0 1rem'}}/>
        <p>{w.price}</p>
        </div>
        </div>
      ))}
        
      </div>

      </div>
      </div>
      <CustomButton>View More</CustomButton>
    </div>
  )
}

export default Menu
