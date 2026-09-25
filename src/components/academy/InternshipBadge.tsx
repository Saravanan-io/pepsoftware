import { Briefcase } from "lucide-react";

export function InternshipBadge({ days = 30 }: { days?: number }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E8E6] text-[#544643] border border-[#C6C2C1] text-xs font-bold shadow-xs">
      <Briefcase className="w-3.5 h-3.5 text-[#C86A28]" />
      <span>Get {days} Days Internship</span>
    </div>
  );
}
