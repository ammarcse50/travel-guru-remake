
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 import Home from '../components/pages/Home'

 import Root from "../components/layout/Root";
import Login from "../components/shared/Login/Login";
import Register from "../components/shared/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        
  
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/login',
          element : <Login></Login>

        },
        {
          path: '/register',
          element : <Register></Register>
        }

    ]
  },
  
]);

export default router