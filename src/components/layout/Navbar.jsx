import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Button from "../common/Button";
import Container from "../common/Container";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-amber-700"
                    : "text-zinc-700 hover:text-black"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/booking">
              Book Session
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={30} />
          </button>
        </Container>
      </header>

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default Navbar;