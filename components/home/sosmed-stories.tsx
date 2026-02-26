"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, UserPlus, MessageSquare } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Rakesh Sharma",
    role: "Front-end Developer",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Rakesh Sharma",
    role: "Front-end Developer",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Rakesh Sharma",
    role: "Front-end Developer",
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop",
  },
];

export function SosmedStories() {
  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-base text-foreground">Sosmed Stories</h3>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        {stories.map((user, idx) => (
          <div key={`${user.id}-${idx}`} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 border border-border">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground truncate">
                  {user.name}
                </h4>
                <p className="text-xs text-muted-foreground truncate">
                  {user.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 pl-1">
              <Button
                variant="ghost"
                className="flex-1 h-8 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary transition-colors rounded-full text-xs font-semibold"
              >
                <UserPlus className="w-3.5 h-3.5 mr-1.5" strokeWidth={2.5} />
                Follow
              </Button>
              <Button
                variant="ghost"
                className="flex-1 h-8 bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors rounded-full text-xs font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" strokeWidth={2} />
                Message
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
