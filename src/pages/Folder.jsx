import React from "react";
import picture_1 from "../assets/image/picture_1.jpg";
import picture_2 from "../assets/image/picture_2.jpg";
export default function () {
  return (
    <>
      <div className="flex items-center m-5">
        <button
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
          onClick={() => window.history.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="ml-4 font-bold text-xl">Directory: KU001</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5 m-5">
        <div className="cursor-pointer p-4 border rounded-lg bg-white">
          <img
            src={picture_1}
            alt="picture_1"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className=" font-semibold text-xs mt-2 ml-1 text-stone-500 text-left">
            Filename: nonpawit_8821.jpg
          </h2>
          <h2 className=" font-semibold text-xs mt-2 ml-1 text-stone-500 text-left">
            Uploaded by Nonpawit Si...
          </h2>
        </div>
        <div className="cursor-pointer p-4 border rounded-lg bg-white">
          <img
            src={picture_2}
            alt="picture_2"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className=" font-semibold text-xs mt-2 ml-1 text-stone-500 text-left">
            Filename: nonpawit_8822.jpg
          </h2>
          <h2 className=" font-semibold text-xs mt-2 ml-1 text-stone-500 text-left">
            Uploaded by Nonpawit Si...
          </h2>
        </div>
        <div className="cursor-pointer p-4 border rounded-lg bg-white">
          <img
            src={picture_1}
            alt="picture_1"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className=" font-semibold text-xs mt-2 ml-1 text-stone-500 text-left">
            Filename: nonpawit_8823.jpg
          </h2>
          <h2 className=" font-semibold text-xs mt-2 ml-1 text-stone-500 text-left">
            Uploaded by Nonpawit Si...
          </h2>
        </div>
        
        <div className="cursor-pointer p-4 border rounded-lg bg-white">
          <img
            src={picture_1}
            alt="picture_1"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className=" font-semibold text-xs mt-2 ml-1 text-stone-500 text-left">
            Filename: nonpawit_8824.jpg
          </h2>
          <h2 className=" font-semibold text-xs mt-2 ml-1 text-stone-500 text-left">
            Uploaded by Nonpawit Si...
          </h2>
        </div>
      </div>
    </>
  );
}
