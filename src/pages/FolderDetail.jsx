import { useState, React, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const FolderDetail = () => {
  const [imagesData, setImagesData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/api/folders/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setImagesData(data);
        console.log(data);
      })
      .catch((error) => console.error(`Error fetching folders ${id}:`, error));
  }, [id]);



  const sortedImagesData = imagesData.sort((a, b) => new Date(b.upload_on) - new Date(a.upload_on));
  
  return (
    <>
      <div className="flex justify-start items-center p-4 mt-5">
        <button
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-300 transition duration-200"
          onClick={handleGoBack}
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
        <h1 className="ml-4 font-semibold">ย้อนกลับ</h1>
        
      </div>
      {imagesData.length === 0 ? (
        <div className="flex justify-center items-center p-5">
          <h2 className="text-xl font-semibold text-gray-600">Not Found Image</h2>
        </div>
      ) : (
        <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 m-5">
        {sortedImagesData.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer p-5 border border-gray-300 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 bg-white hover:scale-105"
          >
            <img
              src={`http://localhost:3000/uploads/${image.filename}`}
              alt={`${image.filename}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-3">
              <h2 className="font-semibold text-sm text-stone-600 text-left">
                ชื่อไฟล์ภาพ: <span className="font-normal text-stone-400">{image.filename}</span>
              </h2>
              <h2 className="font-semibold text-sm text-stone-600 text-left">
              ละติจูด: <span className="font-normal text-stone-400">{image.latitude}</span>
              </h2>
              <h2 className="font-semibold text-sm text-stone-600 text-left">
                ลองจิจูด: <span className="font-normal text-stone-400">{image.longitude}</span>
              </h2>
              <h2 className="font-semibold text-sm text-stone-600 text-left">
                อัปโหลดเมื่อ: <span className="font-normal text-stone-400">{image.upload_on}</span>
              </h2>
              <a
                href={`http://localhost:3000/download/${image.filename}`}
                download={image.filename}
                className="mt-2 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                ดาวน์โหลด
              </a>
            </div>
          </div>
        ))}
        
      </div>
      {/* <h2 className="ml-7 text-gray-400">ชื่อเกษตรกร: ณกรณ์ ตั้งประภาพร | รหัสเกษตรกร: 782-129-491-212 | อัปโหลดล่าสุด: 2025-01-29</h2> */}
      </>
      )}
    </>
  );
};

export default FolderDetail;
