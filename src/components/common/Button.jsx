import { Link } from "react-router-dom";

function Button({
  children,
  to,
  onClick,
  type = "button",
  className = "",
}) {
  const styles =
    "inline-flex items-center justify-center rounded-full bg-black-300 text-white px-8 py-4 text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:bg-zinc-400 hover:scale-105";

  if (to) {
    return (
      <Link to={to} className={`${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;