import React from 'react'
import NavBar from './NavBar'

const ViewEmployee = () => {
  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <table className="table table-dark table-hover table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Employee Code</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Designation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>EMP001</td>
              <td>Rahul Sharma</td>
              <td>9876543210</td>
              <td>Software Engineer</td>
            </tr>

            <tr>
              <td>2</td>
              <td>EMP002</td>
              <td>Anjali Nair</td>
              <td>9876543211</td>
              <td>HR Manager</td>
            </tr>

            <tr>
              <td>3</td>
              <td>EMP003</td>
              <td>Arun Kumar</td>
              <td>9876543212</td>
              <td>Project Manager</td>
            </tr>

            <tr>
              <td>4</td>
              <td>EMP004</td>
              <td>Sneha Joseph</td>
              <td>9876543213</td>
              <td>UI/UX Designer</td>
            </tr>

            <tr>
              <td>5</td>
              <td>EMP005</td>
              <td>Vishnu Raj</td>
              <td>9876543214</td>
              <td>QA Engineer</td>
            </tr>

            <tr>
              <td>6</td>
              <td>EMP006</td>
              <td>Meera Das</td>
              <td>9876543215</td>
              <td>Business Analyst</td>
            </tr>

            <tr>
              <td>7</td>
              <td>EMP007</td>
              <td>Akash Menon</td>
              <td>9876543216</td>
              <td>DevOps Engineer</td>
            </tr>

            <tr>
              <td>8</td>
              <td>EMP008</td>
              <td>Priya Ramesh</td>
              <td>9876543217</td>
              <td>Accountant</td>
            </tr>

            <tr>
              <td>9</td>
              <td>EMP009</td>
              <td>Nikhil Paul</td>
              <td>9876543218</td>
              <td>System Administrator</td>
            </tr>

            <tr>
              <td>10</td>
              <td>EMP010</td>
              <td>Divya Suresh</td>
              <td>9876543219</td>
              <td>Marketing Executive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewEmployee