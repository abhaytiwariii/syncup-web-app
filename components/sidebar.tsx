"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  UserCheck,
  Briefcase,
  Users,
  MessageSquare,
  BarChart2,
  Settings,
  PanelLeft,
} from "lucide-react";

interface SidebarProps {
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({
  isExpanded = false,
  onToggleExpand,
  isMobileOpen = false,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: UserCheck, label: "Network", href: "/network" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Users, label: "Community", href: "/community" },
    { icon: MessageSquare, label: "Messages", href: "/messages" },
  ];

  const bottomItems = [
    { icon: BarChart2, label: "Analytics", href: "/analytics" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 bottom-0 z-50 bg-card border-r border-black/10 shadow-[2px_0_8px_rgba(0,0,0,0.02)] flex flex-col transition-all duration-300
      ${isExpanded ? "w-[240px]" : "w-[67px]"} 
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* Header (Logo + Toggle) */}
      <div
        className={`flex items-center h-[80px] ${isExpanded ? "px-6 justify-between" : "justify-center"}`}
      >
        <Link href="/" className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 flex items-center justify-center shrink-0">
            <span className="font-logo font-bold text-2xl text-primary transform italic">
              <img src="/myraid-logo.png" alt="" />
            </span>
          </div>
          {isExpanded && (
            <span className="font-logo font-extrabold text-[18.5px] leading-8 tracking-tight text-foreground whitespace-nowrap">
              SyncUp
            </span>
          )}
        </Link>
      </div>

      {/* PanelLeft Toggle Button */}
      <div
        className={`flex cursor-pointer absolute top-5 ${isExpanded ? "px-4 mb-2 -right-10" : "justify-center mb-4 -right-5"}`}
      >
        <button
          onClick={onToggleExpand}
          className={`text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 p-2 rounded-xl w-full cursor-pointer
            ${isExpanded ? "hover:bg-muted justify-start" : "hover:bg-muted justify-center"}`}
        >
          
          <PanelLeft className={`w-6 h-6 shrink-0 md:block ${isMobileOpen ? "block" : "hidden"}`} strokeWidth={2} />
        </button>
      </div>

      {/* Navigation Items */}
      <nav
        className={`flex-1 flex flex-col py-2 space-y-2 overflow-y-auto overflow-x-hidden ${isExpanded ? "px-4" : "items-center px-0"}`}
      >
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith("/jobs") && item.href === "/jobs");

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => isMobileOpen && onCloseMobile?.()}
              className={`flex items-center transition-all ${isExpanded ? "px-3 h-11 w-full gap-3" : "justify-center w-10 h-10 mb-4"} ${
                isActive
                  ? "bg-primary/10 text-primary/80 border-l-4 border-primary rounded-none" // Adjusting border logic based on typical sidebar active states
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              } ${!isExpanded && isActive ? "border-l-4 rounded-none h-[44px] w-full border-primary min-w-[67px]" : ""}`}
              title={!isExpanded ? item.label : undefined}
            >
              <item.icon
                className={`w-[22px] h-[22px] shrink-0 ${isActive ? "fill-primary/20" : ""}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              {isExpanded && (
                <span
                  className={`text-[15px] font-medium whitespace-nowrap ${isActive ? "text-primary font-semibold" : "text-muted-foreground"}`}
                >
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div
        className={`flex flex-col py-6 space-y-2 ${isExpanded ? "px-4" : "items-center px-0"}`}
      >
        {bottomItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => isMobileOpen && onCloseMobile?.()}
            className={`flex items-center transition-all text-muted-foreground hover:bg-muted hover:text-foreground ${
              isExpanded
                ? "px-3 h-11 w-full gap-3"
                : "justify-center w-10 h-10 mb-4"
            }`}
            title={!isExpanded ? item.label : undefined}
          >
            <item.icon className="w-[22px] h-[22px] shrink-0" strokeWidth={2} />
            {isExpanded && (
              <span className="text-[15px] font-medium whitespace-nowrap">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
}
