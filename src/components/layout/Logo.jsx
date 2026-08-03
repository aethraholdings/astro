import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-600 text-lg font-bold text-amber-600">
        ✦
      </div>

      <div>
        <h2 className="text-lg font-semibold tracking-wide">
          Crystal Blissed
        </h2>

        <p className="text-xs text-zinc-500">
          Astrology & Spiritual Guidance
        </p>
      </div>
    </Link>
  );
}

export default Logo;