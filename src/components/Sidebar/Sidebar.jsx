import React from 'react'
import './Sidebar.css'
import Navbar from '../Navbar/Navbar'
import Provider from '../Provider/Provider'
import Connect from '../Connect/Connect'
import Appointments from '../Appointments/Appointments'

const Sidebar = () => {
  return (
    <div className='d-flex flex-column 
    justify-content-center 
    justify-content-lg-center 
    align-items-center 
    sidebar-container
    overflow-hidden 
    g-2'>
      
        <Appointments/>
        <Provider/>
       
          <Connect/>
    


    </div>
    
  )
}

export default Sidebar