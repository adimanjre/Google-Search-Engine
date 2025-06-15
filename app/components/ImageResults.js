import ImageResult from "./ImageResult"
import Pagination from "./Pagination"

const ImageResults = ({imageResult}) => {
  return (
    <div className="mt-4">
        <div className="grid px-5 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
            imageResult.items.map(item => 
            <ImageResult 
            key={item.link} 
            result={item}
            />
        )
        }
    </div>
        <div className="ml-16">
            <Pagination/>
        </div>
    </div>
  )
}

export default ImageResults