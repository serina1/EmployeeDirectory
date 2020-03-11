import React from "react";
import table from 'react-bootstrap/Table'

export default function EmployeeTable(props) {
  return (
    <table striped="true" border="true" hover="true" responsive="true">
      <thead>
        <tr>
          {/* <button 
          onClick={() => props.onSort( "id")}
          >#ID</button> */}
          <th >#ID</th>
          <th> First Name</th>
          <th onClick={e => props.onSort(e, "sur")}> Last Name </th>
          <th> Title </th>
          <th>Email</th>
          <th > Role </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => (
          <tr>
            <td> {row.id} </td>
            <td> {row.firstName} </td>
            <td> {row.surname} </td>
            <td> {row.title}</td>
            <td> {row.email} </td>
            <td> {row.role} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
