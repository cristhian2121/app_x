import React from 'react'

function UserRows({el}) {
  return (
    <>
        <tr>
            <td>{el.id}</td>
            <td>{el.username}</td>
            <td>{el.nickName}</td>
        </tr>
    </>
  )
}

export {UserRows};