import React from 'react'
import Layout from './components/layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/homePage/Home'
import About from './pages/aboutPage/About'
import Service from './pages/servicePage/Service'
import ContactUs from './pages/contactUsPage/ContactUs'
import OverView from './components/overview/OverView'
import ContactSocialMedia from './components/contactSocialMedia/ContactSocialMedia'
import FormContactUs from './components/formContactUs/FormContactUs'
import Other from './components/other/Other'
import NotFound from './pages/notFound/NotFound'

export default function App() {
  const routes = createBrowserRouter([
    {path:'/', element:<Layout/> , children:[
      {path:'/' , element: <Home/>},
      {path:'/about' , element: <About/>},
      {path:'/service' , element: <Service/>},
      {path:'/contactus' , element: <ContactUs/> ,  children:[
        {index:true , element: <OverView/>},
        {path:"/contactus/contactsocialmedia" , element: <ContactSocialMedia/>},
        {path:"/contactus/contactbyform" , element: <FormContactUs/>},
        {path:"/contactus/other" , element: <Other/>},]},
      {path:'*' , element:<NotFound/>}

    ]}
  ])
  return (
    <RouterProvider router={routes} />
  )
}

