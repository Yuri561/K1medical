import React from 'react';
import { PersonCircle, BoxArrowRight } from 'react-bootstrap-icons';
import './Connect.css';

const Connect = () => {
  return (
    <div className='row row-cols-1 row-cols-md-2 justify-content-between g-5 '>
      <div className='col'>
        <button id="btn-message" className="button-message">
          <div className="content-avatar">
            <div className="status-user"></div>
            <div className="avatar">
              <PersonCircle className="user-img" />
            </div>
          </div>
          <div className="notice-content">
            <div className="username">J. Sanders</div>
            <div className="label-message">Connected</div>
            <div className="user-id">@jessisanders</div>
          </div>
        </button>
      </div>
      <div className='col'>
        <button className="Btn">
          <div className="sign">
            <BoxArrowRight />
          </div>
          <div className="text">Logout</div>
        </button>
      </div>
    </div>
  );
}

export default Connect;
