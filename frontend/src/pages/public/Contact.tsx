import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  Clock3,
  MapPin,
  MessageSquare,
  SearchCheck,
  Send,
  Sparkles,
  UserRoundCog,
} from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50">
      <Navbar />

      <main className="relative pt-28 pb-24">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.35]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="absolute left-[-120px] top-[120px] h-[360px] w-[360px] rounded-full bg-blue-400/10 blur-[100px]" />

          <div className="absolute right-[-120px] top-[400px] h-[420px] w-[420px] rounded-full bg-violet-400/10 blur-[110px]" />

          <div className="absolute bottom-[300px] left-[35%] h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">

          {/* =====================================================
              HERO
          ====================================================== */}

          <section className="mx-auto max-w-4xl text-center">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-200
                bg-white/80
                px-4
                py-2
                text-sm
                font-semibold
                text-blue-600
                shadow-sm
                backdrop-blur-md
              "
            >
              <Sparkles size={15} />
              CONTACT SMARTFIX AI
            </div>

            <h1 className="mt-7 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              Let's make service
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                smarter together.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Have a question about SmartFix AI, need support, or want to
              explore smarter service management? Our team is ready to help.
            </p>
          </section>

          {/* =====================================================
              CONTACT GRID
          ====================================================== */}

          <section className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">

            {/* =================================================
                LEFT PANEL
            ================================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                bg-slate-950
                p-8
                text-white
                shadow-2xl
                md:p-10
              "
            >
              {/* Decorative glow */}

              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />

              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />

              {/* Grid */}

              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              <div className="relative z-10">

                <p className="text-sm font-bold tracking-[0.2em] text-blue-400">
                  GET IN TOUCH
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                  We're here to help you solve problems faster.
                </h2>

                <p className="mt-5 leading-relaxed text-slate-400">
                  Whether you're exploring SmartFix AI, need assistance with
                  service management, or want to discuss an idea, we'd love to
                  hear from you.
                </p>

                {/* ---------------------------------------------
                    CONTACT INFORMATION
                ---------------------------------------------- */}

                <div className="mt-10 space-y-4">

                  {/* Email */}

                  <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <MessageSquare size={20} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Email
                      </p>

                      <a
                        href="mailto:hello@smartfix.ai"
                        className="mt-1 block font-medium text-slate-200 transition hover:text-blue-400"
                      >
                        hello@smartfix.ai
                      </a>
                    </div>
                  </div>

                  {/* Support */}

                  <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Activity size={20} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Support
                      </p>

                      <p className="mt-1 font-medium text-slate-200">
                        Smart service assistance
                      </p>
                    </div>
                  </div>

                  {/* Response */}

                  <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.07]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                      <Clock3 size={20} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Response
                      </p>

                      <p className="mt-1 font-medium text-slate-200">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Location */}

                  <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.07]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <MapPin size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Location
                      </p>

                      <p className="mt-1 font-medium text-slate-200">
                        C.S.I. Church, Vyrakudy
                      </p>

                      <p className="text-sm text-slate-500">
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                </div>

                {/* ---------------------------------------------
                    MAP VISUAL
                ---------------------------------------------- */}

                <div className="relative mt-8 h-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">

                  {/* Map grid */}

                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.25) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Roads */}

                  <div className="absolute left-[-20px] top-[90px] h-3 w-[120%] rotate-[-8deg] rounded-full bg-slate-700/60" />

                  <div className="absolute left-[35%] top-[-30px] h-[130%] w-3 rotate-[18deg] rounded-full bg-slate-700/60" />

                  <div className="absolute bottom-[25px] left-[-10px] h-2 w-[110%] rotate-[14deg] rounded-full bg-slate-700/50" />

                  {/* Location marker */}

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                    <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-blue-500/10" />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/20 bg-blue-600 shadow-xl shadow-blue-600/30">
                      <MapPin size={25} />
                    </div>

                  </div>

                  {/* Location label */}

                  <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs text-slate-500">
                      OUR LOCATION
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      C.S.I. Church, Vyrakudy
                    </p>
                  </div>

                </div>

                {/* Directions */}

                <a
                  href="https://maps.app.goo.gl/8cjLEuAQh5hHZPkj7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-blue-500/30
                    bg-blue-500/10
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-blue-400
                    transition-all
                    duration-300
                    hover:border-blue-400/50
                    hover:bg-blue-500/20
                  "
                >
                  <MapPin size={17} />

                  Get Directions

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

              </div>
            </div>

            {/* =================================================
                CONTACT FORM
            ================================================== */}

            <div
              className="
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                md:p-10
              "
            >

              {/* Header */}

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Send size={21} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Send us a message
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Tell us what you need and we'll get back to you.
                  </p>
                </div>

              </div>

              {/* Form */}

              <form className="mt-8 space-y-6">

                {/* Name + Email */}

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3.5
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3.5
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />
                  </div>

                </div>

                {/* Organization */}

                <div>
                  <label
                    htmlFor="organization"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Organization
                    <span className="ml-1 font-normal text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="organization"
                    type="text"
                    placeholder="Company, college, apartment, etc."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                  />
                </div>

                {/* Topic */}

                <div>
                  <label
                    htmlFor="topic"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    What can we help with?
                  </label>

                  <select
                    id="topic"
                    defaultValue=""
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-sm
                      text-slate-700
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>

                    <option value="ai-assistant">
                      AI Assistant
                    </option>

                    <option value="problem-classification">
                      AI Problem Classification
                    </option>

                    <option value="technician-assignment">
                      Smart Technician Assignment
                    </option>

                    <option value="tracking">
                      Real-Time Tracking
                    </option>

                    <option value="sla">
                      SLA Management
                    </option>

                    <option value="analytics">
                      Analytics & Reports
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Subject */}

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                  />
                </div>

                {/* Message */}

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Message
                    </label>

                    <span className="text-xs text-slate-400">
                      Tell us more
                    </span>
                  </div>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Describe your question, requirement, or service challenge..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-sm
                      leading-relaxed
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-blue-600
                    py-4
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-700
                    hover:shadow-xl
                  "
                >
                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  Send Message

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </form>

              {/* Privacy note */}

              <div className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-slate-400">
                <CheckCircle2
                  size={15}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />

                <p>
                  Your message will be used only to understand and respond to
                  your request.
                </p>
              </div>

            </div>
          </section>

          {/* =====================================================
              HOW WE CAN HELP
          ====================================================== */}

          <section className="mx-auto mt-24 max-w-6xl">

            <div className="text-center">
              <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
                HOW WE CAN HELP
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Built around the complete service lifecycle
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-500">
                SmartFix AI brings intelligence into every stage of service
                management — from reporting a problem to resolution and
                analytics.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {/* AI Assistant */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <BrainCircuit size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  AI Assistant
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Let users describe problems naturally and receive intelligent
                  first-level assistance.
                </p>
              </div>

              {/* Classification */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <SearchCheck size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  AI Problem Classification
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Understand the reported issue and identify its category and
                  priority for faster processing.
                </p>
              </div>

              {/* Technician */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                  <UserRoundCog size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Smart Technician Assignment
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Match service requests with technicians based on skills,
                  availability, and workload.
                </p>
              </div>

              {/* Tracking */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <Activity size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Real-Time Tracking
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Follow every service request from creation and assignment
                  through resolution.
                </p>
              </div>

              {/* SLA */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                  <Clock3 size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  SLA Management
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Monitor service timelines, deadlines, and request progress to
                  keep operations on track.
                </p>
              </div>

              {/* Analytics */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
                  <BarChart3 size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Analytics & Reports
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Gain insights into service requests, technicians,
                  resolution performance, and operational trends.
                </p>
              </div>

            </div>
          </section>

          {/* =====================================================
              SMARTFIX WORKFLOW
          ====================================================== */}

          <section className="mx-auto mt-24 max-w-6xl">

            <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">

              <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

                {/* Left */}

                <div>
                  <p className="text-sm font-bold tracking-[0.2em] text-blue-400">
                    SMART SERVICE WORKFLOW
                  </p>

                  <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                    From problem report to resolution.
                  </h2>

                  <p className="mt-5 leading-relaxed text-slate-400">
                    SmartFix AI connects AI-powered understanding, intelligent
                    assignment, tracking, SLA management, and analytics into
                    one streamlined workflow.
                  </p>

                  <a
                    href="/how-it-works"
                    className="
                      group
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-slate-900
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    Explore How It Works

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                {/* Right workflow */}

                <div className="grid gap-4 sm:grid-cols-2">

                  {/* Step 1 */}

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <ClipboardList size={20} />
                      </div>

                      <span className="text-xs font-bold text-slate-500">
                        STEP 01
                      </span>
                    </div>

                    <h3 className="mt-5 font-bold">
                      Report
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Describe the service problem naturally.
                    </p>
                  </div>

                  {/* Step 2 */}

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                        <BrainCircuit size={20} />
                      </div>

                      <span className="text-xs font-bold text-slate-500">
                        STEP 02
                      </span>
                    </div>

                    <h3 className="mt-5 font-bold">
                      AI Analysis
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      AI understands and classifies the issue.
                    </p>
                  </div>

                  {/* Step 3 */}

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <UserRoundCog size={20} />
                      </div>

                      <span className="text-xs font-bold text-slate-500">
                        STEP 03
                      </span>
                    </div>

                    <h3 className="mt-5 font-bold">
                      Assignment
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      The suitable technician receives the request.
                    </p>
                  </div>

                  {/* Step 4 */}

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <CheckCircle2 size={20} />
                      </div>

                      <span className="text-xs font-bold text-slate-500">
                        STEP 04
                      </span>
                    </div>

                    <h3 className="mt-5 font-bold">
                      Resolution
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Track the request until the issue is resolved.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* =====================================================
              FINAL CTA
          ====================================================== */}

          <section className="mt-24 text-center">

            <div className="mx-auto max-w-3xl">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Sparkles size={24} />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
                Ready to make service management smarter?
              </h2>

              <p className="mt-4 leading-relaxed text-slate-500">
                Experience a smarter way to report, manage, track, and resolve
                service requests with SmartFix AI.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                <a
                  href="/register"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3.5
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-700
                  "
                >
                  Get Started

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/features"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-6
                    py-3.5
                    font-semibold
                    text-slate-700
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-slate-300
                    hover:shadow-lg
                  "
                >
                  Explore Features
                </a>

              </div>

            </div>

          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;