"use client";

import { TrendingDown } from "lucide-react";

interface JobStatsProps {
  title: string;
  count: string;
  change: string;
  color: "blue" | "orange" | "green" | "red";
}

export function JobStats({ title, count, change, color }: JobStatsProps) {
  const chartColors = {
    blue: "#5052FF",
    orange: "#fbbf24",
    green: "#21A604",
    red: "#ef4444",
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] h-full flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 h-full">
        <div className="flex flex-col h-full justify-between">
          <p className="text-[15px] font-bold text-foreground mb-4">{title}</p>
          <div>
            <h3 className="text-3xl font-extrabold text-foreground leading-none">
              {count}
            </h3>
            <p className="text-[12px] text-muted-foreground mt-3 flex items-center gap-1.5 font-medium">
              <div className="h-7 w-7 flex justify-center items-center bg-[#1DBF7329] rounded-full">
                <TrendingDown
                  className="w-3.5 h-3.5 text-success "
                  strokeWidth={3}
                />
              </div>
              <span className="text-success">{change.split(" ")[0]}</span>
              <span>{change.split(" ").slice(1).join(" ")}</span>
            </p>
          </div>
        </div>

        {/* Mini Bar Chart */}
        <div className="flex items-end justify-center gap-[3px] h-12 mt-auto">
          {[40, 25, 60, 35, 50, 40, 70, 45, 80].map((height, idx) => (
            <div
              key={idx}
              className="w-1.5 rounded-t-sm"
              style={{
                height: `${height}%`,
                backgroundColor: chartColors[color],
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
