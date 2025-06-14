"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Pagination = () => {
  const param = useSearchParams();
  const index = Number(param.get("start")) || 1;
  return (
    <div className="text-blue-500 hover:underline hover:text-blue-500 flex space-x-6" >
        {index > 10 && (
        <Link
          href={`/search?term=${param.get("term")}&searchType=${param.get(
            "searchType"
          )}&start=${index - 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center ">
            <ArrowLeftIcon className="h-7 " />
            <p>Prev</p>
          </div>
        </Link>
      )}
      {index < 90 && (
        <Link
          href={`/search?term=${param.get("term")}&searchType=${param.get(
            "searchType"
          )}&start=${index + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center ">
            <ArrowRightIcon className="h-7 " />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
