import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import myCreateRoute from './routeer/Routeer.jsx';
import Authprovider from './providers/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={myCreateRoute}/>
   </Authprovider>
  </React.StrictMode>,
)
