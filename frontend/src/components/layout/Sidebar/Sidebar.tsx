import { Link, useLocation } from "react-router-dom";
import {
  Bell,
  Bot,
  ClipboardList,
  HelpCircle,
  Home,
  LogOut,
  Settings,
  UserRound,
  X,
  Plus,
} from "lucide-react";

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    label: "Dashboard",
    path: "/customer",
    icon: Home,
  },
  {
    label: "My Complaints",
    path: "/customer/complaints",
    icon: ClipboardList,
  },
  {
    label: "AI Assistant",
    path: "/customer/ai",
    icon: Bot,
  },
  {
    label: "Notifications",
    path: "/customer/notifications",
    icon: Bell,
  },
  {
    label: "Profile",
    path: "/customer/profile",
    icon: UserRound,
  },
];

function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-[270px]
          flex-col
          border-r
          border-slate-200
          bg-white
          transition-transform
          duration-300
          lg:translate-x-0

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <Link
            to="/customer"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
              <Bot size={22} />
            </div>

            <div>
              <div className="text-lg font-bold tracking-tight text-slate-900">
                SmartFix<span className="text-blue-600">AI</span>
              </div>

              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Customer Portal
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Main Menu
          </p>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-200

                    ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-blue-600" />
                  )}

                  <Icon
                    size={19}
                    strokeWidth={active ? 2.3 : 2}
                    className={
                      active
                        ? "text-blue-600"
                        : "text-slate-400 group-hover:text-slate-600"
                    }
                  />

                  <span>{item.label}</span>

                  {item.label === "Notifications" && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[10px] font-bold text-white">
                      2
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* New Complaint */}
          <div className="mt-8">
            <Link
              to="/customer/complaints/new"
              onClick={onClose}
              className="
                group
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-300
                hover:bg-blue-700
                hover:-translate-y-0.5
              "
            >
              <Plus size={18} />

              Raise a Problem
            </Link>
          </div>

          {/* Support */}
          <div className="mt-10">
            <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Support
            </p>

            <Link
              to="/customer/help"
              onClick={onClose}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-3
                text-sm
                font-medium
                text-slate-500
                transition-colors
                hover:bg-slate-50
                hover:text-slate-900
              "
            >
              <HelpCircle size={19} className="text-slate-400" />
              Help & Support
            </Link>

            <Link
              to="/customer/settings"
              onClick={onClose}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-3
                text-sm
                font-medium
                text-slate-500
                transition-colors
                hover:bg-slate-50
                hover:text-slate-900
              "
            >
              <Settings size={19} className="text-slate-400" />
              Settings
            </Link>
          </div>
        </div>

        {/* Bottom User */}
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
              HK
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800">
                Harish K
              </p>

              <p className="text-xs text-slate-400">
                Customer
              </p>
            </div>

            <button
              type="button"
              title="Logout"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white hover:text-red-500"
            >
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;