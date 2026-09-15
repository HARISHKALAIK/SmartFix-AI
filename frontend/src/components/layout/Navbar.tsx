import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Bot, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-[1540px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[15px] bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <Bot size={27} strokeWidth={2.2} />
          </div>

          <div className="flex items-center">
            <span className="text-[22px] font-bold tracking-tight text-slate-900">
              SmartFix
            </span>
            <span className="text-[22px] font-bold tracking-tight text-blue-600">
              AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group relative rounded-xl px-5 py-3
                  text-[15px] font-medium
                  transition-all duration-300
                  ${
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }
                `}
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className={`
                    absolute bottom-1.5 left-1/2 h-[2px]
                    -translate-x-1/2 rounded-full
                    bg-blue-600
                    transition-all duration-300
                    ${
                      active
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="
              rounded-xl px-5 py-3
              text-[15px] font-medium text-slate-600
              transition-all duration-300
              hover:bg-slate-50 hover:text-slate-900
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              group flex items-center gap-2
              rounded-xl bg-blue-600
              px-5 py-3
              text-[15px] font-semibold text-white
              shadow-lg shadow-blue-600/20
              transition-all duration-300
              hover:bg-blue-700
              hover:shadow-xl hover:shadow-blue-600/25
              hover:-translate-y-0.5
            "
          >
            Get Started

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="
            flex h-11 w-11 items-center justify-center
            rounded-xl
            border border-slate-200
            bg-white
            text-slate-700
            transition-all duration-300
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600
            lg:hidden
          "
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          overflow-hidden
          border-t border-slate-100
          bg-white
          transition-all duration-300
          lg:hidden
          ${
            mobileOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="mx-auto max-w-[1540px] px-6 py-4">

          {/* Mobile Nav Links */}
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center justify-between
                    rounded-xl
                    px-4 py-3.5
                    text-[16px] font-medium
                    transition-all duration-200
                    ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                >
                  <span>{item.label}</span>

                  {active && (
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Actions */}
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">

            {/* Login */}
            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="
                flex items-center justify-center
                rounded-xl
                border border-slate-200
                px-4 py-3.5
                text-[15px] font-semibold
                text-slate-700
                transition-all duration-300
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-600
              "
            >
              Login
            </Link>

            {/* Get Started */}
            <Link
              to="/register"
              onClick={closeMobileMenu}
              className="
                group flex items-center justify-center gap-2
                rounded-xl
                bg-blue-600
                px-4 py-3.5
                text-[15px] font-semibold
                text-white
                shadow-lg shadow-blue-600/20
                transition-all duration-300
                hover:bg-blue-700
              "
            >
              Get Started

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;