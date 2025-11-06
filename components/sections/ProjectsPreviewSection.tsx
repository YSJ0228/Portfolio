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
    <section className="min-h-screen snap-start flex justify-center py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto w-full flex flex-col justify-center">
        <ScrollAnimation>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 sm:mb-8 md:mb-12 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent">
            Projects
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <div className="flex justify-center">
            <div className="relative w-[250px] sm:w-[280px] md:w-[300px]">
              <div className="h-[450px] sm:h-[500px] md:h-[550px]">
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
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* 인디케이터 */}
              <div className="flex justify-center gap-2 mt-4 sm:mt-6 md:mt-8">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-gray-900 w-6 md:w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
        
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-6 sm:mt-8 md:mt-12"
        >
          <Link
            href="/projects"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transition-all inline-block hover:scale-105"
          >
            모든 프로젝트 보기
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
