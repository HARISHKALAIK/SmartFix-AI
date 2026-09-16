import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconClassName = "bg-blue-50 text-blue-600",
}: StatCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-100
        hover:shadow-lg
        hover:shadow-slate-200/60
      "
    >
      <div className="flex items-start justify-between">
        <div
          className={`
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            transition-transform
            duration-300
            group-hover:scale-105
            ${iconClassName}
          `}
        >
          <Icon size={20} />
        </div>

        <ArrowUpRight
          size={17}
          className="text-slate-300 transition-colors group-hover:text-blue-500"
        />
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
          {value}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default StatCard;