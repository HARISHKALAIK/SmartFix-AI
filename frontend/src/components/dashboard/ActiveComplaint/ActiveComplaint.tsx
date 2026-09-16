import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  MapPin,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    label: "Submitted",
    completed: true,
  },
  {
    label: "AI Analyzed",
    completed: true,
  },
  {
    label: "Technician Assigned",
    completed: true,
  },
  {
    label: "In Progress",
    completed: false,
    current: true,
  },
  {
    label: "Resolved",
    completed: false,
  },
];

function ActiveComplaint() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 p-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              ACTIVE
            </span>

            <span className="text-xs font-medium text-slate-400">
              #SF-1024
            </span>
          </div>

          <h2 className="mt-3 text-xl font-bold text-slate-900">
            Internet connection issue
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Network & Internet
          </p>
        </div>

        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
          High Priority
        </span>
      </div>

      <div className="p-6">

        {/* Status Timeline */}
        <div>
          <p className="text-sm font-semibold text-slate-800">
            Complaint Status
          </p>

          <div className="mt-6 overflow-x-auto">
            <div className="flex min-w-[600px] items-start">
              {steps.map((step, index) => (
                <div
                  key={step.label}
                  className="flex flex-1 items-start"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        ${
                          step.completed
                            ? "border-blue-600 bg-blue-600 text-white"
                            : step.current
                              ? "border-blue-600 bg-white text-blue-600"
                              : "border-slate-200 bg-white text-slate-300"
                        }
                      `}
                    >
                      {step.completed ? (
                        <CheckCircle2 size={17} />
                      ) : step.current ? (
                        <Clock3 size={16} />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-slate-200" />
                      )}
                    </div>

                    <p
                      className={`
                        mt-2
                        whitespace-nowrap
                        text-[11px]
                        font-medium
                        ${
                          step.current
                            ? "text-blue-600"
                            : step.completed
                              ? "text-slate-700"
                              : "text-slate-400"
                        }
                      `}
                    >
                      {step.label}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`
                        mt-[18px]
                        h-[2px]
                        flex-1
                        ${
                          step.completed
                            ? "bg-blue-600"
                            : "bg-slate-200"
                        }
                      `}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technician */}
        <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
              <UserRound size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Assigned Technician
              </p>

              <p className="mt-0.5 text-sm font-semibold text-slate-800">
                Alex Johnson
              </p>

              <p className="text-xs text-slate-500">
                Network Specialist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Current Status
              </p>

              <p className="mt-0.5 text-sm font-semibold text-slate-800">
                Technician is working
              </p>

              <p className="text-xs text-slate-500">
                Estimated completion today
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Bot size={17} className="text-blue-600" />
            AI is monitoring this complaint
          </div>

          <Link
            to="/customer/complaints/1024"
            className="
              group
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-blue-600
              hover:text-blue-700
            "
          >
            View Details

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ActiveComplaint;