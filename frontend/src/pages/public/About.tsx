import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CircleUserRound,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const principles = [
  {
    icon: BrainCircuit,
    title: "Intelligence",
    description:
      "AI helps understand problems, identify important information and make better decisions.",
  },
  {
    icon: Users,
    title: "Human Expertise",
    description:
      "Technology supports people instead of replacing them. Skilled technicians remain at the heart of resolution.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Users always know what is happening with their complaint and where it stands.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Automation removes unnecessary steps and helps problems reach the right person faster.",
  },
];

const stats = [
  {
    value: "01",
    label: "Connected Platform",
  },
  {
    value: "AI",
    label: "Powered Intelligence",
  },
  {
    value: "24/7",
    label: "Problem Visibility",
  },
  {
    value: "∞",
    label: "Scalable Workflows",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden pt-32 pb-28">

          {/* Animated background */}

          <div className="absolute inset-0 -z-10">

            <div className="about-grid absolute inset-0" />

            <div className="about-orb about-orb-one" />
            <div className="about-orb about-orb-two" />

          </div>

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}

              <div className="animate-about-left">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-200
                    bg-white/80
                    backdrop-blur-md
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-blue-600
                    shadow-sm
                  "
                >
                  <Sparkles size={15} />
                  ABOUT SMARTFIX AI
                </div>

                <h1
                  className="
                    mt-7
                    text-5xl
                    md:text-6xl
                    lg:text-7xl
                    font-bold
                    tracking-tight
                    leading-[1.04]
                  "
                >
                  Making problem
                  <br />

                  <span className="about-gradient-text">
                    solving smarter.
                  </span>
                </h1>

                <p
                  className="
                    mt-7
                    max-w-xl
                    text-lg
                    md:text-xl
                    leading-relaxed
                    text-slate-600
                  "
                >
                  SmartFix AI is an intelligent service management
                  platform designed to connect people, information
                  and expertise so everyday problems can be solved
                  faster and more effectively.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">

                  <a
                    href="/register"
                    className="
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
                      hover:shadow-xl
                    "
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href="/how-it-works"
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
                      hover:border-blue-200
                      hover:text-blue-600
                      hover:shadow-lg
                    "
                  >
                    See how it works
                  </a>

                </div>

              </div>


              {/* RIGHT - VISUAL */}

              <div className="relative animate-about-right">

                <div
                  className="
                    relative
                    mx-auto
                    max-w-md
                    rounded-[2rem]
                    border
                    border-slate-200
                    bg-white/90
                    p-6
                    shadow-[0_30px_80px_rgba(15,23,42,0.12)]
                    backdrop-blur-xl
                  "
                >

                  {/* Header */}

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs font-semibold tracking-widest text-slate-400">
                        SMARTFIX AI
                      </p>

                      <p className="mt-1 text-lg font-bold">
                        Connected intelligence
                      </p>
                    </div>

                    <div
                      className="
                        h-11
                        w-11
                        rounded-xl
                        bg-blue-600
                        flex
                        items-center
                        justify-center
                        text-white
                        shadow-lg
                        shadow-blue-600/20
                      "
                    >
                      <BrainCircuit size={22} />
                    </div>

                  </div>


                  {/* Flow */}

                  <div className="mt-8 space-y-3">

                    <div className="about-flow-card">

                      <div className="about-flow-icon bg-blue-50 text-blue-600">
                        <CircleUserRound size={19} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          People
                        </p>

                        <p className="text-xs text-slate-400">
                          Report the problem
                        </p>
                      </div>

                    </div>


                    <div className="flex justify-center">
                      <div className="about-flow-line" />
                    </div>


                    <div className="about-flow-card">

                      <div className="about-flow-icon bg-indigo-50 text-indigo-600">
                        <BrainCircuit size={19} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          SmartFix AI
                        </p>

                        <p className="text-xs text-slate-400">
                          Understand & analyze
                        </p>
                      </div>

                    </div>


                    <div className="flex justify-center">
                      <div className="about-flow-line" />
                    </div>


                    <div className="about-flow-card">

                      <div className="about-flow-icon bg-violet-50 text-violet-600">
                        <Users size={19} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          Experts
                        </p>

                        <p className="text-xs text-slate-400">
                          Solve the problem
                        </p>
                      </div>

                    </div>

                  </div>


                  {/* Bottom status */}

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-green-50
                      px-4
                      py-3
                      text-sm
                    "
                  >
                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />

                    <span className="font-medium text-green-700">
                      Connected from report to resolution
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MISSION + VISION
        ====================================================== */}

        <section className="bg-white py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Mission */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-blue-600
                  p-8
                  md:p-12
                  text-white
                  shadow-xl
                  shadow-blue-600/10
                "
              >

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

                <div className="relative z-10">

                  <div className="h-14 w-14 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Target size={26} />
                  </div>

                  <p className="mt-8 text-sm font-bold tracking-[0.2em] text-blue-100">
                    OUR MISSION
                  </p>

                  <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                    Make problem solving simple.
                  </h2>

                  <p className="mt-5 text-blue-100 leading-relaxed text-lg">
                    We want to make reporting and resolving everyday
                    problems simple, transparent and intelligent
                    through AI-powered automation.
                  </p>

                </div>

              </div>


              {/* Vision */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-slate-50
                  p-8
                  md:p-12
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-100 blur-3xl opacity-70 transition-transform duration-700 group-hover:scale-125" />

                <div className="relative z-10">

                  <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600">
                    <Lightbulb size={26} />
                  </div>

                  <p className="mt-8 text-sm font-bold tracking-[0.2em] text-indigo-600">
                    OUR VISION
                  </p>

                  <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                    Connect every problem to the right solution.
                  </h2>

                  <p className="mt-5 text-slate-600 leading-relaxed text-lg">
                    We envision a service ecosystem where every
                    problem reaches the right person with the right
                    information at the right time.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY SMARTFIX
        ====================================================== */}

        <section className="py-28 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6">

            <div className="max-w-3xl">

              <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
                WHY SMARTFIX AI
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                Technology should remove
                <span className="text-slate-400">
                  {" "}friction.
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Traditional complaint systems often create more work
                for everyone. Users fill lengthy forms, administrators
                manually classify requests and technicians receive
                incomplete information.
              </p>

            </div>


            {/* Principles */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

              {principles.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="about-principle"
                    style={{
                      animationDelay: `${index * 120}ms`,
                    }}
                  >

                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>


        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="bg-slate-950 py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    text-center
                    lg:text-left
                    border-l
                    border-slate-800
                    pl-5
                  "
                >

                  <p className="text-4xl md:text-5xl font-bold text-white">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {stat.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="bg-white py-28">

          <div className="max-w-5xl mx-auto px-6">

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                bg-blue-600
                px-8
                py-16
                md:px-16
                md:py-20
                text-center
              "
            >

              <div className="absolute inset-0 about-cta-pattern" />

              <div className="relative z-10">

                <MessageSquare
                  size={32}
                  className="mx-auto text-blue-100"
                />

                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
                  Every problem deserves
                  <br />
                  a smarter solution.
                </h2>

                <p className="mt-5 max-w-xl mx-auto text-blue-100 text-lg">
                  Experience a better way to report, manage and
                  resolve problems with SmartFix AI.
                </p>

                <a
                  href="/register"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-7
                    py-3.5
                    font-semibold
                    text-blue-600
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  Start using SmartFix AI
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

export default About;