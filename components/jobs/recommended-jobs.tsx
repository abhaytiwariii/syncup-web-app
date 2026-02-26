"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight, Briefcase } from "lucide-react";

const recommendedJobs = [
  {
    id: 1,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    timeAgo: "24 min. ago",
    trusted: "4.5 Trusted",
  },
  {
    id: 2,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    timeAgo: "24 min. ago",
    trusted: "4.5 Trusted",
  },
  {
    id: 3,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    timeAgo: "24 min. ago",
    trusted: "4.5 Trusted",
  },
  {
    id: 4,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    timeAgo: "24 min. ago",
    trusted: "4.5 Trusted",
  },
];

export function RecommendedJobs() {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-lg text-foreground">Recommended Jobs</h3>
      </div>

      <div className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider mb-4">
        TODAY
      </div>

      <div className="space-y-4 flex-1">
        {recommendedJobs.map((job) => (
          <div
            key={job.id}
            className="flex gap-4 p-4 rounded-xl border border-border/80 shadow-sm transition hover:shadow-md"
          >
            {/* Logo */}
            <div className="w-[52px] h-[42px] shrink-0 flex items-center justify-center p-[2px]">
              <img src="/job-recomendation.png" alt="" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-[15px] font-bold text-foreground mb-0.5">
                {job.title}
              </h4>
              <p className="text-[13px] font-medium text-foreground mb-2">
                {job.company}
              </p>

              <div className="flex items-center gap-1.5 text-[12px] font-semibold text-muted-foreground mb-2.5 flex-wrap">
                <Star className="w-3.5 h-3.5  text-foreground" />
                <span className="text-muted-foreground">{job.rating}</span>{" "}
                Trusted
                <MapPin className="w-3.5 h-3.5 text-foreground" />
                <span className="text-muted-foreground">{job.location}</span>
                <Briefcase className="w-3.5 h-3.5 text-foreground" />
                <span className="text-muted-foreground">{job.type}</span>
              </div>
              <div className="w-full border-border border-2"></div>
              <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground mt-2">
                <div>{job.trusted}</div>
                <div>{job.timeAgo}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        className="w-full mt-5 bg-primary/5 text-foreground font-bold hover:bg-primary/10 rounded-xl h-11 text-[13px] gap-2"
      >
        View all posts
        <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
}
