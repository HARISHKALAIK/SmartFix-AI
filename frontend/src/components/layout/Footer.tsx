import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              SmartFix<span className="text-blue-400"> AI</span>
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              AI-powered complaint and service management platform
              designed to solve problems faster.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>

            <div className="space-y-3 text-slate-400">
              <Link to="/features" className="block hover:text-white">
                Features
              </Link>

              <Link to="/how-it-works" className="block hover:text-white">
                How It Works
              </Link>

              <Link to="/login" className="block hover:text-white">
                Login
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <div className="space-y-3 text-slate-400">
              <Link to="/about" className="block hover:text-white">
                About
              </Link>

              <Link to="/contact" className="block hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>

            <p className="text-slate-400">
              Need help with a problem?
            </p>

            <Link
              to="/contact"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300"
            >
              Contact Support →
            </Link>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">
          © 2026 SmartFix AI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;