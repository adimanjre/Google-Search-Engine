"use client"

import Header from "@/app/components/Header"
import { signIn, getProviders } from "next-auth/react"
import { useEffect, useState } from "react"


const signin = () => {
 
  const[providers, setProviders] = useState();

  useEffect(()=>{
   async function getproviders (){
      const data = await getProviders();
      setProviders(data);
    };
    getproviders();
  },[]);


  return (
    <div>
       <Header/>
       <div className="flex justify-center items-center mt-10">
        {
          providers && Object.values(providers).map((item,index) =>  <button className="border border-gray-400 rounded-lg px-6 py-2 text-gray-800 hover:shadow-xl" key={index} onClick={()=> signIn(item.id, {callbackUrl:'/'})}>Sign in using {item.name}</button>)
        }
       </div>
    </div>
  )
}


export default signin