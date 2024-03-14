
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 import Home from '../components/pages/Home'

 import Root from "../components/layout/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        
  
        {
            path: "/",
            element: <Home></Home>
        }

    ]
  },
  
]);

export default router