"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SendIcon } from "lucide-react";

export function CreatePost() {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-foreground pl-1">Create a Post</h3>
      <div className="bg-card rounded-2xl border border-border p-4 flex items-center justify-between gap-4 shadow-sm relative">
        <div className="flex items-center gap-4 flex-1">
          <Avatar className="w-10 h-10 border border-border flex-shrink-0">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              alt="User"
            />
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 bg-transparent border-0 text-[15px] text-foreground placeholder-muted-foreground focus:outline-none min-w-0"
          />
        </div>

        <button className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors pr-2">
          <SendIcon className="w-5 h-5 transform -rotate-45" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
