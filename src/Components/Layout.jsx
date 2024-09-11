import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import TopBar from './TopBar'

import ScrollToTop from "../Components/ScrollToTop"

const Layout = () => {
  return (
    <>
     <div className='flex flex-col min-h-screen overflow-hidden'>
      <TopBar/>
     <Navbar/>
      <div className='flex-grow'>
      <Outlet/>
      <ScrollToTop/>
      </div>
      <Footer/>
     </div>
    </>
  )
}

export default Layout