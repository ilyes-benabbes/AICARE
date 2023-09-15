// 

// src/index.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from "react-dom/client"; // Import from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import store, { persistor } from './app/store';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // <StrictMode>
  

  <BrowserRouter>
    {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    {/* </Provider> */}
  </BrowserRouter>
  
);

reportWebVitals();
