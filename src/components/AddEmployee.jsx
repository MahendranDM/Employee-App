import React from 'react'
import NavBar from './NavBar'

const AddEmployee = () => {
    return (
        <div>
            <NavBar/>

            <div className="container">
                <div className="row ">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className=" col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Emp code</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className=" col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Company Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className=" col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="tel" name="" id="" className="form-control" />

                            </div>
                            <div className=" col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name="" id="" className="form-control" />

                            </div>
                            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <label htmlFor="" className="form-label">Designation</label>
                                <input type="text" className="form-control" />



                            </div>
                            <div className=" col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


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