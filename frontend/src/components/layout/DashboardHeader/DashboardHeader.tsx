    import {
  Bell,
  Menu,
  Search,
  ChevronDown,
} from "lucide-react";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

function DashboardHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 h-20 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-5 sm:px-8">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={onMenuClick}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              text-slate-600
              transition-colors
              hover:bg-slate-50
              lg:hidden
            "
          >
            <Menu size={20} />
          </button>

          <div>
            <p className="hidden text-xs font-medium text-slate-400 sm:block">
              Customer Portal
            </p>

            <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
              Dashboard
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <button
            type="button"
            className="
              hidden
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-slate-400
              transition-colors
              hover:bg-slate-50
              hover:text-slate-700
              sm:flex
            "
          >
            <Search size={19} />
          </button>

          {/* Notification */}
          <button
            type="button"
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-slate-500
              transition-colors
              hover:bg-slate-50
              hover:text-slate-900
            "
          >
            <Bell size={20} />

            <span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
          </button>

          {/* User */}
          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              p-1.5
              transition-colors
              hover:bg-slate-50
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
              HK
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold text-slate-800">
                Harish K
              </p>

              <p className="text-[11px] text-slate-400">
                Customer
              </p>
            </div>

            <ChevronDown
              size={15}
              className="hidden text-slate-400 md:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;