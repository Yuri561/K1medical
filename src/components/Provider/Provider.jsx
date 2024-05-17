import React from 'react';
import {
	EnvelopeFill,
	Facebook,
	Twitter,
	Instagram,
} from 'react-bootstrap-icons';
import './Provider.css';

const Provider = () => {
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

export default Provider;
