import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardList,
  MapPin,
  UserRoundCog,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Report",
    heading: "Tell us what's wrong",
    description:
      "Describe your problem in your own words. You can submit a complaint manually or simply talk with SmartFix AI.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Understand",
    heading: "AI understands the problem",
    description:
      "SmartFix AI analyzes your complaint, asks useful questions and identifies the category and priority.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Assign",
    heading: "The right technician is selected",
    description:
      "Our system finds the most suitable technician using skills, availability and current workload.",
    icon: UserRoundCog,
  },
  {
    number: "04",
    title: "Track",
    heading: "Watch the progress",
    description:
      "Get real-time updates as your complaint moves through assignment, investigation and resolution.",
    icon: MapPin,
  },
  {
    number: "05",
    title: "Resolve",
    heading: "Problem solved",
    description:
      "The technician completes the work, records the solution and closes the complaint.",
    icon: CheckCircle2,
  },
];

function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      <main>

        {/* =========================================
            HERO
        ========================================== */}

        <section className="relative overflow-hidden pt-32 pb-24">

          {/* Subtle background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.08),transparent_30%)]" />

            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] [background-size:50px_50px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-center">

              {/* LEFT */}

              <div className="max-w-2xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  HOW SMARTFIX WORKS
                </div>

                <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                  Problems in.
                  <br />

                  <span className="text-blue-600">
                    Solutions out.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-slate-600">
                  SmartFix AI takes care of the complicated parts of
                  complaint management, from understanding the issue
                  to finding the right person to solve it.
                </p>

                <div className="mt-9 flex items-center gap-4">

                  <div className="flex -space-x-2">
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-sm">
                      👤
                    </div>

                    <div className="h-10 w-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-sm">
                      🤖
                    </div>

                    <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-sm">
                      👨‍🔧
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      One connected workflow
                    </p>

                    <p className="text-sm text-slate-500">
                      User → AI → Technician
                    </p>
                  </div>

                </div>

              </div>

              {/* RIGHT - PROCESS VISUAL */}

              <div className="relative">

                <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                  {/* Top bar */}

                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>

                    <span className="text-xs font-medium text-slate-400">
                      SMARTFIX AI
                    </span>

                  </div>

                  {/* Complaint */}

                  <div className="mt-6 rounded-2xl bg-slate-50 p-5">

                    <div className="flex items-start gap-4">

                      <div className="h-11 w-11 shrink-0 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                        <ClipboardList size={20} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          New Complaint
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          Air conditioner is not cooling
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* AI */}

                  <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                    <div className="flex items-center gap-3">

                      <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                        <Bot size={20} />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          AI Analysis
                        </p>

                        <p className="text-xs text-slate-500">
                          Understanding your complaint...
                        </p>
                      </div>

                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">

                      <div className="rounded-xl bg-white p-3">
                        <p className="text-xs text-slate-400">
                          Category
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                          Electrical
                        </p>
                      </div>

                      <div className="rounded-xl bg-white p-3">
                        <p className="text-xs text-slate-400">
                          Priority
                        </p>

                        <p className="mt-1 text-sm font-semibold text-orange-500">
                          High
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Assignment */}

                  <div className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">

                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                      👨‍🔧
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold">
                        Technician assigned
                      </p>

                      <p className="text-xs text-slate-500">
                        Based on skills & availability
                      </p>
                    </div>

                    <CheckCircle2
                      size={20}
                      className="text-green-500"
                    />

                  </div>

                </div>

                {/* Small floating status */}

                <div className="absolute -bottom-6 -left-8 hidden md:flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl">

                  <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
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


        {/* =========================================
            PROCESS
        ========================================== */}

        <section className="bg-white py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="max-w-2xl">

              <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
                THE PROCESS
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                Five simple steps.
                <br />
                <span className="text-slate-400">
                  Zero unnecessary complexity.
                </span>
              </h2>

            </div>


            {/* Desktop process */}

            <div className="relative mt-20 hidden lg:block">

              {/* Connecting line */}

              <div className="absolute left-[10%] right-[10%] top-9 h-px bg-slate-200" />

              <div className="grid grid-cols-5 gap-6">

                {steps.map((step) => {

                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="group relative"
                    >

                      {/* Number */}

                      <div className="relative z-10 h-[72px] w-[72px] rounded-2xl border border-slate-200 bg-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-blue-300 group-hover:shadow-lg">

                        <Icon
                          size={25}
                          strokeWidth={1.8}
                          className="text-slate-700 group-hover:text-blue-600 transition-colors"
                        />

                      </div>

                      <p className="mt-7 text-xs font-bold tracking-[0.18em] text-blue-600">
                        {step.number}
                      </p>

                      <h3 className="mt-2 text-xl font-bold">
                        {step.title}
                      </h3>

                      <h4 className="mt-4 font-semibold text-slate-800">
                        {step.heading}
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-slate-500">
                        {step.description}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>


            {/* Mobile / tablet process */}

            <div className="mt-16 space-y-5 lg:hidden">

              {steps.map((step) => {

                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:bg-white hover:border-blue-200 hover:shadow-lg"
                  >

                    <div className="flex gap-5">

                      <div className="h-12 w-12 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                        <Icon
                          size={21}
                          className="text-blue-600"
                        />
                      </div>

                      <div>

                        <p className="text-xs font-bold tracking-widest text-blue-600">
                          STEP {step.number}
                        </p>

                        <h3 className="mt-1 text-xl font-bold">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-slate-500">
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


        {/* =========================================
            WHY AI SECTION
        ========================================== */}

        <section className="py-28 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left visual */}

              <div className="relative">

                <div className="rounded-[2rem] bg-slate-950 p-8 md:p-10 shadow-2xl">

                  <p className="text-xs font-bold tracking-[0.2em] text-blue-400">
                    SMARTFIX ENGINE
                  </p>

                  <div className="mt-8 space-y-4">

                    <div className="rounded-xl bg-white/5 border border-white/10 p-4">

                      <div className="flex items-center justify-between">

                        <span className="text-sm text-slate-300">
                          Complaint understanding
                        </span>

                        <span className="text-sm font-bold text-green-400">
                          98%
                        </span>

                      </div>

                      <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[98%] rounded-full bg-blue-500" />
                      </div>

                    </div>


                    <div className="rounded-xl bg-white/5 border border-white/10 p-4">

                      <div className="flex items-center justify-between">

                        <span className="text-sm text-slate-300">
                          Technician matching
                        </span>

                        <span className="text-sm font-bold text-green-400">
                          94%
                        </span>

                      </div>

                      <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[94%] rounded-full bg-indigo-500" />
                      </div>

                    </div>


                    <div className="rounded-xl bg-white/5 border border-white/10 p-4">

                      <div className="flex items-center justify-between">

                        <span className="text-sm text-slate-300">
                          SLA monitoring
                        </span>

                        <span className="text-sm font-bold text-green-400">
                          Active
                        </span>

                      </div>

                      <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[88%] rounded-full bg-violet-500" />
                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Right */}

              <div>

                <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
                  INTELLIGENCE BEHIND THE FLOW
                </p>

                <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
                  The workflow is simple
                  <br />
                  because AI handles the complexity.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  SmartFix AI works continuously behind the scenes.
                  It understands complaints, extracts important
                  information, helps prioritize issues and supports
                  technicians throughout the resolution process.
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Less manual data entry",
                    "Faster complaint classification",
                    "Better technician matching",
                    "Clear real-time visibility",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-blue-600"
                      />

                      <span className="font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            CTA
        ========================================== */}

        <section className="bg-white py-24">

          <div className="max-w-5xl mx-auto px-6">

            <div className="relative overflow-hidden rounded-[2rem] bg-blue-600 px-8 py-16 text-center md:px-16">

              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-900/20 blur-3xl" />

              <div className="relative z-10">

                <p className="text-sm font-semibold tracking-widest text-blue-100">
                  READY TO GET STARTED?
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
                  Let's solve problems smarter.
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-blue-100">
                  Create your first complaint and experience
                  the SmartFix AI workflow.
                </p>

                <a
                  href="/register"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight size={18} />
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