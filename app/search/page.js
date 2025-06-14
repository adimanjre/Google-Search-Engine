

import SearchHeader from "../components/SearchHeader"

import SearchResults from "../components/SearchResults";
import { Response } from "../respons";

export async function generateMetadata({searchParams}){
  const param = await searchParams;
  return{
    title:param.term + " - Search Page"
  }
}

const page = async ({searchParams})=>{
 const param = await searchParams;
 const startIndex = param.start || "1";
 const mockData = false;
  const response = mockData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${param.term}${param.searchType ? "&searchType=image":""}&start=${startIndex}`);
const data = mockData? response : await response.json();


  return (
    <div>
        
        <SearchHeader/>
        <SearchResults searchResult={data}/>
    </div>
  )
}
export default page