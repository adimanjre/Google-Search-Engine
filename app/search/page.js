"use client"

import Head from "next/head"
import SearchHeader from "../components/SearchHeader"
import SearchHeaderOptions from "../components/SearchHeaderOptions"

const Search = () => {
  return (
    <div>
        <Head>
            <title>Search Page</title>
        </Head>
        
        <SearchHeader/>
        <SearchHeaderOptions/>
    </div>
  )
}

export default Search