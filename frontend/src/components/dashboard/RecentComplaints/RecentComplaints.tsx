import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const complaints = [
  {
    id: "#SF-1024",
    title: "Internet connection issue",
    category: "Network",
    status: "In Progress",
    priority: "High",
    date: "Today",
    active: true,
  },
  {
    id: "#SF-1018",
    title: "Air conditioner not cooling",
    category: "Appliance",
    status: "Resolved",
    priority: "Medium",
    date: "Sep 12",
    active: false,
  },
  {
    id: "#SF-1009",
    title: "Power fluctuation",
    category: "Electrical",
    status: "Resolved",
    priority: "High",
    date: "Sep 08",
    active: false,
  },
  {
    id: "#SF-1002",
    title: "Office printer not responding",
    category: "Hardware",
    status: "Resolved",
    priority: "Low",
    date: "Sep 04",
    active: false,
  },
];

function RecentComplaints() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Complaints
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest service requests
          </p>
        </div>

        <Link
          to="/customer/complaints"
          className="
            group
            flex
            items-center
            gap-1.5
            text-sm
            font-semibold
            text-blue-600
          "
        >
          View All

          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Complaint
              </th>

              <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Category
              </th>

              <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Status
              </th>

              <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Priority
              </th>

              <th className="px-6 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint) => (
              <tr
                key={complaint.id}
                className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/60"
              >
                <td className="px-6 py-4">
                  <Link
                    to={`/customer/complaints/${complaint.id.replace("#SF-", "")}`}
                    className="group"
                  >
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                      {complaint.title}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      {complaint.id}
                    </p>
                  </Link>
                </td>

                <td className="px-4 py-4 text-sm text-slate-500">
                  {complaint.category}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      px-2.5
                      py-1
                      text-xs
                      font-medium

                      ${
                        complaint.active
                          ? "bg-blue-50 text-blue-600"
                          : "bg-green-50 text-green-600"
                      }
                    `}
                  >
                    {complaint.active ? (
                      <Clock3 size={12} />
                    ) : (
                      <CheckCircle2 size={12} />
                    )}

                    {complaint.status}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`
                      text-xs
                      font-semibold
                      ${
                        complaint.priority === "High"
                          ? "text-red-500"
                          : complaint.priority === "Medium"
                            ? "text-amber-500"
                            : "text-slate-500"
                      }
                    `}
                  >
                    {complaint.priority}
                  </span>
                </td>

                <td className="px-6 py-4 text-right text-xs text-slate-400">
                  {complaint.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="divide-y divide-slate-100 md:hidden">
        {complaints.map((complaint) => (
          <Link
            key={complaint.id}
            to={`/customer/complaints/${complaint.id.replace("#SF-", "")}`}
            className="block p-5 transition-colors hover:bg-slate-50"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {complaint.title}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {complaint.id} · {complaint.category}
                </p>
              </div>

              <ArrowRight
                size={16}
                className="shrink-0 text-slate-300"
              />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span
                className={`
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  px-2.5
                  py-1
                  text-xs
                  font-medium

                  ${
                    complaint.active
                      ? "bg-blue-50 text-blue-600"
                      : "bg-green-50 text-green-600"
                  }
                `}
              >
                {complaint.active ? (
                  <Clock3 size={12} />
                ) : (
                  <CheckCircle2 size={12} />
                )}

                {complaint.status}
              </span>

              <span className="text-xs text-slate-400">
                {complaint.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecentComplaints;