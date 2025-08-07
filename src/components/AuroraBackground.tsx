import spark from "../assets/spark.png";

const AuroraBackground = () => {
  const sparkCount = 25;

  const randomPosition = () => ({
    top: Math.random() * 100 + "vh",
    left: Math.random() * 100 + "vw",
    animationDelay: Math.random() * 3 + "s",
    animationDuration: 3 + Math.random() * 2 + "s",
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-40 overflow-hidden">
      {Array.from({ length: sparkCount }).map((_, i) => {
        const style = randomPosition();
        return (
          <img
            key={i}
            src={spark}
            alt="spark"
            className="absolute w-10 h-10 opacity-40 animate-fade-float"
            style={style}
          />
        );
      })}
    </div>
  );
};

export default AuroraBackground;
