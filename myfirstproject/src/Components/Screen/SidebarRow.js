import React from 'react'
import './Sidebarrow.css'


function SidebarRow({ Icon, title }) {
  return (
    <div className='sidebarRow'>
       {/* <button> */}
        <Icon className='sidebarRow_icon'/>
        <h2 className='sidebarRow_title'>{title }</h2>
        {/* </button> */}

    </div>
  )
}

export default SidebarRow