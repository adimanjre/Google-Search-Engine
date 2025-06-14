"use client"

import Head from "next/head"
import SearchHeader from "../components/SearchHeader"

const Search = () => {
  return (
    <div>
        <Head>
            <title>Search Page</title>
        </Head>
        
        <SearchHeader/>
    </div>
  )
}

export default Search