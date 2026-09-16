import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  MessageSquare,
} from "lucide-react";

import DashboardLayout from "../../../components/layout/DashboardLayout/DashboardLayout";
import StatCard from "../../../components/dashboard/StatCard/StatCard";
import ActiveComplaint from "../../../components/dashboard/ActiveComplaint/ActiveComplaint";
import QuickActions from "../../../components/dashboard/QuickActions/QuickActions";
import RecentComplaints from "../../../components/dashboard/RecentComplaints/RecentComplaints";

function CustomerDashboard() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10">

        {/* Welcome */}
        <section className="mb-8">
          <p className="text-sm font-medium text-blue-600">
            Welcome back
          </p>

          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Good morning, Harish 👋
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Here's what's happening with your service requests.
          </p>
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Complaints"
            value="12"
            description="All service requests"
            icon={ClipboardList}
            iconClassName="bg-blue-50 text-blue-600"
          />

          <StatCard
            title="Active"
            value="2"
            description="Currently being handled"
            icon={Clock3}
            iconClassName="bg-amber-50 text-amber-600"
          />

          <StatCard
            title="Resolved"
            value="9"
            description="Successfully completed"
            icon={CheckCircle2}
            iconClassName="bg-green-50 text-green-600"
          />

          <StatCard
            title="AI Assisted"
            value="8"
            description="Complaints created with AI"
            icon={MessageSquare}
            iconClassName="bg-indigo-50 text-indigo-600"
          />
        </section>

        {/* Main Dashboard */}
        <section className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">

          {/* Left */}
          <div className="min-w-0">
            <ActiveComplaint />
          </div>

          {/* Right */}
          <div>
            <QuickActions />
          </div>
        </section>

        {/* Recent Complaints */}
        <section className="mt-8">
          <RecentComplaints />
        </section>

        {/* AI Banner */}
        <section className="mt-8 overflow-hidden rounded-2xl bg-slate-950">
          <div className="relative px-6 py-7 sm:px-8">

            {/* Background */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[90px]" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <MessageSquare size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-blue-400">
                    SmartFix AI
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    Have a problem? Just describe it.
                  </h3>

                  <p className="mt-1 max-w-xl text-sm text-slate-400">
                    Our AI assistant can understand your problem,
                    ask the right questions and help create a service
                    request.
                  </p>
                </div>
              </div>

              <a
                href="/customer/ai"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-500
                "
              >
                Ask SmartFix AI
              </a>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default CustomerDashboard;