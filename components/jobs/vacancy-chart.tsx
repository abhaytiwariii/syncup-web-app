"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ChevronDown } from "lucide-react";

const data = [
  { name: "Jan", "Application Sent": 640, Interviews: 460 },
  { name: "Feb", "Application Sent": 540, Interviews: 450 },
  { name: "Mar", "Application Sent": 540, Interviews: 560 },
  { name: "Apr", "Application Sent": 340, Interviews: 400 },
  { name: "May", "Application Sent": 600, Interviews: 570 },
  { name: "Jun", "Application Sent": 720, Interviews: 400 },
  { name: "Jul", "Application Sent": 720, Interviews: 350 },
  { name: "Aug", "Application Sent": 600, Interviews: 410 },
  { name: "Sep", "Application Sent": 800, Interviews: 600 },
  { name: "Oct", "Application Sent": 670, Interviews: 480 },
  { name: "Nov", "Application Sent": 650, Interviews: 550 },
  { name: "Dec", "Application Sent": 700, Interviews: 300 },
];

export function VacancyChart() {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] h-full">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-10 gap-4">
        <h3 className="font-bold text-[17px] text-foreground">Vacancy Stats</h3>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-muted-foreground mr-1">
              Application Sent
            </span>
            <Switch
              defaultChecked
              className="data-[state=checked]:bg-primary shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-muted-foreground mr-1">
              Interviews
            </span>
            <Switch
              defaultChecked
              className="data-[state=checked]:bg-success shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-muted-foreground mr-1">
              Rejected
            </span>
            <Switch className="data-[state=unchecked]:bg-muted shadow-sm" />
          </div>
          <Button
            variant="outline"
            className="h-8 shadow-sm text-[13px] font-medium ml-2"
          >
            This Year <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>

      <div className="relative h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="1 0"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#92929D", fontSize: 13, fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#92929D", fontSize: 13, fontWeight: 500 }}
              dx={-10}
              ticks={[0, 200, 400, 600, 800, 1000]}
              tickFormatter={(val) => (val === 1000 ? "1k" : val)}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                padding: "12px",
              }}
              itemStyle={{ fontWeight: "bold" }}
              labelStyle={{
                color: "#92929D",
                fontSize: "12px",
                marginBottom: "8px",
                textAlign: "center",
              }}
              labelFormatter={() => "August 22, 2025"}
            />
            <Line
              type="monotone"
              dataKey="Application Sent"
              stroke="#5052FF"
              strokeWidth={3}
              dot={{ stroke: "#5052FF", strokeWidth: 4, r: 6, fill: "#fff" }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Interviews"
              stroke="#21A604"
              strokeWidth={3}
              dot={{ stroke: "#21A604", strokeWidth: 4, r: 6, fill: "#fff" }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center items-center gap-10 mt-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-[13px] font-bold text-foreground">
            Application Sent
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-success" />
          <span className="text-[13px] font-bold text-foreground">
            Interviews
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="text-[13px] font-bold text-foreground">
            Rejected
          </span>
        </div>
      </div>
    </div>
  );
}
