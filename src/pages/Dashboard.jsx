import { useState, React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import folderIcon from "../assets/folderIcon.svg"

const Home = () => {
  const [folders, setFolders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/folders')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFolders(data);
      })
      .catch((error) => console.error('Error fetching folders:', error));
  }, []);

  const handleRowClick = (id) => {
    navigate(`/folder/${id}`);
  };

  return (
    <TableContainer component={Paper} className="my-5 px-5">
      <Table sx={{ border: "none" }}>
        <TableHead>
          <TableRow>
            <TableCell>Folder ID</TableCell>
            <TableCell>Farmer ID</TableCell>
            <TableCell>Last Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {folders.map((folder) => (
            <TableRow key={folder.id} hover onClick={() => handleRowClick(folder.id)} style={{ cursor: "pointer" }}>
              <TableCell>
              <div className="flex items-center">
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
  );
};

export default Home;
