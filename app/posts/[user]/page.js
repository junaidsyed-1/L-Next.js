/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
'use client'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

export default function junaid() {
    const params = useParams();
    const router = useRouter();
    console.log(router)
    return (
        <>
            <h1>This is {params.user} page</h1>
            <button
                onClick={e => router.push(`/posts/${params.user}/settings`)}
                className='bg-red-600 p-2'>Open Settings</button>
        </>
    )
}