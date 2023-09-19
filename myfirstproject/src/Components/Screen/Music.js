import React from 'react'
import './Recommendedvideo.css'
import VideoCard from './VideoCard'

function Music() {
  return (
<div className='recommendedvideos_videos'>
         <VideoCard
        title="React Js Tutorial for beginners 2023 | Full Course for Beginners | Basic to Advanced concepts"
        views="218K"
        timestamp="3 month ago"
        channelImage="https://yt3.googleusercontent.com/lMqV4Au-V6YjSRCLR14LeXMoMR1n5e6BCIaiy6QLKEugBZ2bvVcar9EOiZm1z2PJ3zHclmy2=s900-c-k-c0x00ffffff-no-rj"
        channel='Balachandara'
        image="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg"
        />
        <VideoCard 
        title="U1 Drugs| Yuvanism| u1 love songs| Yuvan feelinb songs #yuvanshankarraja #u1 #mp3"
        views="2.5M"
        timestamp="2 months ago"
        channelImage="https://pbs.twimg.com/media/DwxbVEpV4AEJLNt.jpg"
        channel="New Thinks"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGrHq2vfzm5_RLZZeujMFFcA-_Vsaz95ceQ&usqp=CAU"
        />
    </div>
  )
}

export default Music