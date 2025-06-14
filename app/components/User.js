'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";

const User = ({...props}) => {

  const {data:session} = useSession();

  const logout = <Image onClick={signOut} src={session?.user.image} height={50} width={50}  className="h-10 w-10 rounded-full cursor-pointer p-1 hover:shadow-lg shadow-gray-600" alt="user profile"/>;

  const login = <button className="bg-indigo-500 text-white px-5 py-3 rounded-lg cursor-pointer hover:shadow-xl hover:shadow-indigo-200 font-medium hover:brightness-110" onClick={signIn}>Sign In</button>

  return (
    <div {...props}>{session ? logout : login}</div>
  )
}

export default User