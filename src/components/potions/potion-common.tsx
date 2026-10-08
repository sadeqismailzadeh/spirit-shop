import { formatNumber } from "@/utils/constant";
import { StarIcon, PackageIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface PotionHeaderType {
  name: string;
  owner: { login: string; avatar_url: string };
  size?: "small" | "medium";
}
export function PotionHeader({
  name,
  owner: { login, avatar_url },
  size = "small",
}: PotionHeaderType) {
  return (
    <div className="p-6 pb-0">
      <div
        className={`flex items-center ${size === "medium" ? "mb-6" : "mb-2"}`}
      >
        <div
          className={`rounded-full bg-secondary/50 
         flex items-center justify-center
          ${size === "medium" ? "w-12 h-12 mr-4" : "w-10 h-10 mr-3"}`}
        >
          <div
            className={`rounded-full bg-secondary/50 mr-3 
                      flex items-center justify-center 
                      ${size === "medium" ? "w-12 h-12 " : "w-10 h-10"}`}
          >
            <div
              className={`relative overflow-hidden rounded-full ring-2 
                 ring-purple-100/20 ${size === "medium" ? "w-12 h-12 " : "w-10 h-10"}`}
            >
              <Image
                src={avatar_url}
                alt={login}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="font-bold text-lg">
          <h3
            className={`'font-bold text-sm' ${size === "medium" ? "text-xl" : "text-base"}`}
          >
            {name}
          </h3>
          <p className={`‍‍‍text-muted-foreground‍‍‍ text-sm`}>{login}</p>
        </div>
      </div>
    </div>
  );
}

interface PotionInfoCardType {
  title: string;
  children?: React.ReactNode;
}

export function PotionInfoCard({ title, children }: PotionInfoCardType) {
  return (
    <div
      className="p-4 rounded-lg bg-background/40 border 
  border-magic-purple/10"
    >
      <h4 className="text-sm font-medium text-magic-light-purple mb-2">
        {title}
      </h4>
      {children}
    </div>
  );
}

interface PotionStatsType {
  stars: number;
  forks: number;
  className?: string;
}

export function PotionStats({ stars, forks, className }: PotionStatsType) {
  return (
    <div className={`flex justify-between ${className ?? ""}`}>
      <div className="flex items-center gap-1">
        <StarIcon className="w-3.5 h-3.5 text-yellow-400" />
        <span>{formatNumber(stars)}</span>
      </div>
      <div className="flex items-center gap-1">
        <PackageIcon className="w-3.5 h-3.5 text-blue-400" />
        <span>{formatNumber(forks)}</span>
      </div>
    </div>
  );
}
