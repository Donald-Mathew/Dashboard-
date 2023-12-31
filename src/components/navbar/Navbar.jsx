import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import avatar from "../../images/avatar.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";




import React from 'react'

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
         
         <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
         </div>
        
         <div className="items">
           <div className="item">
           <LanguageOutlinedIcon className="iconz" />
             English
           </div>
           <div className="item">
           <DarkModeOutlinedIcon className="iconz" onClick={() => dispatch({type:"TOGGLE"})}/>
              
           </div>
           <div className="item">
           <FullscreenExitOutlinedIcon className="iconz"/>
              
           </div>
           <div className="item">
           <NotificationsNoneOutlinedIcon className="iconz"  />
              <div className="counter">1</div>
           </div>

           <div className="item">
           <ChatBubbleOutlineOutlinedIcon className="iconz"/>
            <div className="counter">2</div>
           </div>

           <div className="item">
           <ListOutlinedIcon className="iconz"/>
           </div>
           <div className="item">
             <img src={avatar} alt=""  className="avatar" />
           </div>
          
      
         </div>
     
      </div>
    </div>
  )
}

export default Navbar