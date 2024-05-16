import React from 'react'
import './Appointments.css'
const Appointments = () => {
  return (
    <div className='container  app-wrapper justify-content-center'>
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <button class="button3 " style={{width: '10rem'}}
         >
          Previous
</button>
        </div>
           <div className="col-6 text-center">
          <button class="button3" style={{width: '10rem'}}
           data-bs-toggle='modal' data-bs-target="#staticBackdrop">
          Schedule
</button>
        </div>
      </div>

{/* Modal for schedule */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable"
  style={{height: '15rem', position: 'absolute'}}>
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Schedule</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
      </div>
  )
}

export default Appointments