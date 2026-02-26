"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Edit2 } from "lucide-react";

export function UserProfile() {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden relative pb-6">
      {/* Very subtle background pattern / flat color at the top? It looks just white. */}
      {/* Assuming pure white per the design, skipping gradient headers. */}
      <div className="pt-8 px-6 pb-2 flex flex-col items-center relative">
        <Avatar className="w-[88px] h-[88px] rounded-full border-4 border-card shadow-sm absolute -top-[44px]">
          {/* This requires the container to handle the absolute overflow, or we just put it inline without negative margins.
              Wait, the design doesn't show it overlapping the border. The card itself just has a white background. */}
        </Avatar>
      </div>

      <div className="flex flex-col items-center mt-2 px-6">
        <Avatar className="w-[100px] h-[100px] rounded-full ring-4 ring-card shadow-md mb-4 bg-primary/5 p-1">
          <AvatarImage
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
            alt="Minnie"
            className="rounded-full object-cover"
          />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>

        <h3 className="font-bold text-lg text-primary mb-0.5">
          Minnie Armstrong
        </h3>
        <p className="text-[13px] text-foreground font-medium mb-6">
          UI / UX Designer
        </p>
      </div>

      <div className="px-6 space-y-5">
        <div className="space-y-2.5 relative">
          <Progress value={75} className="h-1.5 [&>div]:bg-success bg-muted" />
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-foreground">75% Completed</span>
            <button className="flex items-center text-primary font-semibold hover:underline gap-1">
              <Edit2 className="w-3 h-3" />
              Update profile
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 h-10 border-primary text-primary hover:bg-primary/5 rounded-xl font-semibold text-xs transition-colors"
          >
            View Full Profile
          </Button>
          <Button
            variant="outline"
            className="flex-1 h-10 border-primary text-primary hover:bg-primary/5 rounded-xl font-semibold text-xs transition-colors"
          >
            Share Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
