import React from 'react'

const SearchResults = ({searchResult}) => {
    const {formattedTotalResults, formattedSearchTime} = searchResult.searchInformation;
  return (
    <div className='w-full mx-auto px-5 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
        <p className='text-gray-700 my-3 text-sm'>
            About {formattedTotalResults} Results ({formattedSearchTime} Seconds)
        </p>
    </div>
  )
}

export default SearchResults