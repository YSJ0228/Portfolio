'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutPreviewSection from '@/components/sections/AboutPreviewSection';
import ProjectsPreviewSection from '@/components/sections/ProjectsPreviewSection';
import ContactPreviewSection from '@/components/sections/ContactPreviewSection';

export default function Home() {
  useEffect(() => {
    // 홈 페이지에만 스크롤 스냅 적용
    document.documentElement.style.scrollSnapType = 'y mandatory';
    
    return () => {
      // 다른 페이지로 이동 시 스크롤 스냅 제거
      document.documentElement.style.scrollSnapType = '';
    };
  }, []);

  return (
    <main className="snap-y snap-mandatory">
      <HeroSection />
      <AboutPreviewSection />
      <ProjectsPreviewSection />
      <ContactPreviewSection />
      </main>
  );
}
