import '../students/tables.css'
import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Teachers() {
  const { user } = useAuthContext();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getRecorders = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:3000/teachers',
      {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      }
    )
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  console.log(user.token);
  
  
  return (
    <div>
      {loading && <div className="loading">Loading...</div>}
      {!loading && (
        <div className="data-table">
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>address</th>
              <th>employed since</th>
              <th>sallery</th>
            </tr>

            {data.map((teacher) => {
              return (
                <tr key={teacher.id}>
                  <td>{teacher.fname}</td>
                  <td>{teacher.lname}</td>
                  <td>{teacher.age}</td>
                  <td>{teacher.address}</td>
                  <td>{teacher.doe.split('T')[0]}</td>
                  <td>{teacher.sallery.split('.')[0]}$</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}
