import React from "react";
import FolderIcon from "../assets/folder.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="flex items-center m-5 h-6 w-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5 m-5 ">
        <div className="cursor-pointer p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white hover:scale-105">
          <Link to="/folder/1">
            <img src={FolderIcon} alt="FolderIcon" className="w-10" />
            <h2 className="font-semibold text-lg mt-2 text-black text-left">
              KU001
            </h2>
            <h3 className="font-semibold text-xs mt-1 text-gray-600 text-left">
              Owner: Nonpawit Silabumrungrad
            </h3>
            <h3 className="font-semibold text-xs mt-1 text-gray-600 text-left">
              Last update: 10 January 2025
            </h3>
          </Link>
        </div>
        <div className="cursor-pointer p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white hover:scale-105">
          <Link to="/folder/2">
            <img src={FolderIcon} alt="FolderIcon" className="w-10" />
            <h2 className="font-semibold text-lg mt-2 text-black text-left">
              KU002
            </h2>
            <h3 className="font-semibold text-xs mt-1 text-gray-600 text-left">
              Owner: Nonpawit Silabumrungrad
            </h3>
            <h3 className="font-semibold text-xs mt-1 text-gray-600 text-left">
              Last update: 05 January 2025
            </h3>
          </Link>
        </div>
        <div className="cursor-pointer p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white hover:scale-105">
          <Link to="/folder/3">
            <img src={FolderIcon} alt="FolderIcon" className="w-10" />
            <h2 className="font-semibold text-lg mt-2 text-black text-left">
              KU003
            </h2>
            <h3 className="font-semibold text-xs mt-1 text-gray-600 text-left">
              Owner: Nonpawit Silabumrungrad
            </h3>
            <h3 className="font-semibold text-xs mt-1 text-gray-600 text-left">
              Last update: 07 January 2025
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}
