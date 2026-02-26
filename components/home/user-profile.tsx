"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Edit2 } from "lucide-react";

export function UserProfile() {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden relative pt-3 pb-6">
      <div className="flex flex-col items-center mt-2 px-6">
        <Avatar className="w-[100px] h-[100px] rounded-full ring-4 ring-card shadow-md mb-4 bg-[#C9D1F6]">
          <AvatarImage
            src="/minnie-image.png"
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
            <button className="flex items-center text-primary font-semibold hover:underline gap-1 cursor-pointer">
              <Edit2 className="w-3 h-3" />
              Update profile
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 h-10 border-primary text-primary hover:bg-primary/5 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
          >
            View Full Profile
          </Button>
          <Button
            variant="outline"
            className="flex-1 h-10 border-primary text-primary hover:bg-primary/5 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
          >
            Share Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
