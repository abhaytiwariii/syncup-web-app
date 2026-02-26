"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight, MoreVertical } from "lucide-react";

const recommendedJobs = [
  {
    id: 1,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    timeAgo: "24 min. ago",
  },
  {
    id: 2,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    timeAgo: "24 min. ago",
  },
  {
    id: 3,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    timeAgo: "24 min. ago",
  },
  {
    id: 4,
    title: "UI UX Designer",
    company: "SyncUp Technologies",
    location: "Bangalore",
    type: "Hybrid",
    rating: 4.5,
    timeAgo: "24 min. ago",
  },
];

export function RecommendedJobs() {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 lg:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-lg text-foreground">Recommended Jobs</h3>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreVertical className="w-5 h-5" />
        </button>
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
            <div className="w-[42px] h-[42px] flex-shrink-0 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 rounded-full flex items-center justify-center p-[2px]">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                {/* Fake colorful circles logo */}
                <div className="absolute w-4 h-4 rounded-full bg-cyan-400 top-1 left-1 opacity-80" />
                <div className="absolute w-4 h-4 rounded-full bg-pink-400 bottom-1 right-1 opacity-80" />
                <div className="absolute w-4 h-4 rounded-full bg-yellow-400 top-1 right-1 opacity-80" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-[15px] font-bold text-foreground mb-0.5">
                {job.title}
              </h4>
              <p className="text-[13px] font-medium text-foreground mb-2">
                {job.company}
              </p>

              <div className="flex items-center gap-1.5 text-[12px] font-semibold text-muted-foreground mb-2.5 flex-wrap">
                <Star className="w-3.5 h-3.5 fill-warning text-warning" />
                <span className="text-foreground">{job.rating}</span> Trusted
                <span className="mx-1">•</span>
                <MapPin className="w-3.5 h-3.5 text-foreground" />
                <span className="text-foreground">{job.location}</span>
                <span className="mx-1">•</span>
                <span className="text-foreground">{job.type}</span>
              </div>

              <div className="flex items-center justify-end text-[11px] font-medium text-muted-foreground mt-2">
                {job.timeAgo}
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
