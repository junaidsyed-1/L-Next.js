import Link from "next/link";

const UserPage = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();

  return (
    <div>
      <h1>Users (Server Side Rendering)</h1>
      {data.users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </div>
  );
};

export default UserPage;
