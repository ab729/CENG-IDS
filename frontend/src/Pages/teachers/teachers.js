import '../students/tables.css'
import React from 'react'
import { useEffect } from 'react';
import { useGetData } from '../../hooks/useGetData';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Teachers() {
  const { getRecorders, data, loading } = useGetData();
  const { user, isAuthenticated } = useAuthContext();

  useEffect(() => {
    getRecorders("teachers");


   }, []);
  
  return (
    <div>
      {loading && <div className="loading">Loading...</div>}
      {isAuthenticated && (
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
