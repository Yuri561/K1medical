import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Fitness.css';
import Dumbbell from '../../img/dumbbell.png'
import Yoga from '../../img/yoga.png'
import Food from '../../img/nutrition.png'
import Hydration from '../../img/hydration.png'

const Fitness = () => {
  return (
    <div className='container justify-content-md-center align-items-center'>
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h1 className='mt-1'>Fitness</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-around align-items-center">
          <div className="fitness-box bg-primary">
            <img className="fitness-icon" src={Hydration} alt="Dumbbell" style={{width: '2rem'}}/>
            <div className="hover-content">Hydration: 75%</div>
          </div>
          <div className="fitness-box bg-success">
            <img className="fitness-icon" src={Dumbbell} alt="Dumbbell" style={{width: '2rem'}}/>
            <div className="hover-content">Strength Training: 60%</div>
          </div>
          <div className="fitness-box bg-danger">
            <i className="bi bi-heart-pulse fitness-icon"></i>
            <div className="hover-content">Cardio: 80%</div>
          </div>
          <div className="fitness-box bg-warning">
             <img className="fitness-icon" src={Food} alt="Dumbbell" style={{width: '2rem'}}/>
            <div className="hover-content">Meal Prep: 90%</div>
          </div>
          <div className="fitness-box bg-info">
            <img className="fitness-icon" src={Yoga} alt="Yoga" style={{width: '2rem'}}/>
            <div className="hover-content">Yoga: 70%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fitness;
