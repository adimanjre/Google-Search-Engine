import Image from "next/image"

const ImageResult = ({result}) => {

  return (
    <div className="group mb-8">
        <a href={result.image.contextLink}>
            <Image 
            src={result.link} 
            alt="" 
            title={result.title}
            height={300}
            width={200}
            className="object-contain w-full group-hover:shadow-lg h-48"
            />
        </a>
        <a href={result.image.contextLink}>
            <h2 className="group-hover:underline truncate text-xl mt-3">{result.title}</h2>
            <p className="group-hover:underline text-gray-700">{result.displayLink}</p>
        </a>
    </div>
  )
}

export default ImageResult