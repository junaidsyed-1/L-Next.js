import Link from "next/link";


export default function Home() {
  return (
    <>
      <h2>Hello world</h2>
      <Link href='/server/users'><button className='bg-red-700 p-2 m-2 text-white rounded-lg hover:bg-opacity-90 '>Go to server/users</button></Link>
    </>
  );
}
