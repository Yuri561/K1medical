import React from 'react';
import './Teams.css';
import Doctor1 from '../../img/Doctor1.jpeg';
import Doctor4 from '../../img/profile.jpeg';
import Doctor3 from '../../img/Doctor3.jpg';
import Doctor5 from '../../img/Doctor5.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Teams = () => {
  return (
    <div className='container justify-content-md-center align-items-center'>
    
          <h3 className='mt-1 text-center'>Teams</h3>
      <div className="row row-cols-3 justify-content-center mb-3 text-center">
       
        <div className="col col-md-4 d-flex justify-content-around align-items-center mb-3">
          <div className="fitness-box bg-primary" style={{ backgroundImage: `url(${Doctor1})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%' }}>
            <div className="hover-content">Yoga Specialist</div>
          </div>
        </div>
        <div className="col col-md-4 d-flex justify-content-around align-items-center mb-3">
          <div className="fitness-box bg-primary" style={{ backgroundImage: `url(${Doctor1})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%' }}>
            <div className="hover-content">Yoga Specialist</div>
          </div>
        </div>
        <div className="col col-md-4 d-flex justify-content-around align-items-center mb-3">
          <div className="fitness-box bg-success" style={{ backgroundImage: `url(${Doctor5})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%' }}>
            <div className="hover-content">Therapist</div>
          </div>
        </div>
        <div className="col col-md-4 d-flex justify-content-around align-items-center mb-3">
          <div className="fitness-box bg-danger" style={{ backgroundImage: `url(${Doctor3})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%' }}>
            <div className="hover-content">Cardiology Tech</div>
          </div>
        </div>
        <div className="col col-md-4 d-flex justify-content-around align-items-center mb-3">
          <div className="fitness-box bg-warning" style={{ backgroundImage: `url(${Doctor3})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%' }}>
            <div className="hover-content">Provider</div>
          </div>
        </div>
        <div className="col col-md-4 d-flex justify-content-around align-items-center mb-3">
          <div className="fitness-box bg-info" style={{ backgroundImage: `url(${Doctor4})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%' }}>
            <div className="hover-content">Pharmacy Spec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
