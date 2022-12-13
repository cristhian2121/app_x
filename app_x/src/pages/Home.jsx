import React, { useState } from "react";
import { useEffect } from "react";
import { UserList } from "../components/UserList";
import UsersList from "../components/UsersList";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/users")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="Main-table">
      <UserList data={data} />
    </div>
  );
}
