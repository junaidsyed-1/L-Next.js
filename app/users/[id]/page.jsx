"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserInfoPage = () => {
  const params = useParams();
  console.log(params);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const id = params.id;

    async function getUserInfo(id) {
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      const json = await data.json();
      setUserInfo(json);
    }
    getUserInfo(id);
  }, [params.id]);

  return (
    <div className="text-3xl ">
      <h1>{userInfo?.firstName}</h1>
      <h1>{userInfo?.email}</h1>
    </div>
  );
};

export default UserInfoPage;
