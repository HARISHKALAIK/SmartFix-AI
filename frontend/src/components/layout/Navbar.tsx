import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Bot } from "lucide-react";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Features",
    path: "/features",
  },
  {
    label: "How It Works",
    path: "/how-it-works",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const location = useLocation();

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-white/95
        backdrop-blur-md
        border-t
        border-blue-600/20
        border-b
        border-slate-200/80
      "
    >
      <div className="max-w-[1540px] mx-auto px-6 md:px-10 lg:px-12">

        <div className="h-24 flex items-center justify-between">

          {/* ================================
              LOGO
          ================================= */}

          <Link
            to="/"
            className="group flex items-center gap-3 shrink-0"
          >
            <div
              className="
                relative
                w-[50px]
                h-[50px]
                rounded-[15px]
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                shadow-[0_6px_20px_rgba(37,99,235,0.22)]
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:shadow-[0_10px_28px_rgba(37,99,235,0.32)]
              "
            >
              <Bot
                size={25}
                strokeWidth={2.3}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              {/* Small AI indicator */}

              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  w-3
                  h-3
                  rounded-full
                  bg-emerald-400
                  border-2
                  border-white
                  animate-pulse
                "
              />
            </div>

            <div
              className="
                text-[24px]
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              SmartFix<span className="text-blue-600">AI</span>
            </div>
          </Link>


          {/* ================================
              NAVIGATION
          ================================= */}

          <nav className="hidden lg:flex items-center gap-1">

            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    group
                    relative
                    px-4
                    py-3
                    text-[17px]
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-slate-950"
                    }
                  `}
                >
                  <span
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                    "
                  >
                    {item.label}
                  </span>

                  {/* Hover background */}

                  <span
                    className={`
                      absolute
                      inset-x-1
                      inset-y-1
                      rounded-lg
                      bg-blue-50
                      transition-all
                      duration-300
                      ${
                        active
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* Active / hover line */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-4
                      right-4
                      h-[2px]
                      rounded-full
                      bg-blue-600
                      transition-transform
                      duration-300
                      origin-center
                      ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </Link>
              );
            })}

          </nav>


          {/* ================================
              ACTIONS
          ================================= */}

          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/login"
              className="
                group
                relative
                text-[17px]
                font-medium
                text-slate-600
                transition-colors
                duration-300
                hover:text-blue-600
              "
            >
              Login

              <span
                className="
                  absolute
                  left-0
                  right-0
                  -bottom-1
                  h-px
                  bg-blue-600
                  scale-x-0
                  origin-left
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
                "
              />
            </Link>


            <Link
              to="/register"
              className="
                group
                relative
                h-14
                px-7
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-blue-600
                text-white
                text-[17px]
                font-semibold
                overflow-hidden
                shadow-[0_8px_22px_rgba(37,99,235,0.20)]
                transition-all
                duration-300
                hover:bg-blue-700
                hover:-translate-y-0.5
                hover:shadow-[0_12px_30px_rgba(37,99,235,0.30)]
              "
            >

              {/* Button shine */}

              <span
                className="
                  absolute
                  inset-y-0
                  -left-20
                  w-16
                  rotate-12
                  bg-white/20
                  blur-sm
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <span className="relative z-10">
                Get Started
              </span>

              <ArrowRight
                size={20}
                strokeWidth={2}
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </Link>

          </div>


          {/* ================================
              MOBILE
          ================================= */}

          <Link
            to="/register"
            className="
              md:hidden
              w-11
              h-11
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              shadow-[0_6px_18px_rgba(37,99,235,0.22)]
              transition-all
              duration-300
              hover:bg-blue-700
              hover:-translate-y-0.5
            "
          >
            <ArrowRight size={20} />
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Navbar;