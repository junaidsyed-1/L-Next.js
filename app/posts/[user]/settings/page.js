'use client'
import { useParams } from "next/navigation"

export default function Setting() {

    const params = useParams();
    console.log(params);
    return (
        <>
            <h1>This is {params.user} settings page</h1>
        </>
    )
}