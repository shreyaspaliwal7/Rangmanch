import React, { useEffect, useRef, useState } from 'react';
import { GALLERY } from '../../constant.ts';

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let autoScrollSpeed = 0.8; // Adjust speed here

    const update = () => {
      // Only auto-scroll if the user isn't actively dragging
      if (!isDragging) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += autoScrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  // Manual Mouse Drag Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <section id="gallery" className="py-24 bg-[#0c0a09]">
      <div className="container mx-auto px-6 mb-12 flex items-center justify-center">
        <h2 className="font-cinematic text-4xl md:text-5xl font-bold text-[#d4af37]">Gallery</h2>
      </div>

      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className={`flex gap-6 overflow-x-auto no-scrollbar px-6 cursor-grab ${isDragging ? 'cursor-grabbing select-none' : ''}`}
      >
        {[...GALLERY, ...GALLERY].map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className="relative flex-none w-[350px] md:w-[450px] aspect-[16/10] overflow-hidden bg-stone-900 border border-white/5 group"
          >
            <img 
              src={item.url} 
              alt="Rangmanch"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none" 
            />
          </div>
        ))}
      </div>

      {/* Fixing the style error with dangerouslySetInnerHTML */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      ` }} />
    </section>
  );
};

export default Gallery;