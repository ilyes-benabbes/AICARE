// Layout.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import LoggedNavbar from '../components/LoggedNavbar';


function Layout({ children , isCaregiver , pageName}) {
  return (
<div className='mylayout '>
     <LoggedNavbar isCaregiver = {isCaregiver}></LoggedNavbar>
     <div className="drow layoutContainer">
     <Sidebar initialSelected ={pageName}/>
     <div className='myRightSide '>
      {children} 
      
      
      </div>
      </div>
      </div>
    
  );
}

export default Layout;
