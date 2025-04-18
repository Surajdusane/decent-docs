"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/shad-button"; // Assuming you're using shadcn/ui
import { getTimeDifference } from "@/lib/utils";
import { RefreshCw } from "lucide-react";
import React, { useState } from 'react';

interface YouTubePreviewProps {
  youtubeUrl: string;
  startTime?: string;
  endTime?: string;
}

const YouTubePreview: React.FC<YouTubePreviewProps> = ({
  youtubeUrl,
  startTime = '0',
  endTime = ''
}) => {
  // Use a state to force rerender
  const [renderKey, setRenderKey] = useState(0);
  const tutorialTime = getTimeDifference(startTime, endTime);

  // Extract YouTube video ID from various YouTube URL formats
  const extractVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  // Convert time format (HH:MM:SS or MM:SS or SS) to seconds
  const timeToSeconds = (time: string): number => {
    const parts = time.split(':').map(part => parseInt(part, 10));
    
    if (parts.length === 3) {
      // HH:MM:SS format
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      // MM:SS format
      return parts[0] * 60 + parts[1];
    } else if (parts.length === 1) {
      // SS format
      return parts[0];
    }
    
    return 0;
  };
  
  // Generate embed URL
  const generateEmbedUrl = (): string => {
    const videoId = extractVideoId(youtubeUrl);
    
    if (!videoId) {
      return ''; // Return empty string if URL is invalid
    }
    
    let url = `https://www.youtube.com/embed/${videoId}?`;
    
    // Add start time if provided
    if (startTime) {
      url += `start=${timeToSeconds(startTime)}`;
    }
    
    // Add end time if provided
    if (endTime) {
      url += `${startTime ? '&' : ''}end=${timeToSeconds(endTime)}`;
    }
    
    return url;
  };
  
  const embedUrl = generateEmbedUrl();
  
  // Handler for the reply button click
  const handleReplyClick = () => {
    // Increment the renderKey to force a rerender
    setRenderKey(prevKey => prevKey + 1);
  };


  return (
    <Card className="w-full gap-0 bg-background" key={renderKey}>
      <CardContent>
        {embedUrl ? (
          <div className="aspect-video w-full">
            <iframe
              src={embedUrl}
              className="w-full h-full rounded-md"
              allowFullScreen
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Invalid YouTube URL</p>
        )}
      </CardContent>
      <CardFooter className="flex *:items-center justify-between -mb-4">
        <p className="text-muted-foreground italic text-xs">
          Tutorial time: {tutorialTime}
        </p>
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={handleReplyClick}
      className="text-muted-foreground"
    > 
    <RefreshCw />
      Replay
    </Button>
  </CardFooter>
    </Card>
  );
};

export default YouTubePreview;