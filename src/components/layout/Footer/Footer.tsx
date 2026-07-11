import Container from "../../ui/Container";
import logo from "../../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { Play } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { label: "Home", to: ROUTES.HOME },
    { label: "About", to: ROUTES.ABOUT },
    { label: "Contact", to: ROUTES.CONTACT },
  ];
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-2">
            <img
              className="h-16 w-16 rounded-full"
              src={logo}
              alt="Audit Zone Logo"
            />
            <h3 className="text-2xl font-bold text-white">Audit Zone</h3>
            <p className="text-zinc-400">Learn • Build • Grow</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  className="text-zinc-400 hover:text-yellow-400 transition-colors"
                  to={item.to}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Join Our Community</h3>
            <p className="mt-4 text-zinc-400">
              Watch free programming tutorials on YouTube.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://youtube.com/@auditzone?si=K54tvDQ3L2N5KYo1",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="flex items-center w-full mt-6 justify-center gap-2 font-semibold text-black hover:bg-yellow-500 transition-colors bg-yellow-400 py-3 rounded-lg"
            >
              <Play size={20} /> Visit YouTube
            </button>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Audit Zone. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
