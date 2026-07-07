import Container from "../../ui/Container";
import logo from "../../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const openYoutubeChannel = () => {
    window.open(
      "https://youtube.com/@auditzone?si=K54tvDQ3L2N5KYo1",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const menus = [
    {
      label: "Home",
      link: ROUTES.HOME,
    },
    {
      label: "About",
      link: ROUTES.ABOUT,
    },
    {
      label: "Contact",
      link: ROUTES.CONTACT,
    },
  ];
  return (
    <nav className="bg-zinc-950 border-b border-zinc-800">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link to={ROUTES.HOME}>
            <img
              src={logo}
              alt="Audit Zone Logo"
              className="h-15 w-15 rounded-full"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {menus.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.link}
                  className="text-zinc-300 hover:text-yellow-400 transition-colors font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={openYoutubeChannel}
            className="hidden md:block bg-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Visit Channel
          </button>
          <button className="text-white md:hidden" onClick={toggle}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 px-2 ${
            isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {menus.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.link}
                  className="block text-zinc-300 hover:text-yellow-400 transition-colors font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={openYoutubeChannel}
            className="mt-6 w-full bg-yellow-400 py-3 rounded-lg font-semibold text-black hover:bg-yellow-500 transition-colors"
          >
            Visit Channel
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
