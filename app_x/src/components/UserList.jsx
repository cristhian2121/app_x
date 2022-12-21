import React from "react";
import { UserRows } from "./UserRows";

//TODO: cambiar pot DataGrid
/*
<DataGrid
  rows={rows} -> data
  columns={columns} 
/>
*/

function UserList({ data }) {
  return (
    <>
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Nick Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <>
            {data.length === 0 ? (
              <tr>
                <td colSpan="2">Sin Datos</td>
              </tr>
            ) : (
              data.map((el) => <UserRows key={el.id} el={el} />)
            )}
          </>
        </tbody>
      </table>
    </>
  );
}

export { UserList };
