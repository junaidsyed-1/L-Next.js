"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button className="bg-slate-400 p-2 my-2" onClick={handleClick}>
        Place order
      </button>
      <Link href="/">
        <button className="bg-slate-400 p-2 m-2">Home</button>
      </Link>
    </>
  );
}
