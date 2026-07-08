import { useState } from "react";
import { Play, X } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt?: string;
  caption?: string;
}

interface MediaGridProps {
  items: MediaItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function MediaGrid({ 
  items, 
  columns = 3,
  className = "" 
}: MediaGridProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <>
      <div 
        className={`grid ${gridCols[columns]} gap-6 ${className}`}
        data-testid="media-grid"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white border border-[rgba(15,23,42,0.12)] overflow-hidden hover:border-[rgba(15,23,42,0.20)] transition-all"
            data-testid={`media-item-${index}`}
          >
            <div className="aspect-video relative overflow-hidden">
              {item.type === "video" ? (
                <>
                  <img
                    src={item.thumbnail || item.src}
                    alt={item.alt || `Media ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <button
                    onClick={() => setActiveVideo(item.src)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                    data-testid={`play-button-${index}`}
                  >
                    <div className="w-16 h-16 bg-white/90 flex items-center justify-center">
                      <Play className="w-8 h-8 text-petroleo ml-1" />
                    </div>
                  </button>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt || `Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </div>
            {item.caption && (
              <div className="p-4">
                <p className="text-sm text-[#4b5563]">{item.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveVideo(null)}
          data-testid="video-modal"
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-ouro transition-colors"
            data-testid="close-video-modal"
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
