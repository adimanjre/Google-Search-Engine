import React from "react";
import SearchResult from "./SearchResult";
import Pagination from "./Pagination";

const SearchResults = ({ searchResult }) => {

  const { formattedTotalResults, formattedSearchTime } =
    searchResult?.searchInformation;
  return (
    <>
      {searchResult && (
        <>
            <div className="w-full mx-auto px-5 sm:pl-[5%] md:pl-[14%] lg:pl-52">
          <p className="text-gray-700 my-3 text-sm">
            About {formattedTotalResults} Results ({formattedSearchTime}{" "}
            Seconds)
          </p>
          <ul>
            {searchResult.items.map((result) => (
              <SearchResult
                key={result.link}
                htmlTitle={result.htmlTitle}
                htmlSnippet={result.htmlSnippet}
                displayLink={result.displayLink}
                htmlFormattedUrl={result.htmlFormattedUrl}
                link={result.link}
              />
            ))}
          </ul>
          <Pagination/>
        </div>
        
        </>
      )}
    </>
  );
};

export default SearchResults;
