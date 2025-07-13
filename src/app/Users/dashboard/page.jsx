import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
  const user = await authUserSession()
  
  return (
    <div className="text-color-primary flex flex-col mt-8 justify-center items-center gap-4">
      <h5 className="text-2xl font-bold">Welcome, {user.name}</h5>
      <Image src={user.image} alt="..." width={250} height={250}/>
      <div className="py-8 flex flex-wrap gap-4 ">
        <Link href="/Users/dashboard/collection" className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl rounded">My Collection</Link>
        <Link href="/Users/dashboard/comment" className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl rounded">My Comment</Link>
      </div>
    </div>
  )
} 

export default Page