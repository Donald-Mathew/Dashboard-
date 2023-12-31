import "./sidebar.scss";

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";



import React from 'react'

const Sidebar = () => {
 const { dispatch } = useContext(DarkModeContext);

  return (
 <div className="sidebar">
   <div className="top"> 
    <Link to ="/" style={{textDecoration: "none"}}>
     <span className="logo"> DonaldAdmin </span>
    </Link>
   </div>
    <hr className="horizontal" />
   <div className="center">
     <ul>
        <p className="title">MAIN</p>
        <li> 
           <DashboardIcon className="icon" />
            <span>Dashboard</span> 
        </li>
        <p className="title">LISTS</p>
        <Link to ="/users" style={{textDecoration: "none"}}>
        <li> 
          <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span> 
        </li>
        </Link>
        <Link to ="/products" style={{textDecoration: "none"}}>
        <li>
            <InventoryIcon className="icon" />
             <span>Products</span> 
        </li>
        </Link>
        <li>
           <ProductionQuantityLimitsIcon className="icon"/> 
             <span>Orders</span> 
        </li>
        <li>
            <LocalShippingIcon className="icon"/>
             <span>Delivery</span> 
        </li>
        <p className="title">USEFUL</p>
        <li>
           <EqualizerIcon className="icon" /> 
             <span>Stats</span> 
        </li>
        <li>
           <NotificationsIcon className="icon" />
             <span>Notifications</span> 
        </li>
        <p className="title"> SERVICE </p>
        <li>
          <SettingsSystemDaydreamIcon className="icon" />
             <span>System Health</span> 
        </li>
        <li>
          <PsychologyIcon className="icon" />
             <span>Logs</span> 
        </li>
        <li>
          <SettingsIcon className="icon" />
             <span>Settings</span> 
        </li>
        <p className="title"> USER </p>
        <li>
          <AccountCircleIcon className="icon" />
             <span>Profile</span> 
        </li>
        <li>
           <LogoutIcon className="icon" />
             <span>Logout</span> 
        </li>
     </ul>
   </div>
   <div className="bottom">
      <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
      <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
   </div>
 </div>
  )
}

export default Sidebar;