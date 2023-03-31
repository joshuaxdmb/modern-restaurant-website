import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../components/Title';
import './Laurels.css';
import {awards} from '../constants/data'

const AwardItem = (props) => {
  return (
    <div className="award-item" id='awards'>
      <img src={props.img} alt="award1" />
      <div className="award-text">
        <h2>{props.title}</h2>
        <p>{props.sub}</p>
      </div>
    </div>
  );
};

const Laurels = () => {
  return (
    <div className="laurels" id="laurels">
    <div style={{width:'60vw',display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Container className="laurels-content">
        <Row className='title-row'>
          <Title heading="Awards & Recognitions">Our Laurels</Title>
        </Row>
        {awards.map(award=>(
          <Row className='item-row'>
          <AwardItem img={award.imgUrl} title={award.title} sub={award.subtitle}/>
        </Row>
        ))}
        
      </Container>
      </div>
      <div className="laurels-images">
        <img className="second-image" src="/assets/r.png" alt="R" />
        <img className="main-image" src="/assets/steak.png" alt="steak" />
      </div>
    </div>
  );
};

export default Laurels;
