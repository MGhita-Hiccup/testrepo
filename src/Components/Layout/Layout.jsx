import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout({userData , setUserData}) {
  return <>
    <Navbar userData={userData} setUserData={setUserData}  />
    <div className='container'>
       <Outlet/>
    </div>
    <Footer/>
  </>
}

 