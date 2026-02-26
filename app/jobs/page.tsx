"use client";

import { useState } from "react";
import { JobStats } from "@/components/jobs/job-stats";
import { VacancyChart } from "@/components/jobs/vacancy-chart";
import { JobApplicationTable } from "@/components/jobs/job-application-table";
import { RecommendedJobs } from "@/components/jobs/recommended-jobs";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function JobsDashboard() {
  const [timeFilter] = useState("Last 30 Days");

  return (
    <div className="w-full bg-background min-h-screen">
      <div className="max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-[28px] font-bold text-foreground tracking-tight leading-tight">
              Welcome back, Julie👋
            </h1>
            <p className="text-muted-foreground text-[14px] font-medium mt-1">
              Here's what you need to focus on today
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto flex-col sm:flex-row">
            <Button
              variant="outline"
              className="h-11 px-5 shadow-sm font-semibold rounded-xl border-border"
            >
              {timeFilter}
              <ChevronDown className="w-4 h-4 ml-2" strokeWidth={2.5} />
            </Button>
            <Button className="h-11 px-6 shadow-sm bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl">
              Search Job
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <JobStats
            title="Active Jobs"
            count="03"
            change="+5 from yesterday"
            color="blue"
          />
          <JobStats
            title="Jobs In Progress"
            count="03"
            change="+5 from yesterday"
            color="orange"
          />
          <JobStats
            title="Shortlisted"
            count="03"
            change="+5 from yesterday"
            color="green"
          />
          <JobStats
            title="On Hold"
            count="03"
            change="+5 from yesterday"
            color="red"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <VacancyChart />
          </div>
          <div className="lg:col-span-1">
            <RecommendedJobs />
          </div>
        </div>

        {/* Application Table */}
        <JobApplicationTable />
      </div>
    </div>
  );
}
