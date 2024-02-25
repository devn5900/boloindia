'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  
  return (
    <div className=" min-h-screen flex justify-center items-center border-2">
      <div className="flex flex-col gap-5  ">
      <h2 className="text-5xl font-extrabold">{error.message}</h2>
      <Link href={"/blogs"} className="py-2 px-4 bg-green-500 rounded-full  text-center text-lg font-bold text-white  border-2 border-green-800 outline-none">Try again</Link>
      </div>
    </div>
  )
}