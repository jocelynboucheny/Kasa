import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/Homepage.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import Main from './layout/Main.jsx';
import ApartmentPage from './pages/ApartmentPage.jsx';
import  About  from './pages/About.jsx';
import { ErrorPageNotFound } from './pages/ErrorPageNotFound.jsx';

const HeaderFooterLayout = () =>{
  return <>
    <Navbar/>
    <Main>
      <Outlet/>
    </Main>
    <Footer/>
  </>
}

const router = createBrowserRouter([
  {
    path:"/",

    element:<HeaderFooterLayout/>,
    errorElement:<ErrorPageNotFound/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/flat/:id",
        // :id
        element:<ApartmentPage/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
