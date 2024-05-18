import React from 'react';
import { PersonCircle, BoxArrowRight } from 'react-bootstrap-icons';
import './Connect.css';

const Connect = () => {
	return (
		<div className='connect-wrapper'>
			<div className='row row-cols-1 row-cols-md-2 justify-content-start g-5'>
				<div className='col'>
          <button className='Btn bg-info'
		  >
            <div className='sign'>
              <PersonCircle />
            </div>
            <div className='text'>Profile</div>
          </button>
          </div>
				<div className='col'>
					<button className='Btn bg-danger '>
						<div className='sign'>
							<BoxArrowRight />
						</div>
						<div className='text'>Logout</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Connect;