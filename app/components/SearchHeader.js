"use client"

import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import {MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon} from "@heroicons/react/24/solid"
import User from "./User";
import { useRef } from "react";


const SearchHeader = () => {
    const router = useRouter();
    const params = useSearchParams();
    const inputRef = useRef(null);

    const handleSearch = (formData)=>{
        const search = formData.get("search");
        if(!search.trim()) return;
        router.push(`search?term=${search.trim()}&searchType= `);
    }

    const handleClearInput = ()=>{
      inputRef.current.value = "";
    }

  return (
    <header className="sticky top-0 bg-white ">
        <div className="flex w-full p-5 items-center gap-5">
             <Image 
             onClick={() => router.push('/')}
             
             alt="google logo" 
             src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'} 
             height={'50'}
             objectFit="cover" 
             width={'200'}
             className="cursor-pointer"
             />
             <form action={handleSearch} className="flex w-full  gap-3 flex-grow  px-5 py-3 rounded-full items-center  border border-gray-300 hover:shadow-lg focus-within:shadow-lg lg:max-w-3xl">
                <input 
                ref={inputRef}
                name="search" 
                type="text" 
                defaultValue={params.get("term")}
                className="w-full focus-within:outline-none"
                />
                <XMarkIcon 
                className="h-7 text-gray-500 cursor-pointer sm:mr-3 border-r pr-3"
                onClick={handleClearInput}
                />
                <MicrophoneIcon className="h-8 hidden sm:block text-blue-500"/>
                <MagnifyingGlassIcon className="h-7 hidden sm:block text-blue-500"/>
             </form>
             <User className="ml-auto whitespace-nowrap"/>
        </div>
    </header>
  )
}

export default SearchHeader