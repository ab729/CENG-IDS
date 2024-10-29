import './tables.css'
import React, { useEffect } from 'react'
import { useGetData } from '../../hooks/useGetData';
import { useAuthContext } from '../../hooks/useAuthContext';


// alerts
import Swal from "sweetalert2";



export default function Students() {
  const { getRecorders, data, loading } = useGetData();
  const { isAuthenticated } = useAuthContext();


  useEffect(() => {
    if(isAuthenticated)
      getRecorders('students');

  }, [])
  

  return (
    <div>
      {loading && <div className="loading">Loading...</div>}
      {isAuthenticated ? (
        <div className="data-table">
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>address</th>
              <th>Enrollment Date</th>
              <th>Major</th>
              <th>GPA</th>
            </tr>

            {data.map((student) => (
              <tr key={student.id}>
                <td>{student.fname}</td>
                <td>{student.lname}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
                <td>{student.enrollment_date.split("T")[0]}</td>
                <td>{student.major}</td>
                <td>{student.gpa}</td>
              </tr>
            ))}
          </table>
        </div>
      ) : (
         <div className="loading">Please login to view the data</div> 
      )}
    </div>
  );
}
