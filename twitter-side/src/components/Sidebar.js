import React from 'react';
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import SideOpt from './SideOpt';

function Sidebar() {
  return (
    <div className='sidebar'>
       <a href='/home' className='nav-link text-white fs-5' aria-current='page'>
        <SideOpt Icon={HomeIcon} Text="Home" Active={true} />
      </a>
      <a href="/explore" >
        <SideOpt Icon={SearchIcon} Text="Explore" />
      </a>
      <a href="/notifications" >
        <SideOpt Icon={NotificationsIcon} Text="Notifications" />
      </a>
      <a href="/messages">
        <SideOpt Icon={MailOutlineIcon} Text="Messages" />
      </a>
      <a href="/bookmarks" >
        <SideOpt Icon={BookmarkBorderIcon} Text="Bookmarks" />
      </a>
      <a href="/lists" >
        <SideOpt Icon={ListAltIcon} Text="Lists" />
      </a>
      <a href="/profile">
        <SideOpt Icon={PermIdentityIcon} Text="Profile" />
      </a>
      <a href="/more" >
        <SideOpt Icon={MoreHorizIcon} Text="More" />
      </a>
      <Button variant="outlined" className="tweeter_button">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
