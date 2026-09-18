import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useState } from "react";


import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Headphones,
  MapPin,
  MessageSquare,
  Network,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI Assistant",
    shortTitle: "Instant AI Support",
    description:
      "An intelligent AI assistant that understands service problems and guides users toward the right solution.",
    features: [
      "Natural language interaction",
      "Instant problem guidance",
      "24/7 availability",
      "Context-aware responses",
    ],
    moreContent:
      "The SmartFix AI Assistant acts as the first point of support for users. It can understand service-related questions, identify the nature of a problem, suggest appropriate actions, and guide users through the service request process.",
    gradient: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "AI Problem Classification",
    shortTitle: "Smart Classification",
    description:
      "Automatically analyze and classify reported problems so they can be routed to the appropriate service workflow.",
    features: [
      "Automatic issue classification",
      "Problem categorization",
      "Priority identification",
      "Faster request processing",
    ],
    moreContent:
      "Instead of manually reviewing every service request, SmartFix AI analyzes the information provided by the user and classifies the issue. This helps reduce manual effort and creates a structured workflow for service teams.",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
  {
    number: "03",
    icon: Users,
    title: "Smart Technician Assignment",
    shortTitle: "Right Technician",
    description:
      "Connect each service request with a suitable technician based on the type and requirements of the problem.",
    features: [
      "Skill-based assignment",
      "Technician availability",
      "Workload consideration",
      "Automated routing",
    ],
    moreContent:
      "SmartFix AI helps organizations connect service requests with suitable technicians. The system can consider the required skills, technician availability, and workload to create a more organized assignment workflow.",
    gradient: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Service Request Management",
    shortTitle: "Manage Requests",
    description:
      "Create, organize, prioritize, and manage service requests through one centralized platform.",
    features: [
      "Centralized requests",
      "Request prioritization",
      "Status management",
      "Service history",
    ],
    moreContent:
      "SmartFix AI provides a centralized environment for managing service requests from creation to completion. Teams can keep track of request status, priorities, assigned technicians, and service history in one place.",
    gradient: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
  {
    number: "05",
    icon: MapPin,
    title: "Real-Time Tracking",
    shortTitle: "Track Everything",
    description:
      "Monitor service requests and technician progress in real time for better visibility and coordination.",
    features: [
      "Live request status",
      "Technician tracking",
      "Progress visibility",
      "Customer updates",
    ],
    moreContent:
      "Real-time tracking gives customers and service teams better visibility into ongoing requests. Users can understand where a request stands while administrators can monitor service progress and coordinate operations.",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    number: "06",
    icon: Clock3,
    title: "SLA Management",
    shortTitle: "Stay On Time",
    description:
      "Monitor service-level commitments and help teams respond to requests within defined timelines.",
    features: [
      "SLA monitoring",
      "Deadline tracking",
      "Priority alerts",
      "Performance visibility",
    ],
    moreContent:
      "SmartFix AI helps service teams keep track of SLA commitments. Requests can be monitored against their expected timelines, helping teams identify delays and focus attention on requests that require timely action.",
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    text: "text-pink-600",
  },
];

const workflow = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Report",
    description: "Users describe their problem through the SmartFix platform.",
  },
  {
    step: "02",
    icon: BrainCircuit,
    title: "Analyze",
    description: "AI understands and classifies the reported problem.",
  },
  {
    step: "03",
    icon: Users,
    title: "Assign",
    description: "The appropriate technician is connected to the request.",
  },
  {
    step: "04",
    icon: MapPin,
    title: "Track",
    description: "Service progress can be monitored in real time.",
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "Resolve",
    description: "The request is completed and the service history is updated.",
  },
];

export default function About() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService((current) => (current === index ? null : index));
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative isolate overflow-hidden pt-28 lg:pt-36">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-[-10%] h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-violet-300/20 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <div className="animate-about-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              <Sparkles size={16} />
              Intelligent Service Management
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Smarter service.
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                Faster solutions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              SmartFix AI combines artificial intelligence, automation and
              service management to transform the way problems are reported,
              classified, assigned, tracked and resolved.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-xl shadow-slate-950/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore SmartFix
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-600"
              >
                Explore Services
              </a>
            </div>

            {/* Mini Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5">
              <div>
                <p className="text-3xl font-black text-slate-950">AI</p>
                <p className="mt-1 text-sm text-slate-500">Powered</p>
              </div>

              <div>
                <p className="text-3xl font-black text-slate-950">24/7</p>
                <p className="mt-1 text-sm text-slate-500">Availability</p>
              </div>

              <div>
                <p className="text-3xl font-black text-slate-950">360°</p>
                <p className="mt-1 text-sm text-slate-500">Visibility</p>
              </div>
            </div>
          </div>

          {/* RIGHT - ANIMATED AI VISUAL */}
          <div className="relative flex min-h-[520px] items-center justify-center">
            <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Orbit */}
            <div className="absolute h-[400px] w-[400px] animate-[spin_18s_linear_infinite] rounded-full border border-cyan-200/80">
              <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
            </div>

            <div className="absolute h-[320px] w-[320px] animate-[spin_12s_linear_infinite_reverse] rounded-full border border-violet-200/80">
              <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
            </div>

            {/* Main AI Core */}
            <div className="relative flex h-56 w-56 animate-[pulse_4s_ease-in-out_infinite] items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_100px_rgba(59,130,246,0.35)]">
              <div className="absolute inset-4 rounded-full border border-white/20" />

              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl">
                <BrainCircuit
                  size={70}
                  strokeWidth={1.4}
                  className="text-blue-600"
                />
              </div>
            </div>

            {/* Floating Cards */}

            <div className="absolute left-0 top-16 animate-bounce rounded-2xl border border-white/70 bg-white/90 p-4 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    RESPONSE
                  </p>
                  <p className="font-bold text-slate-800">Instant AI</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 right-0 animate-[bounce_4s_ease-in-out_infinite] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    ACCURACY
                  </p>
                  <p className="font-bold text-slate-800">Smart Routing</p>
                </div>
              </div>
            </div>

            <div className="absolute right-5 top-4 rounded-xl bg-slate-950 px-4 py-2 text-xs font-bold tracking-wider text-white shadow-xl">
              AI ENGINE
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO */}
      {/* ========================================================= */}

      <section className="border-y border-slate-100 bg-slate-50/70 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cyan-600 shadow-lg shadow-slate-200">
            <Sparkles size={26} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
            What is SmartFix AI?
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            One intelligent platform for
            <span className="block bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
              modern service operations.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            SmartFix AI is designed to simplify service management by bringing
            AI assistance, intelligent classification, technician assignment,
            real-time tracking and SLA management into one connected
            experience.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES */}
      {/* ========================================================= */}

      <section id="services" className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-bold tracking-[0.2em] text-white">
                <Sparkles size={14} />
                OUR AI SERVICES
              </div>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Everything you need to
                <span className="block bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                  fix smarter.
                </span>
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              From the first problem report to final resolution, SmartFix AI
              helps automate and simplify every important step of your service
              workflow.
            </p>
          </div>

          {/* ===================================================== */}
          {/* ANIMATED SERVICE ENGINE */}
          {/* ===================================================== */}

          <div className="relative my-20 overflow-hidden rounded-[2rem] bg-slate-950 p-8 shadow-2xl sm:p-12 lg:p-16">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative grid items-center gap-14 lg:grid-cols-2">
              {/* Visual */}
              <div className="relative flex min-h-[380px] items-center justify-center">
                <div className="absolute h-[300px] w-[300px] animate-[spin_20s_linear_infinite] rounded-full border border-cyan-500/20" />

                <div className="absolute h-[230px] w-[230px] animate-[spin_13s_linear_infinite_reverse] rounded-full border border-violet-500/20" />

                <div className="absolute h-[160px] w-[160px] animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-xl" />

                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 shadow-[0_0_80px_rgba(34,211,238,0.3)]">
                  <BrainCircuit
                    size={58}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                </div>

                {/* Orbit icons */}
                <div className="absolute left-[12%] top-[28%] flex h-12 w-12 animate-bounce items-center justify-center rounded-xl bg-white/10 text-cyan-300 backdrop-blur">
                  <MessageSquare size={21} />
                </div>

                <div className="absolute right-[12%] top-[25%] flex h-12 w-12 animate-[bounce_3s_ease-in-out_infinite] items-center justify-center rounded-xl bg-white/10 text-violet-300 backdrop-blur">
                  <Users size={21} />
                </div>

                <div className="absolute bottom-[18%] left-[20%] flex h-12 w-12 animate-[bounce_4s_ease-in-out_infinite] items-center justify-center rounded-xl bg-white/10 text-emerald-300 backdrop-blur">
                  <Wrench size={21} />
                </div>

                <div className="absolute bottom-[18%] right-[20%] flex h-12 w-12 animate-[bounce_3.5s_ease-in-out_infinite] items-center justify-center rounded-xl bg-white/10 text-orange-300 backdrop-blur">
                  <MapPin size={21} />
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                  AI SERVICE ENGINE
                </p>

                <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                  Intelligence at every step.
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  SmartFix AI connects intelligent assistance with your service
                  operations so teams can reduce manual work and maintain
                  better visibility over every request.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    "AI Assistance",
                    "Smart Routing",
                    "Live Tracking",
                    "SLA Monitoring",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm font-medium text-slate-300"
                    >
                      <CheckCircle2 size={17} className="text-cyan-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* SERVICE CARDS */}
          {/* ===================================================== */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedService === index;

              return (
                <div
                  key={service.title}
                  className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    isExpanded
                      ? "border-slate-300 shadow-2xl"
                      : ""
                  }`}
                >
                  {/* Top Glow */}
                  <div
                    className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                  />

                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-widest text-slate-300">
                      {service.number}
                    </span>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.bg} ${service.text} transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <Icon size={23} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <p className={`text-sm font-bold ${service.text}`}>
                      {service.shortTitle}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm font-medium text-slate-600"
                        >
                          <CheckCircle2
                            size={17}
                            className={service.text}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* ================================================= */}
                    {/* EXPANDABLE CONTENT */}
                    {/* ================================================= */}

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isExpanded
                          ? "mt-6 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`rounded-2xl border ${service.bg} p-5`}
                        >
                          <div className="mb-3 flex items-center gap-2">
                            <Sparkles
                              size={17}
                              className={service.text}
                            />

                            <span
                              className={`text-sm font-bold ${service.text}`}
                            >
                              How it works
                            </span>
                          </div>

                          <p className="text-sm leading-7 text-slate-600">
                            {service.moreContent}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* View More */}
                    <button
                      onClick={() => toggleService(index)}
                      className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition-all duration-300 ${
                        isExpanded
                          ? `${service.bg} ${service.text} border-transparent`
                          : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span>
                        {isExpanded ? "View Less" : "View More"}
                      </span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Bottom Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WORKFLOW */}
      {/* ========================================================= */}

      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-[0.2em] text-slate-700 shadow-sm">
              <Network size={14} />
              SMART WORKFLOW
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              From problem to
              <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                {" "}
                resolution.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              SmartFix AI creates a connected workflow that helps service teams
              move requests forward with greater visibility.
            </p>
          </div>

          <div className="relative mt-20">
            {/* Connecting line */}
            <div className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {workflow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.step}
                    className="group relative text-center"
                  >
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-slate-50 bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                      <Icon
                        size={27}
                        className="text-cyan-600 transition-transform duration-500 group-hover:scale-110"
                      />

                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-[10px] font-bold text-white">
                        {index + 1}
                      </span>
                    </div>

                    <p className="mt-6 text-xs font-black tracking-widest text-cyan-600">
                      STEP {item.step}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY SMARTFIX */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden py-28">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
                WHY SMARTFIX AI
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Built to make service operations
                <span className="block bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                  intelligent.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Traditional service workflows often involve manual
                classification, repeated communication and limited visibility.
                SmartFix AI brings these processes together into a connected
                digital experience.
              </p>

              <div className="mt-9 space-y-5">
                {[
                  {
                    icon: Zap,
                    title: "Faster Operations",
                    text: "Reduce repetitive manual steps with intelligent automation.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Better Visibility",
                    text: "Keep service requests and progress visible throughout the workflow.",
                  },
                  {
                    icon: Target,
                    title: "Smarter Decisions",
                    text: "Use structured information and AI-assisted workflows to support teams.",
                  },
                  {
                    icon: Headphones,
                    title: "Better Experience",
                    text: "Give users a simpler way to report and understand their service requests.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:shadow-xl"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="rounded-[2rem] bg-slate-950 p-7 shadow-2xl sm:p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      SMARTFIX AI
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      Service Intelligence
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <BrainCircuit size={24} />
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  {[
                    {
                      label: "AI Analysis",
                      value: "Active",
                      width: "92%",
                    },
                    {
                      label: "Smart Assignment",
                      value: "Ready",
                      width: "84%",
                    },
                    {
                      label: "Live Tracking",
                      value: "Connected",
                      width: "76%",
                    },
                    {
                      label: "SLA Monitoring",
                      value: "Running",
                      width: "88%",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-300">
                          {item.label}
                        </span>

                        <span className="font-bold text-cyan-400">
                          {item.value}
                        </span>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-1000"
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-xl font-black text-white">AI</p>
                    <p className="mt-1 text-xs text-slate-500">Powered</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-xl font-black text-white">LIVE</p>
                    <p className="mt-1 text-xs text-slate-500">Tracking</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <p className="text-xl font-black text-white">SLA</p>
                    <p className="mt-1 text-xs text-slate-500">Managed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="px-6 pb-28 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-16 text-center shadow-2xl sm:px-12 lg:px-20">
          <div className="absolute left-1/2 top-[-150px] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-400 backdrop-blur">
              <Sparkles size={30} />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-black text-white sm:text-5xl">
              Ready to make your service operations smarter?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Discover how SmartFix AI can bring intelligent automation,
              tracking and service management together in one platform.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Get Started
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}