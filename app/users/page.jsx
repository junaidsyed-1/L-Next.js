"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const data = await fetch("https://dummyjson.com/users");
      const json = await data.json();
      setUsers(json.users);
    }
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users &&
        users.map((user) => (
          <Link key={user.id} href={`users/${user.id}`}>
            <li>{user.firstName}</li>
          </Link>
        ))}
    </div>
  );
};

export default UserPage;
