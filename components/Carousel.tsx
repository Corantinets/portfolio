"use client";
import { useState, useEffect } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlayInterval?: number;
}

export default function Carousel({ children, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [children.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  return (
    <div className="relative group/carousel">
      {/* Slides */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {children.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#F8EADF]/90 dark:bg-[#3D2D27]/90 hover:bg-[#F2DDD0] dark:hover:bg-[#4A3832] text-[#2F221D] dark:text-[#FFF7F0] p-3 rounded-full transition-all shadow-lg hover:scale-110 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Projet précédent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#F8EADF]/90 dark:bg-[#3D2D27]/90 hover:bg-[#F2DDD0] dark:hover:bg-[#4A3832] text-[#2F221D] dark:text-[#FFF7F0] p-3 rounded-full transition-all shadow-lg hover:scale-110 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Projet suivant"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator */}
      {children.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-[#C95E2D] dark:bg-[#E68A57]'
                  : 'w-3 bg-[#6E5A50] dark:bg-[#D9CCBC] hover:bg-[#C95E2D] dark:hover:bg-[#E68A57]'
              }`}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
