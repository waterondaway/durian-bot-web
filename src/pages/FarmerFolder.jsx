import { useState, React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import folderIcon from "../assets/folderIcon.svg"
import ViewSwitcher from "../components/ViewSwitcher";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FarmerFolder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [folders, setFolders] = useState([]);
  const [viewType, setViewType] = useState("grid");
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/folder/${id}`);
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/folders')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFolders(data)
      })
      .catch((error) => console.error('Error fetching folders:', error));
  }, []);

  // console.log(viewType)
  useEffect(() => {
    console.log(viewType);
  }, [viewType]);

  const sortedImagesData = folders.sort((a, b) => new Date(b.last_update) - new Date(a.last_update));

  const filteredFolders = sortedImagesData.filter((folder) =>
    folder.farmer_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="flex items-center m-5 h-6 w-6"></div>
      {/* Search Bar */}
      <div className="mb-5 flex justify-center items-center px-5 gap-5">
        <input
          type="text"
          className="p-2 pl-4 mb-4 border border-gray-300 rounded-lg w-1/2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          placeholder="ค้นหาโฟลเดอร์..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ViewSwitcher viewType={viewType} setViewType={setViewType} />
      </div>

      <div className="flex justify-center">
        
        {viewType === "grid" ? (
          <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 mx-2"}>
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
                  <h3 className="font-semibold text-sm mt-1 text-gray-600 text-left">
                    รหัสเกษตรกร: {folder.farmer_id}
                  </h3>
                  <h3 className="font-semibold text-sm mt-1 text-gray-600 text-left">
                    อัปโหลดล่าสุด: {folder.last_update}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        ) : ( 
            <TableContainer component={Paper} className="mx-12 mb-5">
            <Table sx={{ border: "none" }}>
              <TableHead style={{ backgroundColor: '#1e2938' }}>
                <TableRow>
                  <TableCell style={{ color: 'white' , fontSize: 15}}>ลำดับ</TableCell>
                  <TableCell style={{ color: 'white' , fontSize: 15}}>ชื่อโฟลเดอร์</TableCell>
                  <TableCell style={{ color: 'white' , fontSize: 15}}>รหัสเกษตรกร</TableCell>
                  <TableCell style={{ color: 'white' , fontSize: 15}}>อัปโหลดล่าสุด</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredFolders.map((folder) => (
                  <TableRow key={folder.id} hover onClick={() => handleRowClick(folder.farmer_id)} style={{ cursor: "pointer" }}>
                    <TableCell>#{folder.id}</TableCell>
                    <TableCell>
                    <div className="flex items-center gap-4">
                        <img src={folderIcon} alt="folderIcon" className="w-10 mr-2" />
                        {folder.farmer_name}
                      </div>
                      </TableCell>
                    <TableCell>{folder.farmer_id}</TableCell>
                    <TableCell>{folder.last_update}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
      </div>
    </>
  );
};

export default FarmerFolder;
