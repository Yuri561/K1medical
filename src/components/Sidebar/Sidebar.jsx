import React from 'react'
import './Sidebar.css'

import Provider from '../Provider/Provider'
import Connect from '../Connect/Connect'
import Appointments from '../Appointments/Appointments'

const Sidebar = () => {
  return (
<<<<<<< HEAD
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
    
=======
    <div className='d-flex flex-column justify-content-center justify-content-lg-center align-items-center sidebar-container g-2'>

        <Appointments/>
      
          <Connect/>
     
      <Provider/>
      
      
>>>>>>> 2615bcaf534c8720438c19f01aed91e027734071


    </div>
    
  )
}

export default Sidebar