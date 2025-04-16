"use client"

import Header from "@/app/components/Header";
import Image from "next/image";
import {MagnifyingGlassIcon, MicrophoneIcon} from "@heroicons/react/24/solid"
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {

 const router = useRouter();

 function handleSearch(formData){
  const term = formData.get('search');
  if(!term.trim()) return;
  router.push(`/search?term=${term.trim()}`);
 }

  return (
    <>
      <Header/>
      <form action={handleSearch} className="flex flex-col items-center gap-2  mt-20">
        <Image alt="google logo" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'} height={'100'} width={'400'}/>

        <div className="flex w-full justify-center gap-5 mt-5 px-5 py-3 rounded-full items-center max-w-[90%] border border-gray-300 hover:shadow-lg focus-within:shadow-lg lg:max-w-xl">
          <MagnifyingGlassIcon height={25} className="text-gray-500"/>
          <input type="text" name="search" className="flex-grow focus:outline-none"/>
          <MicrophoneIcon height={25} className="text-gray-500"/>
        </div>
       <div className="flex flex-col gap-5 sm:flex-row">
        <button type="submit" className="btn">Google Search</button>
        <button className="btn">I&apos;m Feeling Lucky</button>
       </div>
      </form>
      <Footer/>
    </>
  );
}
