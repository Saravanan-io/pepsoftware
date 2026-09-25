import { Briefcase } from "lucide-react";

export function InternshipBadge({ days = 30 }: { days?: number }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold shadow-xs">
      <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
      <span>Get {days} Days Internship</span>
    </div>
  );
}
