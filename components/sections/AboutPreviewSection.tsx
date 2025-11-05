'use client';

import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';
import { SiReact, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function AboutPreviewSection() {
  return (
    <section className="min-h-screen md:h-screen snap-start flex items-center justify-center py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto w-full">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-4 text-white">
              About Me
            </h2>
            <p className="text-2xl text-gray-300">프론트엔드 개발자로서의 여정</p>
          </div>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">사용자 중심 개발</h3>
                <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mb-6"></div>
                <p className="text-2xl text-gray-300 leading-relaxed mb-4">
                  단순히 기능을 구현하는 것이 아니라, 사용자가 정말 필요로 하는 것을 만듭니다.
                </p>
                <p className="text-xl text-gray-400 leading-relaxed">
                  항상 사용자의 관점에서 생각하며 직관적인 인터페이스를 설계합니다.
                  깔끔한 코드와 최신 기술을 활용해 유지보수가 용이하고 확장 가능한 애플리케이션을 개발합니다.
                </p>
              </div>
              <Link 
                href="/about"
                className="inline-block px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
              >
                더 알아보기 →
              </Link>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm hover:scale-105 border border-white/10">
                <div className="mb-3">
                  <SiReact className="text-5xl text-blue-400" />
                </div>
                <h4 className="font-bold text-2xl mb-2 text-white">React</h4>
                <p className="text-gray-300">컴포넌트 기반 개발</p>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm hover:scale-105 border border-white/10">
                <div className="mb-3">
                  <SiTypescript className="text-5xl text-blue-600" />
                </div>
                <h4 className="font-bold text-2xl mb-2 text-white">TypeScript</h4>
                <p className="text-gray-300">타입 안정성</p>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm hover:scale-105 border border-white/10">
                <div className="mb-3">
                  <SiNextdotjs className="text-5xl text-white" />
                </div>
                <h4 className="font-bold text-2xl mb-2 text-white">Next.js</h4>
                <p className="text-gray-300">서버 사이드 렌더링</p>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm hover:scale-105 border border-white/10">
                <div className="mb-3">
                  <SiTailwindcss className="text-5xl text-cyan-400" />
                </div>
                <h4 className="font-bold text-2xl mb-2 text-white">Tailwind</h4>
                <p className="text-gray-300">빠른 스타일링</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
