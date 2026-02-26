"use client";

import { Star } from "lucide-react";

export function SuggestionsSection() {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden p-5">
      <h3 className="font-bold text-primary text-base mb-2">Suggestions</h3>
      <p className="text-[13px] text-muted-foreground font-medium mb-5 leading-relaxed">
        Below courses are suggested based on your current skills & curated to
        help you stay updated with the current market trends.
      </p>

      {/* Course Suggestion */}
      <div className="space-y-4">
        <div className="relative w-full h-[180px] rounded-2xl overflow-hidden shadow-sm border border-border/50">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop"
            alt="Figma Basics"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <h4 className="font-bold text-foreground text-[15px] leading-tight mb-1">
              Figma: Basics
            </h4>
            <p className="text-[13px] text-muted-foreground font-medium">
              Tyler Hooks
            </p>
          </div>
          <div className="flex items-center gap-1.5 pt-1">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span className="text-[13px] font-bold text-foreground">4.2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
