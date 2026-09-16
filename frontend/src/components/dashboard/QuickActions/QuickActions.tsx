import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  ClipboardPlus,
  MapPin,
} from "lucide-react";

const actions = [
  {
    title: "AI Assistant",
    description: "Describe your problem",
    icon: Bot,
    path: "/customer/ai",
    className: "bg-blue-50 text-blue-600",
  },
  {
    title: "New Complaint",
    description: "Report a new issue",
    icon: ClipboardPlus,
    path: "/customer/complaints/new",
    className: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Track Issue",
    description: "View service progress",
    icon: MapPin,
    path: "/customer/complaints",
    className: "bg-cyan-50 text-cyan-600",
  },
];

function QuickActions() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Get things done faster
        </p>
      </div>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.path}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-blue-100
                hover:shadow-md
              "
            >
              <div
                className={`
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  ${action.className}
                `}
              >
                <Icon size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-800">
                  {action.title}
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  {action.description}
                </p>
              </div>

              <ArrowRight
                size={17}
                className="
                  text-slate-300
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-blue-600
                "
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;