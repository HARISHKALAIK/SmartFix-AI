import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  Cpu,
  MessageSquare,
  Network,
  Sparkles,
  Zap,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* ========================= HERO ========================= */}
      <section className="relative min-h-screen pt-32 pb-20 bg-slate-950">

        {/* Background grid */}
        <div className="absolute inset-0 hero-grid opacity-40" />

        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/30 blur-[120px] animate-float-slow" />

        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-600/25 blur-[120px] animate-float-reverse" />

        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[100px] animate-pulse-slow" />

        {/* Floating particles */}
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-blue-400 animate-particle" />
        <div className="absolute top-[35%] left-[25%] w-1.5 h-1.5 rounded-full bg-cyan-300 animate-particle-delay" />
        <div className="absolute top-[15%] right-[20%] w-2 h-2 rounded-full bg-indigo-300 animate-particle" />
        <div className="absolute bottom-[25%] right-[12%] w-1.5 h-1.5 rounded-full bg-blue-300 animate-particle-delay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">

            {/* ================= HERO LEFT ================= */}
            <div className="animate-hero-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-md shadow-lg shadow-blue-500/10">

                <Sparkles className="w-4 h-4 animate-spin-slow" />

                AI-Powered Problem Solving

                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />

              </div>

              {/* Heading */}
              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">

                Solve Problems.

                <br />

                <span className="relative inline-block mt-2">

                  <span className="gradient-text">
                    Faster.
                  </span>

                  <span className="absolute left-0 -bottom-2 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 animate-expand" />

                </span>

              </h1>

              {/* Description */}
              <p className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-slate-300">
                SmartFix AI transforms the way problems are reported,
                analyzed, assigned, and resolved using intelligent
                automation and real-time service management.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/register"
                  className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-xl shadow-blue-600/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40"
                >

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />

                  <span className="relative">
                    Get Started
                  </span>

                  <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />

                </Link>

                <Link
                  to="/how-it-works"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/15 bg-white/5 text-white font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/25"
                >
                  How It Works

                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />

                </Link>

              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 max-w-xl border-t border-white/10 pt-8">

                <AnimatedStat
                  value="AI"
                  label="Powered Support"
                />

                <AnimatedStat
                  value="24/7"
                  label="Assistance"
                />

                <AnimatedStat
                  value="Real-time"
                  label="Tracking"
                />

              </div>

            </div>

            {/* ================= AI CHAT ================= */}
            <div className="relative flex justify-center lg:justify-end animate-hero-right">

              {/* Glow */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[90px] animate-pulse-slow" />

              {/* Floating status */}
              <FloatingCard
                className="absolute -left-6 top-16 z-20 hidden xl:flex animate-float-card"
                icon={<CheckCircle2 className="w-5 h-5 text-green-400" />}
                text="Issue analyzed"
              />

              <FloatingCard
                className="absolute -right-8 bottom-24 z-20 hidden xl:flex animate-float-card-delay"
                icon={<Zap className="w-5 h-5 text-yellow-400" />}
                text="Smart assignment"
              />

              {/* Chat window */}
              <div className="relative w-full max-w-[500px] rounded-[28px] border border-white/15 bg-white/[0.07] backdrop-blur-2xl shadow-2xl shadow-blue-950/50 p-5 animate-chat-float">

                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">

                  <div className="flex items-center gap-3">

                    <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">

                      <Bot className="w-6 h-6 text-white" />

                      <span className="absolute -right-1 -top-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-slate-950 animate-pulse" />

                    </div>

                    <div>

                      <h3 className="font-semibold text-white">
                        SmartFix AI
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        Online & ready
                      </div>

                    </div>

                  </div>

                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </div>

                </div>

                {/* Messages */}
                <div className="py-6 space-y-5">

                  <ChatBubble bot delay="0s">
                    Hi! Tell me what problem you're experiencing.
                  </ChatBubble>

                  <ChatBubble user delay="0.5s">
                    My office Wi-Fi is not working.
                  </ChatBubble>

                  <ChatBubble bot delay="1s">
                    I'll analyze the issue and help you create the right
                    service request.
                  </ChatBubble>

                  {/* AI Analysis */}
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 animate-message-appear">

                    <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold">
                      <Sparkles className="w-4 h-4" />
                      AI Analysis
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">

                      <MiniAnalysis
                        icon={<Network className="w-4 h-4" />}
                        title="Category"
                        value="Network"
                      />

                      <MiniAnalysis
                        icon={<Zap className="w-4 h-4" />}
                        title="Priority"
                        value="High"
                      />

                    </div>

                  </div>

                </div>

                {/* Chat input */}
                <div className="flex gap-2 p-2 rounded-2xl bg-white/5 border border-white/10">

                  <div className="flex-1 flex items-center gap-2 px-3 text-sm text-slate-400">

                    <MessageSquare className="w-4 h-4" />

                    Describe your problem...

                  </div>

                  <button className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-105">

                    <ArrowRight className="w-5 h-5" />

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative py-24 bg-white">

        <div className="absolute inset-0 dot-background opacity-50" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
              <Cpu className="w-4 h-4" />
              INTELLIGENT SERVICE MANAGEMENT
            </div>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Everything you need to
              <span className="text-blue-600"> solve problems</span>
            </h2>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              From the moment a problem is reported to the moment it is
              resolved, SmartFix AI keeps everyone connected.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <FeatureCard
              icon={<Bot className="w-7 h-7" />}
              title="AI Assistant"
              description="Describe your problem naturally. AI asks the right questions, understands the issue and guides you toward a solution."
              number="01"
            />

            <FeatureCard
              icon={<Zap className="w-7 h-7" />}
              title="Smart Assignment"
              description="Automatically identify the right technician based on skills, availability and current workload."
              number="02"
            />

            <FeatureCard
              icon={<Clock3 className="w-7 h-7" />}
              title="Real-time Tracking"
              description="Track every stage of your complaint from creation and assignment to resolution."
              number="03"
            />

          </div>

        </div>

      </section>

      {/* ================= WORKFLOW ================= */}
      <section className="relative py-28 bg-slate-50 overflow-hidden">

        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-blue-600 font-semibold text-sm">
              SIMPLE WORKFLOW
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              From problem to solution
            </h2>

          </div>

          <div className="relative mt-20">

            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-200" />

            <div className="grid md:grid-cols-4 gap-10">

              <WorkflowStep
                number="01"
                icon={<MessageSquare />}
                title="Report"
                text="Tell us what went wrong."
              />

              <WorkflowStep
                number="02"
                icon={<Bot />}
                title="AI Analysis"
                text="AI understands and categorizes the issue."
              />

              <WorkflowStep
                number="03"
                icon={<Zap />}
                title="Assignment"
                text="The right technician gets the task."
              />

              <WorkflowStep
                number="04"
                icon={<CheckCircle2 />}
                title="Resolution"
                text="Track the fix until completion."
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-28 bg-slate-950 overflow-hidden">

        <div className="absolute inset-0 hero-grid opacity-30" />

        <div className="absolute -left-32 top-0 w-[450px] h-[450px] rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 w-[450px] h-[450px] rounded-full bg-indigo-600/20 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-blue-300 text-sm">

            <Sparkles className="w-4 h-4" />

            Smarter service starts here

          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white">

            Ready to solve problems

            <span className="gradient-text">
              {" "}smarter?
            </span>

          </h2>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Give your team an intelligent platform for reporting,
            managing and resolving problems faster.
          </p>

          <Link
            to="/register"
            className="group inline-flex items-center gap-2 mt-9 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-xl shadow-blue-600/30 hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
          >

            Create Your Account

            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

          </Link>

        </div>

      </section>

      <Footer />

    </div>
  );
}


/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function AnimatedStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="group">

      <p className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
        {value}
      </p>

      <p className="mt-1 text-xs sm:text-sm text-slate-500">
        {label}
      </p>

    </div>
  );
}


function FloatingCard({
  icon,
  text,
  className = "",
}: {
  icon: React.ReactNode;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 shadow-xl backdrop-blur-xl ${className}`}
    >

      {icon}

      <span className="text-sm font-medium text-white">
        {text}
      </span>

    </div>
  );
}


function ChatBubble({
  children,
  bot = false,
  user = false,
  delay,
}: {
  children: React.ReactNode;
  bot?: boolean;
  user?: boolean;
  delay: string;
}) {
  return (
    <div
      className={`flex animate-message-appear ${
        user ? "justify-end" : "justify-start"
      }`}
      style={{
        animationDelay: delay,
      }}
    >

      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          bot
            ? "bg-white/10 text-slate-200 border border-white/10"
            : "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
        }`}
      >
        {children}
      </div>

    </div>
  );
}


function MiniAnalysis({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/5 p-3">

      <div className="flex items-center gap-2 text-slate-400 text-xs">

        {icon}

        {title}

      </div>

      <p className="mt-1 text-sm font-semibold text-white">
        {value}
      </p>

    </div>
  );
}


function FeatureCard({
  icon,
  title,
  description,
  number,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: string;
}) {
  return (
    <div className="group relative p-8 rounded-3xl border border-slate-200 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-100">

      {/* Hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">

        <div className="flex items-center justify-between">

          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3">

            {icon}

          </div>

          <span className="text-5xl font-bold text-slate-100 group-hover:text-blue-100 transition-colors">
            {number}
          </span>

        </div>

        <h3 className="mt-7 text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-3 text-slate-600 leading-relaxed">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-blue-600 text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

          Learn more

          <ArrowRight className="w-4 h-4" />

        </div>

      </div>

    </div>
  );
}


function WorkflowStep({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="relative text-center group">

      <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-white border border-blue-100 shadow-xl flex items-center justify-center text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-blue-200">

        {icon}

      </div>

      <p className="mt-5 text-xs font-bold text-blue-600">
        STEP {number}
      </p>

      <h3 className="mt-2 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-slate-500">
        {text}
      </p>

    </div>
  );
}

export default Home;