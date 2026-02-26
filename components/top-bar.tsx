"use client";

import {
  Search,
  Bell,
  MessageSquare,
  ChevronDown,
  PanelLeft,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function TopBar() {
  return (
    <div className="h-[80px] bg-card border-b border-border fixed top-0 right-0 left-[67px] z-40 flex items-center justify-between px-6 lg:px-8">
      {/* Left section: Optional icon or empty space based on design (there's a panel/book icon in the design left of search) */}
      <div className="flex items-center gap-6 flex-1">
        <button className="text-muted-foreground hover:text-foreground hidden md:block">
          <PanelLeft className="w-6 h-6" strokeWidth={1.5} />
        </button>

        {/* Search Bar */}
        <div className="relative w-full max-w-xl group">
          <Input
            type="search"
            placeholder="Search"
            className="w-full h-11 pl-5 pr-12 bg-background border border-border rounded-full text-sm focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-all font-medium placeholder:text-muted-foreground placeholder:font-normal"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5 ml-4">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full h-10 w-10"
          >
            <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-success rounded-full border-2 border-card"></span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full h-10 w-10"
          >
            <Bell className="w-5 h-5" strokeWidth={1.5} />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-success rounded-full border border-card"></span>
          </Button>
        </div>

        <div className="h-6 w-px bg-border mx-1 hidden md:block"></div>

        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Avatar className="h-9 w-9 border border-border">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              alt="Minnie Armstrong"
            />
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <ChevronDown className="w-4 h-4 text-muted-foreground hidden md:block" />
        </button>
      </div>
    </div>
  );
}
