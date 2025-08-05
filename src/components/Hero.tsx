import { useState } from "react";
import bridge from "../assets/coolroblox.jpg";

interface HeroProps {
  onUpload: (memory: { image: string; caption: string; time: string }) => void;
  isLoggedIn: boolean;
}


const Hero = ({ onUpload, isLoggedIn }: HeroProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");

  const handleUpload = () => {
    if (image && caption && isLoggedIn) {
      const url = URL.createObjectURL(image);
      const time = new Date().toLocaleString("vi-VN"); // Giờ Việt Nam
      onUpload({ image: url, caption, time }); // Truyền lên
      setImage(null);
      setCaption("");
    }
  };

  return (
    <section className="w-screen h-[50vh] overflow-hidden bg-transparent flex items-start justify-center pb-32">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden z-0"
        style={{
          borderBottomLeftRadius: "50% 20%",
          borderBottomRightRadius: "50% 20%",
        }}
      >
        <img src={bridge} alt="Hero" className="w-full h-[50vh] object-cover" />
      </div>

      {/* Upload Form */}
      <div className="absolute top-[45vh] left-1/2 transform -translate-x-1/2 p-1 rounded-xl bg-gradient-to-b from-sky-400 to-purple-300 z-10 w-[90%] max-w-xl shadow-lg">
        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-6 text-center">
          <h2 className="text-4xl font-extrabold text-black mb-2 tracking-tight">
            Gaming Dream
          </h2>
          <p className="text-md text-black mb-4 leading-relaxed font-medium">
            Nơi những Sigma hội tụ
          </p>

          {/* Caption input */}
          <input
            type="text"
            placeholder="Caption của bạn..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full mb-3 px-4 py-2 rounded-md border border-gray-300 text-sm"
            disabled={!isLoggedIn}
          />

          {/* File Input */}
          <div className="w-full mb-4">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() =>
                  isLoggedIn && document.getElementById("fileInput")?.click()
                }
                className={`px-4 py-2 rounded-md shadow-sm transition ${
                  isLoggedIn
                    ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                Choose File
              </button>
              <span className="text-sm text-gray-700">
                {image ? image.name : ""}
              </span>
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="hidden"
            />
          </div>

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={!image || !caption || !isLoggedIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-300 shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Upload
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
