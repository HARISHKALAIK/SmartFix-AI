import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  Clock3,
  BarChart3,
  MapPin,
  MessageSquare,
  SearchCheck,
  Sparkles,
  UserRoundCog,
  Users,
  Wrench,
  Activity,
  ShieldCheck,
  Zap,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI Assistant",
    subtitle: "Intelligent First-Level Support",
    description:
      "SmartFix AI Assistant allows users to describe their service problem naturally instead of navigating complicated forms.",
    detailedDescription:
      "Users can explain what happened using their own words. The AI assistant understands the conversation, extracts useful information and helps guide the user toward creating an appropriate service request.",
    icon: MessageSquare,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
    gradient: "from-cyan-500 to-blue-600",
    light: "bg-cyan-50",
    text: "text-cyan-600",
    features: [
      "Natural language problem reporting",
      "Conversational AI interaction",
      "Guided service request creation",
      "Instant assistance",
    ],
  },

  {
    number: "02",
    title: "AI Classification",
    subtitle: "Understand Every Service Request",
    description:
      "AI analyzes incoming complaints and identifies their category, priority and important information.",
    detailedDescription:
      "SmartFix AI converts an unstructured problem description into useful service information. This helps service teams understand what type of problem has been reported and which requests require greater attention.",
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=85",
    gradient: "from-violet-500 to-purple-600",
    light: "bg-violet-50",
    text: "text-violet-600",
    features: [
      "Automatic problem classification",
      "Category identification",
      "Priority identification",
      "Structured service information",
    ],
  },

  {
    number: "03",
    title: "Smart Technician Assignment",
    subtitle: "Connect the Right Person to the Problem",
    description:
      "SmartFix AI helps match service requests with suitable technicians based on skills, availability and workload.",
    detailedDescription:
      "Once a request has been understood and classified, SmartFix AI supports the technician assignment process. The system considers the requirements of the problem together with technician availability and workload.",
    icon: UserRoundCog,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
    gradient: "from-emerald-500 to-green-600",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    features: [
      "Skill-based technician matching",
      "Availability consideration",
      "Workload consideration",
      "Faster assignment workflow",
    ],
  },

  {
    number: "04",
    title: "Real-Time Tracking",
    subtitle: "Visibility From Start to Finish",
    description:
      "Track every stage of a service request from creation through assignment, investigation and resolution.",
    detailedDescription:
      "SmartFix AI provides visibility into the current status of service requests. Users and service teams can understand where a request is in the workflow and follow its progress toward resolution.",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=85",
    gradient: "from-blue-500 to-indigo-600",
    light: "bg-blue-50",
    text: "text-blue-600",
    features: [
      "Live request status",
      "Service progress visibility",
      "Technician activity tracking",
      "Resolution status updates",
    ],
  },

  {
    number: "05",
    title: "SLA Management",
    subtitle: "Keep Service Timelines Visible",
    description:
      "Monitor service deadlines and identify requests that require immediate attention.",
    detailedDescription:
      "SmartFix AI helps service teams keep track of important service timelines. SLA monitoring makes it easier to identify requests that are approaching their deadlines and require attention.",
    icon: Clock3,
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=85",
    gradient: "from-orange-500 to-red-500",
    light: "bg-orange-50",
    text: "text-orange-600",
    features: [
      "Deadline monitoring",
      "SLA status visibility",
      "Priority attention",
      "Service timeline tracking",
    ],
  },

  {
    number: "06",
    title: "Analytics",
    subtitle: "Turn Service Data Into Insights",
    description:
      "Administrators get detailed insights into complaints, technicians and resolution performance.",
    detailedDescription:
      "SmartFix AI analytics provides administrators with a clearer view of service operations. Organizations can use service data to understand request volumes, technician activity and overall resolution performance.",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    gradient: "from-pink-500 to-rose-600",
    light: "bg-pink-50",
    text: "text-pink-600",
    features: [
      "Complaint insights",
      "Technician performance visibility",
      "Resolution performance",
      "Service operation analytics",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Report",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Understand",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Classify",
    icon: SearchCheck,
  },
  {
    number: "04",
    title: "Assign",
    icon: UserRoundCog,
  },
  {
    number: "05",
    title: "Track",
    icon: MapPin,
  },
  {
    number: "06",
    title: "Resolve",
    icon: CheckCircle2,
  },
];

function Features() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      <main>
        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="relative overflow-hidden bg-slate-50 pb-28 pt-32">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

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

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
              {/* LEFT */}
              <div className="animate-[fadeIn_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-bold text-cyan-600 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-600" />
                  </span>

                  SMARTFIX AI SERVICES
                </div>

                <h1 className="mt-7 text-5xl font-black leading-[1.03] tracking-tight md:text-6xl lg:text-7xl">
                  Intelligent tools for
                  <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                    smarter service.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                  SmartFix AI combines artificial intelligence, technician
                  management, real-time tracking, SLA monitoring and analytics
                  to create a connected service management experience.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    Explore Services

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="/register"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-600"
                  >
                    Get Started
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
                  <div>
                    <p className="text-3xl font-black text-slate-950">06</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Core Services
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-black text-slate-950">
                      AI
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Powered
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-black text-slate-950">
                      360°
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Visibility
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE / AI VISUAL */}
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
                  <div className="relative h-[480px] overflow-hidden rounded-[1.5rem]">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                      alt="SmartFix AI service management"
                      className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Floating AI card */}
                    <div className="absolute left-5 top-5 animate-[bounce_4s_ease-in-out_infinite] rounded-2xl border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                          <BrainCircuit size={22} />
                        </div>

                        <div>
                          <p className="text-[10px] font-bold tracking-widest text-slate-400">
                            AI ENGINE
                          </p>

                          <p className="text-sm font-black text-slate-900">
                            Active
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold tracking-widest text-cyan-400">
                              SMART SERVICE
                            </p>

                            <h3 className="mt-2 text-2xl font-black text-white">
                              From request to resolution
                            </h3>
                          </div>

                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-400">
                            <Zap size={22} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orbit */}
                <div className="absolute -right-5 -top-5 h-20 w-20 animate-spin rounded-full border border-cyan-300/50 border-t-cyan-600" />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SERVICES INTRO */}
        {/* ===================================================== */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
                  WHAT WE PROVIDE
                </p>

                <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                  A complete ecosystem for
                  <span className="block bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                    service management.
                  </span>
                </h2>
              </div>

              <p className="text-lg leading-8 text-slate-600">
                SmartFix AI brings the major stages of service management
                together — from understanding a user's problem to technician
                assignment, tracking, SLA monitoring and operational analytics.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SERVICE CARDS */}
        {/* ===================================================== */}

        <section
          id="services"
          className="relative overflow-hidden bg-slate-50 py-28"
        >
          <div className="absolute left-[-150px] top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="absolute bottom-[10%] right-[-150px] h-[400px] w-[400px] rounded-full bg-violet-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                      {/* Number */}
                      <span className="absolute left-5 top-5 text-sm font-black tracking-widest text-white">
                        {service.number}
                      </span>

                      {/* Icon */}
                      <div
                        className={`absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 ${service.text} shadow-xl backdrop-blur transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
                      >
                        <Icon size={26} />
                      </div>

                      {/* AI indicator */}
                      <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white backdrop-blur">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                        SMART
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <p
                        className={`text-xs font-black uppercase tracking-[0.15em] ${service.text}`}
                      >
                        {service.subtitle}
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

                      {/* Detailed content */}
                      <div
                        className={`mt-7 rounded-2xl ${service.light} p-5`}
                      >
                        <p
                          className={`text-xs font-black uppercase tracking-widest ${service.text}`}
                        >
                          How it helps
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {service.detailedDescription}
                        </p>
                      </div>

                      {/* CTA */}
                      <a
                        href="/contact"
                        className={`mt-7 inline-flex items-center gap-2 text-sm font-bold ${service.text}`}
                      >
                        Learn about this service

                        <ChevronRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>

                    {/* Bottom line */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} transition-all duration-500 group-hover:w-full`}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* AI SERVICE MANAGEMENT */}
        {/* ===================================================== */}

        <section className="relative overflow-hidden bg-slate-950 py-28">
          <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Visual */}
              <div className="relative flex min-h-[500px] items-center justify-center">
                {/* Rings */}
                <div className="absolute h-[430px] w-[430px] animate-[spin_20s_linear_infinite] rounded-full border border-cyan-500/20" />

                <div className="absolute h-[340px] w-[340px] animate-[spin_14s_linear_infinite_reverse] rounded-full border border-violet-500/20" />

                <div className="absolute h-[250px] w-[250px] animate-pulse rounded-full border border-blue-500/20" />

                {/* Core */}
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 shadow-[0_0_100px_rgba(34,211,238,0.3)]">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-950">
                    <BrainCircuit
                      size={58}
                      strokeWidth={1.3}
                      className="text-cyan-400"
                    />
                  </div>
                </div>

                {/* Nodes */}
                <div className="absolute left-[5%] top-[20%] animate-[bounce_3s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <MessageSquare size={24} className="text-cyan-400" />
                </div>

                <div className="absolute right-[5%] top-[20%] animate-[bounce_4s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <SearchCheck size={24} className="text-violet-400" />
                </div>

                <div className="absolute bottom-[17%] left-[15%] animate-[bounce_3.5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <Users size={24} className="text-emerald-400" />
                </div>

                <div className="absolute bottom-[17%] right-[15%] animate-[bounce_4.5s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <Activity size={24} className="text-orange-400" />
                </div>

                {/* Label */}
                <div className="absolute right-[20%] top-[5%] rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black tracking-widest text-cyan-400">
                  AI ACTIVE
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                  <Sparkles size={15} />
                  AI-POWERED SERVICE MANAGEMENT
                </div>

                <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                  One intelligent platform.
                  <span className="block text-slate-500">
                    Multiple service capabilities.
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  SmartFix AI connects intelligent assistance with service
                  operations so organizations can manage requests through a
                  more structured and visible workflow.
                </p>

                <div className="mt-9 space-y-4">
                  {[
                    {
                      icon: BrainCircuit,
                      title: "Understand",
                      text: "AI understands the user's reported problem.",
                    },
                    {
                      icon: SearchCheck,
                      title: "Classify",
                      text: "The request is organized by category and priority.",
                    },
                    {
                      icon: UserRoundCog,
                      title: "Assign",
                      text: "The appropriate technician can be identified.",
                    },
                    {
                      icon: MapPin,
                      title: "Track",
                      text: "Service progress remains visible.",
                    },
                    {
                      icon: Clock3,
                      title: "Monitor",
                      text: "Service timelines and SLA requirements can be monitored.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.07]"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-400">
                          <Icon size={21} />
                        </div>

                        <div>
                          <h3 className="font-bold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* WORKFLOW */}
        {/* ===================================================== */}

        <section className="bg-white py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
                CONNECTED WORKFLOW
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Every service request follows
                <span className="block bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
                  an intelligent journey.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                SmartFix AI connects the different services into one
                continuous request lifecycle.
              </p>
            </div>

            {/* Workflow */}
            <div className="relative mt-20">
              {/* Line */}
              <div className="absolute left-[8%] right-[8%] top-12 hidden h-1 rounded-full bg-slate-100 lg:block">
                <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
                {workflow.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="group relative text-center"
                    >
                      <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 group-hover:-translate-y-3 group-hover:border-cyan-300 group-hover:shadow-2xl">
                        <Icon
                          size={29}
                          className="text-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600"
                        />

                        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-[10px] font-black text-white">
                          {index + 1}
                        </span>
                      </div>

                      <p className="mt-6 text-xs font-black tracking-widest text-cyan-600">
                        {item.number}
                      </p>

                      <h3 className="mt-2 text-lg font-black text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* ANALYTICS SECTION */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Dashboard */}
              <div className="rounded-[2rem] bg-slate-950 p-7 shadow-2xl md:p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-slate-500">
                      SMARTFIX ANALYTICS
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      Service Overview
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                    <BarChart3 size={24} />
                  </div>
                </div>

                <div className="mt-9 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xs text-slate-500">
                      SERVICE REQUESTS
                    </p>

                    <p className="mt-2 text-3xl font-black text-white">
                      1,248
                    </p>

                    <div className="mt-4 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[76%] rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xs text-slate-500">
                      ACTIVE TECHNICIANS
                    </p>

                    <p className="mt-2 text-3xl font-black text-white">
                      86
                    </p>

                    <div className="mt-4 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[68%] rounded-full bg-violet-400" />
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-300">
                      Resolution Activity
                    </p>

                    <Activity size={18} className="text-cyan-400" />
                  </div>

                  <div className="mt-7 flex h-40 items-end gap-3">
                    {[35, 52, 43, 68, 58, 78, 88, 70, 94, 82].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 to-violet-500 transition-all duration-500 hover:opacity-70"
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-600">
                  SERVICE INTELLIGENCE
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  Understand your service operations.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  SmartFix AI analytics gives administrators visibility into
                  service requests, technicians and resolution performance.
                  This helps organizations understand their service
                  operations through structured data.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    "Understand service request activity",
                    "Monitor technician activity",
                    "Review resolution performance",
                    "Identify service trends",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                        <CheckCircle2 size={18} />
                      </div>

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
        {/* TRUST / SECURITY */}
        {/* ===================================================== */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-cyan-400 shadow-xl">
              <ShieldCheck size={30} />
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-tight md:text-5xl">
              Designed around better service operations.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              SmartFix AI connects users, AI intelligence and service teams
              through a structured workflow designed to improve visibility and
              simplify service management.
            </p>
          </div>
        </section>

        {/* ===================================================== */}
        {/* FINAL CTA */}
        {/* ===================================================== */}

        <section className="px-6 pb-28 lg:px-8">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-16 text-center shadow-2xl md:px-16">
            <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="absolute bottom-[-100px] right-[-100px] h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative z-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-400">
                <Sparkles size={30} />
              </div>

              <p className="mt-7 text-sm font-black tracking-[0.25em] text-cyan-400">
                SMARTER SERVICE STARTS HERE
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black text-white md:text-5xl">
                Bring AI into your service workflow.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Explore SmartFix AI and discover a connected approach to
                problem reporting, AI classification, technician assignment,
                tracking, SLA management and analytics.
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

export default Features;