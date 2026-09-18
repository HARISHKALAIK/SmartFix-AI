import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Cpu,
  MapPin,
  MessageSquare,
  Network,
  SearchCheck,
  Sparkles,
  UserRoundCog,
  Users,
  Wrench,
  
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Report",
    heading: "Tell SmartFix what happened",
    description:
      "Submit a service request by describing the issue in your own words. SmartFix AI captures the important information automatically.",
    icon: ClipboardList,
    color: "cyan",
  },
  {
    number: "02",
    title: "Understand",
    heading: "AI analyzes the problem",
    description:
      "SmartFix AI understands the request, identifies the problem category and helps determine its priority.",
    icon: BrainCircuit,
    color: "violet",
  },
  {
    number: "03",
    title: "Assign",
    heading: "Match the right technician",
    description:
      "The system helps identify a suitable technician based on required skills, availability and current workload.",
    icon: UserRoundCog,
    color: "emerald",
  },
  {
    number: "04",
    title: "Track",
    heading: "Follow the service in real time",
    description:
      "Track request progress from assignment through investigation and resolution with clear status updates.",
    icon: MapPin,
    color: "blue",
  },
  {
    number: "05",
    title: "Resolve",
    heading: "Complete and close the request",
    description:
      "The technician resolves the issue, records the work performed and completes the service request.",
    icon: CheckCircle2,
    color: "orange",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI Problem Understanding",
    description:
      "Turn natural-language problem descriptions into structured service information.",
  },
  {
    icon: SearchCheck,
    title: "Intelligent Classification",
    description:
      "Organize incoming requests by category, priority and service requirements.",
  },
  {
    icon: Users,
    title: "Smart Technician Matching",
    description:
      "Support technician assignment using skills, availability and workload.",
  },
  {
    icon: MapPin,
    title: "Real-Time Visibility",
    description:
      "Keep users and service teams informed about request progress.",
  },
  {
    icon: Clock3,
    title: "SLA Monitoring",
    description:
      "Track service timelines and identify requests that require attention.",
  },
  {
    icon: Wrench,
    title: "Resolution Management",
    description:
      "Maintain a structured record of work performed and completed requests.",
  },
];

function HowItWorks() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      <main>
        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="relative overflow-hidden pb-28 pt-32">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
              {/* LEFT */}
              <div className="max-w-3xl">
                <div className="inline-flex animate-pulse items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  HOW SMARTFIX AI WORKS
                </div>

                <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                  From problem
                  <br />
                  <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                    to resolution.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                  SmartFix AI connects users, artificial intelligence and
                  service teams into one intelligent workflow — helping
                  organizations understand problems, assign technicians,
                  track progress and manage resolutions.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="/register"
                    className="group inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    Start with SmartFix
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-600"
                  >
                    See How It Works
                  </a>
                </div>

                {/* Workflow mini */}
                <div className="mt-12 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                  <span className="text-slate-900">User</span>
                  <ArrowRight size={15} />
                  <span className="text-cyan-600">AI</span>
                  <ArrowRight size={15} />
                  <span className="text-violet-600">Technician</span>
                  <ArrowRight size={15} />
                  <span className="text-emerald-600">Resolution</span>
                </div>
              </div>

              {/* RIGHT - ANIMATED AI WORKFLOW */}
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                {/* Orbit rings */}
                <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] rounded-full border border-cyan-200" />

                <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-violet-200" />

                {/* Orbit dots */}
                <div className="absolute left-[5%] top-[48%] h-4 w-4 animate-pulse rounded-full bg-cyan-500 shadow-lg shadow-cyan-400/50" />

                <div className="absolute right-[7%] top-[25%] h-4 w-4 animate-pulse rounded-full bg-violet-500 shadow-lg shadow-violet-400/50" />

                <div className="absolute bottom-[12%] left-[25%] h-4 w-4 animate-pulse rounded-full bg-emerald-500 shadow-lg shadow-emerald-400/50" />

                {/* Main Card */}
                <div className="relative z-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_30px_100px_rgba(15,23,42,0.14)]">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400">
                      <Sparkles size={13} />
                      SMARTFIX AI
                    </div>
                  </div>

                  {/* Request */}
                  <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-white">
                        <MessageSquare size={20} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          New Service Request
                        </p>

                        <p className="mt-1 font-bold text-slate-900">
                          Air conditioner is not cooling
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AI Analysis */}
                  <div className="mt-4 rounded-2xl border border-violet-100 bg-violet-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 animate-pulse items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                        <BrainCircuit size={21} />
                      </div>

                      <div>
                        <p className="font-bold text-slate-900">
                          AI Analysis
                        </p>

                        <p className="text-xs text-slate-500">
                          Understanding service request...
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white p-3">
                        <p className="text-xs text-slate-400">Category</p>
                        <p className="mt-1 text-sm font-bold text-slate-900">
                          Maintenance
                        </p>
                      </div>

                      <div className="rounded-xl bg-white p-3">
                        <p className="text-xs text-slate-400">Priority</p>
                        <p className="mt-1 text-sm font-bold text-orange-500">
                          High
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technician */}
                  <div className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <UserRoundCog size={21} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900">
                        Technician matched
                      </p>

                      <p className="text-xs text-slate-500">
                        Skills + availability + workload
                      </p>
                    </div>

                    <CheckCircle2
                      size={20}
                      className="text-emerald-500"
                    />
                  </div>

                  {/* Progress */}
                  <div className="mt-4 rounded-2xl bg-slate-950 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Service Progress
                      </p>

                      <p className="text-xs font-bold text-cyan-400">
                        ACTIVE
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[72%] animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                      </div>

                      <span className="text-xs font-bold text-white">
                        72%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-7 -left-6 z-20 hidden animate-[bounce_4s_ease-in-out_infinite] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-slate-400">
                      STATUS
                    </p>

                    <p className="text-sm font-bold text-slate-900">
                      Moving to resolution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* PROCESS */}
        {/* ===================================================== */}

        <section id="process" className="bg-slate-50 py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-[0.2em] text-cyan-600 shadow-sm">
                <Network size={14} />
                THE SMARTFIX WORKFLOW
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                Five steps.
                <span className="block text-slate-400">
                  One intelligent flow.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                SmartFix AI simplifies service management by connecting every
                stage of the request lifecycle.
              </p>
            </div>

            {/* Desktop */}
            <div className="relative mt-20 hidden lg:block">
              {/* Animated line */}
              <div className="absolute left-[8%] right-[8%] top-12 h-1 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-1/2 animate-[slide_4s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
              </div>

              <div className="grid grid-cols-5 gap-6">
                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="group relative"
                    >
                      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 group-hover:-translate-y-3 group-hover:border-cyan-300 group-hover:shadow-2xl">
                        <div className="absolute inset-2 rounded-2xl border border-slate-100" />

                        <Icon
                          size={30}
                          strokeWidth={1.6}
                          className="relative text-slate-700 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-600"
                        />
                      </div>

                      <p className="mt-7 text-xs font-black tracking-[0.2em] text-cyan-600">
                        STEP {step.number}
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-slate-900">
                        {step.title}
                      </h3>

                      <h4 className="mt-4 font-bold text-slate-800">
                        {step.heading}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile */}
            <div className="mt-16 space-y-5 lg:hidden">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={24} />
                      </div>

                      <div>
                        <p className="text-xs font-black tracking-widest text-cyan-600">
                          STEP {step.number}
                        </p>

                        <h3 className="mt-1 text-xl font-black">
                          {step.title}
                        </h3>

                        <h4 className="mt-2 font-bold text-slate-800">
                          {step.heading}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* AI ENGINE */}
        {/* ===================================================== */}

        <section className="relative overflow-hidden bg-slate-950 py-28">
          <div className="absolute left-[-10%] top-[-10%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-[-10%] right-[-10%] h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Visual */}
              <div className="relative flex min-h-[500px] items-center justify-center">
                {/* Rings */}
                <div className="absolute h-[420px] w-[420px] animate-[spin_20s_linear_infinite] rounded-full border border-cyan-500/20" />

                <div className="absolute h-[330px] w-[330px] animate-[spin_14s_linear_infinite_reverse] rounded-full border border-violet-500/20" />

                <div className="absolute h-[240px] w-[240px] animate-pulse rounded-full border border-blue-500/20" />

                {/* Center */}
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 shadow-[0_0_100px_rgba(34,211,238,0.25)]">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-950">
                    <BrainCircuit
                      size={58}
                      strokeWidth={1.3}
                      className="text-cyan-400"
                    />
                  </div>
                </div>

                {/* Floating AI nodes */}
                <div className="absolute left-[8%] top-[20%] animate-[bounce_3s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <MessageSquare
                    size={23}
                    className="text-cyan-400"
                  />
                </div>

                <div className="absolute right-[8%] top-[25%] animate-[bounce_4s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <SearchCheck
                    size={23}
                    className="text-violet-400"
                  />
                </div>

                <div className="absolute bottom-[18%] left-[18%] animate-[bounce_3.5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <Users size={23} className="text-emerald-400" />
                </div>

                <div className="absolute bottom-[17%] right-[18%] animate-[bounce_4.5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <MapPin size={23} className="text-orange-400" />
                </div>

                {/* Top badge */}
                <div className="absolute right-[20%] top-[5%] rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-widest text-cyan-400">
                  AI ACTIVE
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
                  INTELLIGENCE BEHIND THE FLOW
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-5xl">
                  AI handles the complexity.
                  <span className="block text-slate-500">
                    Your team handles the solution.
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  SmartFix AI works behind the scenes to turn unstructured
                  service requests into a structured workflow. It helps
                  identify what happened, organize the request and support the
                  service team throughout resolution.
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {[
                    "Understand natural language",
                    "Classify service requests",
                    "Identify priority",
                    "Support technician assignment",
                    "Track service progress",
                    "Monitor SLA timelines",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.07]"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-cyan-400"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* CAPABILITIES */}
        {/* ===================================================== */}

        <section className="bg-white py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-black tracking-[0.2em] text-cyan-600">
                <Sparkles size={14} />
                SMARTFIX CAPABILITIES
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
                More than a ticketing system.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                SmartFix AI brings intelligence into the complete service
                lifecycle.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl"
                  >
                    {/* Number */}
                    <span className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-cyan-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-7 text-xl font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500 group-hover:w-20" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* REAL TIME STATUS */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Left dashboard */}
              <div className="rounded-[2rem] bg-slate-950 p-7 shadow-2xl sm:p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-slate-500">
                      SERVICE DASHBOARD
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      Request Intelligence
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                    <Cpu size={24} />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: "Request received",
                      status: "Completed",
                      width: "100%",
                      icon: ClipboardList,
                    },
                    {
                      title: "AI classification",
                      status: "Completed",
                      width: "100%",
                      icon: BrainCircuit,
                    },
                    {
                      title: "Technician assignment",
                      status: "Completed",
                      width: "100%",
                      icon: Users,
                    },
                    {
                      title: "Service in progress",
                      status: "Active",
                      width: "72%",
                      icon: Wrench,
                    },
                    {
                      title: "Resolution",
                      status: "Waiting",
                      width: "25%",
                      icon: CheckCircle2,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-cyan-400">
                            <Icon size={19} />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-bold text-white">
                                {item.title}
                              </p>

                              <span className="text-xs font-bold text-cyan-400">
                                {item.status}
                              </span>
                            </div>

                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-1000"
                                style={{
                                  width: item.width,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right */}
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
                  REAL-TIME SERVICE VISIBILITY
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  Know what's happening
                  <span className="block text-slate-400">
                    at every stage.
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  SmartFix AI keeps the service lifecycle visible. From the
                  moment a request is submitted to the moment it is resolved,
                  every stage can be represented in a clear and structured
                  workflow.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Clear request status",
                    "Technician assignment visibility",
                    "Service progress tracking",
                    "SLA timeline awareness",
                    "Resolution history",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-cyan-600"
                      />

                      <span className="font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* FINAL CTA */}
        {/* ===================================================== */}

        <section className="bg-white px-6 py-24 lg:px-8">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-16 text-center shadow-2xl md:px-16">
            <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="absolute bottom-[-100px] right-[-100px] h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

            {/* Animated particles */}
            <div className="absolute left-[15%] top-[25%] h-2 w-2 animate-ping rounded-full bg-cyan-400" />

            <div className="absolute right-[20%] top-[30%] h-2 w-2 animate-ping rounded-full bg-violet-400" />

            <div className="absolute bottom-[25%] left-[25%] h-2 w-2 animate-ping rounded-full bg-blue-400" />

            <div className="relative z-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-400 backdrop-blur">
                <Sparkles size={30} />
              </div>

              <p className="mt-7 text-sm font-black tracking-[0.25em] text-cyan-400">
                READY FOR SMARTER SERVICE?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black text-white md:text-5xl">
                Turn every service request into a smarter workflow.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Experience a service management platform where AI helps
                understand problems, connect technicians and keep the entire
                resolution process visible.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href="/register"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Get Started
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HowItWorks;