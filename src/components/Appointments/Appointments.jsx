import React from 'react';
import './Appointments.css';

const Appointments = () => {
  return (
    <div className='app-wrapper d-flex flex-column justify-content-center align-items-center'>
      <div className='text-center lead'>
        <h1 className='fs-3'>Menu</h1>
      </div>
      <div className='row row-cols-2 g-1 justify-content-center mb-1'>
        <div className='col-sm text-center'>
          <button className='button3'>
            <span className='text-center word'>Team</span>
          </button>
        </div>
        <div className='col-sm text-center'>
          <button className='button3' data-bs-toggle='modal' data-bs-target='#staticBackdrop1'>
            <span className='text-center word'>Orders</span>
          </button>
        </div>
      </div>
      <div className='row row-cols-2 g-1 justify-content-center mb-1'>
        <div className='col-sm text-center'>
          <button className='button3'>
            <span className='text-center word'>Fitness</span>
          </button>
        </div>
        <div className='col-sm text-center'>
          <button className='button3' data-bs-toggle='modal' data-bs-target='#staticBackdrop2'>
            <span className='text-center word'>Schedule</span>
          </button>
        </div>
      </div>

      {/* Modal for schedule 1 */}
      <div className='modal fade' id='staticBackdrop1' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel1' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-scrollable' style={{ height: '15rem', position: 'absolute' }}>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='staticBackdropLabel1'>Schedule</h1>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>...</div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary'>Understood</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for schedule 2 */}
      <div className='modal fade' id='staticBackdrop2' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel2' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-scrollable' style={{ height: '15rem', position: 'absolute' }}>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='staticBackdropLabel2'>Schedule</h1>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>...</div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
              <button type='button' className='btn btn-primary'>Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
