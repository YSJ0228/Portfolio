'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutPreviewSection from '@/components/sections/AboutPreviewSection';
import ProjectsPreviewSection from '@/components/sections/ProjectsPreviewSection';
import ContactPreviewSection from '@/components/sections/ContactPreviewSection';

export default function Home() {
  useEffect(() => {
    // 홈 페이지에만 스크롤 스냅 적용
    // 모바일에서는 proximity로, 데스크톱에서는 mandatory로 설정
    const isMobile = window.innerWidth < 768;
    document.documentElement.style.scrollSnapType = isMobile ? 'y proximity' : 'y mandatory';
    
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 768;
      document.documentElement.style.scrollSnapType = isMobileNow ? 'y proximity' : 'y mandatory';
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      // 다른 페이지로 이동 시 스크롤 스냅 제거
      document.documentElement.style.scrollSnapType = '';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="snap-y snap-proximity md:snap-mandatory">
      <HeroSection />
      <AboutPreviewSection />
      <ProjectsPreviewSection />
      <ContactPreviewSection />
      </main>
  );
}
