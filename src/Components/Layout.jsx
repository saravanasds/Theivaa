import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import TopBar from './TopBar'

const Layout = () => {
  return (
    <>
     <div className='flex flex-col min-h-screen'>
      <TopBar/>
     <Navbar/>
      <div className='flex-grow'>
      <Outlet/>
      </div>
      <Footer/>
     </div>
    </>
  )
}

export default Layout