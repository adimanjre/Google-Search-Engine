"use client"

import Link from "next/link"
import User from "./User"

const Header = () => {
  return (
   <header className="flex justify-between p-5 text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
            <Link href={'https://about.google/'}>
              <p className="link">About</p>
            </Link>
            <Link href={'https://store.google.com/?hl=en-IN'}>
              <p className="link">Store</p>
            </Link>
        </div>
        <div className="flex space-x-4 items-center">
           <Link href={'https://mail.google.com/mail/'}>
            <p className="link">Gmail</p>
           </Link> 
            <Link href="https://images.google.com/">
              <p className="link">Images</p>
            </Link>
            <User/>
        </div>
   </header>
  )
}

export default Header