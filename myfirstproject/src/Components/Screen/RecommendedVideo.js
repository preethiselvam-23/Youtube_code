import React, { useState } from 'react'
// import VideoCard from './VideoCard'
import './Recommendedvideo.css'
import All from './All';
import Music from './Music';
import Tnservice from './Tnservice';
function RecommendedVideo() {
  const[all, setAll]= useState(true);
  const[music, setMusic]= useState(false);
  const[service, setService]=useState(false);

  
  return (
    <div className='recommendedvideos'>
      <div className='recommendedvideos_line'>
     <button onClick={()=>{setAll(true); setMusic(false); setService(false); }} id='line'>All</button>
     <button onClick={()=>{setMusic(true); setAll(false); setService(false);}} id='line'>Music</button>
     <button onClick={()=>{setService(true); setAll(false); setMusic(false); console.log("error")}} id ='line'>TNPSC</button>
     </div>
      {
        all ?
        (
          <All/>
        ):null
      }
      {
        music ?
        (
          <Music/>
        ):null
      }
      {
        service ?
        (
          <Tnservice/>
        ):null
      } 
       </div>
  )
}

export default RecommendedVideo