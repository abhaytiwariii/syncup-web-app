"use client";

import { useState } from "react";
import { UserProfile } from "@/components/home/user-profile";
import { AnalyticsCard } from "@/components/home/analytics-card";
import { SosmedStories } from "@/components/home/sosmed-stories";
import { CreatePost } from "@/components/home/create-post";
import { FeedPost } from "@/components/home/feed-post";
import { PromoSection } from "@/components/home/promo-section";
import { SuggestionsSection } from "@/components/home/suggestions-section";

export default function HomePage() {
  const [posts] = useState([
    {
      id: 1,
      author: "Pan Feng Shui",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      timestamp: "12 April at 09:28 PM",
      content:
        "Had an amazing interaction with the founder of ABC Company, sharing my experience through this small article",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
      likes: 3,
      smiles: 8,
      comments: 25,
      shares: 231,
      saves: 24,
    },
    {
      id: 2,
      author: "Clara Kim",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      timestamp: "12 April at 09:28 PM",
      content:
        "A Great Way To Generate All The Motivation You Need To Get Fit.",
      image: "",
      likes: 3,
      smiles: 8,
      comments: 25,
      shares: 231,
      saves: 24,
    },
  ]);

  return (
    <div className="w-full bg-background min-h-screen">
      <div className="max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
        {/* Left Column (Profile, Analytics, Stories) */}
        <div className="hidden lg:flex flex-col gap-6 w-[310px] flex-shrink-0">
          <UserProfile />
          <AnalyticsCard />
          <SosmedStories />
        </div>

        {/* Center Feed */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <CreatePost />
          {posts.map((post) => (
            <FeedPost key={post.id} {...post} />
          ))}
        </div>

        {/* Right Sidebar (Promo & Suggestions) */}
        <div className="hidden xl:flex flex-col gap-6 w-[350px] flex-shrink-0">
          <PromoSection />
          <SuggestionsSection />
        </div>
      </div>
    </div>
  );
}
