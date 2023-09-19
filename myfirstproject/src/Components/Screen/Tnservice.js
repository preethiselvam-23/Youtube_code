import React from 'react'
import './Recommendedvideo.css'
import VideoCard from './VideoCard'

function Tnservice() {
  return (
    <div>
        <div className='recommendedvideos_videos'>
            <VideoCard 
            title='Tamil Nadu Public Service Commission, TNPSC Road, Broadway, Chennai'
            views='1.5M'
            timestamp='09-Jun-2023'
            channelImage='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/01/tnpsc-1-1579865031.jpg'
            channel='TNPSC'
            image='https://img.jagranjosh.com/images/2022/May/1052022/tn-hse-plus-one-exam-2022-begins.jpg'
            />
            <VideoCard
        title='Tnpsc Group 4 Exam Announcement'
        views='4.5 M'
        timestamp='9 days ago'
        channelImage='https://static.toiimg.com/thumb/msid-72226761,width-400,resizemode-4/72226761.jpg'
        channel='Tnpsc Veriankal'
        image='https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2023/02/03124935/TNPSC-Group-4-Exam.jpg'
        />
        {/* <VideoCard
        title
        views
        timestamp
        channelImage
        channel
        image/>
        <VideoCard
        title
        views
        timestamp
        channelImage
        channel
        image/> */}
    </div>
    </div>
  )
}

export default Tnservice