import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

export const SharedDataContext = createContext();

export const useSharedData = () => {
  const context = useContext(SharedDataContext);
  if (!context) {
    throw new Error('useSharedData must be used within a SharedDataContextProvider');
  }
  return context;
};


export const SharedDataContextProvider = ({ children }) => {
    //! apis
const Patientsapi = "/api/profile/MyPatientsView/" ;
const Convosapi = "/api/messages/conversations/" ;
//!variables
const [allAccounts, setAllAccounts] = useState([]);
const [ Convos , setconvos] = useState([]);




const FillAccounts = () => {
    fetchData(Patientsapi, "get").then(data => {
        if (data) {
            setAllAccounts(data);
            console.log('datalog', data)
            return data
        }
    });



} 
const FillConvos = () => {
    fetchData(Convosapi, "get").then(data => {
        if (data) {
            setconvos(data);
            console.log('data', data)
        }
    });



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
    <SharedDataContext.Provider value={{ allAccounts, setAllAccounts , FillAccounts , Convos , setconvos , FillConvos}}>
      {children}
    </SharedDataContext.Provider>
  );
 
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