"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/top-bar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden relative">
      <Sidebar
        isExpanded={isExpanded}
        onToggleExpand={() => setIsExpanded(!isExpanded)}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      {/* 
        On md screens and up, we apply margin-left so content doesn't hide behind the fixed sidebar.
        On smaller screens, ml is 0 because the sidebar gets hidden (or acts as an overlay).
      */}
      <div
        className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 w-full
        ${isExpanded ? "md:ml-[240px]" : "md:ml-[67px]"} ml-0`}
      >
        <TopBar
          onOpenMobile={() => setIsMobileOpen(true)}
          isExpanded={isExpanded}
        />
        <main className="flex-1 overflow-y-auto mt-[80px]">{children}</main>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </div>
  );
}
