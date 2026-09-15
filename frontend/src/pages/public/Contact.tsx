import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {
  ArrowRight,
  Clock3,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">

      <Navbar />

      <main className="relative pt-28 pb-24">

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="absolute inset-0 -z-10 overflow-hidden">

          {/* Grid */}
          <div className="contact-grid absolute inset-0" />

          {/* Blue glow */}
          <div className="contact-glow contact-glow-blue" />

          {/* Purple glow */}
          <div className="contact-glow contact-glow-purple" />

          {/* Floating dots */}
          <span className="contact-dot contact-dot-1" />
          <span className="contact-dot contact-dot-2" />
          <span className="contact-dot contact-dot-3" />
          <span className="contact-dot contact-dot-4" />

        </div>


        <div className="max-w-7xl mx-auto px-6">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="text-center max-w-3xl mx-auto animate-contact-header">

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
                bg-white/80
                backdrop-blur-md
                text-sm
                font-semibold
                text-blue-600
                shadow-sm
              "
            >
              <Sparkles size={15} />
              CONTACT SMARTFIX AI
            </div>

            <h1
              className="
                mt-7
                text-5xl
                md:text-6xl
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              Let's solve something
              <br />

              <span className="contact-gradient-text">
                together.
              </span>
            </h1>

            <p
              className="
                mt-6
                text-lg
                md:text-xl
                leading-relaxed
                text-slate-600
              "
            >
              Have a question, suggestion or need help with
              SmartFix AI? We'd love to hear from you.
            </p>

          </div>


          {/* =====================================================
              CONTACT AREA
          ====================================================== */}

          <div
            className="
              grid
              lg:grid-cols-[0.85fr_1.15fr]
              gap-8
              mt-16
              max-w-6xl
              mx-auto
            "
          >

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
                md:p-10
                text-white
                shadow-2xl
                animate-contact-left
              "
            >

              {/* Background */}

              <div className="absolute inset-0 contact-dark-grid" />

              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-600/20 blur-[100px]" />

              <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-violet-600/20 blur-[100px]" />


              <div className="relative z-10">

                <p className="text-sm font-bold tracking-[0.2em] text-blue-400">
                  GET IN TOUCH
                </p>

                <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight">
                  We're here to help you move forward.
                </h2>

                <p className="mt-5 text-slate-400 leading-relaxed">
                  Whether you're exploring SmartFix AI, need
                  assistance or simply want to share an idea,
                  send us a message and our team will get back
                  to you.
                </p>


                {/* Contact info */}

                <div className="mt-10 space-y-5">

                  <div className="contact-info-card">

                    <div className="contact-info-icon">
                      <Mail size={19} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Email
                      </p>

                      <p className="mt-1 font-medium text-slate-200">
                        hello@smartfix.ai
                      </p>
                    </div>

                  </div>


                  <div className="contact-info-card">

                    <div className="contact-info-icon">
                      <MessageSquare size={19} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Support
                      </p>

                      <p className="mt-1 font-medium text-slate-200">
                        We're happy to help
                      </p>
                    </div>

                  </div>


                  <div className="contact-info-card">

                    <div className="contact-info-icon">
                      <Clock3 size={19} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Response time
                      </p>

                      <p className="mt-1 font-medium text-slate-200">
                        Usually within 24 hours
                      </p>
                    </div>

                  </div>

                </div>


                {/* Mini visual */}

                <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="flex items-center gap-3">

                    <div className="relative">

                      <div className="h-3 w-3 rounded-full bg-green-400" />

                      <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-400 animate-ping opacity-50" />

                    </div>

                    <span className="text-sm text-slate-300">
                      SmartFix support is ready
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                FORM
            ================================================== */}

            <div
              className="
                relative
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                md:p-10
                shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                animate-contact-right
              "
            >

              {/* Form heading */}

              <div>

                <div className="flex items-center gap-3">

                  <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <MessageSquare size={21} />
                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-slate-900">
                      Send us a message
                    </h2>

                    <p className="text-sm text-slate-500">
                      We'll get back to you as soon as possible.
                    </p>

                  </div>

                </div>

              </div>


              {/* Form */}

              <form className="mt-8 space-y-6">

                {/* Name */}

                <div>

                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="
                      contact-input
                    "
                  />

                </div>


                {/* Email */}

                <div>

                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="
                      contact-input
                    "
                  />

                </div>


                {/* Subject */}

                <div>

                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="
                      contact-input
                    "
                  />

                </div>


                {/* Message */}

                <div>

                  <div className="flex items-center justify-between mb-2">

                    <label className="text-sm font-semibold text-slate-700">
                      Message
                    </label>

                    <span className="text-xs text-slate-400">
                      Tell us more
                    </span>

                  </div>

                  <textarea
                    rows={6}
                    placeholder="How can we help?"
                    className="
                      contact-input
                      resize-none
                    "
                  />

                </div>


                {/* Button */}

                <button
                  type="submit"
                  className="
                    group
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-blue-600
                    py-4
                    text-white
                    font-semibold
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
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </button>

              </form>

            </div>

          </div>


          {/* =====================================================
              BOTTOM MESSAGE
          ====================================================== */}

          <div className="mt-20 text-center">

            <div className="inline-flex items-center gap-2 text-sm text-slate-500">

              <span className="h-2 w-2 rounded-full bg-green-500" />

              Have a problem that needs solving?

              <a
                href="/register"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Try SmartFix AI →
              </a>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default Contact;