import React from 'react';
import './Appointments.css';

const Appointments = () => {
	return (
<<<<<<< HEAD
<<<<<<< HEAD
		<div className='app-wrapper d-flex flex-column justify-content-center'
		style={{position: 'relative', bottom: '10rem'}}>
=======
		<div className='app-wrapper justify-content-center position-relative'
			style={{ bottom: '5rem'}}>
>>>>>>> 2615bcaf534c8720438c19f01aed91e027734071
=======
		<div className='app-wrapper justify-content-center position-relative'
			style={{ bottom: '5rem'}}>
>>>>>>> origin/master
			{' '}
			{/* Added opening div tag */}
			<div className='text-center lead'>
				<h1 className='my-5'>Menu</h1>
			</div>
<<<<<<< HEAD
<<<<<<< HEAD
			<div className='row g-2 g-lg-2 justify-content-center mb-1'>
=======
			<div className='row g-2 g-lg-3 justify-content-center mb-1'>
>>>>>>> 2615bcaf534c8720438c19f01aed91e027734071
=======
			<div className='row g-2 g-lg-3 justify-content-center mb-1'>
>>>>>>> origin/master
				<div className='col-sm text-center'>
					<button className='button3' style={{ width: '7rem' }}>
						<span className='text-center word'>Team</span>
					</button>
				</div>
				<div className='col-sm text-center'>
					<button
						className='button3'
						style={{ width: '7rem' }}
						data-bs-toggle='modal'
						data-bs-target='#staticBackdrop1'>
						{' '}
						{/* Changed modal ID to unique ID */}
						<span className='text-center word'>Orders</span>
					</button>
				</div>
			</div>
			<div className='row g-2 justify-content-center mb-3 my-1'>
				<div className='col-sm text-center'>
					<button className='button3' style={{ width: '7rem' }}>
						<span className='text-center word'>Fitness</span>
					</button>
				</div>
				<div className='col-sm text-center'>
					<button
						className='button3'
						style={{ width: '7rem' }}
						data-bs-toggle='modal'
						data-bs-target='#staticBackdrop2'>
						<span className='text-center word'>Schedule</span>
						
					</button>
				</div>
			</div>
			{/* Modal for schedule 1 */}
			<div
				className='modal fade'
				id='staticBackdrop1'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='staticBackdropLabel1'
				aria-hidden='true'>
				<div
					className='modal-dialog modal-dialog-scrollable'
					style={{ height: '15rem', position: 'absolute' }}>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='staticBackdropLabel1'>
								{' '}
								{/* Changed aria-labelledby to unique ID */}
								Schedule
							</h1>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div className='modal-body'>...</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'>
								Close
							</button>
							<button type='button' className='btn btn-primary'>
								Understood
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* Modal for schedule 2 */}
			<div
				className='modal fade'
				id='staticBackdrop2'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='staticBackdropLabel2'
				aria-hidden='true'>
				<div
					className='modal-dialog modal-dialog-scrollable'
					style={{ height: '15rem', position: 'absolute' }}>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='staticBackdropLabel2'>
								{' '}
								{/* Changed aria-labelledby to unique ID */}
								Schedule
							</h1>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div className='modal-body'>...</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'>
								Close
							</button>
							<button type='button' className='btn btn-primary'>
								Understood
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Appointments;