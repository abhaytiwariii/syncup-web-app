"use client";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const applications = [
  {
    id: 1,
    title: "Jr. Front-end Developer",
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    date: "08/08/2023",
    status: "In-progress",
  },
  {
    id: 2,
    title: "Senior Back-end Developer",
    company: "Google",
    logo: "/google-logo.png",
    date: "24/07/2023",
    status: "Applied",
  },
  {
    id: 3,
    title: "UI/UX designer",
    company: "Meta",
    logo: "/meta-logo.png",
    date: "01/05/2023",
    status: "Offered",
  },
];

export function JobApplicationTable() {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 lg:p-6 mb-8 mt-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h3 className="font-bold text-lg text-foreground">
          Job Application Status
        </h3>

        <div className="flex flex-wrap items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-1">
              New
            </span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-1">
              In Progress
            </span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-1">
              Pending Task
            </span>
            <Switch />
          </div>

          <Button variant="outline" className="h-8 shadow-sm">
            Sort By <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-border/80 text-sm md:text-base font-semibold text-foreground">
              <th className="pb-4 pl-2 font-bold">Job title</th>
              <th className="pb-4 font-bold">Company</th>
              <th className="pb-4 text-center font-bold">Applied on</th>
              <th className="pb-4 text-right pr-2 font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b border-border/40 last:border-0 hover:bg-muted/10 transition"
              >
                <td className="py-4 pl-2">
                  <div className="font-bold text-foreground text-[15px]">
                    {app.title}
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src={app.logo}
                        alt={app.company}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="font-semibold text-[15px] text-foreground">
                      {app.company}
                    </span>
                  </div>
                </td>
                <td className="py-4 text-center text-muted-foreground font-medium text-sm">
                  {app.date}
                </td>
                <td className="py-4 text-right pr-2">
                  <span
                    className={`inline-flex px-3 py-1 rounded-md text-[13px] font-bold ${
                      app.status === "In-progress"
                        ? "bg-warning/20 text-yellow-700"
                        : app.status === "Applied"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-success/20 text-green-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
