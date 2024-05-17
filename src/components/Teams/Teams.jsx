import React from 'react';
import './Teams.css';
import Doctor1 from '../../img/Doctor1.jpeg';
import Doctor4 from '../../img/profile.jpeg';
import Doctor3 from '../../img/Doctor3.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Teams = () => {
	return (
		<div
			className='Teams-wrapper justify-content-start p-md-2'
			style={{ width: '100%', maxHeight: '100%' }}>
			<div className='text-center lead'>
				<h1 className='text-center'>Team</h1>
			</div>
			<div
				className='row row-cols-1
             row-cols-md-3 g-md-2
              justify-content-center
               align-items-center
               p-3'>
				<div className='col-sm text-center justify-content-start'>
					<div className='box justify-content-center bg-info rounded'
					style={{position: 'relative', bottom: '35px', fontSize:'20px', height: '150px'}}>
						<img
							src={Doctor1}
							alt='random ai photo'
							style={{
								maxWidth: '40px',
								maxHeight: '40px',
								borderRadius: '50%',
							}}
							className='img'></img>
						<div className='about d-grid'>
							<span className='fs-6 text-center text-light'>
								Yoga Specialist
							</span>
							<span className='fs-6 text-center lead'>Ms. Kim Luiz</span>
<<<<<<< HEAD
<<<<<<< HEAD
							<span className='fs-6 text-center text-light d-md-none'>
								<i className='bi bi-telephone-forward'> 910-564-1553</i>
							</span>
=======
							
>>>>>>> 2615bcaf534c8720438c19f01aed91e027734071
=======
							
>>>>>>> origin/master
						</div>
					</div>
				</div>
				<div className='col-sm text-center justify-content-start'>
					<div className='box justify-content-center bg-warning rounded'>
						<img
							src={Doctor4}
							alt='random ai photo'
							style={{
								maxWidth: '40px',
								maxHeight: '40px',
								borderRadius: '50%',
							}}
							className='img'></img>
						<div className='about d-grid'>
							<span className='fs-6 text-center text-light'>Provider</span>
							<span className='fs-6 text-center lead'>Dr. Diha Mahj</span>
							
						</div>
					</div>
				</div>
				<div className='col-sm text-center justify-content-start'>
					<div className='box justify-content-center bg-success rounded'
					style={{position: 'relative', bottom: '35px', fontSize:'20px', height: '150px'}}>
						<img
							src={Doctor3}
							alt='random ai photo'
							style={{
								maxWidth: '40px',
								maxHeight: '40px',
								borderRadius: '50%',
							}}
							className='img'></img>
						<div className='about d-grid'>
							<span className='fs-6 text-center text-light'>
								Fitness Expert
							</span>
							<span className='fs-6 text-center lead'>Ms. Jenni Len</span>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teams;
