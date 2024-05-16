import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <div  id='btn-container'
    className="button-container container d-flex justify-content-space-around align-items-center mb-5">
      <button className="button btn">
        <i className="bi bi-house-door icon"></i>
      </button>
      <button id='button' className=" btn">
        <i className="bi bi-search icon"></i>
      </button>
      <button id='button' className=" btn">
        <i className="bi bi-person icon"></i>
      </button>
      <button id='button' className=" btn">
        <i className="bi bi-cart icon"></i>
      </button>
    </div>
  );
}

export default Navbar;
