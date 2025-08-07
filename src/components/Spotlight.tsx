const Spotlight = () => {
  return (
    <section
      className="
        w-full flex justify-center px-4 pt-10 pb-12 bg-transparent relative z-10 
        mt-[3vh] md:mt-[6vh]
      "
    >
      <div className="bg-gray-100 rounded-xl p-6 max-w-3xl w-full shadow-md">
        {/* Tiêu đề */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Spotlight</h2>

        {/* Dòng chữ nhỏ hơn */}
        <p className="text-sm text-gray-500 mb-6">2323 - Nghiem Tong</p>

        {/* Video */}
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/CsCgX0Cm44g?si=hYETvcZJ2WrqbzmZ"
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
