import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Product from './pages/Product'
import Detail from './pages/Detail'
import { isMobile } from 'react-device-detect'
import MobileRoot from './pages/mobile/MobileRoot'
import MobileNotFound from './pages/mobile/MobileNotFound'
import MobileHome from './pages/mobile/MobileHome'
import MobileProduct from './pages/mobile/MobileProduct'
import MobileDetail from './pages/mobile/MobileDetail'


export default function App_router() {
   
   let router = null

   if(isMobile===true){
     router = createBrowserRouter ([
       {
        path:'/',
        element:<MobileRoot/>,
        errorElement:<MobileNotFound/>,
        children:[
          {index:true, element:<MobileHome/>},
          {path:'/product', element:<MobileProduct/>},
          {path:'/product/:productId', element:<MobileDetail/>}
        ]
       }
     ])
   }else
   router = createBrowserRouter ([
    
    {
      path:'/',
      element:<Root/>,
      errorElement:<NotFound/>,
      children:[
        {index:true, element:<Home/>},
        {path:'/product', element:<Product/>},
        {path:'/product/:productId', element:<Detail/>},
        
      ]
    }
  ])
  
  return (
    <RouterProvider router={router}/>
  )
}
