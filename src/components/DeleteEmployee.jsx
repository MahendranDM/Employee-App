import React from 'react'
import NavBar from './NavBar'

const DeleteEmployee = () => {
  return (
    <div>
        <NavBar/>

    <div className="container">
        <div className="row">
            <div className="col col-12">

<div className="row g-3">
    <div className="col col-12">

<label htmlFor="" className="form-label">Emp Name</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12">
<button className="btn btn-danger">Delete</button>

    </div>
</div>
                
            </div>
        </div>
    </div>



    </div>
  )
}

export default DeleteEmployee