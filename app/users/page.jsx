"use client";

import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserPage = () => {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  console.log(data);

  if (error) {
    return <h1>Error</h1>;
  }
  if (!data) return <h1>Loading..</h1>;

  return (
    <div>
      <h1>Users</h1>
      {data.users &&
        data.users.map((user) => (
          <Link key={user.id} href={`users/${user.id}`}>
            <li>{user.firstName}</li>
          </Link>
        ))}
    </div>
  );
};

export default UserPage;
