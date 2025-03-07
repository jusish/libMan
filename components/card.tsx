"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface HeaderCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode; // Change this from ElementType to ReactNode
  color: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  title,
  value,
  icon,
  color,
}) => {
  return (
    <div className={cn("p-6 rounded-2xl flex items-center gap-4")}>
      <div className={cn(`p-3 bg-${color}-200 rounded-xl`)}>
        {icon} {/* No need to check if it's a function */}
      </div>
      <div>
        <h3 className={cn("text-lg font-semibold")}>{title}</h3>
        <p className={cn("text-2xl font-bold")}>{value}</p>
      </div>
    </div>
  );
};

export default HeaderCard;
