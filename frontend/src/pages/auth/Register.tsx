import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Eye,
  EyeOff,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wrench,
  Zap,
} from "lucide-react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState<"USER" | "TECHNICIAN">("USER");

  return (
    <div className="register-page min-h-screen relative overflow-hidden bg-[#020817]">

      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Base lighting */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(79,70,229,0.20),transparent_35%)]
          "
        />

        {/* Grid */}

        <div className="register-grid" />

        {/* Ambient glow */}

        <div className="register-orb register-orb-blue" />
        <div className="register-orb register-orb-purple" />

        {/* Moving light */}

        <div className="register-scan" />

        {/* Particles */}

        <div className="register-particles">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

      </div>


      {/* =====================================================
          LOGO
      ====================================================== */}

      <div className="relative z-20">

        <Link
          to="/"
          className="
            absolute
            top-7
            left-7
            md:left-10
            flex
            items-center
            gap-3
            group
          "
        >

          <div
            className="
              relative
              w-11
              h-11
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              shadow-[0_8px_25px_rgba(37,99,235,0.30)]
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:bg-blue-500
            "
          >

            <Bot
              size={23}
              strokeWidth={2.2}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

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
                border-[#020817]
                animate-pulse
              "
            />

          </div>

          <span
            className="
              text-xl
              font-bold
              tracking-tight
              text-white
            "
          >
            SmartFix<span className="text-blue-400">AI</span>
          </span>

        </Link>

      </div>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          px-5
          py-28
        "
      >

        <div
          className="
            w-full
            max-w-6xl
            grid
            lg:grid-cols-[1fr_500px]
            gap-14
            items-center
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              hidden
              lg:block
              register-content-enter
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/20
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-blue-300
              "
            >

              <Sparkles size={16} />

              Build a smarter service experience

              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-emerald-400
                  animate-pulse
                "
              />

            </div>


            <h1
              className="
                mt-7
                max-w-xl
                text-5xl
                xl:text-6xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white
              "
            >

              One account.

              <span className="block register-gradient-text">
                Smarter problem solving.
              </span>

            </h1>


            <p
              className="
                mt-6
                max-w-lg
                text-lg
                leading-8
                text-slate-400
              "
            >
              Join SmartFix AI and bring complaints, AI assistance,
              technician assignment and real-time service tracking
              together in one intelligent platform.
            </p>


            {/* =================================================
                WORKFLOW
            ================================================== */}

            <div className="mt-10 space-y-4">

              <div className="register-workflow-item">

                <div className="register-workflow-icon">
                  <Bot size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Describe problems naturally
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Let AI understand and classify your complaint.
                  </p>
                </div>

              </div>


              <div className="register-workflow-item">

                <div className="register-workflow-icon">
                  <Wrench size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Connect with the right technician
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Smart assignment considers skills and workload.
                  </p>
                </div>

              </div>


              <div className="register-workflow-item">

                <div className="register-workflow-icon">
                  <Zap size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Track every resolution
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Follow service progress in real time.
                  </p>
                </div>

              </div>

            </div>


            {/* Status */}

            <div
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-3
              "
            >

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <CheckCircle2 size={17} />
              </div>

              <div>

                <p className="text-xs font-semibold text-slate-300">
                  SmartFix AI platform
                </p>

                <p className="text-xs text-blue-400">
                  Ready for your first service request
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              REGISTER CARD
          ================================================== */}

          <div className="register-card-enter">

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.97]
                p-7
                shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                md:p-9
              "
            >

              {/* Header */}

              <div>

                <div
                  className="
                    inline-flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <UserRound size={21} />
                </div>


                <h2
                  className="
                    mt-5
                    text-3xl
                    font-bold
                    tracking-tight
                    text-slate-900
                  "
                >
                  Create account
                </h2>


                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Create your SmartFix AI account and get started.
                </p>

              </div>


              {/* Security */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-blue-100
                  bg-blue-50
                  px-3
                  py-2.5
                  text-xs
                  font-medium
                  text-blue-700
                "
              >

                <ShieldCheck size={15} />

                Your workspace is protected with secure access

              </div>


              {/* Form */}

              <form className="mt-7 space-y-5">

                {/* Full name */}

                <div>

                  <label
                    htmlFor="fullName"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Full name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="
                      register-input
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                  />

                </div>


                {/* Email */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                      register-input
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                  />

                </div>


                {/* Role */}

                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Account type
                  </label>

                  <div className="grid grid-cols-2 gap-3">

                    {/* User */}

                    <button
                      type="button"
                      onClick={() => setRole("USER")}
                      className={`
                        group
                        rounded-xl
                        border
                        p-3.5
                        text-left
                        transition-all
                        duration-300
                        ${
                          role === "USER"
                            ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/10"
                            : "border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/50"
                        }
                      `}
                    >

                      <div className="flex items-center gap-3">

                        <div
                          className={`
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            ${
                              role === "USER"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-slate-500"
                            }
                          `}
                        >
                          <UserRound size={17} />
                        </div>

                        <div>

                          <p className="text-sm font-semibold text-slate-800">
                            User
                          </p>

                          <p className="text-[11px] text-slate-500">
                            Report problems
                          </p>

                        </div>

                      </div>

                    </button>


                    {/* Technician */}

                    <button
                      type="button"
                      onClick={() => setRole("TECHNICIAN")}
                      className={`
                        group
                        rounded-xl
                        border
                        p-3.5
                        text-left
                        transition-all
                        duration-300
                        ${
                          role === "TECHNICIAN"
                            ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/10"
                            : "border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/50"
                        }
                      `}
                    >

                      <div className="flex items-center gap-3">

                        <div
                          className={`
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            ${
                              role === "TECHNICIAN"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-slate-500"
                            }
                          `}
                        >
                          <Wrench size={17} />
                        </div>

                        <div>

                          <p className="text-sm font-semibold text-slate-800">
                            Technician
                          </p>

                          <p className="text-[11px] text-slate-500">
                            Resolve problems
                          </p>

                        </div>

                      </div>

                    </button>

                  </div>

                </div>


                {/* Password */}

                <div>

                  <label
                    htmlFor="password"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Password
                  </label>

                  <div className="relative">

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="
                        register-input
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3.5
                        pr-12
                        text-slate-900
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-400
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        text-slate-400
                        transition
                        hover:bg-slate-100
                        hover:text-slate-700
                      "
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>


                {/* Confirm password */}

                <div>

                  <label
                    htmlFor="confirmPassword"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Confirm password
                  </label>

                  <div className="relative">

                    <input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm your password"
                      className="
                        register-input
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3.5
                        pr-12
                        text-slate-900
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-400
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        text-slate-400
                        transition
                        hover:bg-slate-100
                        hover:text-slate-700
                      "
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>


                {/* Terms */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-start
                    gap-2.5
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >

                  <input
                    type="checkbox"
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      rounded
                      border-slate-300
                      accent-blue-600
                    "
                  />

                  <span>
                    I agree to the SmartFix AI{" "}
                    <span className="font-semibold text-blue-600">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-blue-600">
                      Privacy Policy
                    </span>
                    .
                  </span>

                </label>


                {/* Create */}

                <button
                  type="submit"
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    bg-blue-600
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_10px_25px_rgba(37,99,235,0.20)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-700
                    hover:shadow-[0_15px_30px_rgba(37,99,235,0.28)]
                  "
                >

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

                  <span className="relative">
                    Create Account
                  </span>

                  <ArrowRight
                    size={17}
                    className="
                      relative
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </button>

              </form>


              {/* Login */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-1
                  text-sm
                  text-slate-500
                "
              >

                Already have an account?

                <Link
                  to="/login"
                  className="
                    ml-1
                    font-semibold
                    text-blue-600
                    transition-colors
                    hover:text-blue-700
                  "
                >
                  Sign In
                </Link>

              </div>


              {/* Footer */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-xs
                  text-slate-400
                "
              >

                <ShieldCheck size={14} />

                Secure account creation

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;