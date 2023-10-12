import { useNavigate } from "react-router-dom";
import axios from "axios"
//! all the apis are here 
// export const  PROFILE_BY_ID_API = "/api/profile/MyPatientsView/client/" ;

 export   const contractsApi = "/api/profile/my_contracts/" ;
 export  const convosApi = "/api/messages/my_conversations/" ;
 
 
 export  const PROFILE_BY_ID_API = "/api/profile/user_info/" ;

 export const PostMsgApi = "/api/messages/conversation/" ;
//! form
export const  PROFILE_OPTIONS_API = "api/profile/ProfileAPIView/" ;  

//!???????????????????????? functions under ??????????????????????

export const useCustomNavigate = () => {

    const navigate = useNavigate();
  
    const navigateToProfile = (profileId) => {
        navigate("/profilepage", { state: profileId });
    }
    const navigateToChat = (chatId) => {
        navigate("/Messages", { state: chatId });
    }
    return [
        navigateToProfile, navigateToChat ,
    ];
    };

export  const fetchData = async (url , method) => {
        try {
          const response = await axios[method](url, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${localStorage.getItem("authToken")}`
            }
          });
          return response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return null;
        }
      };


export const useUser = ()=> {
  // console.log("second comond")
  const user = JSON.parse(localStorage.getItem("thisuser")) ;
  // console.log('user', user)
  const authToken = localStorage.getItem("authToken") ;
  // console.log('authToken', authToken)
  return [user , authToken]  ;
}

export const useFetch = (api , method ) => {

  fetchData(api , method).then(data => {
    if (data) {
      return data
         
    }
}).catch(err => console.log('err', err));
}

export const fetchUser = (profileId) => {
  fetchData( PROFILE_BY_ID_API+profileId+"/" , "get").then(data => {
    if (data) {
      return data.myself
         
    }
}).catch(err => console.log('err', err));
}


