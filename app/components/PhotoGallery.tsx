"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { getImagePath } from "../utils/imagePath";

interface PhotoGalleryProps {
  photos: string[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goToPrevious = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    });
  }, [photos.length]);

  const goToNext = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    });
  }, [photos.length]);

  // 키보드 네비게이션
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer image-container"
            onClick={() => setSelectedIndex(index)}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          >
            <Image
              src={getImagePath(`/images/${photo}`)}
              alt={`Portfolio photo ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300 select-none"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onError={(e) => {
                // 이미지 로드 실패 시 처리
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>

      {/* 모달 - 사진 클릭 시 확대 */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            // 배경 클릭 시에만 닫기
            if (e.target === e.currentTarget) {
              setSelectedIndex(null);
            }
          }}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-20 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="닫기"
            >
              ×
            </button>

            {/* 이전 버튼 */}
            {photos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300 z-20 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-colors hover:bg-black/70"
                aria-label="이전 사진"
              >
                ‹
              </button>
            )}

            {/* 다음 버튼 */}
            {photos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300 z-20 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-colors hover:bg-black/70"
                aria-label="다음 사진"
              >
                ›
              </button>
            )}

            {/* 사진 카운터 */}
            {photos.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm z-20">
                {selectedIndex + 1} / {photos.length}
              </div>
            )}

            {/* 이미지 */}
            <div 
              className="relative w-full h-full flex items-center justify-center image-container"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            >
              <Image
                src={getImagePath(`/images/${photos[selectedIndex]}`)}
                alt={`Portfolio photo ${selectedIndex + 1}`}
                width={1200}
                height={1200}
                className="max-w-full max-h-[90vh] object-contain rounded-lg select-none"
                priority
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
