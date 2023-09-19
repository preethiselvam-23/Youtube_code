import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      
       <SidebarRow Icon= {HomeIcon} title="Home"  />
       <SidebarRow Icon= {WhatshotOutlinedIcon } title="Shorts"/>
       <SidebarRow Icon= {SubscriptionsOutlinedIcon} title="Subscription"/>
       <hr/>
       <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library"/>
       <SidebarRow Icon={HistoryOutlinedIcon} title="History"/>
       <SidebarRow Icon={SlideshowOutlinedIcon} title="Your Videos"/>
       <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch later"/>
       <SidebarRow Icon={ThumbUpOffAltOutlinedIcon} title="Liked videos"/>
       <hr/>
       <h1>Explore</h1>
       <SidebarRow Icon={LocalFireDepartmentOutlinedIcon} title="Trending"/>
       <SidebarRow Icon={LocalMallOutlinedIcon} title="Shopping"/>
       <SidebarRow Icon={MusicNoteOutlinedIcon} title="Music"/>
       <SidebarRow Icon={MovieCreationOutlinedIcon} title="Movies"/>
       <SidebarRow Icon={SensorsOutlinedIcon} title="Live"/>
       <SidebarRow Icon={SportsEsportsOutlinedIcon} title="Gaming"/>
       <SidebarRow Icon={FeedOutlinedIcon} title="News"/>
       <SidebarRow Icon={EmojiEventsOutlinedIcon} title="Sports"/>
       <SidebarRow Icon={LightbulbOutlinedIcon} title="Learning"/>
       <SidebarRow Icon={StoreMallDirectoryOutlinedIcon} title="Fashion & Beauty"/>
       <hr/>
       <SidebarRow Icon={SettingsIcon} title="Setting"/>
       <SidebarRow Icon={OutlinedFlagIcon} title="Report history"/>
       <SidebarRow Icon={HelpOutlineOutlinedIcon} title="Help"/>
       <SidebarRow Icon={SmsFailedOutlinedIcon} title="Send feedback"/>
       <br/>
       About Press Copyright Contact us Creators Advertise Developers
       <br/>
       <br/>
       Terms Privacy Policy & Safety How YouTube Works Test new features
       <br/>
       <br/>
       <footer>&#169; 2023 google LLc</footer>


        </div>
  )
}

export default Sidebar 