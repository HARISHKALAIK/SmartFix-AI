import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wrench,
  Zap,
} from "lucide-react";

import { API } from "../../services/api";

type Role = "USER" | "TECHNICIAN";

interface RegisterResponse {
  success: boolean;
  message: string;
  userId: number | null;
  fullName: string | null;
  email: string | null;
  accountType: string | null;
  token: string | null;
}

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState<Role>("USER");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must contain at least 8 characters.");
      return;
    }

    if (!termsAccepted) {
      setErrorMessage(
        "Please accept the Terms of Service and Privacy Policy."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(API.AUTH.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          accountType: role,
          password,
          confirmPassword,
          termsAccepted,
        }),
      });

      const data: RegisterResponse = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(
          data.message || "Unable to create your account."
        );
        return;
      }

      // Store JWT token
      if (data.token) {
        localStorage.setItem("smartfix_token", data.token);
      }

      // Store logged-in user information
      localStorage.setItem(
        "smartfix_user",
        JSON.stringify({
          userId: data.userId,
          fullName: data.fullName,
          email: data.email,
          accountType: data.accountType,
        })
      );

      setSuccessMessage(
        "Account created successfully. Redirecting..."
      );

      // Redirect based on account type
      setTimeout(() => {
        if (data.accountType === "TECHNICIAN") {
          navigate("/technician/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      }, 800);
    } catch (error) {
      console.error("Registration error:", error);

      setErrorMessage(
        "Unable to connect to SmartFix AI server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">

      {/* =========================
          HEADER
      ========================== */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition group-hover:scale-105">
              <Bot size={21} />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                SmartFix
                <span className="text-blue-600">AI</span>
              </p>

              <p className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:block">
                Intelligent Service Management
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-slate-500 sm:block">
              Already have an account?
            </span>

            <Link
              to="/login"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              Sign in
            </Link>
          </div>

        </div>
      </header>


      {/* =========================
          MAIN
      ========================== */}

      <main className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1fr_500px] lg:gap-20">

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <section className="hidden lg:block">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Sparkles size={16} />

            Smart service starts here

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          </div>


          <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 xl:text-6xl">
            One platform.
            <span className="block text-blue-600">
              Smarter service.
            </span>
          </h1>


          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
            Create your SmartFix AI account and bring problem reporting,
            AI classification, technician assignment, tracking and SLA
            management into one intelligent workflow.
          </p>


          {/* WORKFLOW */}

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Bot size={20} />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  AI-powered problem understanding
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Describe a problem naturally and let SmartFix AI
                  understand the request.
                </p>
              </div>
            </div>


            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Wrench size={20} />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Smart technician assignment
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Match service requests with suitable technicians.
                </p>
              </div>
            </div>


            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Zap size={20} />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Real-time service tracking
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Track every request from creation to resolution.
                </p>
              </div>
            </div>

          </div>


          {/* PLATFORM STATUS */}

          <div className="mt-8 flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <Check size={17} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-800">
                SmartFix AI platform
              </p>

              <p className="text-xs text-slate-500">
                Secure account creation and role-based access
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            REGISTER CARD
        ========================== */}

        <section>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.10)]">

            {/* CARD TOP */}

            <div className="border-b border-slate-100 px-6 pb-6 pt-7 sm:px-8">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <UserRound size={22} />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Choose your role and create your SmartFix AI account.
              </p>

            </div>


            {/* FORM */}

            <form
              onSubmit={handleRegister}
              className="space-y-5 px-6 py-7 sm:px-8"
            >

              {/* ERROR */}

              {errorMessage && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {errorMessage}
                </div>
              )}


              {/* SUCCESS */}

              {successMessage && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  {successMessage}
                </div>
              )}


              {/* FULL NAME */}

              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full name
                </label>

                <div className="relative">
                  <UserRound
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>


              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>


              {/* ROLE */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Account type
                </label>

                <div className="grid grid-cols-2 gap-3">

                  {/* USER */}

                  <button
                    type="button"
                    onClick={() => setRole("USER")}
                    className={`rounded-xl border p-4 text-left transition ${
                      role === "USER"
                        ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/10"
                        : "border-slate-200 bg-slate-50 hover:border-blue-200"
                    }`}
                  >

                    <div className="flex items-center justify-between">

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          role === "USER"
                            ? "bg-blue-600 text-white"
                            : "bg-white text-slate-500"
                        }`}
                      >
                        <UserRound size={18} />
                      </div>

                      {role === "USER" && (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                          <Check size={12} />
                        </div>
                      )}

                    </div>

                    <p className="mt-3 text-sm font-bold text-slate-900">
                      User
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Report problems
                    </p>

                  </button>


                  {/* TECHNICIAN */}

                  <button
                    type="button"
                    onClick={() => setRole("TECHNICIAN")}
                    className={`rounded-xl border p-4 text-left transition ${
                      role === "TECHNICIAN"
                        ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/10"
                        : "border-slate-200 bg-slate-50 hover:border-blue-200"
                    }`}
                  >

                    <div className="flex items-center justify-between">

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          role === "TECHNICIAN"
                            ? "bg-blue-600 text-white"
                            : "bg-white text-slate-500"
                        }`}
                      >
                        <Wrench size={18} />
                      </div>

                      {role === "TECHNICIAN" && (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                          <Check size={12} />
                        </div>
                      )}

                    </div>

                    <p className="mt-3 text-sm font-bold text-slate-900">
                      Technician
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Resolve service requests
                    </p>

                  </button>

                </div>

              </div>


              {/* PASSWORD */}

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">

                  <LockKeyhole
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    required
                    minLength={8}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>


              {/* CONFIRM PASSWORD */}

              <div>

                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Confirm password
                </label>

                <div className="relative">

                  <LockKeyhole
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    placeholder="Confirm your password"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>


              {/* TERMS */}

              <label className="flex cursor-pointer items-start gap-3">

                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) =>
                    setTermsAccepted(e.target.checked)
                  }
                  className="mt-1 h-4 w-4 accent-blue-600"
                />

                <span className="text-xs leading-5 text-slate-500">
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


              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create{" "}
                    {role === "TECHNICIAN"
                      ? "Technician"
                      : "User"}{" "}
                    Account

                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>


              {/* SECURITY */}

              <div className="flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-400">
                <ShieldCheck size={14} />
                Secure role-based account access
              </div>

            </form>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Register;