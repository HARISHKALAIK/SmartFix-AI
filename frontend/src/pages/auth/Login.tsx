import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { API } from "../../services/api";

interface LoginResponse {
  success: boolean;
  message: string;
  userId: number | null;
  fullName: string | null;
  email: string | null;
  accountType: string | null;
  token: string | null;
}

function Login() {
  const navigate = useNavigate();

  // =========================
  // STATE
  // =========================

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  // =========================
  // LOGIN
  // =========================

  const handleLogin = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    // Basic validation
    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(API.AUTH.LOGIN, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data: LoginResponse = await response.json();

      // =========================
      // LOGIN FAILED
      // =========================

      if (!response.ok || !data.success) {
        setErrorMessage(
          data.message || "Invalid email or password."
        );

        return;
      }

      // =========================
      // LOGIN SUCCESS
      // =========================

      if (data.token) {
        localStorage.setItem(
          "smartfix_token",
          data.token
        );
      }

      // Save logged-in user
      localStorage.setItem(
        "smartfix_user",
        JSON.stringify({
          userId: data.userId,
          fullName: data.fullName,
          email: data.email,
          accountType: data.accountType,
        })
      );

      // Optional remember email
      if (rememberMe) {
        localStorage.setItem(
          "smartfix_remember_email",
          email.trim()
        );
      } else {
        localStorage.removeItem(
          "smartfix_remember_email"
        );
      }

      setSuccessMessage(
        "Login successful. Redirecting..."
      );

      // =========================
      // GO TO CUSTOMER
      // =========================

      setTimeout(() => {
        navigate("/customer");
      }, 500);

    } catch (error) {
      console.error("Login error:", error);

      setErrorMessage(
        "Unable to connect to SmartFix AI server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };


  // =========================
  // RETURN
  // =========================

  return (
    <div className="login-page relative min-h-screen overflow-hidden bg-[#020817]">


      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Base gradient */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_15%_30%,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_85%_65%,rgba(79,70,229,0.20),transparent_35%)]
          "
        />


        {/* Grid */}

        <div className="login-grid" />


        {/* Ambient orbs */}

        <div className="login-orb login-orb-blue" />

        <div className="login-orb login-orb-purple" />


        {/* Light sweep */}

        <div className="login-scan" />


        {/* Particles */}

        <div className="login-particles">

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
          TOP LOGO
      ====================================================== */}

      <div className="relative z-20">

        <Link
          to="/"
          className="
            absolute
            left-7
            top-7
            flex
            items-center
            gap-3
            group
            md:left-10
          "
        >

          {/* Logo */}

          <div
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              text-white
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
                h-3
                w-3
                animate-pulse
                rounded-full
                border-2
                border-[#020817]
                bg-emerald-400
              "
            />

          </div>


          {/* Brand */}

          <span
            className="
              text-xl
              font-bold
              tracking-tight
              text-white
            "
          >
            SmartFix
            <span className="text-blue-400">
              AI
            </span>
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
          flex
          min-h-screen
          items-center
          justify-center
          px-5
          py-28
        "
      >

        <div
          className="
            grid
            w-full
            max-w-6xl
            items-center
            gap-14
            lg:grid-cols-[1fr_460px]
          "
        >


          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              login-content-enter
              hidden
              lg:block
            "
          >

            {/* Badge */}

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

              AI-powered service management

              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-emerald-400
                "
              />

            </div>


            {/* Heading */}

            <h1
              className="
                mt-7
                max-w-xl
                text-5xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white
                xl:text-6xl
              "
            >

              Welcome back.

              <span className="block login-gradient-text">
                Let's solve problems.
              </span>

            </h1>


            {/* Description */}

            <p
              className="
                mt-6
                max-w-lg
                text-lg
                leading-8
                text-slate-400
              "
            >
              Access your SmartFix AI workspace and manage
              complaints, assignments, service requests and
              real-time resolution updates from one place.
            </p>


            {/* Features */}

            <div
              className="
                mt-9
                grid
                max-w-lg
                grid-cols-2
                gap-4
              "
            >

              {/* AI Assistance */}

              <div className="login-feature-card">

                <div className="login-feature-icon">
                  <Bot size={19} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-white">
                    AI Assistance
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Intelligent complaint analysis
                  </p>

                </div>

              </div>


              {/* Smart Assignment */}

              <div className="login-feature-card">

                <div className="login-feature-icon">
                  <Zap size={19} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-white">
                    Smart Assignment
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Right technician, faster
                  </p>

                </div>

              </div>


              {/* Role Access */}

              <div className="login-feature-card">

                <div className="login-feature-icon">
                  <ShieldCheck size={19} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-white">
                    Role-Based Access
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Secure workspace access
                  </p>

                </div>

              </div>


              {/* Tracking */}

              <div className="login-feature-card">

                <div className="login-feature-icon">
                  <CheckCircle2 size={19} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-white">
                    Real-Time Tracking
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Follow every resolution
                  </p>

                </div>

              </div>

            </div>


            {/* System status */}

            <div
              className="
                mt-7
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
                  bg-emerald-500/10
                  text-emerald-400
                "
              >
                <CheckCircle2 size={17} />
              </div>

              <div>

                <p className="text-xs font-semibold text-slate-300">
                  SmartFix AI systems
                </p>

                <p className="text-xs text-emerald-400">
                  Online & ready
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              LOGIN CARD
          ================================================== */}

          <div className="login-card-enter">

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
                  <LockKeyhole size={21} />
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
                  Welcome back
                </h2>


                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Sign in to continue to your SmartFix AI
                  workspace.
                </p>

              </div>


              {/* Secure access */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-emerald-100
                  bg-emerald-50
                  px-3
                  py-2.5
                  text-xs
                  font-medium
                  text-emerald-700
                "
              >

                <ShieldCheck size={15} />

                Secure role-based access enabled

              </div>


              {/* =================================================
                  FORM
              ================================================== */}

              <form
                onSubmit={handleLogin}
                className="mt-7 space-y-5"
              >

                {/* Error */}

                {errorMessage && (
                  <div
                    className="
                      rounded-xl
                      border
                      border-red-200
                      bg-red-50
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-red-700
                    "
                  >
                    {errorMessage}
                  </div>
                )}


                {/* Success */}

                {successMessage && (
                  <div
                    className="
                      rounded-xl
                      border
                      border-emerald-200
                      bg-emerald-50
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-emerald-700
                    "
                  >
                    {successMessage}
                  </div>
                )}


                {/* =================================================
                    EMAIL
                ================================================== */}

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
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="
                      login-input
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


                {/* =================================================
                    PASSWORD
                ================================================== */}

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="
                        text-sm
                        font-semibold
                        text-slate-700
                      "
                    >
                      Password
                    </label>

                  </div>


                  <div className="relative">

                    <input
                      id="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                      className="
                        login-input
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
                        flex
                        h-9
                        w-9
                        -translate-y-1/2
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


                {/* =================================================
                    REMEMBER + FORGOT
                ================================================== */}

                <div className="flex items-center justify-between">

                  <label
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-2
                      text-sm
                      text-slate-600
                    "
                  >

                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(event) =>
                        setRememberMe(
                          event.target.checked
                        )
                      }
                      className="
                        h-4
                        w-4
                        rounded
                        border-slate-300
                        accent-blue-600
                      "
                    />

                    Remember me

                  </label>


                  <Link
                    to="/forgot-password"
                    className="
                      text-sm
                      font-semibold
                      text-blue-600
                      transition-colors
                      hover:text-blue-700
                    "
                  >
                    Forgot password?
                  </Link>

                </div>


                {/* =================================================
                    SIGN IN BUTTON
                ================================================== */}

                <button
                  type="submit"
                  disabled={loading}
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
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  {loading ? (
                    <>
                      <span
                        className="
                          h-5
                          w-5
                          animate-spin
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />

                      Signing in...
                    </>
                  ) : (
                    <>
                      <span className="relative">
                        Sign In
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
                    </>
                  )}

                </button>

              </form>


              {/* =================================================
                  DIVIDER
              ================================================== */}

              <div className="my-6 flex items-center gap-4">

                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-xs text-slate-400">
                  New to SmartFix?
                </span>

                <div className="h-px flex-1 bg-slate-200" />

              </div>


              {/* =================================================
                  REGISTER
              ================================================== */}

              <Link
                to="/register"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-600
                "
              >

                Create an account

                <ArrowRight size={16} />

              </Link>


              {/* =================================================
                  SECURITY FOOTER
              ================================================== */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-xs
                  text-slate-400
                "
              >

                <ShieldCheck size={14} />

                Your account information is securely protected

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;