'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function ProjectsPreviewSection() {
  const images = [
    '/Moving- iPhone .png',
    '/Photo- iPhone.png',
    '/ViewMyStartup- iPhone.png',
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5초마다 변경
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <section className="min-h-screen md:h-screen snap-start flex justify-center py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto w-full flex flex-col justify-center">
        <ScrollAnimation>
          <h2 className="text-6xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent">
            Projects
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <div className="flex justify-center">
            <div className="relative w-[300px]">
              <div className="h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="flex items-center justify-center h-full"
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt="Projects"
                      width={300}
                      height={500}
                      priority={currentImageIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* 인디케이터 */}
              <div className="flex justify-center gap-2 mt-8">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-gray-900 w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.4}>
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-full font-semibold hover:shadow-lg transition-all inline-block hover:scale-105"
            >
              모든 프로젝트 보기
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
