import './tables.css'
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Students() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecorders = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:3000/students')
    const json = await response.json();
    setData(json);
    setLoading(false);
    
  }

  useEffect(() => {
      getRecorders();


  }, [])
  

  return (
    <div>
    { loading && <div className="loading">Loading...</div>}
      { !loading && <div className="data-table">
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

              { data.map((student) => (
                <tr key={student.id}>
                  <td>{student.fname}</td>
                  <td>{student.lname}</td>
                  <td>{student.age}</td>
                  <td>{student.address}</td>
                  <td>{student.enrollment_date.split('T')[0]}</td>
                  <td>{student.major}</td>
                  <td>{student.gpa}</td>
                </tr>
              ))
            }
        </table>
      </div>
      }
    </div>
  );
}
