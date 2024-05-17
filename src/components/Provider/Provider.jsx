import React from 'react';
import {
	EnvelopeFill,
	Facebook,
	Twitter,
	Instagram,
} from 'react-bootstrap-icons';
import './Provider.css';
<<<<<<< HEAD
<<<<<<< HEAD


const Provider = () => {
  return (
    <>
    <div className='container  d-flex flex-column justify-content-center align-items-center'
    style={{position: 'relative', bottom: '10rem'}}>

      <div className='text-light text-center title h4 my-auto'>
        My Provider
      </div>
      <div id='provider' className="card1"
      style={{maxWidth: '250px', maxHeight: '250px'}}
      >
        <button className="mail">
          <EnvelopeFill />
        </button>
        <div className="profile-pic"
        ></div>
        <div className="bottom">
          <div className="content">
            <span className="name">Dr. Diha Mahj</span>
            <span className="about-me">
              Passionate about bridging technology and healthcare to improve patient outcomes.
            </span>
          </div>
          <div className="bottom-bottom">
            <div className="social-links-container fs-6 p-2">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
            <button className="button1 btn">Call now</button>
          </div>
        </div>
        
      </div>

    </div>
      
    </>
  );
}
=======

const Provider = () => {
=======

const Provider = () => {
>>>>>>> origin/master
	return (
		<>
			<div className='provider-wrapper'>
				<div className='text-light text-center title h1 my-3'>My Provider</div>
				<div id='provider' className='card1'>
					<button className='mail'>
						<EnvelopeFill />
					</button>
					<div className='profile-pic'></div>
					<div className='bottom'>
						<div className='content'>
							<span className='name'>Dr. Diha Mahj</span>
							<span className='about-me'>
								Passionate about bridging technology and healthcare to improve
								patient outcomes.
							</span>
						</div>
						<div className='bottom-bottom'>
							<div className='social-links-container fs-1 p-2'>
								<Facebook />
								<Twitter />
								<Instagram />
							</div>
							<button className='button1 btn'>Call now</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
<<<<<<< HEAD
>>>>>>> 2615bcaf534c8720438c19f01aed91e027734071
=======
>>>>>>> origin/master

export default Provider;
