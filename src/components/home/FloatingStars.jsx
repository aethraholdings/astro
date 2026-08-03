function FloatingStars() {
  const stars = Array.from({ length: 70 });

  return (
    <>
      {stars.map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-amber-300 opacity-70 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </>
  );
}

export default FloatingStars;