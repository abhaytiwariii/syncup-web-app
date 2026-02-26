"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ThumbsUp,
  Smile,
  Bookmark,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Paperclip,
  ImageIcon,
} from "lucide-react";

interface FeedPostProps {
  id: number;
  author: string;
  avatar: string;
  timestamp: string;
  content: string;
  image: string;
  likes: number;
  smiles?: number;
  comments: number;
  shares: number;
  saves: number;
}

export function FeedPost({
  author,
  avatar,
  timestamp,
  content,
  image,
  likes,
  smiles,
  comments,
  shares,
  saves,
}: FeedPostProps) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="px-5 py-5 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-11 h-11 border border-border">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h4 className="font-bold text-foreground text-[15px] leading-tight mb-0.5">
              {author}
            </h4>
            <p className="text-[12px] text-muted-foreground font-medium">
              {timestamp}
            </p>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground pt-1 pr-1">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 pb-4">
        <p className="text-foreground text-[14px] leading-relaxed font-medium">
          {content}
        </p>
      </div>

      {/* Image */}
      {image && (
        <div className="relative w-full h-[320px] mb-4">
          <img
            src={image}
            alt={content}
            className="absolute inset-0 w-full h-full object-cover px-5 rounded-3xl"
          />
        </div>
      )}

      {/* Stats */}
      <div className="px-5 pb-4 text-[13px] font-semibold text-muted-foreground flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <ThumbsUp className="w-4 h-4" /> {likes}
          </span>
          <span className="flex items-center gap-1.5">
            <Smile className="w-4 h-4" /> {smiles}
          </span>
          <span className="flex items-center gap-1.5">
            <Smile className="w-4 h-4 opacity-50" />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4" /> {comments} Comments
          </span>
          <span className="flex items-center gap-1.5">
            <Share2 className="w-4 h-4" /> {shares} Shares
          </span>
          <span className="flex items-center gap-1.5">
            <Bookmark className="w-4 h-4" /> {saves} Saved
          </span>
        </div>
      </div>

      <div className="border-t border-border/60 mx-5 my-0"></div>

      {/* Comment Input */}
      <div className="px-5 py-5">
        <div className="flex items-center gap-3 bg-muted/30 rounded-full border border-border/50 p-2 pl-3">
          <Avatar className="w-8 h-8 flex-shrink-0">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              alt="You"
            />
            <AvatarFallback>You</AvatarFallback>
          </Avatar>
          <input
            type="text"
            placeholder="Write your comment..."
            className="flex-1 bg-transparent border-0 text-[13px] font-medium text-foreground placeholder-muted-foreground focus:outline-none min-w-0"
          />
          <div className="flex items-center gap-1 pr-2 text-muted-foreground">
            <button className="p-1.5 hover:text-foreground transition-colors">
              <Paperclip className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:text-foreground transition-colors">
              <Smile className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:text-foreground transition-colors">
              <ImageIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
