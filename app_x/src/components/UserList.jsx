import React from 'react'
import { UserRows } from './UserRows';

function UserList({data}) {
  return (
    <> 
    <h3>Usuarios</h3>   
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Nick Name</th>
            </tr>
        </thead>

        <tbody>
            { 
                data.length === 0 ? 
                <tr><td colSpan='2'>Sin Datos</td></tr> : 
                data.map(el => <UserRows key={el.id} el={el}/>)
            }
        </tbody>
    </table>
    
    </>
  )
}

export {UserList};