import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import router from './Routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     
     <RouterProvider router={router} ></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)