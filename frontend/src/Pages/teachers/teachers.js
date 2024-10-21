import '../students/tables.css'
import React from 'react'

export default function teachers() {
  return (
    <div>
      <div className="data-table">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>id</th>
            <th>address</th>
            <th>sallery</th>
            <th>employed since</th>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>22</td>
            <td>123</td>
            <td>1234 Main St</td>
            <td>1200.00$</td>
            <td>2014</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
