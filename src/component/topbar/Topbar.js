import React from 'react'
import './topbar.css'
import {Person, Search,Chat, Notifications} from "@mui/icons-material"

function Topbar() {
  return (
    <div className='topbarcontainer'>
        <div className="topbarLeft">
            <span className="logo">Raufkhan</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='searchicon'/>
                <input placeholder='search for friend,post and video' className="searchinput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarlinks">
                <div className="topbarlink">Homepage</div>
                <div className="topbarlink">Timeline</div>
            </div>
            <div className="topbarIcon">
                <div className="topbarIconitem">
                    <Person/>
                    <span className="topbarIconbadge">1</span>
                </div>
                <div className="topbarIconitem">
                    <Chat/>
                    <span className="topbarIconbadge">2</span>
                </div>
                <div className="topbarIconitem">
                    <Notifications/>
                    <span className="topbarIconbadge">1</span>
                </div>
            </div>
            <img src="/assets/images/team2.jpg" alt="" className="topbarimg" />
        </div>
    </div>
  )
}

export default Topbar

