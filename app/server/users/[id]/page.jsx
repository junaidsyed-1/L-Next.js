export default async function UserInfoPage({ params }) {
  const id = params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();

  return (
    <div>
      <h1>{data.firstName}</h1>
    </div>
  );
}
