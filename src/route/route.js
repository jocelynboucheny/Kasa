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
          path:"/flat",
          element:<ApartmentPage/>
        },
        {
          path:"/about",
          element:<About/>
        }
      ],
    }
  ]);

  export default router;