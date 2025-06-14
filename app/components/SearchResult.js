import Parser from "html-react-parser"

const SearchResult = ({link, htmlTitle, htmlSnippet, displayLink }) => {
  return (
    <li className="max-w-3xl mb-8 ">
        <div className="group cursor-pointer">
            <a className="truncate" href={link}>{displayLink}</a>
            <a href={link} className="group-hover:underline decoration-blue-800">
                <h2 className="truncate text-xl font-medium text-blue-800 ">
                    {Parser(htmlTitle)}
                </h2>
            </a>
        </div>
        <p className="text-gray-600">{Parser(htmlSnippet)}</p>
    </li>
  )
}

export default SearchResult