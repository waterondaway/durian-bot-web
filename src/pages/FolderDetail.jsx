import { React } from "react";
import { useParams, useNavigate } from "react-router-dom";
import picture_1 from "../assets/picture_1.jpg"; 

const FolderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const imagesData = [
    { id: 1, filename: "nonpawit_8821.jpg", latitude: "12.9811° N", longitude: "100.1234° E", uploaded: "2025-01-10" },
    { id: 2, filename: "natchanan_9823.jpg", latitude: "12.9831° N", longitude: "100.1235° E", uploaded: "2025-01-11" },
    { id: 3, filename: "suphakit_2345.jpg", latitude: "12.9841° N", longitude: "100.1236° E", uploaded: "2025-01-12" },
    { id: 4, filename: "nakorn_5567.jpg", latitude: "12.9851° N", longitude: "100.1237° E", uploaded: "2025-01-13" },
    { id: 5, filename: "nakorn_5567.jpg", latitude: "12.9851° N", longitude: "100.1237° E", uploaded: "2025-01-13" },
    { id: 6, filename: "john_2345.jpg", latitude: "12.9861° N", longitude: "100.1244° E", uploaded: "2025-01-14" },
    { id: 7, filename: "alex_9823.jpg", latitude: "12.9871° N", longitude: "100.1245° E", uploaded: "2025-01-15" },
    { id: 8, filename: "mary_6723.jpg", latitude: "12.9881° N", longitude: "100.1246° E", uploaded: "2025-01-16" },
    { id: 9, filename: "chris_2341.jpg", latitude: "12.9891° N", longitude: "100.1247° E", uploaded: "2025-01-17" },
    { id: 10, filename: "david_8321.jpg", latitude: "12.9901° N", longitude: "100.1248° E", uploaded: "2025-01-18" },
    { id: 11, filename: "kim_2345.jpg", latitude: "12.9911° N", longitude: "100.1249° E", uploaded: "2025-01-19" },
    { id: 12, filename: "jane_9823.jpg", latitude: "12.9921° N", longitude: "100.1250° E", uploaded: "2025-01-20" },
    { id: 13, filename: "ryan_2341.jpg", latitude: "12.9931° N", longitude: "100.1251° E", uploaded: "2025-01-21" },
    { id: 14, filename: "lucas_2345.jpg", latitude: "12.9941° N", longitude: "100.1252° E", uploaded: "2025-01-22" },
    { id: 15, filename: "kate_8921.jpg", latitude: "12.9951° N", longitude: "100.1253° E", uploaded: "2025-01-23" },
    { id: 16, filename: "paul_2345.jpg", latitude: "12.9961° N", longitude: "100.1254° E", uploaded: "2025-01-24" },
    { id: 17, filename: "susan_1245.jpg", latitude: "12.9971° N", longitude: "100.1255° E", uploaded: "2025-01-25" },
    { id: 18, filename: "julia_7321.jpg", latitude: "12.9981° N", longitude: "100.1256° E", uploaded: "2025-01-26" },
    { id: 19, filename: "robert_8923.jpg", latitude: "12.9991° N", longitude: "100.1257° E", uploaded: "2025-01-27" },
    { id: 20, filename: "lily_2345.jpg", latitude: "13.0001° N", longitude: "100.1258° E", uploaded: "2025-01-28" },
  ];

  const sortedImagesData = imagesData.sort((a, b) => new Date(b.uploaded) - new Date(a.uploaded));
  
  return (
    <>
      <div className="flex justify-between items-center p-4 mt-5">
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 m-5">
        {sortedImagesData.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer p-5 border border-gray-300 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 bg-white hover:scale-105"
          >
            <img
              src={picture_1}
              alt={`picture_${image.id}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-3">
              <h2 className="font-semibold text-sm text-stone-600 text-left">
                Filename: <span className="font-normal text-stone-400">{image.filename}</span>
              </h2>
              <h2 className="font-semibold text-sm text-stone-600 text-left">
                Latitude: <span className="font-normal text-stone-400">{image.latitude}</span>
              </h2>
              <h2 className="font-semibold text-sm text-stone-600 text-left">
                Longitude: <span className="font-normal text-stone-400">{image.longitude}</span>
              </h2>
              <h2 className="font-semibold text-sm text-stone-600 text-left">
                Uploaded on: <span className="font-normal text-stone-400">{image.uploaded}</span>
              </h2>
              <a
                href={picture_1}
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
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FolderDetail;
