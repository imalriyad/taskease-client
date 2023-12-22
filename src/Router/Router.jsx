import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Form/Login";
import Registration from "../form/Registration";
import PrivateRoute from "../Private/PrivateRoute";
import Task from "../Dashboard/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
     
      {
        path: "/faq",
        element:<Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/resgistration",
        element: <Registration></Registration>,
      },
    ],
  },{
    path:'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'task',
        element:<PrivateRoute><Task></Task></PrivateRoute>
      }
    ]
  }
]);

export default router