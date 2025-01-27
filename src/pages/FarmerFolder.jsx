import { useState, React, useEffect } from "react";
import { Link } from "react-router-dom";
import folderIcon from "../assets/folderIcon.svg"
const FarmerFolder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [folders, setFolders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/folders')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFolders(data)
      })
      .catch((error) => console.error('Error fetching folders:', error));
  }, []);


  const filteredFolders = folders.filter((folder) =>
    folder.farmer_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="flex items-center m-5 h-6 w-6"></div>

      {/* Search Bar */}
      <div className="mb-5 flex justify-center">
        <input
          type="text"
          className="p-2 pl-4 mb-4 border border-gray-300 rounded-lg w-1/2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          placeholder="Search for Folder..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {filteredFolders.map((folder) => (
            
            <div
              key={folder.id}
              className="cursor-pointer p-7 border-1 border-gray-300 rounded-lg hover:shadow-xl hover:border-gray-300 transition-all duration-300 bg-white hover:scale-105"
            >
              <Link to={`/folder/${folder.farmer_id}`}>
                <img src={folderIcon} alt="folderIcon" className="w-10" />
                <h2 className="font-semibold text-lg mt-2 text-black text-left">
                  {folder.farmer_name}
                </h2>
                <h3 className="font-semibold text-xs mt-1 text-gray-600 text-left">
                  ID: {folder.farmer_id}
                </h3>
                <h3 className="font-semibold text-xs mt-1 text-gray-600 text-left">
                  Last update: {folder.last_update}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FarmerFolder;
