import { useState } from "react";
import pathImg from "../assets/path.png";

const formatDate = (date: string) =>
  new Date(date).toLocaleString("vi-VN", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

interface Memory {
  image: string;
  caption: string;
  time: string;
}

interface Props {
  memories: Memory[];
}

const MemoryGallery = ({ memories }: Props) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="w-full flex flex-col items-center px-4 pt-[20vh] pb-16 space-y-8">
      {memories.slice(0, visibleCount).map((memory, index) => (
        <div key={index} className="flex flex-col items-center space-y-4">
          {/* Path phía trên */}
          <div className="flex flex-col items-center space-y-1">
            <img
              src={pathImg}
              alt="path"
              className="w-30 h-30 object-contain opacity-70"
            />
            <span className="text-white text-xs opacity-70">
              {formatDate(memory.time)}
            </span>
          </div>

          {/* Box hình và caption (caption nằm trên ảnh) */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-md p-4 w-full max-w-md text-center border border-white border-opacity-20 space-y-3">
            <p className="text-black text-sm break-words">{memory.caption}</p>
            <img
              src={memory.image}
              alt={`memory-${index}`}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      ))}

      {visibleCount < memories.length && (
        <button
          onClick={handleLoadMore}
          className="mt-4 px-6 py-2 rounded-full bg-white text-purple-800 font-semibold hover:bg-purple-100 transition shadow"
        >
          Xem thêm
        </button>
      )}
    </section>
  );
};

export default MemoryGallery;
