import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MicIcon from '@mui/icons-material/Mic';
import './Header.css';



function Header() {
  return (
    <div className='header'>
        {/* <h1>I am a header</h1> */}
        <div className='header_left'>
        <MenuIcon className='header_menuicon'/>
        <img
         src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
         alt='loding' className='header_logo'
         />
         </div>
         <div className='header_inputbox'>
         
         <input placeholder='Search' type='text'id='insearch'/>
         <SearchIcon className='header_searchicon'id='insearch' role='button'/>
         
         <div className='header_micicon'>
         <MicIcon />
         </div>
         </div>
           <div className='header_righticons'>

         <VideoCallOutlinedIcon className='header_icon'/>
        <NotificationsNoneOutlinedIcon className='header_icon'/>
       
        <AccountCircleIcon className='header_icon'/>
       
        </div>
        

    </div>
  )
}

export default Header