import React from "react";
import { Link, useNavigate } from "react-router-dom";

function UserRows({ el }) {
  const navigate = useNavigate();
  // LLammar

  const handleOnClick = () => {
    console.log("**");
    // set context (el.username)
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
