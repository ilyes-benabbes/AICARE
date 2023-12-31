import React, { createContext, useContext, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { contractsApi , convosApi } from '../pages/reducers/common';
export const SharedDataContext = createContext();
// const navigate = useNavigate()

export const useSharedData = () => {
  const context = useContext(SharedDataContext);
  if (!context) {
    throw new Error('useSharedData must be used within a SharedDataContextProvider');
  }
  return context;
};


export const SharedDataContextProvider = ({ children }) => {
  // const [ contractsApi , convosApi] =
    //! apis
// const contractsApi = "/api/profile/MyPatientsView/" ;
// const convosApi = "/api/messages/conversations/" ;
//!variables
const [contracts, setContracts] = useState([]);
const [ convos , setConvos] = useState([]);




const fillContracts = () => {
    fetchData(contractsApi, "get").then(data => {
        if (data) {
            setContracts(data);
             
        }
    });



} 
const fillConvos = () => {
    fetchData(convosApi, "get").then(data => {
        if (data) {
          console.log('data', data)
            setConvos(data);
        }
    });

  } 
const getRole = () => {
  const user = JSON.parse(localStorage.getItem("thisuser")) ;
  return user.basic_info.role
}

      
const fetchData = async (url , method) => {
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
  
  return (
    <SharedDataContext.Provider value={{ contracts, setContracts , fillContracts, getRole ,  convos , setConvos , fillConvos}}>
      {children}
    </SharedDataContext.Provider>
  );
 
}

export const useHandleProfile = (profile) => {
  navigate("/profilepage", { state: profile });
}




//! naviagation provider 

// const NavigationContext = createContext();

// const NavigationContextProvider = ({ children }) => {
//   const [pages, setPages] = useState([]);

//   const addPage = useCallback(
//     page => { setPages(pages => [...pages, page]); },
//     [setPages]
//   );

//   const removePage = useCallback(
//     page => { setPages(pages => pages.filter(p => p.name !== page.name)); },
//     [setPages]
//   );

//   const value = { addPage, pages, removePage };
//   return (
//     <NavigationContext.Provider value={value}>
//       {children}
//     </NavigationContext.Provider>
//   );
// };