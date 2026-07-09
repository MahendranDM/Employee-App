import React from 'react'
import NavBar from './NavBar'

const AddEmployee = () => {
  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Employee Code</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Designation</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Department</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Date of Joining</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <select className="form-select">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>

              <div className="col-md-6">
                <label className="form-label">Salary</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-12">
                <button className="btn btn-success">Submit</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee