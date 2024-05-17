import React from 'react'
import './Sidebar.css'

import Provider from '../Provider/Provider'
import Connect from '../Connect/Connect'
import Appointments from '../Appointments/Appointments'

const Sidebar = () => {
  return (
    <div className='d-flex flex-column justify-content-center justify-content-lg-center align-items-center sidebar-container g-2'>

        <Appointments/>
      
          <Connect/>
     
      <Provider/>
      
      


    </div>
    
  )
}

export default Sidebar