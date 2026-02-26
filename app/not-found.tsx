import Link from "next/link";
import { SearchX, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="flex flex-col items-center text-center max-w-lg w-full z-10 animate-in fade-in zoom-in duration-500">
        <div className="relative mb-8 mt-[-40px]">
          <div className="w-24 h-24 sm:w-[124px] sm:h-[124px] bg-card border border-border rounded-[32px] rotate-3 flex items-center justify-center shadow-sm">
            <SearchX
              className="w-12 h-12 sm:w-[56px] sm:h-[56px] text-primary -rotate-3"
              strokeWidth={1.5}
            />
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-warning/80 rounded-full blur-[2px] animate-pulse" />
          <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-success/80 rounded-full blur-[1px] animate-pulse delay-150" />
        </div>

        <h1 className="text-[100px] sm:text-[140px] font-bold text-foreground leading-none font-logo tracking-tighter opacity-5 select-none">
          404
        </h1>

        <div className="-mt-14 sm:-mt-20 mb-8 flex flex-col items-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 tracking-tight font-logo">
            Oops! Page Not Found
          </h2>

          <p className="text-muted-foreground text-[14px] sm:text-[15px] leading-relaxed max-w-[85%]">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <Button
            asChild
            className="h-[46px] px-8 rounded-full font-medium shadow-sm hover:shadow transition-all flex items-center gap-2 group"
          >
            <Link href="/">
              <Home
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                strokeWidth={2}
              />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
