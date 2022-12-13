import React from "react";
import { Link, useNavigate } from "react-router-dom";

function UserRows({ el }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log("**");
    navigate(`/user/${el.id}`);
  };

  return (
    <>
      <tr>
        <td>{el.id}</td>
        <td>{el.username}</td>
        <td>{el.nickName}</td>
        <td>
          <button onClick={handleOnClick}>Detail</button>
        </td>
      </tr>
    </>
  );
}

export { UserRows };
