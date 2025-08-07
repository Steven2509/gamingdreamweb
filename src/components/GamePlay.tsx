const videos = [
  {
    title: "Stereo Madness",
    subtitle: "Tùng Châu",
    url: "https://www.youtube.com/embed/VLz9JfKXouI?si=eKnBCqDyhkJZVNz7",
  },
  {
    title: "Back On Track",
    subtitle: "Tùng Châu",
    url: "https://www.youtube.com/embed/hgKIDN4RUek?si=8pKhNLtGBmCsNw-x",
  },
  {
    title: "Polargeist",
    subtitle: "Tùng Châu",
    url: "https://www.youtube.com/embed/C9hoHNDKyDg?si=zJNqmUOdCwIdWz0e",
  },
];

const GamePlay = () => {
  return (
    <div className="min-h-screen pt-20 pb-32 px-4 sm:px-8 lg:px-20 z-30 relative">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">GamePlay Videos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h2>
            <p className="text-gray-500 mb-4">{video.subtitle}</p>
            <div className="w-full h-[300px] sm:h-[340px] md:h-[360px] lg:h-[380px] xl:h-[400px]">
              <iframe
                src={video.url}
                title={`YouTube video player ${idx}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePlay;
