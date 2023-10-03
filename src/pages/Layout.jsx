// Layout.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import LoggedNavbar from '../components/LoggedNavbar';
import ProfileCardSideBar from '../components/ProfileCardSideBar';


function Layout({ children , pageName , checkingProfile , profile}) {
  return (
<div className='mylayout '>
     <LoggedNavbar ></LoggedNavbar>
     <div className="drow layoutContainer">
    { !checkingProfile ? <Sidebar initialSelected ={pageName}
    checkingProfile = {checkingProfile}
    /> : <ProfileCardSideBar profile={profile}></ProfileCardSideBar>}
     <div className='myRightSide '>
      {children} 
      
      
      </div>
      </div>
      </div>
    
  );
}

export default Layout;
