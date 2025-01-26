import { useState, React } from "react";
import { Link } from "react-router-dom";
import folderIcon from "../assets/folderIcon.svg"
const FarmerFolder = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const folders = [
    {
        id: 1,
        name: "567-102-103-559",
        owner: "Pattharapong Intharakul",
        lastUpdate: "14 January 2025",
    },
    {
        id: 2,
        name: "567-102-103-560",
        owner: "Jirawan Thongprasert",
        lastUpdate: "15 January 2025",
    },
    {
        id: 3,
        name: "567-102-103-561",
        owner: "Noppadon Srisawat",
        lastUpdate: "13 January 2025",
    },
    {
        id: 4,
        name: "567-102-103-562",
        owner: "Anchalee Wongkam",
        lastUpdate: "12 January 2025",
    },
    {
        id: 5,
        name: "567-102-103-563",
        owner: "Wutthichai Thongsuk",
        lastUpdate: "10 January 2025",
    },
    {
        id: 6,
        name: "567-102-103-564",
        owner: "Suchada Kanjanakul",
        lastUpdate: "09 January 2025",
    },
    {
        id: 7,
        name: "567-102-103-565",
        owner: "Apisak Pongchai",
        lastUpdate: "08 January 2025",
    },
    {
        id: 8,
        name: "567-102-103-566",
        owner: "Ratchanok Chaiyaphum",
        lastUpdate: "07 January 2025",
    },
];

  const filteredFolders = folders.filter((folder) =>
    folder.owner.toLowerCase().includes(searchTerm.toLowerCase())
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
              <Link to={`/folder/${folder.name}`}>
                <img src={folderIcon} alt="folderIcon" className="w-10" />
                <h2 className="font-semibold text-lg mt-2 text-black text-left">
                  {folder.owner}
                </h2>
                <h3 className="font-semibold text-xs mt-1 text-gray-600 text-left">
                  ID: {folder.name}
                </h3>
                <h3 className="font-semibold text-xs mt-1 text-gray-600 text-left">
                  Last update: {folder.lastUpdate}
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
