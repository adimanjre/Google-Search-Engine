
import Head from "next/head"
import SearchHeader from "../components/SearchHeader"
import SearchHeaderOptions from "../components/SearchHeaderOptions"
import { Response } from "../respons";

const page = async ({searchParams})=>{
 const param = await searchParams;
 const mockData = true;
  const response = mockData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${param.term}${param.searchType ? "&searchType=image":""}`);
const data = mockData? response : await response.json();

  
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
export default page