import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import './Intro.css';


const Intro = () => {
    const [playVideo, setPlayVideo] = useState(true)
    const vidRef = React.useRef();

    const handleVideo = () =>{
        if(playVideo){
            vidRef.current.pause()
            setPlayVideo(false)
        } else {
            vidRef.current.play()
            setPlayVideo(true)
        }
    }

  return (
    <div className='intro' id='intro'>
      <div className='video'>
        <video src='assets/meal.mp4'
        ref={vidRef}
            type='video/mp4'
            loop
            muted
            controls={false}
            autoPlay
        />
      </div>
      <div className='overlay-container'>
      <div className='overlay' onClick={handleVideo}>
            {playVideo
            ?(<BsPauseFill color='#fff' fontSize={30}/>)
            :(<BsFillPlayFill color='#fff' fontSize={30}/>)}
      </div>
      </div>
    </div>
  )
}

export default Intro
