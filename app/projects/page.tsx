'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimation';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  github?: string | string[];
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: '무빙',
    description: '신뢰할 수 있는 이사 서비스 플랫폼',
    longDescription: '이사 고객과 이사 기사님을 연결해주는 매칭 플랫폼입니다. 고객은 원하는 이사 업체의 견적을 쉽게 비교하고 선택할 수 있으며, 기사님은 효율적으로 일을 받을 수 있습니다. 견적 비교, 견적 관리, 지역 기반 검색, 리뷰 시스템 등 편리한 기능을 제공합니다.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Query', 'React Hook Form', 'Sentry'],
    image: '/Moving- iPhone .png',
    github: 'https://github.com/YSJ0228/Moving_fe',
    demo: 'https://www.gomoving.site/ko',
    featured: true,
  },
  {
    id: 2,
    title: '최애의 포토',
    description: '디지털 포토카드 거래 플랫폼',
    longDescription: '포토카드를 생성, 판매, 교환할 수 있는 디지털 포토카드 거래 플랫폼입니다. 사용자는 마켓에서 카드를 검색하고 구매할 수 있으며, 자신의 카드 자산을 기반으로 다른 유저와 교환을 제안하고 승인할 수 있습니다. 랜덤 상자 뽑기로 포인트를 얻고, 한 달에 카드 3장 생성 제한과 카드별 최대 10장 발행 할 수 있습니다.',
    technologies: ['Next.js', 'Tailwind CSS', 'React Query', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    image: '/Photo- iPhone.png',
    github: 'https://github.com/YSJ0228/Photo_fe',
    demo: 'https://photo-frontend-lac.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'ViewMyStartup',
    description: '개인 투자자를 위한 모의 투자 플랫폼',
    longDescription: '스타트업 투자 경험을 위한 모의 투자 서비스입니다. 다양한 스타트업의 정보를 조회하고 최대 5개 기업을 선택해 누적 투자 금액, 매출액, 고용 인원 등을 비교할 수 있습니다. 가상 투자를 통해 투자 경험을 쌓고, 투자 현황을 조회하여 트렌드를 파악할 수 있습니다.',
    technologies: ['React', 'SCSS', 'CSS Modules', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    image: '/ViewMyStartup- iPhone.png',
    github: 'https://github.com/YSJ0228/View-my-startup_fe',
    demo: 'https://viewmystartup.vercel.app/',
    featured: true,
  },
];

export default function Projects() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    const handleCanPlay = () => {
      video.play().catch((error) => {
        console.log('Auto-play prevented:', error);
      });
    };

    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [showVideo]);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  if (showVideo) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <button
          onClick={handleVideoEnd}
          className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-all z-10 group"
          aria-label="영상 종료"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 group-hover:rotate-90 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <video
          ref={videoRef}
          src="/project.mp4"
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              제가 개발한 주요 프로젝트들을 소개합니다.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-24">
              {projects.map((project, index) => (
                <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-50 items-center`}>
                  <ScrollAnimation delay={index === 0 ? 0 : 0.2}>
                    <div className="w-full flex justify-center">
                      <div className="w-[300px] h-[700px] flex items-center justify-center">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={950}
                          className="rounded-2xl hover:scale-105 transition-transform duration-300 w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation delay={index === 0 ? 0.2 : 0.4}>
                    <div className="w-full space-y-6">
                      <div className="mb-6">
                        <h3 className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent">
                          {project.title}
                        </h3>
                        <p className="text-2xl md:text-3xl text-gray-700 font-bold mb-6">{project.description}</p>
                        <div className="h-1 w-20 bg-gradient-to-r from-gray-900 to-transparent rounded-full"></div>
                      </div>
                      
                      <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                        {project.longDescription}
                      </p>
                      
                      <div>
                        <h4 className="text-base font-bold text-gray-500 uppercase tracking-wider mb-4">기술 스택</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold hover:bg-gray-200 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 pt-4">
                        {project.github && (
                          Array.isArray(project.github) ? (
                            project.github.map((url, idx) => (
                              <motion.a
                                key={idx}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                </svg>
                                {idx === 0 ? 'Frontend' : 'Backend'}
                              </motion.a>
                            ))
                          ) : (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                              </svg>
                              GitHub
                            </motion.a>
                          )
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            웹 사이트
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
