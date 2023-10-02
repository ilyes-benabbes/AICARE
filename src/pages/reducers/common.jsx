import { useNavigate } from "react-router-dom";
import axios from "axios"

export const useCustomNavigate = () => {

    const navigate = useNavigate();
  
    const navigateToProfile = (profile) => {
        navigate("/profilepage", { state: profile });
    }
    return {
        navigateToProfile,
      };
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

//! all the apis are here 
export const  PROFILE_BY_ID_API = "/api/profile/MyPatientsView/client/" ;

// ! formTemplage page 
export const  PROFILE_OPTIONS_API = "api/profile/ProfileAPIView/" ;  

export const useUser = ()=> {
  const user = JSON.parse(localStorage.getItem("thisuser")) ;
  const authToken = localStorage.getItem("authToken") ;
  return [user , authToken]  ;
}

