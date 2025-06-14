import SearchHeaderOption from "./SearchHeaderOption"
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/solid"
import { useSearchParams } from "next/navigation"

const SearchHeaderOptions = () => {
    const params = useSearchParams();
  return (
    <div className="flex gap-5 w-full justify-center text-sm text-gray-700 lg:justify-start pl-52 border-b">
         <SearchHeaderOption title="All" Icon={MagnifyingGlassIcon} selected={params.get("searchType")==="" || !params.get("searchType")} />
        <SearchHeaderOption title="Images" Icon={PhotoIcon} selected={params.get("searchType")==="image"} />
       
    </div>
  )
}

export default SearchHeaderOptions