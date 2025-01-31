import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import TableChartIcon from '@mui/icons-material/TableChart';

function ViewSwitcher({ viewType, setViewType }) {
  return (
    <div className="flex justify-center mb-4">
      <button
        onClick={() => setViewType("grid")}
        className={`px-4 py-2 border border-gray-300 border-r-0 rounded-l-lg ${
          viewType === "grid" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <GridViewIcon sx={{ color: viewType === "grid" ? "white" : "gray", fontSize: 20}}/>
      </button>
      <button
        onClick={() => setViewType("table")}
        className={`px-4 py-2 border border-gray-300 border-l-0 rounded-r-lg ${
            viewType === "table" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <TableChartIcon sx={{ color: viewType === "table" ? "white" : "gray", fontSize: 20}}/>
      </button>
    </div>
  )
}

export default ViewSwitcher;