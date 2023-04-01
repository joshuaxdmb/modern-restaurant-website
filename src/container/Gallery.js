import React, { useRef } from 'react';
import Title from '../components/Title';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import './Gallery.css';
import CustomButton from '../components/CustomButton';

const GalleryItem = (props)=>{
  return(
    <div onClick={()=>{}} className='gallery-item'>
    <img src={props.url} alt={props.url} className='gallery-img' />
    <BsInstagram  onClick={()=>{}} size={45} className='gallery-ig'/>
    </div>
  )
}

const Gallery = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery">
      <div className="gallery-content">
        <Title heading="Instagram">Our Food is Beautiful</Title>
        <p className="long-paragraph">
          We want to delight all your senses that is why we care so much about
          the look of our food. We also know some of you love posting this on
          Instagram - please don't forget to tag us @roncos-restaurant
        </p>
        <CustomButton>View More</CustomButton>
      </div>
      <div className="instagram-container">
        <div className="images" ref={scrollRef}>
        <GalleryItem url='assets/gallery/gallery01.png'/>
          <GalleryItem url='assets/gallery/gallery02.jpeg'/>
          <GalleryItem url='assets/gallery/gallery03.jpeg'/>
          <GalleryItem url='assets/gallery/gallery04.jpeg'/>
          <GalleryItem url='assets/gallery/gallery05.jpeg'/>
        </div>
        <div className="arrows">
          <BsArrowLeftShort
            className="arrow"
            onClick={() => {
              scroll('left');
            }}
          />
          <BsArrowRightShort
            className="arrow"
            onClick={() => {
              scroll('right');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
