import React from 'react';
import './Sidebar.css';
import Provider from '../Provider/Provider';
import Connect from '../Connect/Connect';
import Appointments from '../Appointments/Appointments';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <Appointments />
      <Connect />
      <Provider />
    </div>
  );
};

export default Sidebar;
