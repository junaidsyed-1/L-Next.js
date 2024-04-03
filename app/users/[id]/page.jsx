"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserInfoPage = () => {
  const params = useParams();
  const id = params.id;

  const { data, error } = useSWR(`https://dummyjson.com/users/${id}`, fetcher);

  if (error) {
    return <h1>Error</h1>;
  }

  if (!data) return <h1>Loading...</h1>;

  return (
    <div className="text-3xl ">
      <h1>{data?.firstName}</h1>
      <h1>{data?.email}</h1>
    </div>
  );
};

export default UserInfoPage;
