import React from 'react'
import './Sidebar.css'
import Navbar from '../Navbar/Navbar'
import Provider from '../Provider/Provider'
import Connect from '../Connect/Connect'

const Sidebar = () => {
  return (
    <div className='d-flex flex-column justify-content-start justify-content-lg-center align-items-center sidebar-container g-2'>
        <Navbar/>
        <Provider/>
        <div className='mt-3'>
          <Connect/>
      </div>


    </div>
    
  )
}

export default Sidebar