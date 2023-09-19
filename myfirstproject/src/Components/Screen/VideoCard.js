import React from 'react'
import Avatar from '@mui/material/Avatar';
import './VideoCard.css';

function VideoCard({image,title,channel,views,timestamp,channelImage}){
  return (
    <div className='videoCard'>
      <div className='parts'>
          <img className='videocard_thumbnail' src={image} alt=""/>
          <div className='videocard_info'>
              <Avatar className="videoCard_Avatar" alt="" src={channelImage}
        />
        <div className='video_text'>
          <h4>{title}</h4>
          <p>{channel}<br/>
          {views}.{timestamp}</p>
        </div>
        </div>

       
      </div>
        
        
</div>
  )
}

export default VideoCard