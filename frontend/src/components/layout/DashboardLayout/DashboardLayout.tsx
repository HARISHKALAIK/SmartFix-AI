import { useState, type ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">

      <Sidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <div className="lg:pl-[270px]">

        <DashboardHeader
          onMenuClick={() => setMobileOpen(true)}
        />

        <main className="min-h-[calc(100vh-80px)]">
          {children}
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;