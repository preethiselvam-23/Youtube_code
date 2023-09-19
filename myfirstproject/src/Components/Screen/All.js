import React from 'react'
import ReactPlayer from 'react-player'
import './Recommendedvideo.css'
import './playercard.css'

function All() {
  return (
    <div className='player'>
      <div className='video'>
        < ReactPlayer 
        url='https://www.youtube.com/watch?v=nKIu9yen5nc'
        width='350'
        height='300'
        controls
        />
       </div> 
        <div className='video'>
        <ReactPlayer  
        
        url='https://www.youtube.com/watch?v=9uj_NGax418'
        width='350'
        height='300'
        controls
        />
        </div>
         <div className='video'>
         <ReactPlayer  
        url='https://www.youtube.com/watch?v=ReSffi4COdU'
        width='350'
        height='300'
        controls
        />
        </div>
        <div className='video'>
         <ReactPlayer  
        url='https://www.youtube.com/watch?v=xpAlMH3Xxb0'
        width='350'
        height='300'
        controls
        />
        </div>
        <div className='video'>
         <ReactPlayer  
        url='https://www.tnpsc.gov.in/english/guidelines.html'
        width='350'
        height='300'
        controls
        />
        </div>
 <div className='video'> 
         <ReactPlayer  
        url='https://www.youtube.com/watch?v=MGL6mLQNEM4'
        width='350'
        height='300'
        controls
        />
         </div> 
        </div>
        
        
  )
}

export default All