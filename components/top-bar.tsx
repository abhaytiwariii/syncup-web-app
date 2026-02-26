"use client";

import {
  Search,
  Bell,
  MessageSquareMore,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TopBarProps {
  onOpenMobile: () => void;
  isExpanded?: boolean;
}

export function TopBar({ onOpenMobile, isExpanded = false }: TopBarProps) {
  return (
    <div
      className={`h-[80px] bg-card border-b border-[#E2E2EA] fixed top-0 right-0 z-30 transition-all duration-300 flex items-center justify-between px-4 lg:px-8 shadow-[inset_0px_-1px_0px_#E2E2EA] ${isExpanded ? "left-[240px]" : "left-[67px]"} max-md:left-0`}
    >
      <div className="flex items-center gap-4 flex-1">
        {/* Hamburger Menu (Mobile Only) */}
        <button
          onClick={onOpenMobile}
          className="text-muted-foreground hover:text-foreground md:hidden shrink-0"
        >
          <Menu className="w-6 h-6" strokeWidth={2} />
        </button>

        {/* Search Bar */}
        <div className="flex flex-1 justify-center px-4">
          <div className="relative w-full max-w-xl group">
            <Input
              type="search"
              placeholder="Search"
              className="w-full h-[50px] pl-[50px]] pr-4 bg-[#FAFAFB] border border-[#F1F1F5] rounded-[48px] text-[14px] focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-all font-normal placeholder:text-[#92929D]"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center text-[#92929D] hover:text-primary transition-colors">
              <Search className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-5 sm:ml-4">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-foreground hover:bg-muted/50 rounded-full h-10 w-10 cursor-pointer sm:flex"
          >
            <MessageSquareMore className="w-6 h-6" strokeWidth={1.5} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-success rounded-full border border-card"></span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative text-foreground hover:bg-muted/50 rounded-full h-10 w-10 cursor-pointer"
          >
            <Bell className="w-6 h-6" strokeWidth={1.5} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-success rounded-full border border-card"></span>
          </Button>
        </div>

        <div className="h-[34px] w-px bg-[#E2E2EA] mx-1 hidden sm:block"></div>

        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Avatar className="h-[34px] w-[34px]">
            <AvatarImage src="/minnie-image.png" alt="Minnie Armstrong" />
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <ChevronDown
            className="w-[20px] h-[20x] text-[#696969] hidden md:block"
            strokeWidth={3}
          />
        </button>
      </div>
    </div>
  );
}
