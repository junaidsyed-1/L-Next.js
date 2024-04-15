import Link from "next/link";

const UserPage = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();

  return (
    <div>
      <h1>Users (Server Side Rendering)</h1>
      <Link href="/">
        <button className="bg-slate-400 p-2 m-2">Home</button>
      </Link>
      {data.users.map((user) => (
        <Link key={user.id} href={`/server/users/${user.id}`}>
          <li>{user.firstName}</li>
        </Link>
      ))}
    </div>
  );
};

export default UserPage;
