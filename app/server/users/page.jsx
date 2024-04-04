import Link from "next/link";

const UserPage = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();

  return (
    <div>
      <h1>Users (Server Side Rendering)</h1>
      {data.users.map((user) => (
        <Link href={`/server/users/${user.id}`} key={user.id}>
          <li>{user.firstName}</li>
        </Link>
      ))}
    </div>
  );
};

export default UserPage;
