"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2070&auto=format&fit=crop"
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl bg-slate-900 group">
       <div className="absolute inset-0 bg-slate-900 z-0" />
       
       {images.map((img, idx) => (
         <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
         >
            <Image
              src={img}
              alt={`Foto do Advogado ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-[10000ms] ease-linear transform scale-100 group-hover:scale-110"
            />
         </div>
       ))}
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-amber-500 w-6' : 'bg-white/50 hover:bg-white w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}