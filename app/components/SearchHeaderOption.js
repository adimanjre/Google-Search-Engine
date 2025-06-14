import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const SearchHeaderOption = ({title, Icon, selected}) => {
    const router = useRouter();
    const params = useSearchParams();

    const style = `flex items-center space-x-1 border-b-4  hover:border-blue-500 hover:text-blue-500 cursor-pointer pb-3 ${selected ? 'text-blue-500 border-blue-500' : 'border-transparent'}`

    const handleSelectTab = (select)=>{
        router.push(`/search?term=${params.get("term")}&searchType=${title==="Images"?"image":""}`)
    }

  return (
    <div className={style} onClick={handleSelectTab}>
        {<Icon className="h-5"/>}
        <p>{title}</p>
    </div>
  )
}

export default SearchHeaderOption