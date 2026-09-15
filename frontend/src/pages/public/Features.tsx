import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const features = [
  {
    icon: "🤖",
    title: "AI Assistant",
    description:
      "Talk naturally with our AI assistant and explain your problem without filling complicated forms.",
  },
  {
    icon: "🧠",
    title: "AI Classification",
    description:
      "AI analyzes complaints and identifies the category, priority and important information.",
  },
  {
    icon: "👨‍🔧",
    title: "Smart Technician Assignment",
    description:
      "Match complaints with technicians based on skills, availability and workload.",
  },
  {
    icon: "📍",
    title: "Real-time Tracking",
    description:
      "Follow every stage of your complaint from creation to resolution.",
  },
  {
    icon: "⏱️",
    title: "SLA Management",
    description:
      "Monitor deadlines and identify complaints that require immediate attention.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description:
      "Administrators get detailed insights into complaints, technicians and resolution performance.",
  },
];

function Features() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      <Navbar />

      <main className="relative pt-32 pb-28">

        {/* =========================================
            BACKGROUND EFFECTS
        ========================================== */}

        {/* Animated grid */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="features-grid absolute inset-0 opacity-60" />

          {/* Blue glow */}
          <div
            className="
              absolute
              -top-32
              -left-32
              w-[450px]
              h-[450px]
              rounded-full
              bg-blue-400/20
              blur-[120px]
              animate-feature-glow
            "
          />

          {/* Purple glow */}
          <div
            className="
              absolute
              top-[35%]
              -right-40
              w-[500px]
              h-[500px]
              rounded-full
              bg-violet-400/20
              blur-[130px]
              animate-feature-glow-reverse
            "
          />

          {/* Cyan glow */}
          <div
            className="
              absolute
              bottom-0
              left-[35%]
              w-[400px]
              h-[400px]
              rounded-full
              bg-cyan-300/10
              blur-[120px]
              animate-feature-pulse
            "
          />

          {/* Floating particles */}
          <span className="feature-particle particle-1" />
          <span className="feature-particle particle-2" />
          <span className="feature-particle particle-3" />
          <span className="feature-particle particle-4" />
          <span className="feature-particle particle-5" />
          <span className="feature-particle particle-6" />
        </div>

        <div className="max-w-7xl mx-auto px-6">

          {/* =========================================
              HERO / HEADER
          ========================================== */}

          <div className="text-center max-w-4xl mx-auto animate-features-header">

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-blue-200
                bg-white/70
                backdrop-blur-md
                shadow-sm
                text-sm
                font-semibold
                text-blue-600
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-blue-400
                    opacity-75
                    animate-ping
                  "
                />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
              </span>

              SMART FEATURES
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              Powerful tools to{" "}
              <span className="features-gradient-text">
                solve problems
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                text-lg
                md:text-xl
                text-slate-600
                leading-relaxed
                max-w-3xl
                mx-auto
              "
            >
              SmartFix AI combines intelligent automation with human
              expertise to make service management{" "}
              <span className="font-semibold text-slate-800">
                faster, smarter and easier.
              </span>
            </p>

            {/* Decorative line */}
            <div className="mt-8 flex justify-center">
              <div className="features-line" />
            </div>
          </div>

          {/* =========================================
              FEATURE CARDS
          ========================================== */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card group"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Card glow */}
                <div className="feature-card-glow" />

                {/* Card content */}
                <div className="relative z-10">

                  {/* Icon */}
                  <div
                    className="
                      feature-icon
                      w-16
                      h-16
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      text-3xl
                      bg-slate-100
                      border
                      border-slate-200
                      shadow-sm
                      group-hover:scale-110
                      group-hover:rotate-3
                      transition-all
                      duration-500
                    "
                  >
                    {feature.icon}
                  </div>

                  {/* Number */}
                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      text-6xl
                      font-bold
                      text-slate-100
                      select-none
                      group-hover:text-blue-50
                      transition-colors
                      duration-500
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h2
                    className="
                      mt-7
                      text-xl
                      font-bold
                      text-slate-900
                      group-hover:text-blue-600
                      transition-colors
                      duration-300
                    "
                  >
                    {feature.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-slate-600
                      leading-relaxed
                    "
                  >
                    {feature.description}
                  </p>

                  {/* Bottom arrow */}
                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-blue-600
                      opacity-0
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-300
                    "
                  >
                    Explore feature
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* =========================================
              AI HIGHLIGHT SECTION
          ========================================== */}

          <section
            className="
              relative
              mt-24
              overflow-hidden
              rounded-[2rem]
              bg-slate-950
              px-8
              py-16
              md:px-16
              md:py-20
              shadow-2xl
              animate-feature-section
            "
          >

            {/* Background grid */}
            <div className="absolute inset-0 feature-dark-grid opacity-50" />

            {/* Glow */}
            <div
              className="
                absolute
                -top-32
                right-0
                w-96
                h-96
                rounded-full
                bg-blue-500/20
                blur-[100px]
              "
            />

            <div
              className="
                absolute
                -bottom-40
                left-10
                w-96
                h-96
                rounded-full
                bg-violet-500/20
                blur-[110px]
              "
            />

            <div
              className="
                relative
                z-10
                grid
                lg:grid-cols-2
                gap-12
                items-center
              "
            >

              {/* Left */}
              <div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-400/20
                    bg-blue-400/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-blue-300
                  "
                >
                  <span>✦</span>
                  AI-POWERED
                </div>

                <h2
                  className="
                    mt-6
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-white
                    leading-tight
                  "
                >
                  One intelligent system.
                  <br />
                  <span className="text-blue-400">
                    Complete problem management.
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    text-slate-400
                    text-lg
                    leading-relaxed
                    max-w-xl
                  "
                >
                  From understanding a user's problem to assigning
                  the right technician and tracking the resolution,
                  SmartFix AI brings everything together.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {[
                    "AI Classification",
                    "Smart Assignment",
                    "Real-time Tracking",
                    "Analytics",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-slate-700
                        bg-slate-900/70
                        text-sm
                        text-slate-300
                        hover:border-blue-500/50
                        hover:text-blue-300
                        transition
                      "
                    >
                      ✓ {item}
                    </div>
                  ))}

                </div>
              </div>

              {/* Right AI visualization */}
              <div className="relative flex justify-center">

                <div
                  className="
                    relative
                    w-72
                    h-72
                    md:w-80
                    md:h-80
                    flex
                    items-center
                    justify-center
                  "
                >

                  {/* Rings */}
                  <div className="absolute inset-4 rounded-full border border-blue-500/20 animate-ai-ring" />
                  <div className="absolute inset-12 rounded-full border border-violet-500/20 animate-ai-ring-reverse" />
                  <div className="absolute inset-20 rounded-full border border-cyan-500/20" />

                  {/* Main AI circle */}
                  <div
                    className="
                      relative
                      w-32
                      h-32
                      rounded-full
                      bg-gradient-to-br
                      from-blue-500
                      via-indigo-500
                      to-violet-600
                      flex
                      items-center
                      justify-center
                      shadow-[0_0_80px_rgba(59,130,246,0.45)]
                      animate-ai-core
                    "
                  >
                    <span className="text-5xl">🤖</span>
                  </div>

                  {/* Orbit dots */}
                  <div className="absolute top-8 left-20 w-3 h-3 rounded-full bg-blue-400 animate-orbit-dot" />
                  <div className="absolute bottom-10 right-16 w-3 h-3 rounded-full bg-violet-400 animate-orbit-dot-delay" />
                  <div className="absolute top-28 right-3 w-2 h-2 rounded-full bg-cyan-300" />

                </div>

              </div>

            </div>
          </section>

          {/* =========================================
              BOTTOM CTA
          ========================================== */}

          <div className="text-center mt-24">

            <p className="text-slate-500">
              Ready to transform the way problems are solved?
            </p>

            <div className="mt-5">

              <a
                href="/register"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-7
                  py-3.5
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  hover:bg-blue-700
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                Get Started
                <span className="transition-transform duration-300 hover:translate-x-1">
                  →
                </span>
              </a>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Features;