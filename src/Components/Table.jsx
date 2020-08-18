import React from "react";

function Table(params) {
  return (
    <table className="employeeInfo">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
        </thead>
        <tbody>
            {params.children}
        </tbody>
    </table>
  );
}

export default Table;
