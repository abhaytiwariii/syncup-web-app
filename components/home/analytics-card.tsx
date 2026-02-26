"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Lock } from "lucide-react";

const mockData1 = [
  { value: 20 },
  { value: 40 },
  { value: 25 },
  { value: 60 },
  { value: 50 },
  { value: 80 },
];

const mockData2 = [
  { value: 30 },
  { value: 20 },
  { value: 50 },
  { value: 35 },
  { value: 70 },
  { value: 45 },
];

export function AnalyticsCard() {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 pt-4 pb-0 flex flex-col relative min-h-[220px]">
      <div className="flex flex-col gap-4 mb-2">
        <h3 className="font-bold text-base text-foreground">Analytics</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground mr-2">
            Connections
          </span>
          <div className="flex bg-muted/60 p-1 rounded-full text-[11px] font-medium text-muted-foreground">
            <button className="px-2.5 py-1 rounded-full bg-card shadow-sm text-foreground transition-all">
              1w
            </button>
            <button className="px-2.5 py-1 rounded-full hover:text-foreground transition-all">
              1m
            </button>
            <button className="px-2.5 py-1 rounded-full hover:text-foreground transition-all">
              3m
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full relative mt-4">
        {/* Simple inline SVG replacement for chart, since we don't have enough data points/real Recharts area, keeping it easy and monotone */}
        <div className="w-[120%] h-[100px] absolute bottom-10 opacity-80 pointer-events-none">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 100 50"
            width="80%"
            height="100%"
          >
            <path
              d="M0 45 Q 15 25 30 40 T 60 20 T 100 35"
              fill="none"
              stroke="#5052FF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M0 35 Q 20 45 40 25 T 70 35 T 100 15"
              fill="none"
              stroke="#21A604"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="absolute inset-x-0 bottom-4 flex justify-between text-[11px] text-muted-foreground px-2">
          <span>Sept</span>
          <span>Oct</span>
          <span className="text-primary font-semibold">Nov</span>
        </div>
      </div>
      {/* Lock overlay */}
      <div className="absolute right-0 left-0 top-0 bottom-0 flex items-center justify-center bg-card/40 backdrop-blur-[1px] z-10 ">
        <button className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-medium shadow-lg hover:bg-primary/90 transition cursor-pointer">
          <Lock className="w-3.5 h-3.5" />
          Analytics
        </button>
      </div>
    </div>
  );
}
