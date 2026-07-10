import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewEmployee = () => {

  const[data,changeData] = useState(


    

[
  {
    "empcode": "EMP001",
    "name": "Rahul Sharma",
    "phno": "9876543210",
    "designation": "Software Engineer"
  },
  {
    "empcode": "EMP002",
    "name": "Anjali Nair",
    "phno": "9876543211",
    "designation": "HR Manager"
  },
  {
    "empcode": "EMP003",
    "name": "Arun Kumar",
    "phno": "9876543212",
    "designation": "Project Manager"
  },
  {
    "empcode": "EMP004",
    "name": "Sneha Joseph",
    "phno": "9876543213",
    "designation": "UI/UX Designer"
  },
  {
    "empcode": "EMP005",
    "name": "Vishnu Raj",
    "phno": "9876543214",
    "designation": "QA Engineer"
  },
  {
    "empcode": "EMP006",
    "name": "Meera Das",
    "phno": "9876543215",
    "designation": "Business Analyst"
  },
  {
    "empcode": "EMP007",
    "name": "Akash Menon",
    "phno": "9876543216",
    "designation": "DevOps Engineer"
  },
  {
    "empcode": "EMP008",
    "name": "Priya Ramesh",
    "phno": "9876543217",
    "designation": "Accountant"
  },
  {
    "empcode": "EMP009",
    "name": "Nikhil Paul",
    "phno": "9876543218",
    "designation": "System Administrator"
  },
  {
    "empcode": "EMP010",
    "name": "Divya Suresh",
    "phno": "9876543219",
    "designation": "Marketing Executive"
  }
])


  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <table className="table table-dark table-hover table-bordered">
          <thead>
            <tr>
              <th>Employee Code</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Designation</th>
            </tr>
          </thead>

       <tbody>
  {data.map((value, index) => (
    <tr >
      <td>{value.empcode}</td>
      <td>{value.name}</td>
      <td>{value.phno}</td>
      <td>{value.designation}</td>
    </tr>
  ))}
</tbody>
       
        </table>
      </div>
    </div>
  )
}

export default ViewEmployee