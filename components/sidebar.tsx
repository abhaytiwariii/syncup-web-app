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
} from "lucide-react";

export function Sidebar() {
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
    <aside className="w-[67px] bg-card flex flex-col fixed left-0 top-0 bottom-0 z-50 shadow-[2px_0_8px_rgba(0,0,0,0.02)]">
      {/* Logo */}
      <div className="flex items-center justify-center h-[80px]">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 flex items-center justify-center">
            {/* Using a custom span for the SyncUp logo 'S' */}
            <span className="font-logo font-bold text-2xl text-primary transform italic">
              S
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col items-center py-4 space-y-6">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith("/jobs") && item.href === "/jobs");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              title={item.label}
            >
              <item.icon
                className={`w-[22px] h-[22px] ${isActive ? "fill-primary/20" : ""}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div className="flex flex-col items-center py-6 space-y-6">
        {bottomItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all text-muted-foreground hover:bg-muted hover:text-foreground"
            title={item.label}
          >
            <item.icon className="w-[22px] h-[22px]" strokeWidth={2} />
          </Link>
        ))}
      </div>
    </aside>
  );
}
