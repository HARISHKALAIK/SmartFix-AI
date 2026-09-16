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
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-white/10">
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
            <span className="text-[22px] font-bold tracking-tight text-white">
              SmartFix
            </span>

            <span className="text-[22px] font-bold tracking-tight text-blue-500">
              AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group relative py-3
                  text-[15px] font-medium
                  transition-colors duration-300
                  ${
                    active
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }
                `}
              >
                {item.label}

                {/* Underline */}
                <span
                  className={`
                    absolute
                    left-0
                    bottom-1
                    h-[2px]
                    rounded-full
                    bg-blue-500
                    transition-all
                    duration-300
                    ease-out
                    ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            to="/login"
            className="
              text-[15px]
              font-medium
              text-slate-300
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              group
              flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-6
              py-3.5
              text-[15px]
              font-semibold
              text-white
              shadow-lg
              shadow-blue-600/25
              transition-all
              duration-300
              hover:bg-blue-500
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
            flex h-11 w-11
            items-center justify-center
            rounded-xl
            border border-white/10
            bg-white/5
            text-slate-300
            transition-colors
            duration-300
            hover:border-white/20
            hover:text-white
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
          border-t border-white/10
          bg-slate-950
          transition-all duration-300
          lg:hidden
          ${
            mobileOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="mx-auto max-w-[1540px] px-6 py-5">

          <div className="space-y-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`
                    group
                    relative
                    block
                    py-3.5
                    text-[16px]
                    font-medium
                    transition-colors
                    duration-300
                    ${
                      active
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  {/* Mobile underline */}
                  <span
                    className={`
                      absolute
                      left-0
                      bottom-1
                      h-[2px]
                      rounded-full
                      bg-blue-500
                      transition-all
                      duration-300
                      ${
                        active
                          ? "w-8"
                          : "w-0 group-hover:w-8"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Actions */}
          <div className="mt-4 flex items-center gap-5 border-t border-white/10 pt-5">
            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="
                text-[15px]
                font-medium
                text-slate-300
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={closeMobileMenu}
              className="
                group
                flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-5
                py-3
                text-[15px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-blue-500
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