"use client";

export function PromoSection() {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden p-5">
      <h3 className="font-bold text-base text-foreground mb-1.5">
        Hire faster with SyncUp!
      </h3>
      <p className="text-[13px] text-muted-foreground font-medium mb-4 leading-relaxed">
        Network without limits and hire like a pro!
      </p>

      {/* Promo Image */}
      <div className="relative w-full h-[180px] rounded-2xl overflow-hidden shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
          alt="Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-foreground text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          30% OFF
        </div>
      </div>
    </div>
  );
}
