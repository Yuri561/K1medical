/* eslint-disable no-unused-vars */
import React from 'react';
import './Quotes.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Love from '../../img/love.png';
import Speaker from '../../img/speaker.png';
import Copy from '../../img/copy.png';
import { Instagram } from 'react-bootstrap-icons';

const Quotes = () => {
	return (
        <div className='quotes-wrapper justify-content-center d-flex'
        style={{width: '100%', height: '100%'}}>
			<div className='card text-center' style={{ width: '100%', height: '100%' }}>
				<div className='card-header h2'>Quote Of The Day</div>
				<div className='card-body'>
					<h5 className='card-title'>Special title treatment</h5>
					<blockquote className='blockquote mb-0'>
						<p>A well-known quote, contained in a blockquote element.</p>
						<footer className='blockquote-footer'>
							Someone famous in <cite title='Source Title'>Source Title</cite>
						</footer>
					</blockquote>
				</div>
				<div className='card-footer text-body-secondary d-grid'>
					<div className='row quote-icons justify-content-start'>
						<div className='col'>
							<img
								className=''
								src={Speaker}
								alt='love'
								style={{ width: '2rem' }}
							/>
						</div>
						<div className='col'>
							<img
								className=''
								src={Copy}
								alt='love'
								style={{ width: '2rem' }}
							/>
						</div>
						<div className='col'>
							<img
								className=''
								src={Love}
								alt='love'
								style={{ width: '2rem' }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quotes;