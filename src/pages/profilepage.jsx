import React, { useState } from 'react'
import { useContext  , useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Profile from './profile';
import axios from 'axios' ;
import { fetchData  , PROFILE_BY_ID_API} from './reducers/common';








function Profilepage() { 
const [isloading, setisloading] = useState(true) ;
const [ready, setready] = useState(false)
const [profile, setProfile] = useState({})
    //! i have two choices , if the profile is passed by state , i extract it 
    // ! from there , if not i call the fucking api 

    
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
    console.log('stateprofile under locatino ', location);
    let stateglobalprofile = {} ; 
    let stateProfile = {} ; 
    // let stateglobalprofile = location.state;
    // let profile  = stateglobalprofile.profile ; 


    
    // useEffect(() => {
    //     alert("hh")
    //     if ((typeof(stateglobalprofile) == "number" ))
    //     {
    //         alert("number")
    //         fetchData(PROFILE_BY_ID_API + `${stateglobalprofile}/` , "get") 
    //         .then(data => {
    //             console.log('data', data)
    //             stateglobalprofile = data ;
    //             profile = stateglobalprofile.profile ;
    //         }).catch(err =>console.log('err', err))
    //     }
    //     else {
    //          stateglobalprofile = location.state;
    //          profile  = stateglobalprofile.profile ; 

    //     }
    //   } , []);

    useEffect(() => {
        console.log("useEffect is running"); // Add this line to check if the useEffect is running
      
        if (location.state == "2") {
          console.log("stateglobalprofile is a number"); // Add this line to check if this condition is met
          fetchData(PROFILE_BY_ID_API + `${location.state}/`, "get")
            .then((data) => {
              console.log('data', data);
              stateglobalprofile = data;
              setProfile (stateglobalprofile.profile);
            })
        } else {
            //! here add if global profile state , and specify how to
          stateglobalprofile = location.state;
          console.log('stateglobalprofile', stateglobalprofile)
          stateProfile = stateglobalprofile.profile;
          console.log('profile', profile)
          setProfile(stateglobalprofile.profile)
        //   setisloading(false)
          setready(true)
        //   alert("true")
        }
      }, []);
      

  return ( 
      <>
    <div className=" profilepage col ">
{ ready && <div className=" mycontainer drow-center g1 pad">
                <div className="profilepart border b ">
                    <div>
                    { ready && Object.keys(profile).map((mainkey) => {
                        return (
                            <p className=' sectionfont idahoo'>
                                {mainkey}
                                <Item mainkey={mainkey}></Item>
                            </p>
                            
                            )
                        }
                    )}</div> 
                    
                    
                    </div>
        <div className="profilecard r border">
            {/* <Profile user={...stateglobalprofile}></Profile> */}
        </div>
</div>}
    </div>
      </>
    )
    {/* <Item mainkey={mainkey}></Item> */}

}

export default Profilepage







