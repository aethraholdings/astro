import { Link } from "react-router-dom";
import { X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-xl font-semibold">
          Menu
        </h2>

        <button onClick={() => setOpen(false)}>
          <X size={28} />
        </button>
      </div>

      <div className="flex flex-col p-8">
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className="border-b py-5 text-lg hover:text-amber-700"
          >
            {item.name}
          </Link>
        ))}

        <Link
          to="/booking"
          onClick={() => setOpen(false)}
          className="mt-8 rounded-full bg-black px-6 py-4 text-center text-white"
        >
          Book Session
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;