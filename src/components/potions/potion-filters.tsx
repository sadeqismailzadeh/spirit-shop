import { getFilterPillColor } from "@/utils";
import { MAGICAL_TYPES } from "@/utils/constant";
import Link from "next/link";

export function PotionFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      {MAGICAL_TYPES.map(({ id, icon, label }) => {
        return (
          <Link
            href={id === "all" ? "/" : `?type=${id}`}
            key={id}
            className={`filter-pill flex items-center gap-2 
                bg-gradient-to-br to-transparent
              ${getFilterPillColor(id)}`}
          >
            {icon}
            {label}
          </Link>
        );
      })}
    </div>
  );
}
