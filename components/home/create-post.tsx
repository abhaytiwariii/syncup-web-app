"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SendIcon } from "lucide-react";

export function CreatePost() {
  return (
    <div className="space-y-3">
      <h3 className="bg-card rounded-t-2xl border p-3 m-0 font-bold text-foreground pl-4 border-border shadow-sm">
        Create a Post
      </h3>
      <div className="bg-card rounded-b-2xl border border-border p-4 flex items-center justify-between sm:gap-4 shadow-sm relative">
        <div className="flex items-center sm:gap-4 gap-2 ">
          <Avatar className="w-10 h-10 border border-border object-contain shrink-0">
            <AvatarImage
              className="object-cover"
              src="/user-profile-image.png"
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

        <button className="flex items-center justify-center text-gray-600 hover:text-primary transition-colors pr-2 cursor-pointer transform rotate-45">
          <SendIcon className="w-5 h-5 transform -rotate-45" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
