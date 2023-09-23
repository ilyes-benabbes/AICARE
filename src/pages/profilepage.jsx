import React, { useState } from 'react'
import { useContext  } from 'react';
import { useLocation } from "react-router-dom";
import Profile from './profile';







function Profilepage() { 

    
    const Item = ({ mainkey }) => {
        const GenericResponse = "not specefied"
                        
            if (Array.isArray(profile[mainkey]) ) { 
               
                    return(
                        <div className='col '>
         
       {(profile[mainkey].length > 0) ?  
       <>
                 {profile[mainkey].map((item) => {
                
                    return(
                        
                    <p className=''>{item.name}</p>
            
            )
            
            })}
            </>
             : <p>{GenericResponse}</p>}
  

    </div>
    ) 
    } 

else if (typeof(profile[mainkey])  == "string"  ){
                return(
                <>
                <div className="col option">
            <p>{profile[mainkey]  ? profile[mainkey] : GenericResponse}</p>
            </div>
            </>
            )
        }
        else if (typeof(profile[mainkey])  == "boolean"  ){
            return (<div className=''>

{profile[mainkey] ? <p>yes</p> : <p>no</p>} 

    

</div>
    )

        } else {
            return <div className="myinteger">
            {profile[mainkey] ? <p>{profile[mainkey]}</p> : <p>{GenericResponse}</p>} 
            </div>
            
        }

          
        
          
        
      
    };




    const location = useLocation();
    const stateglobalprofile = location.state;
    const profile  = stateglobalprofile.profile ; 
    
    console.log('stateprofile', stateglobalprofile)
    
    // const [globalprofile , setGlobalprofile] = useState()
    // const [ account, setAccount] =  
    // const { profile, ...Profile } = originalObject;

  return ( 
      <>
    <div className=" profilepage col ">
<div className=" mycontainer drow-center g1 pad">
<div className="profilepart border b ">
        {Object.keys(profile).map((mainkey) => {
            return (
                <p className=' sectionfont'>
                    {mainkey}
                    <Item mainkey={mainkey}></Item>
                </p>
                
                )
            }
        )}
        
        </div>
        <div className="profilecard r border">
            <Profile user={...stateglobalprofile}></Profile>
        </div>
</div>
    </div>
      </>
    )
    {/* <Item mainkey={mainkey}></Item> */}

}

export default Profilepage